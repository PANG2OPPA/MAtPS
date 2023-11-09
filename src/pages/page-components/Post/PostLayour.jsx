import { Outlet } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import GlobalStyle from "../../style-components/Global_style";
import BoardList from "./BoardList";
import { useNavigate } from "react-router-dom";

const PostLayout = () => {
  const Navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header />
      <BoardList>
        <Outlet />
      </BoardList>
      <Footer />
    </>
  );
};

export default PostLayout;
