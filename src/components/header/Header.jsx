import { AppBar, Container, IconButton, Typography } from "@mui/material";
import QrCodeIcon from '@mui/icons-material/QrCode';


const Header = () => {
    return (
        <AppBar position="static">
            <Container>
                <IconButton aria-label="menu" disabled>
                    <QrCodeIcon fontSize="large" sx={{ mr: 2 }} />
                    <Typography variant="h5" color={"black"}>
                        QR Code Generator
                    </Typography>
                </IconButton>
            </Container>
        </AppBar>
    );
}

export default Header;