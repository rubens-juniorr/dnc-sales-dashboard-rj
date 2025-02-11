import styled from 'styled-components'
import { CustomTableProps } from '@/types'
import { pxToRem } from '@/utils'

export const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;

    .ellipsis {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ellipsis-sm {
      width: 300px;
    }

    .ellipsis-xs {
      width: 150px;
    }

    th,
    td {
      height: ${pxToRem(48)};
      padding: 0 ${pxToRem(8)} 0 0;
      text-align: left;

      &:last-child {
        text-align: right;
        padding: 0;
      }
    }

    th {
      color: ${(props) => props.theme.typographies.subtitle};
      font-weight: 600;
    }

    tr {
      border-bottom: ${pxToRem(1)} solid
        ${(props) => props.theme.appDefaultStroke};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`
export function CustomTable(props: CustomTableProps) {
  const { headers, rows } = props
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowindex) => (
            <tr key={rowindex}>
              {row.map((cell, cellindex) => (
                <td key={cellindex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  )
}
export default CustomTable
