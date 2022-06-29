import { FlexContainer } from "../../components/layout/flex/FlexContainer";
import "./SectionFooter.scss";

export default function Footer() {
  return (
    <FlexContainer
      className="footer"
      flexDirection="column"
      justifyContent="center"
    >
      Copyright © All rights reserved {new Date().getFullYear()}.
    </FlexContainer>
  );
}
