import { createContext, useContext, useState } from 'react';

type MyProviderProps = { children: React.ReactNode };

type MyContextProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyContext = createContext<MyContextProps>({} as MyContextProps);

const MyProvider = ({ children }: MyProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return <MyContext.Provider value={{ isOpen, setIsOpen }}>{children}</MyContext.Provider>;
};

const useMyContext = () => {
    return useContext(MyContext);
};

export { MyProvider, useMyContext };
