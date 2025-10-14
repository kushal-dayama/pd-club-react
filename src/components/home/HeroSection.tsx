import React from "react";
import { Box, Container, Typography } from "@mui/material";

const HeroSection: React.FC = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: 400, md: 850 },
                backgroundImage: "url(/img/carousel-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                },
            }}
        >
            <Container
                sx={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                    }}
                >
                    Your Bright Future is Our Mission
                </Typography>
            </Container>
        </Box>
    );
};

export default HeroSection;
