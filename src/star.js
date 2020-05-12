import { VOLUME_VARIATION } from './constants.js';
import { randomLimit } from './utils.js';

/**
 * @param  {number} size - Figure size
 * @param  {number} offsetX - Offset on X
 * @param  {number} offsetY - Offset on Y
 */
const gradientCoordinates = (size, offsetX, offsetY) => {
  const ratioW = size / 2 + offsetX;
  const ratioH = size / 2 + offsetY;
  const firstRadius = size / 4;
  const finalRadius = size / 2;
  return [ratioW, ratioH, firstRadius, ratioW, ratioH, finalRadius];
};
/**
 * @param  {number} temperature - Represents temperature. Between 0 and 1.
 */
const starColor = (temperature) => {
  const isCold = temperature <= 0.5;
  let r, g, b;

  if (isCold) {
    r = VOLUME_VARIATION.MAX;
    g = randomLimit(VOLUME_VARIATION.MIN, r);
    b = randomLimit(VOLUME_VARIATION.MIN, g);
  } else {
    b = VOLUME_VARIATION.MAX;
    g = randomLimit(VOLUME_VARIATION.MIN, b);
    r = randomLimit(VOLUME_VARIATION.MIN, g);
  }

  return { r, g, b };
};

/**
 * @param  {CanvasRenderingContext2D} canvasContext
 * @param  {Object} starProps
 */
export const drawStar = (canvasContext, starProps) => {
  const { offsetX, offsetY } = starProps;
  const size = randomLimit(2, 5);
  const grdCord = gradientCoordinates(size, offsetX, offsetY);
  const grd = canvasContext.createRadialGradient(...grdCord);

  const temperature = Math.random();
  const { r, g, b } = starColor(temperature);

  grd.addColorStop(0, `rgba(${r},${g},${b},1`);
  grd.addColorStop(1, `rgba(${r},${g},${b},0`);

  canvasContext.fillStyle = grd;

  return canvasContext.fillRect(offsetX, offsetY, size, size);
};
