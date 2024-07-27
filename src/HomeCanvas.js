import React, { useEffect, useRef, useState } from 'react';
import Matter, { Events } from 'matter-js';
import { useLocation } from 'react-router-dom';


export default function HomeCanvas(){
  const engineRef = useRef();
  const renderRef = useRef();
  const runnerRef = useRef();
  const mouseConstraintRef = useRef();
  const canvasRef = useRef(null);
  const location = useLocation(); // Use this to get the current path

  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [isCanvasReady, setIsCanvasReady] = useState(false); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const parentWidth = canvas.parentElement.offsetWidth; 
      const parentHeight = canvas.parentElement.offsetHeight;

      setCanvasSize({
        width: parentWidth, 
        height: parentHeight 
      });
      
      // Only initialize Matter.js after the canvas has dimensions
      if (parentWidth > 0 && parentHeight > 0 && !isCanvasReady) { 
        setIsCanvasReady(true);
      }
    };

    let wheeling = false; 

    const handleWheelStart = (event) => {
      event.preventDefault();
      wheeling = true;   
      canvas.style.pointerEvents = 'none';
    };

    const handleWheelStop = () => {
      wheeling = false;      
      setTimeout(() => {
        if (!wheeling) {   
          canvas.style.pointerEvents = 'auto';
        }
      }, 100); 
    };

    updateCanvasSize(); // Initial update
    window.addEventListener('resize', updateCanvasSize);  // Update on resize

    canvas.addEventListener('wheel', handleWheelStart, { passive: false });
    canvas.addEventListener('wheel', handleWheelStop);
    canvas.addEventListener('touchstart', handleWheelStart);
    canvas.addEventListener('touchend', handleWheelStop);


    return () => {
      canvas.removeEventListener('wheel', handleWheelStart, { passive: false });
      canvas.removeEventListener('wheel', handleWheelStop);
      canvas.removeEventListener('touchstart', handleWheelStart);
      canvas.removeEventListener('touchend', handleWheelStop);
      window.removeEventListener('resize', updateCanvasSize);
    };

    }, [isCanvasReady]);

  useEffect(() => {
    if (!isCanvasReady) return; // Don't initialize Matter.js if canvas isn't ready

    const { Engine, Render, Runner, MouseConstraint, Mouse, Composite, Bodies } = Matter;

    // create engine
    engineRef.current = Engine.create();
    const world = engineRef.current.world;

    // create renderer
    renderRef.current = Render.create({
      element: document.getElementsByClassName('App'),
      canvas: document.getElementById('test'),
      engine: engineRef.current,
      options: {
        width: canvasSize.width,
        height: canvasSize.height,
        wireframes: false,
        background: 'rgba(0,0,0,0)',
        pixelRatio: window.devicePixelRatio // here
      },
    });
    Render.run(renderRef.current);

    // create runner
    runnerRef.current = Runner.create();
    Runner.run(runnerRef.current, engineRef.current);

    const numCircles = 10;
    const circleData = [];
  
    for (let i = 0; i < numCircles; i++) {
      const radius = Math.random() * parseInt(canvasSize.height/10) + 10;
      const angle = Math.random() * 2 * Math.PI; // Random angle in radians
      const speed = Math.random() * 10 + 1;     // Random speed
  
      circleData.push({
        x: Math.random() * canvasSize.width/2+canvasSize.width/4,
        y: Math.random() * canvasSize.height/2+canvasSize.height/4,
        radius,
        velocity: {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed,
        },
      });
    }
  

    const circles = circleData.map(data =>
      Bodies.circle(data.x, data.y, data.radius, {
        mass: 5,
        restitution: 0.9,
        friction: 0.01,
        render: { fillStyle: 'white'},
      })
    );

    circles.forEach(circle => {
      Matter.Body.setVelocity(circle, circleData.find(d => d.radius === circle.circleRadius).velocity);
    });

    // add bodies
    Composite.add(world, [
        ...circles,

        // walls
        Bodies.rectangle(canvasSize.width/2, 0, canvasSize.width-25, 50, { isStatic: true, render: {fillStyle: 'rgba(255, 0, 0, 0)'}}), // Top wall
        Bodies.rectangle(canvasSize.width/2, canvasSize.height+25, canvasSize.width, 50, { isStatic: true, render: {fillStyle: 'rgba(255, 0, 0, 0)'}}), // Bottom wall
        Bodies.rectangle(canvasSize.width+25, canvasSize.height/2, 50, canvasSize.height, { isStatic: true, render: {fillStyle: 'rgba(255, 0, 0, 0)'}}), // Right wall
        Bodies.rectangle(0-25, canvasSize.height/2, 50, canvasSize.height, { isStatic: true, render: {fillStyle: 'rgba(255, 0, 0, 0)'}}), // Left wall

        // Bodies.rectangle(canvasSize.width/2, canvasSize.height/2, canvasSize.width, 1, { isStatic: true, render: {fillStyle: 'rgba(255, 0, 0, 0)'}}), // centre
    ]);

    // add mouse control
    const mouse = Mouse.create(renderRef.current.canvas);
    mouseConstraintRef.current = MouseConstraint.create(engineRef.current, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(world, mouseConstraintRef.current);

    // keep the mouse in sync with rendering
    renderRef.current.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(renderRef.current, {
      min: { x: 0, y: 0 },
      max: { x: canvasSize.width, y: canvasSize.height },  // Dynamic dimensions
    });

    engineRef.current.world.gravity.y = 0; 
    const gravityThreshold = canvasSize.height/2; // The y-value where gravity changes
    const gravityThresholdX = canvasSize.width/2; // The x-value where gravity changes


    const limitMaxSpeed = (event) => {
      event.source.world.bodies.forEach((body) => {
        let maxSpeed = 10
        Matter.Body.setVelocity(body, {
          x: Math.min(maxSpeed, Math.max(-maxSpeed, body.velocity.x)),
          y: Math.min(maxSpeed, Math.max(-maxSpeed, body.velocity.y)),
        })
      })
    }
  
    Matter.Events.on(engineRef.current, 'beforeUpdate', limitMaxSpeed)

    Events.on(engineRef.current, 'beforeUpdate', () => { 
      const bodies = Composite.allBodies(engineRef.current.world);
  
      const circles = bodies.filter(body => body.label === 'Circle Body'); 
  
      circles.forEach(body => {
        body.force.y = 0.0005; 
        if (body.position.y < gravityThreshold - 5) {
          body.force.y = -0.0001; 
        } else if (body.position.y > gravityThreshold + 5) {
          body.force.y = 0.0001; 
        }
        if (body.position.x < gravityThresholdX - 5) {
          body.force.x = -0.0001; 
        } else if (body.position.x > gravityThresholdX + 5) {
          body.force.x = 0.0001; 
        }
      });
    });

    // Add mouse move event to change cursor when hovering over circles
    Events.on(mouseConstraintRef.current, 'mousemove', (event) => {
      const mousePosition = event.mouse.position;
      const bodies = Composite.allBodies(engineRef.current.world);
      const circles = bodies.filter(body => body.label === 'Circle Body'); 

      let hovering = false;
      for (let body of circles) {
        if (Matter.Bounds.contains(body.bounds, mousePosition)) {
          if (Matter.Vertices.contains(body.vertices, mousePosition)) {
            hovering = true;
            break;
          }
        }
      }

      renderRef.current.canvas.style.cursor = hovering ? 'grab' : 'default';
    });

    // Pause the Matter.js engine if the pathname is not "/"
    const handleRouteChange = () => {
      if (location.pathname !== '/') {
        Render.stop(renderRef.current);
        Runner.stop(runnerRef.current);
      } else {
        Render.run(renderRef.current);
        Runner.run(runnerRef.current, engineRef.current);
      }
    };

    // Watch for route changes
    handleRouteChange();

    // Cleanup function
    return () => {
      // Stop rendering
      Render.stop(renderRef.current);

      // Stop running the engine
      Runner.stop(runnerRef.current);

      // Clear the engine
      Engine.clear(engineRef.current);

      // Destroy the mouse constraint
      Composite.remove(world, mouseConstraintRef.current);
    };
  }, [canvasSize, isCanvasReady, location.pathname]);

  return (
    <div id="testParent" className='aboutFull'>
    <canvas
      ref={canvasRef}
      id="test"
      width="100%"
      height="100%"
      style={{ mixBlendMode: "difference"}}
    />
  </div>

  );
};
