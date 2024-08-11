import { Box, Typography } from "@mui/material";
import React from "react";

const TopRatedDoctors = () => {
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight={600}>
          Our Top Rated Doctor
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          Access to expart physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          and top-quality surgury facilities right here
        </Typography>
      </Box>
    </Box>
  );
};

export default TopRatedDoctors;
