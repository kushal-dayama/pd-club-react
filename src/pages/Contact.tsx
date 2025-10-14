// src/pages/Contact.tsx
import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    FormHelperText,
    Alert,
    CircularProgress,
} from "@mui/material";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactFormValues {
    name: string;
    mobile: string;
    email: string;
    studentStatus: string;
    college: string;
    address: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const { control, handleSubmit, reset, watch } = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            mobile: "",
            email: "",
            studentStatus: "",
            college: "",
            address: "",
            subject: "",
            message: "",
        },
    });

    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const studentStatus = watch("studentStatus");

    const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        let emailSuccess = false;
        let sheetSuccess = false;

        try {
            // Prepare data for Google Sheets (PRIORITY - always save here first)
            const sheetData = {
                timestamp: new Date().toLocaleString(),
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                studentStatus: data.studentStatus === "yes" ? "Yes" : "No",
                college: data.studentStatus === "yes" ? data.college : "N/A",
                address: data.address || "Not provided",
                subject: data.subject,
                message: data.message,
            };

            const googleSheetUrl = "https://script.google.com/macros/s/AKfycbwYJTCtLJX4oz-vJ0B2Wib3EOTeqEnVSeuBdh0PS-7Uz9FI2CHLpg5uRMtrzXGme3Nb/exec"; // Replace with your Apps Script URL

            // Try to save to Google Sheets (always attempt this)
            try {
                await fetch(googleSheetUrl, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sheetData),
                });
                sheetSuccess = true;
                console.log("✅ Data saved to Google Sheets");
            } catch (sheetError) {
                console.error("❌ Google Sheets Error:", sheetError);
            }

            // Try to send email via EmailJS (might fail if limit exceeded)
            try {
                const serviceId = "service_bt8z9pc";
                const templateId = "template_2pw7bca";
                const publicKey = "iU_uXXSepuD7unNfQ";

                const templateParams = {
                    from_name: data.name,
                    from_email: data.email,
                    mobile: data.mobile,
                    student_status: data.studentStatus === "yes" ? "Yes" : "No",
                    college: data.studentStatus === "yes" ? data.college : "N/A",
                    address: data.address || "Not provided",
                    subject: data.subject,
                    message: data.message,
                };

                await emailjs.send(serviceId, templateId, templateParams, publicKey);
                emailSuccess = true;
                console.log("✅ Email sent via EmailJS");
            } catch (emailError) {
                console.error("❌ EmailJS Error (possibly limit exceeded):", emailError);
            }

            // Show success message based on what worked
            if (sheetSuccess || emailSuccess) {
                setSubmitStatus({
                    type: "success",
                    message: "Your message has been received successfully! We'll get back to you soon.",
                });
                reset();
            } else {
                throw new Error("Both submission methods failed");
            }
        } catch (error) {
            console.error("❌ Complete Submission Error:", error);
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again or contact us directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            sx={{
                p: { xs: 2, md: 5 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4, textAlign: "center" }}>
                If You Have Any Query, Please Feel Free to Contact Us
            </Typography>

            <Paper
                sx={{
                    p: { xs: 2, md: 4 },
                    width: { xs: "100%", md: "600px" },
                    backgroundColor: "background.paper",
                }}
                elevation={3}
            >
                {submitStatus.type && (
                    <Alert severity={submitStatus.type} sx={{ mb: 2 }} onClose={() => setSubmitStatus({ type: null, message: "" })}>
                        {submitStatus.message}
                    </Alert>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        {/* Name */}
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: "Name is required" }}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        label="Name"
                                        fullWidth
                                        required
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                        </Grid>

                        {/* Mobile */}
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="mobile"
                                control={control}
                                rules={{
                                    required: "Mobile number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit mobile number",
                                    },
                                }}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        label="Mobile"
                                        fullWidth
                                        required
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                        </Grid>

                        {/* Email */}
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Enter a valid email address",
                                    },
                                }}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        label="Email"
                                        fullWidth
                                        required
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                        </Grid>

                        {/* Student Status - Select Field */}
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Controller
                                name="studentStatus"
                                control={control}
                                rules={{ required: "Please select your student status" }}
                                render={({ field, fieldState }) => (
                                    <FormControl fullWidth error={!!fieldState.error} required disabled={isSubmitting}>
                                        <InputLabel id="student-status-label">Are you a student?</InputLabel>
                                        <Select {...field} labelId="student-status-label" label="Are you a student?">
                                            <MenuItem value="">
                                                <em>Select</em>
                                            </MenuItem>
                                            <MenuItem value="yes">Yes</MenuItem>
                                            <MenuItem value="no">No</MenuItem>
                                        </Select>
                                        {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
                                    </FormControl>
                                )}
                            />
                        </Grid>

                        {/* College Name - Only shown if student */}
                        {studentStatus === "yes" && (
                            <Grid size={{ xs: 12 }}>
                                <Controller
                                    name="college"
                                    control={control}
                                    rules={{
                                        required: studentStatus === "yes" ? "College name is required" : false,
                                    }}
                                    render={({ field, fieldState }) => (
                                        <TextField
                                            {...field}
                                            label="College Name"
                                            fullWidth
                                            required
                                            error={!!fieldState.error}
                                            helperText={fieldState.error?.message}
                                            disabled={isSubmitting}
                                        />
                                    )}
                                />
                            </Grid>
                        )}

                        {/* Address */}
                        <Grid size={{ xs: 12 }}>
                            <Controller
                                name="address"
                                control={control}
                                render={({ field }) => <TextField {...field} label="Address" fullWidth disabled={isSubmitting} />}
                            />
                        </Grid>

                        {/* Subject */}
                        <Grid size={{ xs: 12 }}>
                            <Controller
                                name="subject"
                                control={control}
                                rules={{ required: "Subject is required" }}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        label="Subject"
                                        fullWidth
                                        required
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                        </Grid>

                        {/* Message */}
                        <Grid size={{ xs: 12 }}>
                            <Controller
                                name="message"
                                control={control}
                                rules={{ required: "Message is required" }}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        label="Message"
                                        fullWidth
                                        required
                                        multiline
                                        minRows={4}
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message}
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export default Contact;
