import { Page } from "@ui";
import * as Content from "./content";

export default function Home() {
  return (
    <Page>
      <Content.GpsTrackerCover />
      <Content.GpsTrackerFeatures />
      <Content.OnboardAppPromotion />
      <Content.MissionPromotion />
      <Content.PartnersPromotion />
      <Content.OnboardDsPromotion />
      <Content.OnboardSodkPromotion />
      <Content.ZeaeyeFeatures />
    </Page>
  );
}
