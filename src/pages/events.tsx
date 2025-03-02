import { Box, Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import events from "@/data/events.json";
import speaker from "@/data/speaker.json";
import EventTile from "@/components/EventTile";
import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`event-tabpanel-${index}`}
            aria-labelledby={`event-tab-${index}`}
            {...other}
        >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `event-tabpanel-${index}`,
    };
}

export default function Events() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Container maxWidth="xl">
            <Stack spacing={2}>
                <Typography
                    variant="h1"
                    fontWeight={700}
                    color="primary.light"
                >
                    Events
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight={700}
                    color="text.primary"
                >
                    Here are some events I have participated in or led.
                </Typography>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="event tabs">
                        <Tab label="Attended" {...a11yProps(0)} />
                        <Tab label="Led" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                {/* Attended */}
                <CustomTabPanel value={value} index={0}>
                    <Grid
                        container
                        spacing={2}
                        
                    >
                        {events.map((event) => (
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                                lg={3} 
                                key={event.id}
                            >
                                <EventTile
                                    id={event.id}
                                    name={event.name}
                                    date={event.date}
                                    image={event.image}
                                    link={event.link}
                                    description={event.description}
                                    tech={event.tech}
                                    type={"attended"}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </CustomTabPanel>

                {/* Led */}
                <CustomTabPanel value={value} index={1}>
                    <Grid
                        container
                        spacing={2}
                    >
                        {speaker.map((event) => (
                            <Grid
                                item
                                key={event.id}
                            >
                                <EventTile
                                    id={event.id}
                                    name={event.name}
                                    date={event.date}
                                    image={event.image}
                                    link={event.link}
                                    description={event.description}
                                    tech={event.tech}
                                    type={"led"}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </CustomTabPanel>

                
            </Stack>
        </Container>
    );
}