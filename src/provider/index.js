'use client';

import Navbar from "@/components/Navbar";
import store from "@/store";
import { Provider } from "react-redux";

export default function ReduxProvider({ children, getSession }) {
    return (
        <Provider store={store}>
            <Navbar getSession={getSession} />
            {children}
        </Provider>
    )
}
