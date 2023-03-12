import { createContext, useState } from "react";


const PageContext = createContext({})

export function PageProvider({ children }: any) {
    const [page, setPage] = useState("chats");

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    );
}

export default PageContext