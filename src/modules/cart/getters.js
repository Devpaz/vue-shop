export function totalCost (state) {
    return state.cart.reduce((sum, product) => {
      return (((product.price) * product.qty) + parseFloat(sum)).toFixed(2)
    }, 0)
  }