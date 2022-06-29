import "./BackgroundVideo.scss";

interface IBackgroundVideoProps {
  src: string;
  children: React.ReactNode;
}

export default function BackgroundVideo(props: IBackgroundVideoProps) {
  return (
    <div className="bg-video-layout">
      <div className="background-video">
        <video autoPlay={true} muted={true} loop={true} src={props.src} />
      </div>
      {!!props.children && <div className="content">{props.children}</div>}
    </div>
  );
}
