import { drawStar } from './star.js';
import { randomLimit } from './utils.js';

/**
 * @param  {number} width Width of canvas.
 * @param  {number} height Height of canvas.
 * @param  {number} density A number between 0 and 1. Your default value is 1.
 */
export const starBuilder = (width, height, density = 1) => {
  if (!width || !height) {
    throw new Error('Trouble when build star: Specify canvas size!');
  }

  const canvas = document.createElement('canvas');
  const stars = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  canvas.style.position = 'fixed';

  const maxWeight = 10000;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const weight = randomLimit(0, maxWeight);
      if (weight > maxWeight - density)
        drawStar(stars, { offsetX: x, offsetY: y });
    }
  }

  return document.body.appendChild(canvas);
};
