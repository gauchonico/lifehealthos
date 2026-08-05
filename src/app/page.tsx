import { client } from "@/sanity/client";
import { allSolutionsQuery } from "@/sanity/queries";
import HeroSection from "@/components/home/HeroSection";
import SolutionSelector from "@/components/home/SolutionSelector";
import FeaturedSolution from "@/components/home/FeaturedSolution";
import HowItWorks from "@/components/home/HowItWorks";
import WhyLifeHealth from "@/components/home/WhyLifeHealth";
import PlatformOverview from "@/components/home/PlatformOverview";
import DeploymentSection from "@/components/home/DeploymentSection";
import PricingIntro from "@/components/home/PricingIntro";
import TrustSection from "@/components/home/TrustSection";
import XValidatorFeature from "@/components/home/XValidatorFeature";
import TractionSection from "@/components/home/TractionSection";
import PartnersSection from "@/components/home/PartnersSection";
import LifeHealthTVSection from "@/components/home/LifeHealthTVSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import CTABanner from "@/components/shared/CTABanner";

export default async function Home() {
  const solutions = await client.fetch(allSolutionsQuery);

  return (
    <>
      <HeroSection />
      <SolutionSelector solutions={solutions} />
      <FeaturedSolution />
      <HowItWorks />
      <XValidatorFeature />
      <WhyLifeHealth />
      <PlatformOverview />
      <DeploymentSection />
      <PricingIntro />
      <TractionSection />
      <PartnersSection />
      <TrustSection />
      <LifeHealthTVSection />
      <ResourcesSection />
      <CTABanner />
    </>
  );
}
