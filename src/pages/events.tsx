import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Container, Grid, List, Stack, Typography } from "@mui/material";
import events from "@/data/events.json";


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

                <Grid
                    container
                    spacing={2}

                >
                    {events.map((event) => (
                        <Card
                            key={event.id}
                            sx={{
                                backgroundColor: "secondary.main",
                                boxShadow: 5,
                                width: 300,
                                height: 400,
                            }}
                        >
                            <CardActionArea
                                href={event.link}
                                target="_blank"
                                sx={{
                                    height: "100%",
                                }}
                            >
                                {event.image && (
                                    <CardMedia
                                        component="img"
                                        image={"/event_imgs/" + event.image}
                                        alt={event.name}
                                        sx={{
                                            maxHeight: 138,
                                            boxShadow: 3,
                                            objectFit: "bottom"
                                        }}
                                    />
                                )}

                                <CardHeader
                                    title={event.name}
                                    subheader={event.date}
                                    sx={{
                                        paddingBottom: 0,
                                    }}
                                />

                                <CardContent
                                    sx={{
                                        paddingY: 0.5,
                                    }}
                                >
                                    <Typography>
                                        {/* Shortens description to 100 characters with a ... */}
                                        {event.description.length > 100 ? event.description.substring(0, 100) + "..." : event.description}
                                    </Typography>
                                    <List>
                                        {event.tech.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                variant="outlined"
                                                />
                                        ))}
                                    </List>
                                </CardContent>

                            </CardActionArea>
                        </Card>
                    ))}
                </Grid>
            </Stack>
        </Container>
    );
}