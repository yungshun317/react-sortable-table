import React from "react";

import SortableDataProvider from "./SortableDataProvider.js";
import SortableTable from "./SortableTable.js";

export default function App() {
	return (
		<SortableDataProvider>
		    <SortableTable />
		</SortableDataProvider>
	);
}