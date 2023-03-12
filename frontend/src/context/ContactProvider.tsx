import { createContext, useState, useRef } from "react";


const ContactContext = createContext({})

export function ContactProvider({ children }: any) {
    const [contact, setContact] = useState({});

    return (
        <ContactContext.Provider value={{ contact, setContact }}>
            {children}
        </ContactContext.Provider>
    );
}

export default ContactContext