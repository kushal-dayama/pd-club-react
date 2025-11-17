import { useState } from "react";
import { TextField, Button, Paper, Typography, CircularProgress, Box, Fade } from "@mui/material";
import { useForm } from "react-hook-form";

import type { CertificateVerificationFailureResponse, CertificateVerificationSuccessResponse } from "../interfaces";

type FormValues = {
    certificateId: string;
};

export default function CertificateVerifier() {
    const [data, setData] = useState<CertificateVerificationFailureResponse | CertificateVerificationSuccessResponse | null>(null);

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    }

    async function verifyCertificate(id: string) {
        const url = `https://script.google.com/macros/s/AKfycbwB40ICID3FGAeyLtXW10dquz67_5FSxuVap7cp7tzbhO-Zp1TQgiORLpRlFmSu8T4j-A/exec?id=${id}`;
        const res = await fetch(url);
        return res.json();
    }

    const onSubmit = async (values: FormValues) => {
        setLoading(true);
        const result = await verifyCertificate(values.certificateId);
        setData(result);
        setLoading(false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    width: "100%",
                    maxWidth: 500,
                    padding: 4,
                    borderRadius: 4,
                    backdropFilter: "blur(10px)",
                    textAlign: "center",
                }}
            >
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Verify Certificate
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Enter your Certificate ID to verify its authenticity
                </Typography>

                {/* FORM START */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Certificate ID"
                        required
                        fullWidth
                        variant="outlined"
                        {...register("certificateId", { required: "Certificate ID is required" })}
                        error={!!errors.certificateId}
                        helperText={errors.certificateId?.message}
                        sx={{ mb: 3 }}
                    />

                    <Button variant="contained" fullWidth size="large" type="submit" disabled={loading} sx={{ py: 1.2, borderRadius: 2 }}>
                        {loading ? <CircularProgress size={26} /> : "Verify Now"}
                    </Button>
                </form>
                {/* FORM END */}

                <Fade in={!!data}>
                    <Box mt={4}>
                        {data?.valid ? (
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    border: "1px solid #c8e6c9",
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" color="success.main" gutterBottom>
                                    ✔ Certificate Verified
                                </Typography>

                                <Typography>
                                    <b>Name:</b> {data.studentName}
                                </Typography>
                                <Typography>
                                    <b>College Name:</b> {data.collegeName}
                                </Typography>
                                <Typography>
                                    <b>Course Name:</b> {data.courseName}
                                </Typography>
                                <Typography>
                                    <b>Course Date:</b> {formatDate(data.courseDate)}
                                </Typography>
                            </Paper>
                        ) : data ? (
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    backgroundColor: "#ffebee",
                                    border: "1px solid #ffcdd2",
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" color="error.main">
                                    ✘ Invalid Certificate ID
                                </Typography>
                            </Paper>
                        ) : null}
                    </Box>
                </Fade>
            </Paper>
        </Box>
    );
}
