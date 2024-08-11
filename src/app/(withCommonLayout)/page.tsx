import HeroSection from "@/components/Ui/Home/HeroSection/HeroSection";
import Specialist from "@/components/Ui/Home/Specialist/Specialist";
import TopRatedDoctors from "@/components/Ui/Home/TopRatedDoctors/TopRatedDoctors";
import { Button } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
    </>
  );
};

export default Homepage;
