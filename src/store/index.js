import { configureStore } from "@reduxjs/toolkit";
import { CartItemSlice } from "./CartSlice";

import { popupSlice } from "./PopupSlice";
import { validateSlice } from "./validateSlice";
//store redux
const store = configureStore({
    reducer : {
     popup : popupSlice.reducer ,
     cart : CartItemSlice.reducer ,
     validate : validateSlice.reducer 
    }
})
export const popupAction = popupSlice.actions
export const ActitonCartItem = CartItemSlice.actions
export const validateAction = validateSlice.actions
export default store;