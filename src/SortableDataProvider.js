import React, { createContext, useContext, useState, useMemo } from "react";

import sortableData from "./products.json";

const SortableDataContext = createContext();

export const useSortableData = () => useContext(SortableDataContext);

export default function SortableDataProvider({ children }) {
	const [items, setItems] = useState(sortableData);
	const [sortConfig, setSortConfig] = useState(null);

    const sortedItems = useMemo(() => {
    	let sortableItems = [...items];
    	if (sortConfig !== null) {
    		sortableItems.sort((a, b) => {
    			if (a[sortConfig.key] < b[sortConfig.key]) {
    				return sortConfig.direction === 'ascending' ? -1 : 1;
    			}
    			if (a[sortConfig.key] > b[sortConfig.key]) {
    				return sortConfig.direction === 'ascending' ? 1 : -1;
    			}
    			return 0;
    		});
    	}
    	return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
    	let direction = "ascending";

    	if (
    		sortConfig &&
    		sortConfig.key === key &&
    		sortConfig.direction === "ascending"
    	) {
    		direction = "descending";
    	}
    	setSortConfig({ key, direction });
    };

    return (
    	<SortableDataContext.Provider value={{ items: sortedItems, requestSort, sortConfig }}>
    	    { children }
    	</SortableDataContext.Provider>
    );
}