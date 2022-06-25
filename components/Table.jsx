import React, { useEffect } from "react";
import { useTable, useRowSelect } from "react-table";

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <>
            <input type="radio" ref={resolvedRef} {...rest} />
        </>
    );
});

const TableComponent = ({ columns, data, showCheckbox, cb, style }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state: { selectedRowIds }
    } = useTable(
        {
            columns,
            data
        },
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => [
                // Let's make a column for selection
                {
                    id: "selection",
                    Cell: ({ row }) => {
                        if (rows.filter((row) => row.isSelected).length < 1 || row.isSelected) {
                            return (
                                <div>
                                    <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <IndeterminateCheckbox
                                        checked={false}
                                        readOnly
                                        style={row.getToggleRowSelectedProps().style}
                                    />
                                </div>
                            );
                        }
                    }
                },
                ...columns
            ]);
        }
    );

    useEffect(() => {
        cb(selectedFlatRows[0]?.original.id);
    }, [selectedRowIds]);

    // Render the UI for your table
    return (
        <>
            <table {...getTableProps()} style={style}>
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
                    {rows.slice(0, 10).map((row, i) => {
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
        </>
    );
};

export default TableComponent;
