import { useMemo } from "react";

interface IEmptyHeightProps {
  height: number;
  color: string;
}

export function EmptyHeight(props: IEmptyHeightProps) {
  const styleObject = useMemo(() => {
    return {
      height: props.height,
      backgroundColor: props.color,
    } as React.CSSProperties;
  }, [props.color, props.height]);

  return <div style={styleObject}></div>;
}
