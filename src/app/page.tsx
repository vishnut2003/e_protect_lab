import HeroSection from "./(sections)/hero-section";
import OurServices from "./(sections)/our-services";
import TrustedCompaniesSection from "./(sections)/trusted-companies-section";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <TrustedCompaniesSection/>
      <OurServices/>
    </div>
  );
}
