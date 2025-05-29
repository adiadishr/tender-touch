// store/cartStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      addToCart: ({ id, size, title, price, src }) => {
        const key = `${id}|${size}`
        const existing = get().cart.find(item => `${item.id}|${item.size}` === key)

        if (existing) {
          set({
            cart: get().cart.map(item =>
              `${item.id}|${item.size}` === key
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({
            cart: [
              ...get().cart,
              { id, size, title, price, src, quantity: 1 },
            ],
          })
        }
      },
      removeFromCart: ({ id, size }) => {
        const key = `${id}|${size}`
        set({
          cart: get().cart
            .map(item =>
              `${item.id}|${item.size}` === key
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0)
        })
      },
      // Derived Items
      getTotalUniqueItems: () => get().cart.length,
      getTotalPrice: () => {
        return get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
      getQuantity: ({ id, size }) => {
        const item = get().cart.find(
          i => `${i.id}|${i.size}` === `${id}|${size}`
        );
        return item ? item.quantity : 0;
      },
    }),
    {
      name: 'cart-storage', // key in localStorage
    }
  )
)
