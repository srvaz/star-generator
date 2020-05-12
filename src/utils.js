/**
 * @param  {number} min
 * @param  {number} max
 * @returns {number}
 */
export const randomLimit = (min, max) => Math.random() * (max - min) + min;
