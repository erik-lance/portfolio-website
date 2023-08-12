import { Container, Stack, Typography, List, ListItem, IconButton } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import education from "@/data/education.json";

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
                    {education.map((school) => (
                        <ListItem
                            key={school.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="open school page"
                                    href={school.link} target="_blank" color="primary"
                                >
                                    <SchoolIcon />
                                </IconButton>
                            }
                        >
                            <Stack
                                spacing={0}
                            >
                                <Typography>
                                    {school.year}
                                </Typography>

                                <Typography
                                    variant="h4"
                                    fontWeight={700}
                                    color={"text.primary"}>
                                    {school.school}
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    fontWeight={700}
                                    color={"text.secondary"}>
                                    {school.degree}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                >
                                    {school.notable}
                                </Typography>

                            </Stack>
                        </ListItem>
                    ))}
                </List>

            </Stack>

        </Container>
    );
}