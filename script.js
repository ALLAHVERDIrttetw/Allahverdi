// JavaScript to generate random bubbles
document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.querySelector(".bubbles");
    const numBubbles = 30;

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement("span");
        bubble.style.width = `${Math.random() * 40 + 20}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationTimingFunction = "ease-in-out";
        bubbleContainer.appendChild(bubble);
    }
});
