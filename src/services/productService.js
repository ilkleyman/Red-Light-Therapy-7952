import { redLightProducts } from '../data/redLightProducts.js';

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = redLightProducts[id];
      resolve(product || null);
    }, 500);
  });
};

export const getRelatedProducts = (currentId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const related = Object.values(redLightProducts)
        .filter(p => p.id !== currentId)
        .slice(0, 3);
      resolve(related);
    }, 500);
  });
};