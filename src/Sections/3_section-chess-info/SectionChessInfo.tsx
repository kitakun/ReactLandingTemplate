import { FlexContainer } from "../../components/layout/flex/FlexContainer";
import "./SectionChessInfo.scss";
import Imag from "./5f975b5d-o-consultancy-services_0cs07n0cs07n000000001.png";
import { ISectionProps } from "../model";

export default function SectionChessInfo(props: ISectionProps) {
  return (
    <FlexContainer
      id={props.id}
      className="section-chess-info"
      flexDirection="column"
      justifyContent="space-between"
      gap="64px"
    >
      {/* Info 1 */}
      <FlexContainer
        gap="72px"
        flexDirection="row-reverse"
        justifyContent="space-around"
        directionOnSmallScreen="column"
      >
        <img className="our-img" alt="our img" src={Imag} />
        <FlexContainer
          className="chess-element"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <div className="title">TOOLKIT</div>
          <div className="title2">Our Services</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
            tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id lectus
            posuere nisi dignissim gravida at ac justo. Ut nec dui rutrum,
            cursus mauris sed integer eu vel.
          </div>
        </FlexContainer>
      </FlexContainer>
      {/* Info 2 */}
      <FlexContainer
        gap="72px"
        flexDirection="row"
        justifyContent="space-around"
        directionOnSmallScreen="column"
      >
        <img className="our-img" alt="our img" src={Imag} />
        <FlexContainer
          className="chess-element"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <div className="title">EXPERIENCE</div>
          <div className="title2">Our Process</div>
          <div className="text">
            Morbi egestas ultricies est. Proin eu odio nibh. Praesent venenatis
            mi vitae pharetra porttitor. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </div>
        </FlexContainer>
      </FlexContainer>
      {/* Info 3 */}
      <FlexContainer
        gap="72px"
        flexDirection="row-reverse"
        justifyContent="space-around"
        directionOnSmallScreen="column"
      >
        <img className="our-img" alt="our img" src={Imag} />
        <FlexContainer
          className="chess-element"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <div className="title">CLIENTS THAT LOVE US</div>
          <div className="title2">Many more</div>
          <div className="text">
            Red bull and Red bull and Red bull and Red bull and Red bull and Red
            bull and Red bull and Red bull and Red bull and Red bull and Red
            bull and Red bull and Red bull and Red bull.
          </div>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
