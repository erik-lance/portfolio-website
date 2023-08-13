import { Container, Paper, Stack, Typography } from "@mui/material";
import { Document } from "react-pdf";

export default function Resume() {
    return (
        <Container maxWidth="lg">
            <Stack spacing={2}>
                <Typography
                    variant="h4"
                    fontWeight={700}
                    color="primary.light"
                >
                    Resume
                </Typography>

                <Paper elevation={5}>
                </Paper>
            </Stack>
        </Container>
    );
}