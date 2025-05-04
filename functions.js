function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '🤍';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's'; // 3 to 6 seconds fall
    heart.style.fontSize = (16 + Math.random() * 16) + 'px'; // Random size between 16px and 32px
    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 6000); // Match with the longest fall duration
}

// Start creating hearts every 300ms
setInterval(createHeart, 300);
