import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../LoopingWords.css'; 







// YESMA MUJI EK GLITCH/BUG XA LIKE AFTER A COMPLETE CYCLE FIRST KO 2 WORDS TALA FERI LOOP MA AAUNA TIME LAUXAN AANI BLACK HUNXA TETI KHERI SAMMA







const LoopingWords = () => {
  useEffect(() => {
    const wordList = document.querySelector('[data-looping-words-list]');
    const words = Array.from(wordList.children);
    const totalWords = words.length;
    const wordHeight = 100 / totalWords; 
    const edgeElement = document.querySelector('[data-looping-words-selector]');
    let currentIndex = 0;

    function updateEdgeWidth() {
      const centerIndex = (currentIndex + 1) % totalWords;
      const centerWord = words[centerIndex];
      const centerWordWidth = centerWord.getBoundingClientRect().width;
      const listWidth = wordList.getBoundingClientRect().width;
      const percentageWidth = (centerWordWidth / listWidth) * 100;
      gsap.to(edgeElement, {
        width: `${percentageWidth}%`,
        duration: 0.5,
        ease: 'Expo.easeOut',
      });
    }

    function moveWords() {
      currentIndex++;
      gsap.to(wordList, {
        yPercent: -wordHeight * currentIndex,
        duration: 1.2,
        ease: 'elastic.out(1, 0.85)',
        onStart: updateEdgeWidth,
        onComplete: function () {

          if (currentIndex >= totalWords) {
            currentIndex = 0; // Reset the index for a fresh loop
            gsap.set(wordList, { yPercent: -wordHeight * currentIndex });
          }
          updateEdgeWidth(); // Update edge width properly after each cycle
        },
      });
    }

    updateEdgeWidth(); 
    gsap.timeline({ repeat: -1, delay: 1 })
      .call(moveWords)
      .to({}, { duration: 2 })
      .repeat(-1);
  }, []);

  return (
    <section className="cloneable">
      <div className="looping-words">
        <div className="looping-words__containers">
          <ul data-looping-words-list="" className="looping-words__list">
            <li className="looping-words__list">
              <p className="looping-words__p">CodeLits Studio</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Our Services</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Web Development</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">App Development</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Sofware Development</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Game Development</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">UI/UX Design</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">Cloud Solutions</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">SaaS</p>
            </li>
            <li className="looping-words__list">
              <p className="looping-words__p">IT Marketing Strategies</p>
            </li>
          </ul>
        </div>
        <div className="looping-words__fade"></div>
        <div data-looping-words-selector="" className="looping-words__selector">
          <div className="looping-words__edge"></div>
          <div className="looping-words__edge is--2"></div>
          <div className="looping-words__edge is--3"></div>
          <div className="looping-words__edge is--4"></div>
        </div>
      </div>
    </section>
  );
};

export default LoopingWords;





