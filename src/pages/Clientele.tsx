import React from "react";
import { Container, Typography, Grid, Card, CardMedia, Box } from "@mui/material";
import { clients } from "../constants/clientele-details";

const Clientele: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box textAlign="center" mb={6}>
                <Typography variant="h5" color="primary" gutterBottom>
                    Our Clientele
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Where we have offered seminars
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {clients.map((client, index) => (
                    <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                        <Card
                            sx={{
                                p: 2,
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: 4,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={client.logo}
                                alt={client.name}
                                sx={{
                                    height: 80,
                                    objectFit: "contain",
                                    mb: 2,
                                }}
                            />
                            <Typography variant="body2" textAlign="center">
                                {client.name}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Clientele;
