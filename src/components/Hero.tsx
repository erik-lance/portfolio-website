import { Avatar, Box, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography"

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Box
                width="100%"
                sx={{
                    paddingTop: { xs: 0, sm: 8, md: 8, lg: 16},
                    paddingX: { xs: 0, sm: 16, md: 24, lg: 32}
                }}
            >
                <Grid container spacing={2}>
                <Grid item md={2} 
                    width="100%"
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            justifyContent: { xs: 'center', sm: 'center', md: 'end', lg: 'end'},
                            paddingRight: { xs: 0, sm: 2, md: 2, lg: 2}
                        }}
                    >
                        <Avatar
                            alt="Portrait"
                            src="portrait.JPG"
                            sx={{
                                width: 200,
                                height: 200,
                            }}
                        />
                    </Box>
                    
                </Grid>
                <Grid item md={10} xs={12}>
                    <Stack>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="primary.main"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.6rem', lg: '4rem'}
                            }}
                        >
                            Hello, I&apos;m Erik
                        </Typography>

                        <Typography
                            variant="h4"
                            component="h2"
                            color="text.primary"
                            sx={{
                                fontWeight: 400,
                                fontSize: { xs: '1.5rem', sm: '1.4rem', md: '1.6rem', lg: '2rem'}
                            }}
                        >
                            I am a fresh graduate from De La Salle University - Manila.
                        </Typography>

                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                                fontWeight: 400,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.25rem'}
                            }}
                        >
                            I am a tech enthusiast with a knack for music and game development, but my main passion revolves entirely around technology and my exhaustive effort to study and advocate its accessibility to all users.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            </Box>
            
        </div>
    );
}