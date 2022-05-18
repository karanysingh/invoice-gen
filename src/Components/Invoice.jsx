import { Typography } from "@mui/material"
import CartItems from "./CartItems"
export default function Invoice(){
    return(
        <div style={{
            height:800,
            borderRadius:"8px",
            boxShadow:"0px 3.98495px 9.96236px rgba(95, 95, 94, 0.25)"
        }}>
            <div style={{
                width:"100%",
                height:10,
                backgroundColor:"#7161C5",
            }}></div>
            <div style={{
                // width:"100%",
                height:200,
                backgroundColor:"#F9F8FF",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignContent: "center",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft:30,
            }}>
                
           <div style={{display:"flex",flexDirection: "row",
                flexWrap: "nowrap",
                alignContent: "center",
                justifyContent: "space-between",
                alignItems: "center",}}>
           <img src={"./logo.png"} style={{zoom:0.7}} />
            
            <Typography style={{
                fontWeight:700,
                color:"#7161C5",
                fontSize:30,
                }}>
                {'\u00A0'} Invoice Generator
            </Typography>
            </div>
            <Typography style={{
                paddingRight:30,
                fontWeight:800,
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
                padding:"3%",
            }}>
            <CartItems></CartItems>
            </div>
        </div>
    )
}