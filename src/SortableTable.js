import React from "react";

import { useSortableData } from "./SortableDataProvider";

export default function SortableTable() {
	const { items, requestSort, sortConfig } = useSortableData();

	return (
		<table>
		    <caption>Products</caption>
		    <thead>
		        <tr>
		            <th>
		                <button
		                    type="button"
		                    onClick={() => requestSort("name")}    
		                >
		                    Name
		                </button>
		            </th>
		            <th>
		                <button
		                    type="button"
		                    onClick={() => requestSort("price")}    
		                >
                            Price
                        </button>
		            </th>
		            <th>
		                <button
		                    type="button"
		                    onClick={() => requestSort("stock")}    
		                >
		                    In Stock
		                </button>
		            </th>
		        </tr>
		    </thead>
		    <tbody>
		        {
		        	items.map((item) => (
		        	    <tr key={item.id}>
		        	        <td>{item.name}</td>
		        	        <td>{item.price}</td>
		        	        <td>{item.stock}</td>
		        	    </tr>
		        	))
		        }
		    </tbody>
		</table>
	);
}