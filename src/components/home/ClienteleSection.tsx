import React from "react";
import { Box, Container, Typography } from "@mui/material";

// import {Grid, Card, CardContent, CardMedia } from "@mui/material";
// import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { clients } from "../../constants/clientele-details";

const ClienteleSection: React.FC = () => {
    return (
        <Box sx={{ bgcolor: "background.paper", py: 8, mt: 4 }}>
            <Container maxWidth="lg">
                {/* Section Heading */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                        Our Clientele
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: "text.primary" }}>
                        Where We Have Offered Seminars
                    </Typography>
                </Box>

                {/* Client Logos Grid */}
                {/* <Grid container spacing={4} justifyContent="center">
                    {clients.map((client, index) => (
                        <Grid
                            size={{ xs: 6, sm: 4, md: 3 }}
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                elevation={3}
                                sx={{
                                    textAlign: "center",
                                    p: 2,
                                    borderRadius: 2,
                                    height: "100%",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={client.logo}
                                    alt={client.name}
                                    sx={{
                                        maxWidth: 100,
                                        mx: "auto",
                                        mb: 2,
                                        objectFit: "contain",
                                        height: 80,
                                    }}
                                />
                                <CardContent sx={{ pt: 0 }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 600,
                                            color: "text.primary",
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {client.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid> */}

                <Marquee gradient={false} speed={50}>
                    {clients.map((client, i) => (
                        <Box key={i} sx={{ mx: 4 }}>
                            <Box component="img" src={client.logo} alt={client.name} sx={{ height: 60 }} />
                        </Box>
                    ))}
                </Marquee>
            </Container>
        </Box>
    );
};

export default ClienteleSection;
