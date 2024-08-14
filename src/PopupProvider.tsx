import { createContext, useState, ReactNode, useContext } from 'react';

interface PopUpContextProps {
    openPopUp: () => void;
    closePopUp: () => void;
    showPopUp: boolean;
}

const PopUpContext = createContext<PopUpContextProps>({
    openPopUp: () => {},
    closePopUp: () => {},
    showPopUp: false,
});

export const PopUpProvider = ({ children }: { children: ReactNode }) => {
    const [showPopUp, setShowPopUp] = useState<boolean>(false);

    const openPopUp = () => {
        setShowPopUp(true);
    };
    const closePopUp = () => {
        setShowPopUp(false);
    };

    return (
        <PopUpContext.Provider value={{ openPopUp, closePopUp, showPopUp }}>
            {children}
        </PopUpContext.Provider>
    );
};

export const usePopUpContext = () => {
    return useContext(PopUpContext);
};