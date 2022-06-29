import cm from "classnames";
import Button from "../../layout/button/Button";
import { FlexContainer } from "../../layout/flex/FlexContainer";
import Title from "../title/Title";
import "./ListOfBlocks.scss";
import { IBlockElement } from "./ListOfBlocksModel";

interface IListOfBlocksProps {
  title?: string;
  subTitle?: string;
  className?: string;
  blocks?: IBlockElement[];
}

export default function ListOfBlocks(props: IListOfBlocksProps) {
  return (
    <div className={cm("list-of-blocks-control", props.className)}>
      <Title title={props.title} subTitle={props.subTitle} />
      {props.blocks && props.blocks.length && (
        <FlexContainer
          flexDirection="row"
          gap="28px"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {props.blocks.map((m, i) => (
            <ListElement key={`${m.icon}_${i}`} element={m} />
          ))}
        </FlexContainer>
      )}
    </div>
  );
}

interface IListElementProps {
  element: IBlockElement;
}

function ListElement(props: IListElementProps) {
  return (
    <FlexContainer
      className="element"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      {props.element.icon && <img alt="firm img" src={props.element.icon} />}
      {props.element.title && (
        <p className="element-title">{props.element.title}</p>
      )}
      {props.element.description && <p>{props.element.description}</p>}
      {(props.element.siteUrl || props.element.twitterUrl) && (
        <FlexContainer className="links-group">
          <Button>Site</Button>
          <Button>Twitter</Button>
        </FlexContainer>
      )}
    </FlexContainer>
  );
}
