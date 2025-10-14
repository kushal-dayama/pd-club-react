import { Box, Container, Typography, Card, CardContent, Avatar, IconButton, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react"; // 🆕 added useRef
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { testimonials } from "../../constants/testimonials";

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null); // 🆕 fixed type

    // 🆕 Function to start or restart autoplay
    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
    };

    // Auto change every 6 seconds
    useEffect(() => {
        startAutoPlay(); // 🆕 start autoplay initially
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current); // 🆕 cleanup
        };
    }, []);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        startAutoPlay(); // 🆕 reset timer
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        startAutoPlay(); // 🆕 reset timer
    };

    const handleDotClick = (i: number) => {
        setIndex(i);
        startAutoPlay(); // 🆕 reset timer
    };

    const t = testimonials[index];

    return (
        <Box sx={{ pb: 10, backgroundColor: "background.default", position: "relative", overflow: "hidden" }}>
            <Container maxWidth="md" sx={{ textAlign: "center", position: "relative" }}>
                {/* Section Title */}
                <Typography variant="h6" color="primary" fontWeight="bold">
                    Testimonial
                </Typography>
                <Typography variant="h3" fontWeight={700} mb={5}>
                    What our Alumni Say About Us!
                </Typography>

                {/* Testimonial Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                boxShadow: 4,
                                maxWidth: 600,
                                mx: "auto",
                                background: (theme) =>
                                    theme.palette.mode === "light"
                                        ? "linear-gradient(135deg, #ffffff 0%, #f3f6f9 100%)"
                                        : "linear-gradient(135deg, #1e1e1e 0%, #2b2b2b 100%)",
                            }}
                        >
                            <Avatar
                                src={t.img}
                                alt={t.name}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    mx: "auto",
                                    mb: 2,
                                    border: "3px solid",
                                    borderColor: "primary.main",
                                }}
                            />
                            <CardContent>
                                <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
                                    “{t.quote}”
                                </Typography>
                                <Typography variant="h6">{t.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {t.company}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
                    <IconButton
                        color="primary"
                        onClick={handlePrev}
                        sx={{
                            border: "2px solid",
                            borderColor: "primary.main",
                            "&:hover": { backgroundColor: "primary.main", color: "white" },
                        }}
                    >
                        <ArrowBackIosNew />
                    </IconButton>

                    <IconButton
                        color="primary"
                        onClick={handleNext}
                        sx={{
                            border: "2px solid",
                            borderColor: "primary.main",
                            "&:hover": { backgroundColor: "primary.main", color: "white" },
                        }}
                    >
                        <ArrowForwardIos />
                    </IconButton>
                </Stack>

                {/* Dots Indicator */}
                <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
                    {testimonials.map((_, i) => (
                        <Box
                            key={i}
                            onClick={() => handleDotClick(i)} // 🆕 now uses new handler
                            sx={{
                                width: index === i ? 16 : 10,
                                height: index === i ? 16 : 10,
                                borderRadius: "50%",
                                bgcolor: index === i ? "primary.main" : "grey.400",
                                cursor: "pointer",
                                transition: "all 0.3s",
                            }}
                        />
                    ))}
                </Stack>

                {/* All your commented-out variations remain unchanged below */}

                {/* <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: 40,
                        transform: "translateY(-50%)",
                        backdropFilter: "blur(8px)",
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "white",
                        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                        "&:hover": { background: "rgba(255,255,255,0.3)" },
                    }}
                >
                    <ArrowBackIosNew fontSize="small" />
                </IconButton>

                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: 40,
                        transform: "translateY(-50%)",
                        backdropFilter: "blur(8px)",
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "white",
                        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                        "&:hover": { background: "rgba(255,255,255,0.3)" },
                    }}
                >
                    <ArrowForwardIos fontSize="small" />
                </IconButton> */}

                {/* ... other commented blocks remain unchanged ... */}
            </Container>
        </Box>
    );
}
