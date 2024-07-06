'use client';

import Navbar from "@/components/Navbar";
import store from "@/store";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }) {
    return (
        <Provider store={store}>
            <Navbar />
            {children}
        </Provider>
    )
}
