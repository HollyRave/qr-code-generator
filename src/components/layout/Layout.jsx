import { Box, Grid } from "@mui/material";
import Body from "../body/Body";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <Box>
            <Grid
                direction="column"
                justifyContent="space-between"
                container
                spacing={{
                    xs: 44.05,
                    md: 50.4
                }}
            >
                <Grid item xs={12} md={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Body />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;