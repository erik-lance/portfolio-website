import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Stack, Typography } from "@mui/material";
import experience from "@/data/experience.json";
import BusinessIcon from '@mui/icons-material/Business';

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
                        secondaryAction={
                            <IconButton edge="end" aria-label="open company page"
                                href={job.link} target="_blank" color="primary"
                            >
                                <BusinessIcon />
                            </IconButton>
                        }
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