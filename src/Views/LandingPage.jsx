import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import PurchasesCard from "../Components/PurchasesCard";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ArtEle from "../Components/ArtEle"
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#7161C5",
        },
    },
});

export default function LandingPage() {
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
               
                    <img src={"./logo.png"} style={{marginTop:50,paddingBottom:50}} />

                        <Typography variant="h2" style={{
                            fontWeight: 700,
                            color: "#7161C5",
                        }}>
                            Invoice Generator
                        </Typography>
                        <TextField
                            // color=""
                            style={{
                                height: "50px",
                                marginTop: 40,
                                width: 450,
                                borderRadius: "15px",
                                color: "#2B2B2B",
                                border: "0.8px solid #2B2B2B"
                            }}
                            id="outlined-basic" label="Enter Name" />
                        <Button style={{
                            marginLeft: 12,
                            height: "50px",
                            marginTop: 40,
                            width: 300,
                            borderRadius: "15px",
                        }} variant="contained">Generate Invoice</Button>
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
                    paddingBottom:30,
                    fontWeight:500,
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
