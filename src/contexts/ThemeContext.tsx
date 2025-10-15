import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getTheme } from "../theme/theme";

interface ThemeContextType {
    toggleTheme: () => void;
    mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    mode: "dark",
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<"light" | "dark">(() => {
        const saved = localStorage.getItem("theme-mode");
        return (saved as "light" | "dark") || "dark";
    });

    const toggleTheme = () => {
        setMode((prev) => {
            const newMode = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme-mode", newMode);
            return newMode;
        });
    };

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
