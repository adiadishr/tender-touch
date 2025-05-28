import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (productId) =>
    set((state) => {
      const existingItem = state.cart.find(item => item.id === productId)
      if (existingItem) {
        // if already in cart, increase quantity
        return {
          cart: state.cart.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      } else {
        // if not in cart, add with quantity 1
        return {
          cart: [...state.cart, { id: productId, quantity: 1 }]
        }
      }
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter(item => item.id !== productId)
    }))
}))
