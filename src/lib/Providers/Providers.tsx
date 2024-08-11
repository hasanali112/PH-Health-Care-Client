"use client";

import { ReactNode } from "react";
import { theme } from "../theme/theme";
import { ThemeProvider } from "@mui/material";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

export default Providers;
