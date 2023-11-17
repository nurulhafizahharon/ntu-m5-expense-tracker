import { createContext, useState } from "react";


const DataContext = createContext();

export function DataProvider({children}) {
    const [fetchData, setFetchData] = useState(false);

    function handlerData() {
        setFetchData(!fetchData);
    }

    const context = {
        handlerData: handlerData,
        fetchData: fetchData,
    }

    return (
        <DataContext.Provider value={context}>{children}</DataContext.Provider>
    )

}

export default DataContext;