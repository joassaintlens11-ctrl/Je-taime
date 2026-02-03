function showLove() {
    const box = document.getElementById("loveBox");
    box.classList.remove("hidden");
}
function startLove() {
    // afficher messages
    document.getElementById("loveBox").classList.remove("hidden");

    // musique
    const music = document.getElementById("music");
    music.volume = 0.5;
    music.play();

    // pluie de cœurs
    setInterval(createHeart, 300);
}

// créer des cœurs
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// 💌 Personnalisation
const herName = "Mon p'tit ange mon p'tit papaye";
document.getElementById("name").textContent = herName;
