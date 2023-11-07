import "./App.css";
import { ReactDOM } from "react";
import Header from "./pages/Header";
import GlobalStyle from "./style-component/Global_style";
import Container from "./pages/CommonLayer/CommonLayer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
