import React, { useState, useEffect, useRef } from 'react';
import './Cursor.css';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  useEffect(() => {
    function handleMouseMoveAttract(event) {
      const cards = document.querySelectorAll('.projectCard');
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const distanceFromLeft = -event.clientX + rect.left;
        const distanceFromRight = -rect.right + event.clientX;
        const distanceFromTop = -event.clientY + rect.top;
        const distanceFromBottom = -rect.bottom + event.clientY;

        let maxPixelsX = 0;
        let x = event.clientX - rect.left - rect.width / 2; // Relative to center
        
        let maxPixelsY = 0;
        let y = event.clientY - rect.top - rect.height / 2; // Relative to center

        if (distanceFromLeft<=0 && distanceFromRight<=0 && distanceFromTop<=0 && distanceFromBottom<=0){
            maxPixelsX = 10;
            maxPixelsY = 10;
        } else if (distanceFromLeft <= 100 && distanceFromLeft >= 0 && Math.max(distanceFromBottom, distanceFromTop)<=100){
            maxPixelsX = 10-10 * (distanceFromLeft / 100);
            if (distanceFromTop<=0 && distanceFromBottom<=0){
                maxPixelsY = 10;
            }
        } else if (distanceFromRight <= 100 && distanceFromRight >= 0 && Math.max(distanceFromBottom, distanceFromTop)<=100){
            maxPixelsX = 10-10 * (distanceFromRight / 100);
            if (distanceFromTop<=0 && distanceFromBottom<=0){
                maxPixelsY = 10;
            }
        } else if (distanceFromTop <= 100 && distanceFromTop >= 0 && Math.max(distanceFromLeft, distanceFromRight)<=100){
            maxPixelsY = 10-10 * (distanceFromTop / 100);
            if (distanceFromBottom<=0 && distanceFromTop<=0){
                maxPixelsX = 10;
            }
        } else if (distanceFromBottom <= 100 && distanceFromBottom >= 0 && Math.max(distanceFromLeft, distanceFromRight)<=100){
            maxPixelsY = 10-10 * (distanceFromBottom / 100);
            if (distanceFromBottom<=0 && distanceFromTop<=0){
                maxPixelsX = 10;
            }
        }

        // Linear interpolation
        const offsetX = (x / (rect.width / 2)) * maxPixelsX;
        const offsetY = (y / (rect.height / 2)) * maxPixelsY;

        card.style.left = `${offsetX}px`;
        card.style.top = `${offsetY}px`;

      });
    }

    document.addEventListener('mousemove', handleMouseMoveAttract);
    return () => document.removeEventListener('mousemove', handleMouseMoveAttract);
  }, []);



  useEffect(() => {
    const projectCards = document.querySelectorAll('.projectCard');

    function handleMouseEnter(e) {
      document.body.classList.add('hide-cursor'); 
    }

    function handleMouseLeave(e) {
      document.body.classList.remove('hide-cursor'); 
    }


    projectCards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div className="cursor" ref={cursorRef} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>;
}

export default Cursor;
