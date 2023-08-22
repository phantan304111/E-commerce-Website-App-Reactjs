import { createSlice } from "@reduxjs/toolkit";

const initPopup = {
  itemPopup: null,
  itemDetail: null,
  searchData: "",
  SearchDataProducts: null,
  isSuccsess : false
};
//tao slicepopup voi redux
export const popupSlice = createSlice({
  name: "POPPUP",
  initialState: initPopup,
  reducers: {
    popupShow(state, action) {
      state.itemPopup = action.payload;
    },
    popupHide(state) {
      console.log("state" + state);
      state.itemPopup = null;
    },
    setValueInput(state, action) {
      state.searchData = action.payload;
    },
    addSearchProducts(state, action) {
      console.log(action.payload);
      state.SearchDataProducts = action.payload;
    },
    itemDetail(state, action) {
      console.log("action:", action);
      state.itemDetail = action.payload;
    },
    successFully(state,action){
state.isSuccsess = action.payload
    }
  },
});
