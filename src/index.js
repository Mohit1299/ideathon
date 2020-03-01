import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import SplitView from "./SplitView";
import * as serviceWorker from './serviceWorker';
const Wrapper = styled.div`
  height: 100vh;
`;
const App = () => (
  <Wrapper>
    <SplitView />
  </Wrapper>
);

render(<App />, document.getElementById("root"));
serviceWorker.register();