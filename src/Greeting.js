import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Flip } from "react-reveal";
import { Parallax } from "react-parallax";
import img2 from "./img/img2.jpeg";
import img1 from "./img/img1.jpeg";
import img3 from "./img/img3.jpeg";
import img4 from "./img/img4.jpeg";
import TextBox from "./TextBox";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300vh;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: black;
`;

const H1 = styled.h1`
  font-size: 50px;
`;

const H4 = styled.h4`
  font-size: 25px;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  width: 300px;
  padding: 30px;
  margin: 30px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Box>
        <Parallax
          bgImage={img2}
          bgImageAlt="space"
          strength={800}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fade left cascade>
            <div>
              <H1>Hello</H1>
              <H4>I'm Seunghwan</H4>
            </div>
          </Fade>
        </Parallax>
      </Box>
      <TextBox />
      <Box>
        <Parallax
          bgImage={img1}
          bgImageAlt="space"
          strength={800}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fade right>
            <H1>Scroll Animation</H1>
          </Fade>
        </Parallax>
      </Box>
      <TextBox />
      <Box>
        <Parallax
          bgImage={img3}
          bgImageAlt="space"
          strength={800}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fade left cascade>
            <BoxContainer>
              <H4>Box</H4>
            </BoxContainer>
          </Fade>
          <Fade right cascade>
            <BoxContainer>
              <H4>Box</H4>
            </BoxContainer>
          </Fade>
          <Fade bottom cascade>
            <BoxContainer>
              <H4>Box</H4>
            </BoxContainer>
          </Fade>
        </Parallax>
      </Box>
      <TextBox />
      <Box>
        <Parallax
          bgImage={img4}
          bgImageAlt="space"
          strength={800}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Flip>
            <H1>React Reveal</H1>
          </Flip>
        </Parallax>
      </Box>
    </Wrapper>
  );
};

export default Greeting;
