import { useMemo } from "react";
import { FlexContainer } from "../flex/FlexContainer";
import Button from "../button/Button";
import "./Header.scss";

const scrollTo = (elementId: string) => {
  (document as any)
    .getElementById(elementId)
    .scrollIntoView({ block: "start", behavior: "smooth" });
  (document as any).getElementById("hamburger-toggler").checked = false;
};

export interface IHeaderNavElement {
  title: string;
  id: string;
}

interface IHeaderProps {
  elements: IHeaderNavElement[];
}

export default function Header(props: IHeaderProps) {
  const navButtons = useMemo(() => {
    return (
      props.elements &&
      props.elements.length &&
      props.elements.map((m) => (
        <Button key={m.id} variant={2} onClick={() => scrollTo(m.id)}>
          {m.title}
        </Button>
      ))
    );
  }, [props.elements]);

  return (
    <div className="lp-header-layout">
      <div className="menu-toggle">
        <input id="hamburger-toggler" type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          <FlexContainer className="hamburger" flexDirection="column">
            {navButtons}
          </FlexContainer>
        </ul>
      </div>

      <FlexContainer
        className="lp-header"
        flexDirection="row-reverse"
        justifyContent="space-between"
      >
        <div className="show-on-small-devices"></div>
        <FlexContainer className="hide-on-small-devices">
          {navButtons}
        </FlexContainer>

        <Button
          className="hide-on-small-devices"
          onClick={() => alert("ok is ok")}
        >
          Ok
        </Button>
      </FlexContainer>
    </div>
  );
}
