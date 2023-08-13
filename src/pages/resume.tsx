import { Container, IconButton, Link, Paper, Stack, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

export default function Resume() {
    const resumePDF = "/documents/tiongquico_resume.pdf";
    return (
        <Container maxWidth="lg"
            sx={{
                height: '100vh',
            }}
        >
            <Stack spacing={2} height="100%">
                <Typography
                    variant="h4"
                    fontWeight={700}
                    color="primary.light"
                >
                    Resume
                    <IconButton
                        aria-label="download"
                        color="primary"
                        component={Link}
                        href={resumePDF}
                        download="tiongquico_resume.pdf"
                    >
                        <DownloadIcon />
                    </IconButton>
                </Typography>

                <Paper 
                    elevation={5}
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <iframe
                        src={resumePDF + "#toolbar=0&navpanes=0"}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                    />
                </Paper>
            </Stack>
        </Container>
    );
}