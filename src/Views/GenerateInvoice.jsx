import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MakeInvoice from '../Components/MakeInvoice';
import Invoice from '../Components/Invoice';


const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    borderRadius: '10px',
    lineHeight: 1.5,
    backgroundColor: '#EDEAFF',
    borderColor: '#0063cc',
});
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
    createData('Ice cream sandwich', 2237, 9, 4100),
    createData('Eclair', 2620, 16, 6000),
    createData('Cupcake', 1305, 3, 4300),
    createData('Gingerbread', 2356, 16, 3900),
];
export default function GenerateInvoice() {
    const [value, setValue] = React.useState(2);
    const [invoiceName, setInvoiceName] = React.useState("Invoice1")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        > <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            style={{
                padding: "0% 2% 0% 6%",
                boxShadow: "0px 3.57967px 37.5866px rgba(189, 189, 189, 0.25)",
            }}
        >
                <img src={"./logo.png"} style={{ marginTop: 50, paddingBottom: 50 }} />

                <Typography variant="h3" style={{
                    fontWeight: 700,
                    color: "#7161C5",
                }}>
                    Invoice Generator
                </Typography>
            </Grid>
            <Box sx={{
                borderBottom: 1, borderColor: 'divider', display: 'flex', flex: 1, justifyContent: 'space-between', alignContent: "center",
                flexDirection: "row", width: "100%"
            }}>

                <div sx={{ display: 'flex', }}>
                    <Typography sx={{ alignSelf: "center", paddingLeft: 20 }} variant="h4">
                        {invoiceName}
                        <EditIcon /></Typography>
                </div>
                <div sx={{ display: 'flex', flex: '1' }}>
                    <Tabs value={value} onChange={handleChange} >

                        <Tab icon={<VisibilityIcon />} iconPosition="start" label="Preview" />
                        <Tab icon={<EditIcon />} iconPosition="start" label="Edit" />

                    </Tabs>
                </div>
                <div sx={{ paddingRight: 20 }}>
                    <CustomButton>Export as PDF</CustomButton>
                    <CustomButton>Save Invoice</CustomButton>
                </div>
            </Box>
            <Box>
                <div>
                    {
                        (value == 1) && (<MakeInvoice></MakeInvoice>)
                    }

                    {
                        (value == 0) && (<Invoice data={rows} />)
                    }
                </div>
            </Box>
        </Grid>
    );
}