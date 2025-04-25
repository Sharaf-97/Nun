const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const loveMessage = document.getElementById('love-message');
const heartStructure = document.getElementById('heart-structure');
const canvas = document.getElementById('doodle-canvas');
const ctx = canvas.getContext('2d');
function moveNoButton(e) {
 const offsetX = Math.random() * 300 - 150;
 const offsetY = Math.random() * 300 - 150;
 noBtn.style.position = 'absolute';
 noBtn.style.left = `${e.clientX + offsetX}px`;
 noBtn.style.top = `${e.clientY + offsetY}px`;
}
noBtn.addEventListener('mouseover', moveNoButton);
yesBtn.addEventListener('click', () => {
 document.getElementById('question-box').style.display = 'none';
 loveMessage.style.display = 'block';
 drawHeartStructure();
 canvas.style.display = 'block';
 drawDoodle();
});
function drawHeartStructure() {
 let heartRow = '';
 for (let i = 1; i <= 9; i++) {
   heartRow += '💕'.repeat(i) + '<br>';
 }
 for (let i = 8; i >= 1; i--) {
   heartRow += '💕'.repeat(i) + '<br>';
 }
 heartStructure.innerHTML = heartRow;
}
function drawDoodle() {
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 ctx.font = '40px Comic Sans MS';
 ctx.fillStyle = 'black';
 ctx.fillText('(^_^)/ Pew! Pew!', 100, 100);
 drawFlyingHearts();
}
function drawFlyingHearts() {
 const firework = document.getElementById('fireworks');
 const hearts = ['💖','💘','💗','💓','💞','💝','💕'];
 setInterval(() => {
   const h = document.createElement('span');
   h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
   h.style.position = 'absolute';
   h.style.left = `${Math.random() * window.innerWidth}px`;
   h.style.top = `${Math.random() * window.innerHeight}px`;
   h.style.fontSize = `${Math.random() * 20 + 20}px`;
   h.style.opacity = 0.8;
   h.style.transition = 'transform 4s ease-out, opacity 4s';
   document.body.appendChild(h);
   requestAnimationFrame(() => {
     h.style.transform = `translateY(-200px)`;
     h.style.opacity = 0;
   });
   setTimeout(() => h.remove(), 4000);
 }, 300);
}
