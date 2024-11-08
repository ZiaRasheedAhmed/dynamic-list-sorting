import { useMemo } from "react";


function useSearchSort(data, searchItem, order) {
    return useMemo(() => {
        console.log("Hook data: ", data);
        console.log("hook searchItem: ", searchItem);
        console.log("hook order: ", order);
        let searchedData = data.filter(dataItem => dataItem.title.toLowerCase().includes(searchItem.toLowerCase()) ||
            dataItem.content.toLowerCase().includes(searchItem.toLowerCase())
        );

        if (order === 'asc') {
            searchedData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (order === 'desc') {
            searchedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        return searchedData;
    }, [data, searchItem, order]);
}

export default useSearchSort;