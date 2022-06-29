import "./Title.scss";

interface ITitleProps {
  title?: string;
  subTitle?: string;
}

export default function Title(props: ITitleProps) {
  return (
    <div className="title-component">
      {props.title && <h2 className="title">{props.title}</h2>}
      {props.subTitle && <h3 className="subTitle">{props.subTitle}</h3>}
    </div>
  );
}
