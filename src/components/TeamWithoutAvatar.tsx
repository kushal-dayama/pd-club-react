import { Box, Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { teamMembers } from "../constants/team-memebers";

export default function TeamWithoutAvatar() {
    return (
        <Box sx={{ py: 10, backgroundColor: "background.default" }}>
            <Container maxWidth="xl">
                <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
                    Our Team
                </Typography>

                <Typography variant="h6" color="primary" textAlign="center" mb={6} sx={{ maxWidth: 800, mx: "auto" }}>
                    All our courses are designed, developed and delivered by experienced faculties and industry professionals.
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {teamMembers.map((member, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    sx={{
                                        p: 4,
                                        borderRadius: 3,
                                        textAlign: "center",
                                        height: 200,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        boxShadow: 2,
                                        transition: "0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography variant="h5" fontWeight={700}>
                                            {member.name}
                                        </Typography>

                                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1, fontSize: "0.95rem" }}>
                                            {member.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
