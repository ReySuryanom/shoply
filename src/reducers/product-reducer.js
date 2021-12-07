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
  query: '',
  isLoading: true,
};

export const product_reducer = (state, action) => {
  switch (action.type) {
    case TYPE.SEARCH_PRODUCT:
      return {
        ...state,
        query: action.payload,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
