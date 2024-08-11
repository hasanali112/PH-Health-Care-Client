import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import grid from "@/assets/svgs/grid.svg";
import arrow from "@/assets/svgs/arrow.svg";
import doctor1 from "@/assets/images/doctor1.png";
import doctor2 from "@/assets/images/doctor2.png";
import doctor3 from "@/assets/images/doctor3.png";
import stethoscope from "@/assets/images/Stetoscope.png";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Comes From
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="primary.main"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            marginTop: "10px",
          }}
          color="gray"
        >
          We believe in a holistic approach that addresses both physical and
          mental health, ensuring that every patient receives personalized
          treatment tailored to their unique needs.
        </Typography>
        <Box sx={{ marginTop: "30px", display: "flex", gap: 2 }}>
          <Button>MAKE APPOINMENT</Button>
          <Button variant="outlined">CONTACT US</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "180px",
            top: "-30px",
          }}
        >
          <Image src={arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image src={doctor1} alt="doctor1" width={240} height={380} />
          </Box>
          <Box>
            <Image src={doctor2} alt="doctor2" width={240} height={380} />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "120px",
            top: "220px",
          }}
        >
          <Image src={doctor3} alt="doctor3" width={240} height={240} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-53px",
            right: -32,
            zIndex: -1,
          }}
        >
          <Image src={stethoscope} alt="doctor3" width={180} height={180} />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
