import { drawStar } from './src/star.js';
import { randomLimit } from './src/utils.js';

const starMaker = () => {
  const canvas = document.createElement('canvas');
  const stars = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';

  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      const weight = randomLimit(0, 20000);
      if (weight > 19999) drawStar(stars, { size: 7, offsetX: x, offsetY: y });
    }
  }

  document.body.appendChild(canvas);
};

starMaker();
