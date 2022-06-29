import "./SectionOurProjects.scss";
import ListOfBlocks from "../../components/landing/list-of-blocks/ListOfBlocks";
import { IBlockElement } from "../../components/landing/list-of-blocks/ListOfBlocksModel";
import image1 from "./PF-150x150.png";
import vid1 from "./mid.mp4";
import BackgroundVideo from "./BackgroundVideo";
import { ISectionProps } from "../model";

interface ISectionOurProjectsProps extends ISectionProps {
  title?: string;
}

const data = [
  {
    icon: image1,
    description: `Prizefighter is a play-to-earn boxing game built on Blockchain.
        Players can battle, join tournaments, refer a friend, and stake tokens to earn FTs and NFTs.`,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    description: `A metaverse multiplatform (IOS, Android, PC, and VR) multiplayer online game that runs on the blockchain & provides opportunity to Wander around real-life cities.`,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    description: `We unite investors, guilds, and game developers by providing better tools to navigate efficiently through the metaverse.`,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    description: `Play-to-earn NFT gaming guild where players earn in the metaverse. Multi strategy build to maximise yield. Algorithms for autofarm and autoswitch.`,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    description: `Fundraising and Trading Platform on Oasis.
    Early project backing for everyone in the blockchain industry.`,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
] as IBlockElement[];

export default function SectionOurProjects(props: ISectionOurProjectsProps) {
  return (
    <div className="layout-our-projects" id={props.id}>
      <BackgroundVideo src={vid1}>
        <ListOfBlocks
          className="section-our-projects"
          title={props.title}
          blocks={data}
        />
      </BackgroundVideo>
    </div>
  );
}
