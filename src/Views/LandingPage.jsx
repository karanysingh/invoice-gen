import * as React from 'react';
import { styled } from '@mui/material/styles';
import PurchasesCard from "../Components/PurchasesCard";
import Grid from '@mui/material/Grid';
import ArtEle from "../Components/ArtEle"
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { InvoiceContext } from '../App';

import Button from '@mui/material/Button';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#7161C5",
        },
    },
});

export default function LandingPage() {
    const [name, setName] = React.useState("");
    var contextdata = React.useContext(InvoiceContext);
    const changeInvoiceName = contextdata[4]
    const newname = contextdata[2]
    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
                style={{
                    padding: "0% 2% 5% 0%",
                    boxShadow: "0px 3.57967px 37.5866px rgba(189, 189, 189, 0.25)",
                }}
            >

                <Grid item xs={6}>
                    <ThemeProvider theme={mainTheme}>

                        <img src={"./logo.png"} style={{ marginTop: 50, paddingBottom: 50 }} />

                        <Typography variant="h2" style={{
                            fontWeight: 700,
                            color: "#7161C5",
                        }}>
                            Invoice Generator
                        </Typography>
                        <TextField
                            style={{
                                height: "50px",
                                marginTop: 40,
                                width: 450,
                                "&:hover":{
                                    color:"black",
                                },
                                "&:active":{
                                    color:"black",
                                }
                            }}
                            id="outlined-basic"  value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        <Button disableRipple component={Link}
                            onClick={() => {
                                changeInvoiceName([newname[0], name])
                            }
                            } style={{
                                textTransform:"none",
                                marginLeft: 12,
                                height: "50px",
                                marginTop: 40,
                                width: 300,
                                backgroundColor: "#7161C5",
                                borderRadius: "15px",
                                '&:hover': {
                                    backgroundColor: "#4F4099 !important"
                                },
                                '&:active': {
                                    backgroundColor: "#3B3077 !important"
                                }
                            }} to="/generate" variant="contained">Generate Invoice</Button>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={4}>
                    <ArtEle />
                </Grid>
            </Grid>

            <Grid
                container
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6} style={{
                }}>
                    <Typography
                        style={{
                            marginTop: 60,
                            paddingBottom: 30,
                            fontWeight: 500,
                        }}
                        variant="h4">
                        Saved Invoices
                    </Typography>
                    <PurchasesCard></PurchasesCard>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </>
    );
}
