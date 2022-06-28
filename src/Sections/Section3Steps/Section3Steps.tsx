import { FlexContainer } from "../../components/flex/FlexContainer";
import "./Section3Steps.scss";
import icon1 from "./062ab54e-o-saas-benefit-icon-02.svg";
import icon2 from "./433a1368-o-saas-benefit-icon-03.svg";
import icon3 from "./ad2e7f73-o-saas-benefit-icon-01.svg";

interface IWowBlockProps {
  iconAddress: string;
  title: string;
  description: string;
}

function WowBlock(props: IWowBlockProps) {
  return (
    <FlexContainer flexDirection="column">
      <img alt="icon" src={props.iconAddress} />
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
    </FlexContainer>
  );
}

const features = [
  {
    iconAddress: icon1,
    title: "Understand every step of the way",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.",
  },
  {
    iconAddress: icon2,
    title: "Build faster with instant answers",
    description:
      "Lacinia condimentum lectus dolor viverra nunc. Mauris quis condimentum orci. Curabitur hendrerit, felis vitae.",
  },
  {
    iconAddress: icon3,
    title: "Unlock insights for everyone",
    description:
      "Curabitur quis purus congue ante interdum mattis sit amet at ante. Nulla volutpat, magna quis convallis tristique, purus mi sollicitudin sem.",
  },
] as IWowBlockProps[];

export default function Section3Steps() {
  return (
    <FlexContainer
      id="section-steps"
      className="section-3steps"
      flexDirection="row"
      justifyContent="space-around"
      directionOnSmallScreen="column"
      gap="32px"
    >
      {features.map((m) => (
        <WowBlock key={m.title} {...m} />
      ))}
    </FlexContainer>
  );
}
