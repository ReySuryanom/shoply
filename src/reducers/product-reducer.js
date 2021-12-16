import * as TYPE from './actions';

export const initialState = {
  products: [],
  carts: [],
  stock: new Array(20).fill(20),
  query: '',
  range: { min: -1, max: -1 },
};

export const product_reducer = (state, action) => {
  switch (action.type) {
    case TYPE.GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case TYPE.FILTER_PRODUCTS: {
      const filterredProducts = state.products.filter((item) => {
        const regex = new RegExp(action.payload, 'gi');
        return item.title.match(regex);
      });

      const isEmptyProducts =
        filterredProducts.length === 0 ? '' : filterredProducts;

      return {
        ...state,
        products: isEmptyProducts,
      };
    }
    case TYPE.SET_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    case TYPE.ADD_CART: {
      let item = action.payload.cart;
      const quantity = action.payload.quantity;
      const totalCarts = state.carts;

      const hasSameProduct = totalCarts.find((cart) => item.id === cart.id);

      const addQuantity = totalCarts.map((cart) => {
        if (cart.id === item.id) {
          return { ...cart, quantity: quantity + cart.quantity };
        }
        return cart;
      });

      state.stock[item.id - 1] -= quantity;
      if (hasSameProduct) {
        return {
          ...state,
          carts: [...addQuantity],
        };
      } else {
        return {
          ...state,
          carts: [...addQuantity, item],
        };
      }
    }
    case TYPE.REMOVE_CART: {
      const totalCarts = state.carts;
      const newCarts = totalCarts.filter((cart) => cart.id !== action.payload);

      return {
        ...state,
        carts: newCarts,
      };
    }
    case TYPE.UPDATE_STOCK: {
      const updatedStock = [];
      return {
        ...state,
        stock: [updatedStock],
      };
    }
    case TYPE.SUBSTRACT_STOCK: {
      const updatedStock = [];
      return {
        ...state,
        stock: [updatedStock],
      };
    }
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
