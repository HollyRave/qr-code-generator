import { Box, Link, Button, Stack, Container } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { grey } from "@mui/material/colors";

const Footer = () => {
    return (
        <Box
            width="100%"
            sx={{
                backgroundColor: grey[500]
            }}
        >
            <Container>
                <Stack direction="row" spacing={5} alignItems="center">
                    <Link href="https://github.com/HollyRave/users/tree/main">
                        <Button
                            size="large"
                            variant="text"
                            color="error"
                            startIcon={<GitHubIcon />}
                            disableElevation
                            sx={{
                                alignItems: "flex-start"
                            }}
                        >
                            GitHub
                        </Button>
                    </Link>

                    <Link href="https://web.telegram.org/k/#@h0lly_mark">
                        <Button
                            size="large"
                            variant="text"
                            color="error"
                            startIcon={<TelegramIcon />}
                            disableElevation
                            sx={{
                                alignItems: "flex-start"
                            }}>
                            Telegram
                        </Button>
                    </Link>

                    <Link href="https://www.linkedin.com/in/ilya-markin-83361b1a8/">
                        <Button
                            size="large"
                            variant="text"
                            color="error"
                            startIcon={<LinkedInIcon />}
                            disableElevation
                            sx={{
                                alignItems: "flex-start"
                            }}>
                            LinkedIn
                        </Button>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;