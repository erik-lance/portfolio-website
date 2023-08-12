import { Card, CardActionArea, CardContent, CardHeader, Chip, Container, Grid, List, Stack, Typography } from "@mui/material";
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

                <Grid>
                    {events.map((event) => (
                        <Card
                            key={event.id}
                            sx={{
                                backgroundColor: "secondary.main",
                            }}
                        >
                            <CardActionArea
                                href={event.link}
                            >
                                <CardHeader
                                    title={event.name}
                                    subheader={event.date}
                                />

                                <CardContent>
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