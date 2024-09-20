import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "60px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Expore Treatments Across Specialist
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Experience Doctors Across All Specialist
          </Typography>
        </Box>
        <Stack
          direction={{
            xl: "row",
            lg: "row",
            md: "row",
            sm: "row",
            xs: "column",
          }}
          gap={4}
          mt={5}
        >
          {specialties.map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                padding: "40px 10px",
                textAlign: "center",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  padding: "40px 10px",
                },
              }}
            >
              <Image
                src={specialty.icon}
                alt="specialty Icon"
                width={100}
                height={100}
              />
              <Typography component="p" fontWeight={300} fontSize={18}>
                {specialty.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Button variant="outlined" sx={{ marginTop: "30px" }}>
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
