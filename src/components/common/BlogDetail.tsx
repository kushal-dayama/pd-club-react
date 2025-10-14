import { Box, Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

interface BlogDetailProps {
    title: string;
    author: string;
    date: string;
    image?: string;
    content: Array<
        | { type: "paragraph"; text: string }
        | { type: "list"; items: string[] }
        | {
              type: "heading";
              text: string;
              variant?:
                  | "h1"
                  | "h2"
                  | "h3"
                  | "h4"
                  | "h5"
                  | "h6"
                  | "subtitle1"
                  | "subtitle2"
                  | "body1"
                  | "body2"
                  | "caption"
                  | "button"
                  | "overline"
                  | "inherit";
          }
        | { type: "divider" }
        | { type: "quote"; text: string }
    >;
}

export default function BlogDetail({ title, author, date, image, content }: BlogDetailProps) {
    return (
        <Box sx={{ py: 10, backgroundColor: "background.default" }}>
            <Container maxWidth="md">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    {/* Title */}
                    <Typography variant="h3" fontWeight={700} textAlign="center" mb={2} color="text.primary">
                        {title}
                    </Typography>

                    {/* Author and Date */}
                    <Typography variant="subtitle2" textAlign="center" mb={5} color="text.secondary">
                        By {author} | {date}
                    </Typography>

                    {/* Image */}
                    {image && (
                        <Box
                            component="img"
                            src={image}
                            alt={title}
                            sx={{ width: "100%", maxHeight: 400, objectFit: "contain", mb: 4, borderRadius: 2 }}
                        />
                    )}

                    {/* Content */}
                    <Box sx={{ textAlign: "justify" }}>
                        {content.map((block, index) => {
                            if (block.type === "paragraph") {
                                return (
                                    <Typography key={index} variant="body1" sx={{ mb: 3 }}>
                                        {block.text}
                                    </Typography>
                                );
                            }
                            if (block.type === "list") {
                                return (
                                    <ul key={index} style={{ marginLeft: "20px", marginBottom: "16px" }}>
                                        {block.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            if (block.type === "heading") {
                                return (
                                    <Typography key={index} variant={block.variant ? block.variant : "h5"} fontWeight={600} sx={{ mb: 2 }}>
                                        {block.text}
                                    </Typography>
                                );
                            }
                            if (block.type === "divider") {
                                return <Divider key={index} sx={{ my: 4 }} />;
                            }
                            if (block.type === "quote") {
                                return (
                                    <Typography
                                        key={index}
                                        variant="h6"
                                        fontWeight={600}
                                        textAlign="center"
                                        mt={6}
                                        mb={6}
                                        color="primary"
                                        sx={{ fontStyle: "italic" }}
                                    >
                                        {block.text}
                                    </Typography>
                                );
                            }
                            return null;
                        })}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
