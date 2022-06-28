import { FlexContainer } from "../../components/flex/FlexContainer";
import Button from "../button/Button";
import "./Header.scss";

const scrollTo = (elementId: string) => {
  (document as any)
    .getElementById(elementId)
    .scrollIntoView({ block: "start", behavior: "smooth" });
  (document as any).getElementById("hamburger-toggler").checked = false;
};

const scrollTo_Welcome = () => scrollTo("section-intro");
const scrollTo_Steps = () => scrollTo("section-steps");
const scrollTo_OutServices = () => scrollTo("section-our-services");
const scrollTo_Companies = () => scrollTo("section-companies");
const scrollTo_Form = () => scrollTo("section-contact-form");

export default function Header() {
  return (
    <>
      <div className="menu-toggle">
        <input id="hamburger-toggler" type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          <FlexContainer className="hamburger" flexDirection="column">
            <Button variant={2} onClick={scrollTo_Welcome}>
              Welcome
            </Button>
            <Button variant={2} onClick={scrollTo_Steps}>
              Steps
            </Button>
            <Button variant={2} onClick={scrollTo_OutServices}>
              Our Services
            </Button>
            <Button variant={2} onClick={scrollTo_Companies}>
              Our Partners
            </Button>
            <Button variant={2} onClick={scrollTo_Form}>
              Contact
            </Button>
          </FlexContainer>
        </ul>
      </div>

      <FlexContainer
        className="lp-header"
        flexDirection="row"
        justifyContent="space-between"
      >
        <div className="show-on-small-devices"></div>
        <FlexContainer className="hide-on-small-devices">
          <Button variant={2} onClick={scrollTo_Welcome}>
            Welcome
          </Button>
          <Button variant={2} onClick={scrollTo_Steps}>
            Steps
          </Button>
          <Button variant={2} onClick={scrollTo_OutServices}>
            Our Services
          </Button>
          <Button variant={2} onClick={scrollTo_Companies}>
            Our Partners
          </Button>
          <Button variant={2} onClick={scrollTo_Form}>
            Contact
          </Button>
        </FlexContainer>

        <Button onClick={() => alert("ok is ok")}>Ok</Button>
      </FlexContainer>
    </>
  );
}
