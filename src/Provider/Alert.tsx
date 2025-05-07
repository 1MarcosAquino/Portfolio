import { createContext, useContext, useState } from 'react';

type AlertProviderProps = { children: React.ReactNode };

type AlertContextProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

const AlertProvider = ({ children }: AlertProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return <AlertContext.Provider value={{ isOpen, setIsOpen }}>{children}</AlertContext.Provider>;
};

const useAlertContext = () => {
    return useContext(AlertContext);
};

export { AlertProvider, useAlertContext };
