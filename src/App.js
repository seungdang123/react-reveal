import styled from "styled-components";
import Greeting from "./Greeting";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Greeting />
    </Wrapper>
  );
};

export default App;
