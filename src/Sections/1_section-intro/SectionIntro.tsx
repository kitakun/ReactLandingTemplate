import { FlexContainer } from "../../components/layout/flex/FlexContainer";
import { ISectionProps } from "../model";
import "./SectionIntro.scss";

export default function SectionIntro(props: ISectionProps) {
  return (
    <FlexContainer
      id={props.id}
      className="section-intro"
      flexDirection="row-reverse"
      directionOnSmallScreen="column-reverse"
    >
      <FlexContainer
        className="left-bar-content"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <div className="title">Success starts with a great product</div>
        <div className="show-hide-animator">FIRM</div>
        <div className="content">
          Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
          Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
          posuere nibh lobortis et.
        </div>
      </FlexContainer>
      <FlexContainer
        className="side-content"
        justifyContent="center"
        flexDirection="row"
      >
        <FlexContainer justifyContent="center" flexDirection="column">
          <h2>content!</h2>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
