import React from "react";
import { Container, Grid, Paper, Box, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EditIcon from "@mui/icons-material/Edit";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
        title: "Focus",
        description: "PD Club offerings are Engaging, Motivating & Thought Provoking to bring lasting desired results.",
    },
    {
        icon: <WbSunnyIcon sx={{ fontSize: 40 }} />,
        title: "Mindset",
        description: "The sessions are aimed to build Progressive Mindset through powerful time-tested methods.",
    },
    {
        icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
        title: "Futuristic",
        description: "PD Club prepares individual and organisation to overcome future challenges in personal and career growth.",
    },
    {
        icon: <EditIcon sx={{ fontSize: 40 }} />,
        title: "Result",
        description: "Finally, Our courses bring in a sense of satisfaction and a surge of confidence which helps the individuals in a long run.",
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <Container maxWidth="xl" sx={{ my: 8 }}>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid size={{xs: 12, md: 6}} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                gap: 3,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    bgcolor: "primary.light",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "primary.contrastText",
                                    flexShrink: 0,
                                }}
                            >
                                {feature.icon}
                            </Box>
                            <Box>
                                <Typography variant="h5" gutterBottom>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FeaturesSection;
