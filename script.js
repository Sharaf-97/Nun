const yesBtn = document.getElementById('yes-btn');

const noBtn = document.getElementById('no-btn');

const questionBox = document.getElementById('question-box');

const lovePage = document.getElementById('love-page');

const heartShape = document.getElementById('heart-shape');

const floatingHearts = document.getElementById('floating-hearts');

function moveNoButton(e) {

  const offsetX = Math.random() * 300 - 150;

  const offsetY = Math.random() * 300 - 150;

  noBtn.style.position = 'absolute';

  noBtn.style.left = `${e.clientX + offsetX}px`;

  noBtn.style.top = `${e.clientY + offsetY}px`;

}

noBtn.addEventListener('mouseover', moveNoButton);

yesBtn.addEventListener('click', () => {

  questionBox.style.display = 'none';

  lovePage.style.display = 'block';

  buildHeartShape();

  createFloatingHearts();

});

function buildHeartShape() {

  const heartPattern = [

    "  00   00  ",

    " 0000 0000 ",

    "00000000000",

    "00000000000",

    " 000000000 ",

    "  0000000  ",

    "   00000   ",

    "    000    ",

    "     0     "

  ];

  heartShape.innerHTML = '';

  heartPattern.forEach(row => {

    const line = row.replace(/0/g, '❤️').replace(/ /g, '&nbsp;');

    heartShape.innerHTML += line + '<br>';

  });

}

function createFloatingHearts() {

  setInterval(() => {

    const heart = document.createElement('span');

    heart.textContent = '💖';

    heart.style.left = Math.random() * window.innerWidth + 'px';

    heart.style.top = window.innerHeight + 'px';

    floatingHearts.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 5000);

  }, 300);

} 
