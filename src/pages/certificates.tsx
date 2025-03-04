import { Box, Container, Link, Stack, Typography } from "@mui/material";

export default function Certificates() {
    return (
        <Container>
            <Typography
                            variant="h1"
                            component="h1"
                            color="primary.main"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.6rem', lg: '4rem'}
                            }}
                        >
                👷‍♀️ In Progress 🚧        
            </Typography>
            <Typography
                variant="body1"
            >
                Still have not gotten around to creating a list for all my certificates (too many to list and filter out!)
            </Typography>

            <Box
                sx={{
                    bgcolor: "primary.main",
                    borderRadius: 2,
                    padding: 2,
                    marginTop: 2
                }}
            >
                <Typography
                    variant="subtitle1"
                >
                    In the meantime, you can check out the certificates I have on the following links
                </Typography>

                <Box
                    sx={{
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        padding: 2,
                    }}
                >
                    <Stack>
                        <Link href="https://docs.microsoft.com/en-us/users/erik-lance/">
                            Microsoft Learn
                        </Link>
                        <Link href="https://www.cloudskillsboost.google/public_profiles/42b93348-d68a-41c5-9e02-fa8edb44180f">
                            Google Cloud Skills Boost
                        </Link>
                        <Link href="https://www.linkedin.com/in/erik-lance-tiongquico/details/certifications/">
                            Posted certificates on LinkedIn
                        </Link>
                    </Stack>
                </Box>
                
            </Box>
        </Container>
    );
}