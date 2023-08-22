import { createSlice } from "@reduxjs/toolkit";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../LocalStorage/localStore";
//gio hang, cac phuong thuc du lieu gio hang duoc xu ly va luu vao tai khoang nguoi dung
export const CartItemSlice = createSlice({
  name: "CartItem",
  initialState: {
    products: [],
    quantity: 1,
    totalPrice: 0,
  },
  reducers: {
    // them vao gio hang
    addIncrement(state, action) {
      console.log(action.payload);
      let arrProducts = SaveFormLocalStorage("arrProducts");
      state.quantity++;

      if (typeof action.payload === "number") {
        const newItem = action.payload;

        const existing = arrProducts.findIndex(
          (item, index) => index === newItem
        );

        if (typeof existing === "number") {
          arrProducts[existing].quantity++;
          arrProducts[existing].total =
            parseInt(arrProducts[existing].total) +
            parseInt(arrProducts[existing].price);

          state.products = [...arrProducts];
          setFormLocalstorage("arrProducts", state.products);
        }
      }
    },
    //bo bot tu gio hang
    decrement(state, action) {
      let arrProducts = SaveFormLocalStorage("arrProducts");
      if (state.quantity > 1) {
        state.quantity = state.quantity - 1;
      }

      if (typeof action.payload === "number") {
        const newItem = action.payload;

        const existing = arrProducts.findIndex(
          (item, index) => index === newItem
        );

        if (arrProducts[existing].quantity > 0) {
          console.log(true);
          arrProducts[existing].quantity--;
          arrProducts[existing].total =
            parseInt(arrProducts[existing].total) -
            parseInt(arrProducts[existing].price);

          state.products = [...arrProducts];
          setFormLocalstorage("arrProducts", state.products);
        } else {
          state.products = [...arrProducts];
          state.products.splice(existing, 1);
          setFormLocalstorage("arrProducts", state.products);
        }
      }
    },
    // bo hoan toan san pham trong don hang
    DeleteProduct(state, action) {
      console.log(action.payload);

      const newItem = action.payload;

      const existing = state.products.findIndex((item) => item === newItem);
      if (existing) {
        if (existing) {
          const newItem = state.products;
          newItem.splice(existing, 1);
        }
        setFormLocalstorage("arrProducts", state.products);
      }
    },
    // them vao gio hang
    addToCart(state, action) {console.log(action.payload);
      let arrProducts = SaveFormLocalStorage("arrProducts");
   console.log(!!arrProducts);
      const newItem = action.payload;

      const existing = !!arrProducts === false ? state.products.find((item) => item.id === newItem.id) : 
      arrProducts.find((item) => item.id === newItem.id) 
      console.log(existing);

      if (existing) {
       
        existing.quantity = existing.quantity + action.payload.quantity;
        existing.total =
          parseInt(existing.total) +
          parseInt(action.payload.price) * action.payload.quantity;

        setFormLocalstorage("arrProducts", state.products);
      } else {
        // const newarr = state.products = [...arrProducts];
  console.log(
    (!!arrProducts ===true ? state.products = [...arrProducts]: state.products));
      

       (!!arrProducts ===true ? state.products = [...arrProducts]: state.products).push({
          id: newItem.id,
          quantity: newItem.quantity,
          price: newItem.price,
          total: newItem.price * newItem.quantity,
          name: newItem.name,
          img: newItem.img,
        });

        setFormLocalstorage("arrProducts", state.products);
      }
    },
    addLocalStorage(state, action) {},
  },
});
