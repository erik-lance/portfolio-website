import { Container, Stack, Typography } from "@mui/material";


export default function Events() {
    return (
        <Container maxWidth="md">
            <Stack spacing={2}>
                <Typography
                    variant="h1"
                    fontWeight={700}
                    color="primary.light"
                >
                    Events
                </Typography>


            </Stack>
        </Container>
    );
}