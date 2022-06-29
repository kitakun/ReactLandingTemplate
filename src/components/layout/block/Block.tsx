import { useMemo } from "react";
import "./Block.scss";

interface IBlockProps {
  children: React.ReactNode;
  background?: string;
  topOffset?: number;
  width?: string;
  borderRadius?: number;
  borderBottom?: string;
}

export default function Block(props: IBlockProps) {
  const stylesObject = useMemo(() => {
    let stylesObject = {
      background: !!props.background ? props.background : "transparent",
    } as React.CSSProperties;

    if (!!props.topOffset) {
      stylesObject.position = "relative";
      stylesObject.top = `-${props.topOffset}px`;
      stylesObject.margin = `-${props.topOffset}px auto`;
    }

    if (!!props.width) {
      stylesObject.width = props.width;
    }

    if (!!props.borderRadius) {
      stylesObject.borderRadius = `${props.borderRadius}px`;
    }

    if (!!props.borderBottom) {
      stylesObject.borderBottom = props.borderBottom;
    }

    return stylesObject;
  }, [
    props.background,
    props.borderBottom,
    props.borderRadius,
    props.topOffset,
    props.width,
  ]);

  return <section style={stylesObject}>{props.children}</section>;
}
