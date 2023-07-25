import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import experience from "@/data/experience.json";

export default function Experience() {
    return (
        <Stack
            spacing={2}
        >
            <Typography
                variant="h1"
                fontWeight={700}
            >
                Experience
            </Typography>

            <List
                sx={{
                    width: '100%',
                }}
            >
                {experience.map((job) => (
                    <ListItem
                        key={job.id}
                    >
                        <ListItemText
                            primary={job.position}
                            secondary={job.company}
                        />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}