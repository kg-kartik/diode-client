import React from "react"
import { useTable } from "react-table";
import styled from 'styled-components'

// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     color: white;
//     border-spacing: 60px 0;
//     tr {
//       margin-right:130px;
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th{
//         color:grey;
//         font-weight:500;
//     }
//     th,
//     td {
//       margin-right: 130px;
//       padding: 1rem;


//       :last-child {
//         border-right: 0;
//       }
//     }
//   }


const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    return (
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
                {rows.map((row, i) => {
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
    )
}


function TableComponent() {
    const columns = React.useMemo(
        () => [
            {
                Header: " ",
                accessor: 'rowName'
            },
            {
                Header: 'Max',
                accessor: 'max',
            },
            {
                Header: 'Avg',
                accessor: 'avg',
            },
            {
                Header: 'Last',
                accessor: 'last',
            },
        ],
        []
    )

    const data = [
        {
            rowName: "CPU %",
            max: "4%",
            avg: "9.3%",
            last: "2.3%"
        },
        {
            rowName: "CPU %",
            max: "4%",
            avg: "9.3%",
            last: "2.3%"
        }
    ]

    return (
        <div style={{ padding: '1rem' }}>
            <Table columns={columns} data={data} />
        </div>
    )
}


export default TableComponent;