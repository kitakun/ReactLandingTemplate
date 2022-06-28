import React from "react";
// styles
import "./App.scss";
// components
import Block from "./components/block/Block";
import ButtonScrollUp from "./components/button-scroll-up/ButtonScrollUp";
import Header from "./components/header/Header";
import Section3Steps from "./Sections/Section3Steps/Section3Steps";
import SectionChessInfo from "./Sections/SectionChessInfo/SectionChessInfo";
// sections
import SectionCompanies from "./Sections/SectionCompanies/SectionCompanies";
import { SectionContactForm } from "./Sections/SectionContactForm/SectionContactForm";
import Footer from "./Sections/SectionFooter/SectionFooter";
import SectionIntro from "./Sections/SectionIntro/SectionIntro";
import { getScssConstant } from "./utils/scssUtils";

const block1Color = getScssConstant("block1color"); // "rgb(127 73 196)";
const block1_5Color = "white";
const block1_5BorderBottom = `2px solid ${block1Color}`;
const block2Color = "rgba(0,192,153,1)";
const block3Color = "#d9f3fd";
const block4Color = getScssConstant("block4color"); // "#f390ac";

function App() {
  return (
    <div className="App">
      <div className="root-layout">
        <Block background={block1Color}>
          <Header />
        </Block>
        <Block background={block1Color}>
          <SectionIntro />
        </Block>
        <Block
          background={block1_5Color}
          topOffset={20}
          borderRadius={2}
          width={"90%"}
          borderBottom={block1_5BorderBottom}
        >
          <Section3Steps />
        </Block>
        <Block background={block3Color}>
          <SectionChessInfo />
        </Block>
        <Block background={block2Color}>
          <SectionCompanies />
        </Block>
        <Block background={block4Color}>
          <SectionContactForm />
        </Block>
        <Footer />
        <ButtonScrollUp />
      </div>
    </div>
  );
}

export default App;
