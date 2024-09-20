import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import whyUs from "@/assets/choose-us.png";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.care,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.equipment,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.call,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Box>
          <Typography
            color="primary"
            variant="h5"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2} my={5} alignItems="center">
          <Grid item md={6} gap={3}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                background: "rgba(245, 245, 245, 1)",
                padding: "30px 20px",
                borderRadius: "15px 15px 100px 15px",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[0].imageSrc}
                  alt="service image"
                  width={50}
                  height={50}
                />
              </Box>
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="h5" component="h1" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                background: "rgba(245, 245, 245, 1)",
                padding: "30px 20px",
                borderRadius: "15px 100px 15px 15px",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[1].imageSrc}
                  alt="service image"
                  width={50}
                  height={50}
                />
              </Box>
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="h5" component="h1" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                background: "rgba(245, 245, 245, 1)",
                padding: "30px 20px",
                borderRadius: "15px 15px 100px 15px",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[2].imageSrc}
                  alt="service image"
                  width={50}
                  height={50}
                />
              </Box>
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="h5" component="h1" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                background: "rgba(245, 245, 245, 1)",
                padding: "30px 20px",
                borderRadius: "15px 100px 15px 15px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[3].imageSrc}
                  alt="service image"
                  width={50}
                  height={50}
                />
              </Box>
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="h5" component="h1" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
              }}
            >
              <Image src={whyUs} alt="service" width={450} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
