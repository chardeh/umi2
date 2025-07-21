
const sparkleContainer = document.getElementById('sparkle-container');
const container = document.querySelector('.container');
const bodyContainer = document.querySelector('.body-container');
// CAMBIAR: Frases que saldran al hacer clic
const cuteMessages = [
  "Ya Hayati! ✨",
  "I love you ❤️",
  "You mean so much to me Umi!",
  "It's been 1y since we've gotten to know eachother and im so grateful for you! 😊",
  "I'll always love you",
  "I love your smile💖",
  "I love your laugh!",
  "I love your humour",
  "I love your smile lines/dimpels even tho u say they aren't there",
  "I love watching movies with you",
  "I love talking to you",
  "I love having you in my presence",
  "I love playing games with you",
  "I love watching anime with you",
  "there's so much i love about you Umi and I want you in my life as my wife <3"
];
document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);

        const moveX = Math.cos(angle) * 3;
        const moveY = Math.sin(angle) * 4;

        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

setInterval(createSparkle, 300);

bodyContainer.addEventListener('click',(event) => {
    createCuteMessage(event);
})

function createCuteMessage(e) {
    const randomIndex = Math.floor(Math.random() * cuteMessages.length);
    const messageText = cuteMessages[randomIndex];

    const messageElement = document.createElement('div');
    messageElement.classList.add('cute-message');
    messageElement.innerText = messageText;

    document.body.appendChild(messageElement);

    messageElement.style.left = `${e.clientX}px`;
    messageElement.style.top = `${e.clientY}px`;

    setTimeout(() => {
        messageElement.remove();
    }, 2500);
}
                            