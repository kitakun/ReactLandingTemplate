import React from "react";
// styles
import "./App.scss";
// components
import Block from "./components/layout/block/Block";
import ButtonScrollUp from "./components/layout/button-scroll-up/ButtonScrollUp";
import { EmptyHeight } from "./components/layout/empty-height/EmptyHeight";
import Header from "./components/layout/header/Header";
import SectionSteps from "./Sections/2_section-steps/SectionSteps";
// sections
import SectionCompanies from "./Sections/4_section_companies/SectionCompanies";
import { SectionContactForm } from "./Sections/5_section-contact-form/SectionContactForm";
import Footer from "./Sections/SectionFooter/SectionFooter";
import SectionIntro from "./Sections/1_section-intro/SectionIntro";
import { getScssConstant } from "./utils/scssUtils";
import SectionOurProjects from "./Sections/6_section-our-projects/SectionOurProjects";
import SectionOurInvestors from "./Sections/7_section-our-investors/SectionOurInvestors";

const block1Color = getScssConstant("block1color");
const block2Color = getScssConstant("block2color");
const block3Color = getScssConstant("block3color");
const block4Color = getScssConstant("block4color");

const block1_5Color = "white";
const block1_5BorderBottom = `2px solid ${block1Color}`;

const routes = [
  {
    title: "welcome",
    id: "section-intro",
  },
  {
    title: "Steps",
    id: "section-steps",
  },
  {
    title: "Projects",
    id: "section-projects",
  },
  {
    title: "Investments",
    id: "section-investments",
  },
  {
    title: "Partners",
    id: "section-partners",
  },
  {
    title: "Contact",
    id: "section-contact",
  },
];

function App() {
  let idSetter = -1;
  const getNextId = () => {
    idSetter++;
    return idSetter;
  };

  return (
    <div className="App">
      <div className="root-layout">
        <Block background={block1Color}>
          <Header elements={routes} />
        </Block>
        <EmptyHeight height={110} color={block1Color} />
        <Block background={block1Color}>
          <SectionIntro id={routes[getNextId()].id} />
        </Block>
        <Block
          background={block1_5Color}
          topOffset={20}
          borderRadius={2}
          width={"90%"}
          borderBottom={block1_5BorderBottom}
        >
          <SectionSteps id={routes[getNextId()].id} />
        </Block>
        <Block background={block3Color}>
          <SectionOurProjects
            id={routes[getNextId()].id}
            title="Projects under Incubation/Advisory"
          />
        </Block>
        <Block background={block3Color}>
          <SectionOurInvestors
            id={routes[getNextId()].id}
            title="Our Top Investments"
          />
        </Block>

        <Block background={block2Color}>
          <SectionCompanies id={routes[getNextId()].id} />
        </Block>

        <Block background={block4Color}>
          <SectionContactForm id={routes[getNextId()].id} />
        </Block>
        <Footer />
        <ButtonScrollUp />
      </div>
    </div>
  );
}

export default App;
