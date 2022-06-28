import { FlexContainer } from "../../components/flex/FlexContainer";
import "./SectionIntro.scss";

export default function SectionIntro() {
  return (
    <FlexContainer id="section-intro" className="section-intro">
      <FlexContainer className="left-bar-content" flexDirection="column" justifyContent="center">
        <div className="title">Success starts with a great product</div>
        <div className="content">
          Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
          Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
          posuere nibh lobortis et.
        </div>
      </FlexContainer>
      <div className="side-content">Images!</div>
    </FlexContainer>
  );
}
