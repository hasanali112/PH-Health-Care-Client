import HeroSection from "@/components/Ui/Home/HeroSection/HeroSection";
import Specialist from "@/components/Ui/Home/Specialist/Specialist";
import TopRatedDoctors from "@/components/Ui/Home/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/Ui/Home/WhyUs/WhyUs";
import { Button } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
};

export default Homepage;
