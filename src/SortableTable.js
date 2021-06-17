import React from "react";

export default function SortableTable() {
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
		    </tbody>
		</table>
	);
}