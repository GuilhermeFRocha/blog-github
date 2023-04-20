import Logo from "./assets/Logo.svg";
import Avatar from "./assets/avatar.svg";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBuildingFill, BsFillPeopleFill } from "react-icons/bs";
import {
  Container,
  ContentUser,
  DescUser,
  Header,
  ImgUser,
  Main,
} from "./styles/home";
function App() {
  return (
    <>
      <Header>
        <img src={Logo} alt="" />
      </Header>

      <Main>
        <Container>
          <ContentUser>
            <ImgUser>
              <img src={Avatar} alt="" />
            </ImgUser>
            <DescUser>
              <div className="nameUser">
                <h2>Cameron Williamson</h2>
                <a href="">
                  github <MdOpenInNew />
                </a>
              </div>
              <p>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </p>
              <ul>
                <li>
                  <AiFillGithub color="#3A536B" size={18} /> cameronwll
                </li>
                <li>
                  <BsFillBuildingFill color="#3A536B" size={18} />
                  Rocketseat
                </li>
                <li>
                  <BsFillPeopleFill color="#3A536B" size={18} />
                  32 seguidores
                </li>
              </ul>
            </DescUser>
          </ContentUser>
        </Container>
      </Main>
    </>
  );
}

export default App;
