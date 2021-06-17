import React, { createContext, useContext, useState } from "react";

import SortableData from "./products.json";

const SortableDataContext = createContext();

export const useSortableData = () => useContext(SortableDataContext);

export default function SortableDataProvider({ 
	items,
	config = null
}) {
	const [sortConfig, setSortConfig] = useState(config);
	const sortedItems = useState(sortableData);
    const requestSort = null;

    return { items: sortedItems, requestSort, sortConfig };
}