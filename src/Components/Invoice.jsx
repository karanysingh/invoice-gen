import { Typography } from "@mui/material"
import CartItems from "./CartItems"

export default function Invoice(props){
    var sum = props.data.total
    var name = props.data.name
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
                display:"flex",
                flexDirection:"column",
            }}>
            <div style={{
                padding:"3%",
                display:"flex"
            }}>
                <div style={{
                    // padding:"0% 2% 4% 2%",
                    width:"50%",
                    alignItems:"flex-start",
                    justifyContent:"center",
                    flexDirection:"column",
                    // backgroundColor:"red"
                }}>
            <Typography style={{fontWeight:700}} variant="h5">1. Transaction 1</Typography>
            <Typography style={{padding:"0% 0% 0% 4%",fontWeight:500}} variant="h7">Paid on 05/04/2022</Typography>
                </div>
                
                <div style={{
                    display:"flex",
                    width:"50%",
                    alignItems:"flex-end",
                    justifyContent:"center",
                    flexDirection:"column",
                    // backgroundColor:"blue"
                }}>
                    
                    <Typography style={{ padding: "0% 4% 0% 4%", fontWeight: 700 }} variant="h6">Amount Paid</Typography>
                    <Typography style={{ padding: "0% 4% 0% 4%", fontWeight: 900, color:"#7161C5"}} variant="h5">${sum}</Typography>
                </div>
                </div>
            <CartItems data={props.data}></CartItems>
            </div>
        </div>
    )
}