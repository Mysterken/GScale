index.js
const topLeft = document.querySelector('.top-left-panel');

const topRight = document.querySelector('.top-right-panel');

const bottomLeft = document.querySelector('.bottom-left-panel');

const bottomRight = document.querySelector('.bottom-right-panel');


const getRandomPanel = () => {
const panels = [
topLeft,
topRight,
bottomLeft,
bottomRight
];
return panels[parseInt(Math.random() * panels.length)];
};


const sequence = [
getRandomPanel(),
getRandomPanel(),
getRandomPanel(),
getRandomPanel(),
topLeft,
bottomRight,
bottomLeft,
topRight];

let sequenceToGuess = [...sequence];





const flash = (panel) => {
    return new Promise((resovle, reject) => {
      panel.className += ' active';
      setTimeout(() =>
	panel.className = panel.className. replace(
	   ' active',
	   ''
	));
	resolve();
      }, 1000);
    }
let canClick = false;

const panelClicked = panel => {
  if(!canClick) return;
  console.log(panel);
  const expectedPanel = sequenceToGuess.shift();
  if (expectedPanel === panelClicked) {
    if (sequenceToGuess.length === 0) {
	// start new round
 	sequence.push(getRandomPanel());
	sequenceToGuess = [...sequence];
  	startFlashing();
 }
  } else {
    // end game
    alert('game over');
  }
};


   const startFlashing = async () => {
   canClicked = false;
   for (const panel of sequence) {  
	await flash(panel);

   }
canClick = true;
}

startFlashing();

















