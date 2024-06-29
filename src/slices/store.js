import { configureStore } from "@reduxjs/toolkit";

import slicesFilter from "./slicesFilter";
import slicesColor from "./slicesColor";
import slicesCart from "./slicesCart";


export const store = configureStore({
    reducer:{
        slicesFilter,
        slicesColor,
        slicesCart,
    },
    
})