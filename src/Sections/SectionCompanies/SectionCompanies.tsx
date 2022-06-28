import redBull from "../../content/c2337b01-horizons-powerbull.svg";
import { FlexContainer } from "../../components/flex/FlexContainer";
import "./SectionCompanies.scss";

export default function SectionCompanies() {
  return (
    <FlexContainer id="section-companies" className="section-companies" flexDirection="column" justifyContent="space-between">
      <div className="title">OUR PARTNERS</div>
      <FlexContainer flexDirection="row" directionOnSmallScreen="column" justifyContent="space-around">
        <img className="partner-image" alt="red bull icon" src={redBull} />
        <img className="partner-image" alt="red bull icon" src={redBull} />
        <img className="partner-image" alt="red bull icon" src={redBull} />
      </FlexContainer>
    </FlexContainer>
  );
}
