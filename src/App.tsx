import Logo from "./assets/Logo.svg";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBuildingFill, BsFillPeopleFill } from "react-icons/bs";
import {
  Container,
  ContainerPosts,
  ContentUser,
  DescUser,
  Header,
  ImgUser,
  Main,
  SearchContent,
} from "./styles/home";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Posts } from "./components/Posts";

interface UserProps {
  name: string;
  bio: string;
  login: string;
  followers: number;
  avatar_url: string;
  company: string;
}
interface ReposProps {
  title: string;
  desc: string;
  updated_at: string;
  body: string;
  id: number
}

interface PostProps {
  title: string;
  body: string;
  id: number
}

function App() {
  const [users, setUsers] = useState<UserProps>();
  const [repos, setRepos] = useState<ReposProps[]>([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/GuilhermeFRocha"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchRepos = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/GuilhermeFRocha/blog-github/issues`
      );
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
    fetchRepos();
  }, [fetchUsers, fetchRepos]);

  return (
    <>
      <Header>
        <img src={Logo} alt="" />
      </Header>

      <Main>
        <Container>
          <ContentUser>
            <ImgUser>
              <img src={users?.avatar_url} alt="" />
            </ImgUser>
            <DescUser>
              <div className="nameUser">
                <h2>{users?.name}</h2>
                <a href="">
                  github <MdOpenInNew />
                </a>
              </div>
              <p>{users?.bio}</p>
              <ul>
                <li>
                  <AiFillGithub color="#3A536B" size={18} /> {users?.login}
                </li>
                <li>
                  <BsFillBuildingFill color="#3A536B" size={18} />
                  {users?.company}
                </li>
                <li>
                  <BsFillPeopleFill color="#3A536B" size={18} />
                  {users?.followers} seguidores
                </li>
              </ul>
            </DescUser>
            </ContentUser>
          <SearchContent>
            <div>
              <p>Publicaçoes</p>
              <span>
                {repos.length == 1
                  ? `${repos.length} Publibação`
                  : `${repos.length} Publibaçações`}
              </span>
            </div>

            <input placeholder="Buscar conteúdo" type="text" />
          </SearchContent>

          <ContainerPosts>
            {repos.map((item:PostProps) => {
            return  <Posts posts={item} key={item.id}/>
            })}
          </ContainerPosts>
        </Container>
      </Main>
    </>
  );
}

export default App;
