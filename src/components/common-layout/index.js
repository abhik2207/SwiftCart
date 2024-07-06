import ReduxProvider from "@/provider";

export default async function CommonLayout({children}) {
    return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
    )
}
