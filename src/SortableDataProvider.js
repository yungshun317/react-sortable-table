import React, { createContext, useContext, useState, useMemo } from "react";

import sortableData from "./products.json";

const SortableDataContext = createContext();

export const useSortableData = () => useContext(SortableDataContext);

export default function SortableDataProvider({ children }) {
	const [items, setItems] = useState(sortableData);
	const [sortConfig, setSortConfig] = useState(null);

    const sortedItems = useMemo(() => {
    	let sortableItems = [...items];
    	return sortableItems;
    }, [items, sortConfig])

    const requestSort = (key) => {
    	let direction = "ascending";
    	setSortConfig({ key, direction });
    };
	
	//const [sortConfig, setSortConfig] = useState(config);
/*	
	const sortedItems = useMemo(() => {
		let sortableItems = [...items];
		return sortableItems;
	}, [items, sortConfig]);
*/	
    // const requestSort = null;

    return (
    	<SortableDataContext.Provider value={{ items: sortedItems, requestSort, sortConfig }}>
    	    { children }
    	</SortableDataContext.Provider>
    );
}