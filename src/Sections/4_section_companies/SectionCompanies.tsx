import redBull from "../../content/c2337b01-horizons-powerbull.svg";
import { FlexContainer } from "../../components/layout/flex/FlexContainer";
import "./SectionCompanies.scss";
import Title from "../../components/landing/title/Title";
import BackgroundVideo from "../6_section-our-projects/BackgroundVideo";
import vid1 from "../6_section-our-projects/mid.mp4";
import Lswipper from "../../components/landing/swipper/Lswipper";
import { ISectionProps } from "../model";

const partnersDescription =
  "Being in the crypto space for a while now, we have developed partnerships with the top launchpads, Tier 1 and Tier 2 CEX, audit firms, tech companies, marketing/media companies.";

export default function SectionCompanies(props: ISectionProps) {
  return (
    <BackgroundVideo src={vid1}>
      <FlexContainer
        id={props.id}
        className="section-companies"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Title title="Our partners" subTitle={partnersDescription} />

        <Lswipper
          className="partner-swipper"
          elements={[
            <img className="partner-image" alt="red bull icon" src={redBull} />,
            <img className="partner-image" alt="red bull icon" src={redBull} />,
            <img className="partner-image" alt="red bull icon" src={redBull} />,
            <img className="partner-image" alt="red bull icon" src={redBull} />,
            <img className="partner-image" alt="red bull icon" src={redBull} />,
          ]}
        />
      </FlexContainer>
    </BackgroundVideo>
  );
}
