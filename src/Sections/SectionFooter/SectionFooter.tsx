import { FlexContainer } from "../../components/flex/FlexContainer";
import "./SectionFooter.scss";

export default function Footer() {
  return (
    <FlexContainer
      className="footer"
      flexDirection="column"
      justifyContent="center"
    >
      All rights reserved {new Date().getFullYear()}.
    </FlexContainer>
  );
}
