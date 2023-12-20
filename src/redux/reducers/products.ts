import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ProductType {
  title: string;
  type: string;
  collection: string;
  price: number;
  id: string;
}

interface ProductsState {
  loading: boolean;
  currentPageNumber: number;
  totalProductsNumber: number;
  productsPerPage: number;
  products: Array<ProductType>;
}

const initialState: ProductsState = {
  loading: false,
  currentPageNumber: 1,
  totalProductsNumber: 100,
  productsPerPage: 10,
  products: [
    {
      title: "первая вещь (носки)",
      type: "носки",
      collection: "казантип 2006",
      price: 400,
      id: "1",
    },
    {
      title: "вторая вещь (штанцы)",
      type: "штаны",
      collection: "казантип 2007",
      price: 2300,
      id: "2",
    },
    {
      title: "третья вещь (толс)",
      type: "толстовка-зипка",
      collection: "казантип 2008",
      price: 4400,
      id: "3",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
