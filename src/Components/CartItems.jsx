import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: "#7161C5",
      color: "#7161C5",
      fontWeight:900,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight:700,
      border:"0px",
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    title: string,
    rate: number,
    qty: number,
    total: number,
  ) {
    return { title, rate, qty, total };
  }
  
  const rows = [
    ['Frozen yoghurt', 2159, 6, 4000]
  ];
  
export default function CartItems(props){
    const [data, setData] = React.useState(rows)
    React.useEffect(()=>{
        setData(props.data)
    },[])
    return(
        <TableContainer component={Paper}>
        <Table 
        style={{
            border:"1.5px solid #7161C5",
            borderRadius:"12px",
            boxShadow:0,
        }}
        sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow
            >
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell align="right">Rate</StyledTableCell>
              <StyledTableCell align="right">Qty</StyledTableCell>
              <StyledTableCell align="right">Line total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (row.qty!=0 && row.rate!=0)&&(
              <StyledTableRow key={row.title}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">${row.rate}</StyledTableCell>
                <StyledTableCell align="right">{row.qty}</StyledTableCell>
                <StyledTableCell align="right">${row.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    )
}