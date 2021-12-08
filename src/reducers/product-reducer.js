import * as TYPE from './actions';

/**
 * @property {Array<Object>} news - List berita yang didapat dari API.
 * @property {Array<Object>} saved_news - List berita yang disimpan oleh user.
 * @property {string} query - Query yang digunakan untuk menarik berita yang dicari.
 * @property {number} size - Batas ukuran berita yang diambil/fetch.
 * @property {string} message - Pesan khusus (biasanya pesan error) untuk user jika terjadi sesuatu.
 * @property {boolean} isLoading - Loading untuk menunggu proses data fetching.
 * @property {number} pages - Mengindentifikasikan sebagai halaman, dimulai dari 0:indonesia, 1:programming, dsb.
 */
export const initialState = {
  products: [],
  carts: [],
  query: '',
  range: { min: -1, max: -1 },
  isLoading: true,
};

export const product_reducer = (state, action) => {
  switch (action.type) {
    case TYPE.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case TYPE.ADD_CART:
      const totalCarts = state.carts;

      return {
        ...state,
        carts: [...totalCarts, action.payload],
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
