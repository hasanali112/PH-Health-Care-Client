import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography component={Link} href="/" color="#fff">
            Consultancy
          </Typography>
          <Typography component={Link} href="/" color="#fff">
            Health Plans
          </Typography>
          <Typography component={Link} href="/" color="#fff">
            Medicine
          </Typography>
          <Typography component={Link} href="/" color="#fff">
            Diagonstics
          </Typography>
          <Typography component={Link} href="/" color="#fff">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Image src={facebook} alt="facebook" width={30} height={30} />
          <Image src={facebook} alt="facebook" width={30} height={30} />
          <Image src={facebook} alt="facebook" width={30} height={30} />
          <Image src={facebook} alt="facebook" width={30} height={30} />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-around"
          gap={2}
          py={3}
          alignItems="center"
        >
          <Typography component="p" color="#fff">
            &copy;2024 Ph HealthCare. All Rights Reservered
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="#fff">
            Privacy Policy! Terms and Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
