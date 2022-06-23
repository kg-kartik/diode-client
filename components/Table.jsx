import React from 'react'
import styled from 'styled-components'
import { useTable, useRowSelect } from 'react-table'




const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>

                <input type="checkbox" ref={resolvedRef} {...rest} />
            </>
        )
    }
)

function Table({ columns, data, showCheckbox }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                // Let's make a column for selection
                {
                    id: 'selection',
                    Cell: ({ row }) => {
                        if (
                            rows.filter((row) => row.isSelected).length < 1 ||
                            row.isSelected
                        ) {
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

                    },
                },
                ...columns,
            ])
        }
    )

    // Render the UI for your table
    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.slice(0, 10).map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedRowIds: selectedRowIds,
                            'selectedFlatRows[].original': selectedFlatRows.map(
                                d => d.original
                            ),
                        },
                        null,
                        2
                    )}
                </code>
            </pre> */}
        </>
    )
}

function TableComponent({ columns, data, showCheckbox }) {

    return (
        <Table columns={columns} data={data} showCheckbox={showCheckbox} />
    )
}

export default TableComponent;
