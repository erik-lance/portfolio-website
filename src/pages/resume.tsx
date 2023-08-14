import { Container, IconButton, Link, Paper, Stack, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function Resume() {
    const resumePDF = "/documents/tiongquico_resume.pdf";

    const handleZoomIn = () => {
        const iframe = document.getElementById("pdf-iframe") as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ type: 'zoomIn' }, "*");
        }
    };

    const handleZoomOut = () => {
        const iframe = document.getElementById('pdf-iframe') as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ type: 'zoomOut' }, '*');
        }
    };

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
                        aria-label="zoom-in"
                        color="primary"
                        onClick={handleZoomIn}
                    >
                        <AddIcon />
                    </IconButton>

                    <IconButton
                        aria-label="zoom-out"
                        color="primary"
                        onClick={handleZoomOut}
                    >
                        <RemoveIcon />
                    </IconButton>

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
                        id="pdf-iframe"
                        src={resumePDF + "#zoom=100"}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                    />
                </Paper>
            </Stack>
        </Container>
    );
}