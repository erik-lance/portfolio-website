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
                                <IconButton edge="end" aria-label="open school page">
                                    <SchoolIcon />
                                </IconButton>
                            }
                        >

                        </ListItem>
                    ))}
                </List>
                
            </Stack>

        </Container>
    );
}