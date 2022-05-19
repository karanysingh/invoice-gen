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
import { InvoiceContext } from '../App';
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import jsPDF from "jspdf";
import "jspdf-autotable";

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
function CreateData(
    title: string,
    rate: number,
    qty: number,
    total: number,
) {
    return { title, rate, qty, total };
}
export default function GenerateInvoice(props) {
    const [value, setValue] = React.useState(1);
    var contextdata = React.useContext(InvoiceContext)
    const invoices = contextdata[0]
    const [sum,setsum] = React.useState(0)
    const [newname,setnewname] = React.useState("unnamed")
    // const sum
    React.useEffect(()=>{
        setnewname(invoices.name)
    })
    const HandleChange = (event, newValue) => {
        setValue(newValue);
    };

    const HandleSaveInvoice = () => {
        console.log(JSON.stringify({ ...invoices, name: newname, subtotal: 100 }))
        window.localStorage.removeItem('invhistory');
        window.localStorage.setItem("invhistory", JSON.stringify({ ...invoices, name: newname, total: sum }));
    }
    
    const exportPDF = () => {

        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
        const title = "Invoice-" + newname;
        const headers = [['Product Name','Quantity','Price','Total']];
        const temp = []
        for(let i in invoices){
            if(typeof invoices[i] === "object" && invoices[i].title!="null"){
                temp.push(invoices[i])
            }
        }
        const data = temp.map((ele)=>[ele.title,ele.qty,ele.rate,ele.total])
        let content = {
            startY: 50,
            head: headers,
            body: data
          };
      console.log(invoices)
          doc.text(title, marginLeft, 40);
          doc.autoTable(content);
          doc.save("report.pdf")
    }

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
                flexDirection: "row", width: "100%",marginTop:3,marginBottom:5,
            }}>

                <div sx={{ display: 'flex', }}>
                    <Typography sx={{ alignSelf: "center", paddingLeft: 20 }} variant="h4">
                        
                    {newname}<IconButton component={Link} to="/"><EditIcon /></IconButton>
                        
                    </Typography>
                </div>
                <div sx={{ display: 'flex', flex: '1'}}>
                    <Tabs value={value} onChange={HandleChange} >

                        <Tab sx={{textTransform:"none"}} icon={<VisibilityIcon />} iconPosition="start" label="Preview" disabled={invoices[0]?.title=='null'} />
                        <Tab sx={{textTransform:"none"}} icon={<EditIcon />} iconPosition="start" label="Edit" />

                    </Tabs>
                </div>
                <div sx={{ paddingRight: 20 }}>
                    <CustomButton
                        onClick={exportPDF}
                    >Export as PDF</CustomButton>
                    <CustomButton
                        onClick={HandleSaveInvoice}
                    >Save Invoice</CustomButton>
                </div>
            </Box>
            <Box style={{width:"60%"}}>
                <div>
                    {
                        (value === 1) && (<MakeInvoice sum={sum} setsum={setsum} name={newname} setname={setnewname}></MakeInvoice>)
                    }

                    {
                        (value === 0) && (<Invoice data={invoices} />)
                    }
                </div>
            </Box>
        </Grid>
    );
}