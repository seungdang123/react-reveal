import styled from "styled-components";
import { Fade } from "react-reveal";

const Box = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  font-size: 23px;
  padding: 10px;
  color: black;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: black;
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: 800;
`;

const TextBox = () => {
  return (
    <Box>
      <Fade bottom>
        <Text>
          <Subtitle>Lorem</Subtitle>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </Text>
      </Fade>
    </Box>
  );
};

export default TextBox;
