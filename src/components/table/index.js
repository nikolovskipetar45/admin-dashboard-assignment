import { Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableRow, } from '@mui/material';
import TableHeadCustom from './tableHead'

const data = [...Array(5)].map((_, index) => ({
  id: index + 1,
  price: '1500',
  category: 'test',
  status: 'paid',
}))

export default function InvoiceTable({ title, subheader, tableLabels, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }}/>

      <TableContainer sx={{ overflow: 'unset' }}>
        <Table>
          <TableHeadCustom headLabel={tableLabels}/>
          <TableBody>
            {data.map((row) => (
              <Row key={row.id} row={row}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

function Row({ row }) {
  return (
    <>
      <TableRow>
        <TableCell>{`INV-${row.id}`}</TableCell>

        <TableCell>{row.category}</TableCell>

        <TableCell>{(row.price)}</TableCell>

        <TableCell>{row.status}</TableCell>
      </TableRow>
    </>
  );
}
