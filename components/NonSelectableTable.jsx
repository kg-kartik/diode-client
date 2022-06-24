import React from "react";
import { useTable } from "react-table";

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    });

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

const NonSelectableTableComponent = ({ data1, data2, data3, data4 }) => {
    let data = [];
    if (data1 && data2 && !data3) {
        data.push(data1, data2);
    } else if (data1 && data2 && data3 && data4) {
        data.push(data1, data2, data3, data4);
    } else if (data1 && !data2) {
        data.push(data1);
    }

    const columns = React.useMemo(
        () => [
            {
                Header: " ",
                accessor: "rowName"
            },
            {
                Header: "Max",
                accessor: "max"
            },
            {
                Header: "Avg",
                accessor: "avg"
            },
            {
                Header: "Last",
                accessor: "last"
            }
        ],
        []
    );

    return (
        <div style={{ padding: "1rem" }}>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default NonSelectableTableComponent;
