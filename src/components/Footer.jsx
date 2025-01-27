import React, { useEffect } from 'react';
import Spheres1Background from 'threejs-components/build/backgrounds/spheres1.cdn.min'; 
import styles from '../../src/Footer.module.css'; 
import Button from "./Button";


const Footer = () => {
  useEffect(() => {
    const canvas = document.getElementById('webgl-canvas');
    
    // Initialize the sphere background
    const bg = Spheres1Background(canvas, {
      count: 300,
      minSize: 0.3,
      maxSize: 1,
      gravity: 0.5,
    });

    // Gravity toggle functionality
    const gravityButton = document.getElementById('gravity-btn');
    gravityButton.addEventListener('click', () => {
      // Toggle gravity between 0 and 0.5
      const currentGravity = bg.spheres.config.gravity;
      bg.spheres.config.gravity = currentGravity === 0 ? 0.5 : 0;
    });

    // Color change functionality
    const colorButton = document.getElementById('colors-btn');
    colorButton.addEventListener('click', () => {
      bg.spheres.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random(),
      ]);
    });

    // Fullscreen toggle functionality for the footer
    const fullscreenButton = document.getElementById('fullscreen-btn');
    fullscreenButton.addEventListener('click', () => {
      const elem = document.getElementById('footer'); // Target the footer element
      if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    });

    return () => {
      // Clean up event listeners when component unmounts
      gravityButton.removeEventListener('click', () => {});
      colorButton.removeEventListener('click', () => {});
      fullscreenButton.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.hero}>
        <h1>Thank You For Visiting Us</h1>
        <h2>Connect with us !</h2>
 
        <p className="text-sm mt-20">&copy;2025 CodeLits Studio | All Rights Reserved</p>
        <p className="text-xs"><a href="https://www.linkedin.com/in/sujan-bhatta-080206290609sbsrsb/">Developed by <b>s.u.jan_2</b></a></p>
      </div>
      <div className={styles.buttons}>
    
      <div className={styles.buttons}>
      <div className={styles.buttons}>
  <Button
    id="gravity-btn"
    title="Toggle gravity"
    containerClass="bg-yellow-600 flex items-center justify-center gap-4 hover-effect"
  />

  <Button
    id="colors-btn"
    title="Change Color"
    containerClass="bg-yellow-600 flex items-center justify-center gap-4 hover-effect"
  />

  <Button
    id="fullscreen-btn"
    title="Toggle Fullscreen"
    containerClass="bg-yellow-600 flex items-center justify-center gap-4 hover-effect "
  />
</div>

</div>

      </div>
      <canvas id="webgl-canvas" className={styles.canvas}></canvas>
    </footer>
  );
};

export default Footer;
