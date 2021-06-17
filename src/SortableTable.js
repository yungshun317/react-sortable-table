import React from "react";

import { useSortableData } from "./SortableDataProvider";

export default function SortableTable() {
	const { items, requestSort, sortConfig } = useSortableData(props.products);

	return (
		<table>
		    <caption>Products</caption>
		    <thead>
		        <tr>
		            <th>
		                <button>Name</button>
		            </th>
		            <th>
		                <button>Price</button>
		            </th>
		            <th>
		                <button>In Stock</button>
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