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
  directionOnSmallScreen?: "row" | "column";
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

    return objectToReturn;
  }, [props.flexDirection, props.gap, props.justifyContent]);

  const classObject = useMemo(() => {
    switch (props.directionOnSmallScreen) {
      case "column":
        return "flex-column-on-small";
      case "row":
        return "flex-row-on-small";
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
