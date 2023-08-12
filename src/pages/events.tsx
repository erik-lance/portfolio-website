import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Container, Grid, List, Stack, Typography } from "@mui/material";
import events from "@/data/events.json";
import EventTile from "@/components/EventTile";


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
                        <EventTile
                            key={event.id}
                            id={event.id}
                            name={event.name}
                            date={event.date}
                            image={event.image}
                            link={event.link}
                            description={event.description}
                            tech={event.tech}
                        />
                    ))}
                </Grid>
            </Stack>
        </Container>
    );
}