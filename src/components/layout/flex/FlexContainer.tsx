import { useMemo } from "react";
import cm from "classnames";
import "./FlexContainer.scss";

interface IFlexContainerProps extends IStyles {
  children: React.ReactNode;
  className?: string;
}

interface IStyles {
  justifyContent?:
    | "center"
    | "left"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  id?: string;
  directionOnSmallScreen?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  flexWrap?: "nowrap" | "wrap";
}

export function FlexContainer(props: IFlexContainerProps) {
  const stylesObject = useMemo(() => {
    let objectToReturn = { display: "flex" } as IStyles;
    if (!!props.justifyContent) {
      objectToReturn.justifyContent = props.justifyContent;
    }
    if (!!props.flexDirection) {
      objectToReturn.flexDirection = props.flexDirection;
    }
    if (!!props.gap) {
      objectToReturn.gap = props.gap;
    }
    if (!!props.alignItems) {
      objectToReturn.alignItems = props.alignItems;
    }
    if (!!props.flexWrap) {
      objectToReturn.flexWrap = props.flexWrap;
    }

    return objectToReturn;
  }, [
    props.alignItems,
    props.flexDirection,
    props.gap,
    props.justifyContent,
    props.flexWrap,
  ]);

  const classObject = useMemo(() => {
    switch (props.directionOnSmallScreen) {
      case "column":
        return "flex-column-on-small";
      case "row":
        return "flex-row-on-small";
      case "column-reverse":
        return "flex-column-reverse-on-small";
      case "row-reverse":
        return "flex-row-reverse-on-small";
      default:
        return "";
    }
  }, [props.directionOnSmallScreen]);

  return (
    <div
      id={props.id}
      style={stylesObject}
      className={cm(props.className, classObject)}
    >
      {props.children}
    </div>
  );
}
