import styled from "styled-components";
import { Fade } from "react-reveal";

const Box = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 23px;
  padding: 10px;
  color: black;
  text-align: center;
`;

const TextBox = () => {
  return (
    <Box>
      <Fade bottom>
        <Text>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </Fade>
    </Box>
  );
};

export default TextBox;
