import HeroSection from "./(sections)/hero-section";
import OurServices from "./(sections)/our-services";
import TrustedCompaniesSection from "./(sections)/trusted-companies-section";
import WhoWeAre from "./(sections)/who-we-are";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <TrustedCompaniesSection/>
      <OurServices/>
      <WhoWeAre/>
    </div>
  );
}
