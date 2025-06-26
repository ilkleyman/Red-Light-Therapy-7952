import { useState, useEffect } from 'react';
import { shopProducts as initialProducts } from '../data/shopProducts';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from localStorage or use initial data
    const savedProducts = localStorage.getItem('redglowProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
    }
  }, []);

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
    localStorage.setItem('redglowProducts', JSON.stringify(newProducts));
  };

  return { products, updateProducts };
};