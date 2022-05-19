import { Typography } from "@mui/material"
import * as React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const items = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
];
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
    desc: string,
    rate: number,
    qty: number,
    total: number,
  ) {
    return { desc, rate, qty, total };
  }
  
  const rows = [
    createData('Frozen yoghurt', 2159, 6, 4000),
    createData('Ice cream sandwich', 2237, 9,  4100),
    createData('Eclair', 2620, 16,  6000),
    createData('Cupcake', 1305, 3,  4300),
    createData('Gingerbread', 2356, 16, 3900),
  ];
  
export default function Invoice() {
    const theme = useTheme();

    const [selectedItem, setSelectedItem] = React.useState([]);
    const [data,setData] = React.useState(items)
    React.useEffect(()=>{
        fetch(
            "https://fakestoreapi.com/products/")
                        .then((res) => res.json())
                        .then((json) => {
                            // console.log(json)
                            setData(json)
                        })
    },[])

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        
        setSelectedItem(
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    return (
        <div style={{
            height: 800,
            borderRadius: "8px",
            boxShadow: "0px 3.98495px 9.96236px rgba(95, 95, 94, 0.25)"
        }}>
            <div style={{
                width: "100%",
                height: 10,
                backgroundColor: "#7161C5",
            }}></div>
            <div style={{
                // width:"100%",
                height: 200,
                backgroundColor: "#F9F8FF",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignContent: "center",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 30,
            }}>

                <div style={{
                    display: "flex", flexDirection: "row",
                    flexWrap: "nowrap",
                    alignContent: "center",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <img src={"./logo.png"} style={{ zoom: 0.7 }} />

                    <Typography style={{
                        fontWeight: 700,
                        color: "#7161C5",
                        fontSize: 30,
                    }}>
                        {'\u00A0'} Invoice Generator
                    </Typography>
                </div>
                <Typography style={{
                    paddingRight: 30,
                    fontWeight: 800,
                }} align="right">
                    LegalForce RAPC Worldwide<br></br>
                    +1 877-794-9511<br></br>
                    1580 West El Camino Real, Suite 10<br></br>
                    Mountain View, California<br></br>
                    94040 - 2479<br></br>
                    United States<br></br>
                </Typography>

            </div>
            <div style={{
                padding: "3%",
            }}>
                <div style={{
                    padding: "0% 2% 4% 2%",
                }}>
                    <Typography style={{ fontWeight: 700 }} variant="h5">1. Transaction 1</Typography>
                    <Typography style={{ padding: "0% 0% 0% 4%", fontWeight: 500 }} variant="h7">Paid on 05/04/2022</Typography>
                </div>
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
            <TableBody>
            <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectedItem}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {data.map((name) => (
            <MenuItem
              key={name.id}
              value={name.price}
            //   style={getStyles(name.id, name.title, theme)}
            >
              {name.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
            </TableBody>
          </TableHead>
        </Table>
      </TableContainer>


            </div>
        </div >
    )
}