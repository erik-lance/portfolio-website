import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader, Stack, Typography, Chip } from "@mui/material";
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
                        <Stack
                            spacing={0}
                        >
                            <Typography
                                variant="subtitle1"
                                fontWeight={700}
                                color={job.end_date ? "background.paper" : "primary.light"}
                            >
                                {job.start_date} - {job.end_date ? job.end_date : "Present"}
                            </Typography>
                            <ListItemText
                                primary={job.position}
                                secondary={job.company}
                            />
                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                {job.skills.map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        color="secondary"
                                        variant="outlined"
                                        size="small"
                                    >
                                        {skill}
                                    </Chip>
                                ))}
                            </Stack>
                        </Stack>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}