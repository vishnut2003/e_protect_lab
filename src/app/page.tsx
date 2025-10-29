import HeroSection from "./(sections)/hero-section";
import OurServices from "./(sections)/our-services";
import ParallelScrollStrap from "./(sections)/parellel-scroll-strap";
import TrustedCompaniesSection from "./(sections)/trusted-companies-section";
import WhoWeAre from "./(sections)/who-we-are";
import WhyChooseUs from "./(sections)/why-choose-us";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <TrustedCompaniesSection/>
      <OurServices/>
      <WhoWeAre/>
      <ParallelScrollStrap/>
      <WhyChooseUs/>
    </div>
  );
}
