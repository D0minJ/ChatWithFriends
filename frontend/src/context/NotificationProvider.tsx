import { createContext } from "react";


const NotificationContext = createContext({})

export function PageProvider({ children }: any) {

    return (
        <NotificationContext.Provider value={{}}>
            {children}
        </NotificationContext.Provider>
    );
}

export default NotificationContext