import { Page } from "@ui";
import {
  GpsTrackerCover,
  GpsTrackerFeatures,
  GpsTrackerGetStarted,
  GpsTrackerHeader,
  GpsTrackerMap,
  GpsTrackerPromotion,
  OnboardAppPromotion,
  OnboardSodkPromotion,
} from "./content";

export default function ProductGPSTrackerPage() {
  return (
    <Page>
      <GpsTrackerHeader />
      <GpsTrackerCover />
      <GpsTrackerMap />
      <GpsTrackerFeatures />
      <GpsTrackerPromotion />
      <GpsTrackerGetStarted />
      <OnboardAppPromotion />
      <OnboardSodkPromotion />
    </Page>
  );
}
