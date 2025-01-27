import gsap from "gsap";

export function startLoader() {
  const counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue >= 100) {
      // Stop the counter and trigger loader animations once it reaches 100
      clearInterval(counterInterval);

      // Quickly fade out the counter
      gsap.to(".counter", { opacity: 0, duration: 0.5, ease: "power4.inOut" });

      gsap.to(".bar", {
        delay: 0.3, 
        height: 0,
        stagger: 0.1,
        ease: "power4.inOut",
        duration: 0.8, 
      });

      gsap.to(".overlay", { delay: 1, opacity: 0, duration: 0.5, display: "none" });

      return; 
    }

    // increase counter vale randomly
    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;
  }

  const counterInterval = setInterval(updateCounter, 50);
}
