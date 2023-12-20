import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ProductType {
  title: string;
  type: string;
  collection?: string;
  price: number;
  id: string;
  url: string;
}

interface ProductsState {
  loading: boolean;
  currentPageNumber: number;
  totalProductsNumber: number;
  productsPerPage: number;
  products: Array<ProductType>;
  productsType: string;
}

const initialState: ProductsState = {
  loading: false,
  currentPageNumber: 1,
  totalProductsNumber: 100,
  productsPerPage: 10,
  products: [
    {
      title: "Первая вещь (носки)",
      type: "Носки",
      collection: "Казантип 2006",
      price: 400,
      id: "1",
      url: "https://d2j6dbq0eux0bg-cdn.ecwid.net/images/10796017/3550457816.jpg",
    },
    {
      title: "Вторая вещь (штанцы)",
      type: "Штаны",
      collection: "Казантип 2007",
      price: 2300,
      id: "2",
      url: "https://d2j6dbq0eux0bg-cdn.ecwid.net/images/10796017/3587951006.jpg",
    },
    {
      title: "Третья вещь (толс)",
      type: "Толстовка-зипка",
      collection: "Казантип 2008",
      price: 4400,
      id: "3",
      url: "https://d2j6dbq0eux0bg-cdn.ecwid.net/images/10796017/4020369332.jpg",
    },
    {
      title: "4",
      type: "Толстовка-зипка",
      collection: "Казантип 2008",
      price: 4400,
      id: "4",
      url: "https://d2j6dbq0eux0bg-cdn.ecwid.net/images/10796017/4020369332.jpg",
    },
  ],
  productsType: "Новые товары",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsType = (state: RootState) =>
  state.products.productsType;

export default productsSlice.reducer;
