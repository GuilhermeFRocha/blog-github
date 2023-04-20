import Logo from "./assets/Logo.svg";
import Avatar from "./assets/avatar.svg";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBuildingFill, BsFillPeopleFill } from "react-icons/bs";
import {
  CardPosts,
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
import { format, differenceInDays } from "date-fns";

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

  const dataPost = repos.map((itemn) => {
    const data = new Date(itemn.updated_at);
    return data;
  });

  const diffInDays = differenceInDays(new Date(), dataPost[0]);

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
            <CardPosts>
              {repos.map((item: any) => {
                return (
                  <div key={item.title}>
                    <h2>
                      {item.title}{" "}
                      <span>
                        {diffInDays > 1
                          ? `há ${diffInDays} dias`
                          : `há ${diffInDays} dia`}
                      </span>
                    </h2>
                    <p>{item.body.slice(0, 200)}... </p>
                  </div>
                );
              })}
            </CardPosts>
            <CardPosts>Container 2</CardPosts>

            <CardPosts>Container 1</CardPosts>
            <CardPosts>Container 2</CardPosts>
          </ContainerPosts>
        </Container>
      </Main>
    </>
  );
}

export default App;
