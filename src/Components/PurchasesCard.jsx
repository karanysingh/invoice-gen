import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Invoice from '../Components/Invoice'
import Button from '@mui/material/Button';
import { InvoiceContext } from '../App';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function createData(
    title: string,
    rate: number,
    qty: number,
    total: number,
) {
    return { title, rate, qty, total };
}

//   const invoices = [
//     createData('Ice cream sandwich', 2237, 9,  4100),
//     createData('Eclair', 2620, 16,  6000),
//     createData('Cupcake', 1305, 3,  4300),
//     createData('Gingerbread', 2356, 16, 3900),
//   ];
var invs = []
export default function PurchasesCard() {
    const [expanded, setExpanded] = React.useState(false);
    const [invoices, setInvoices] = React.useState([])
    // const [name,setName] = React.useState("unnamed")
    var contextdata = React.useContext(InvoiceContext)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            style={{
                marginRight: 80,
                border: "1px solid black",
                borderRadius: "15px",
            }}>

            <CardContent style={{
                padding: "4%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <Typography style={{ fontWeight: 700 }} variant="h4">{contextdata[2].name}</Typography>
                    <Typography style={{ fontWeight: 500 }} variant="h6">05/04/2022</Typography>
                </div>
                <Button
                    onClick={handleExpandClick}
                    style={{
                        fontWeight: 700,
                        color: "#7161C5",
                        borderRadius: "100px",
                        textTransform: 'none',
                        padding: 10,
                        '&:hover': {
                            backgroundColor: "#F2EFFF"
                        }
                    }}>

                    View Invoice
                    <ExpandMore component={'div'}
                        expand={expanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                        disableRipple
                        disableTouchRipple
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </Button>
            </CardContent>
            <CardActions style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column"
            }}>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Invoice data={contextdata[2]} ></Invoice>

                </CardContent>
            </Collapse>
        </Card>
    );
}
