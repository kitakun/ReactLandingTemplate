import "./SectionOurInvestors.scss";
import ListOfBlocks from "../../components/landing/list-of-blocks/ListOfBlocks";
import { IBlockElement } from "../../components/landing/list-of-blocks/ListOfBlocksModel";
import image1 from "../6_section-our-projects/PF-150x150.png";
import vid1 from "../6_section-our-projects/mid.mp4";
import BackgroundVideo from "../6_section-our-projects/BackgroundVideo";
import { ISectionProps } from "../model";

interface ISectionOurProjectsProps extends ISectionProps {
  title?: string;
}

const data = [
  {
    icon: image1,
    title: "GameFi",
    description: `Sidus Heroes is a futuristic play-to-earn NFT MMORPG with an amazing blockchain journey full of adventures and opportunities. It features a large number of experts from various domains – blockchain, DeFi, game development and NFT art. `,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    title: "GameFi",
    description: `Blocklord is an immersive multiplayer experience and strategy game enabling players to craft unique adventures within a shared medieval universe.`,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    title: "Platform",
    description: `Metaverse AI is a global AI & Web3.0 company that builds Open Metaverse with advanced AI, digital humans, and mixed reality technology.`,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    title: "Protocol",
    description: `Sol Street Finance is a decentralized non-custodial asset management protocol. It is a marketplace which connects investors to top fund managers competing to build the best decentralized hedge funds. `,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    title: "Protocol",
    description: `The IQ Protocol is a DeFi framework for renting wrapped, expirable digital assets for the use cases it enables. `,
    siteUrl: "www.ya.ru",
    twitterUrl: "www.ya.ru",
  },
  {
    icon: image1,
    title: "Platform",
    description: `ChainPort is a next-generation custodial secure bridge that allows instant hop across many blockchains at a click.`,
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
