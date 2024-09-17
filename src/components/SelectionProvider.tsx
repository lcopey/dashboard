import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';

type IDataSelectedContext = {
    dataSelected: Array<any>;
    setDataSelected: Dispatch<SetStateAction<never[]>>;
};

const dataSelectedContext = createContext<IDataSelectedContext>({
    dataSelected: [],
    setDataSelected: () => {},
});

export function DataSelectedProvider({ children }: { children: ReactNode }) {
    const [dataSelected, setDataSelected] = useState([]);
    return (
        <dataSelectedContext.Provider value={{ dataSelected, setDataSelected }}>
            {children}
        </dataSelectedContext.Provider>
    );
}

export function useSetData() {
    return useContext(dataSelectedContext);
}
