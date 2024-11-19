import { create } from "zustand";
import { Product } from "./types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cart: { [key: number]: CartItem };
  totalProducts: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: {},
  totalProducts: 0,
  totalPrice: 0,

  addToCart: (product: Product) => {
    const { cart, totalProducts, totalPrice } = get();

    if (cart[product.id]) {
      // Если товар уже есть в корзине, увеличиваем количество
      set({
        cart: {
          ...cart,
          [product.id]: {
            product,
            quantity: cart[product.id].quantity + 1,
          },
        },
        totalProducts: totalProducts + 1,
        totalPrice: totalPrice + product.price,
      });
    } else {
      // Если товара нет в корзине, добавляем его
      set({
        cart: {
          ...cart,
          [product.id]: {
            product,
            quantity: 1,
          },
        },
        totalProducts: totalProducts + 1,
        totalPrice: totalPrice + product.price,
      });
    }
  },

  increaseQuantity: (product: Product) => {
    const { cart, totalProducts, totalPrice } = get();

    if (cart[product.id]) {
      set({
        cart: {
          ...cart,
          [product.id]: {
            product,
            quantity: cart[product.id].quantity + 1,
          },
        },
        totalProducts: totalProducts + 1,
        totalPrice: totalPrice + product.price,
      });
    }
  },

  decreaseQuantity: (product: Product) => {
    const { cart, totalProducts, totalPrice } = get();

    if (cart[product.id]) {
      const newQuantity = cart[product.id].quantity - 1;

      if (newQuantity > 0) {
        set({
          cart: {
            ...cart,
            [product.id]: {
              product,
              quantity: newQuantity,
            },
          },
          totalProducts: totalProducts - 1,
          totalPrice: totalPrice - product.price,
        });
      } else {
        // Если количество равно нулю, удаляем товар из корзины
        const newCart = { ...cart };
        delete newCart[product.id];

        set({
          cart: newCart,
          totalProducts: totalProducts - 1,
          totalPrice: totalPrice - product.price,
        });
      }
    }
  },
}));
