import { Container, Stack, Typography, List } from "@mui/material";

export default function Education() {
    return (
        <Container
            maxWidth="md"
        >
            <Stack
                spacing={2}
            >
                <Typography
                    variant="h1"
                    fontWeight={700}
                    color="primary.light"
                >
                    Education
                </Typography>

                <List
                    sx={{
                        width: '100%',
                    }}
                >

                </List>
                
            </Stack>

        </Container>
    );
}