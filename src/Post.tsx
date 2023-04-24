import Logo from "./assets/Logo.svg";
import { useLocation } from "react-router-dom";
import { Container, DescUser, Header, Main } from "./styles/home";
import { AiFillGithub, AiOutlineArrowLeft } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { BodyPost, ContentPost, HeaderPost, TitlePost } from "./styles/posts";
import { MdDateRange, MdOpenInNew } from "react-icons/md";
import { differenceInDays } from "date-fns";

interface User {
  login: string;
}

interface PostProps {
  body: string;
  title: string;
  comments: number;
  login: string;
  created_at: string;
  html_url: string;
  user: User;
}

export const Post = () => {
  const location = useLocation();
  const post: PostProps = location.state;
  const dataPost = new Date(post.created_at);
  const diffInDays = differenceInDays(new Date(), dataPost);

  return (
    <>
      <Header>
        <img src={Logo} alt="" />
      </Header>

      <Main>
        <Container>
          <ContentPost>
            <HeaderPost>
              <a href="/">
                <AiOutlineArrowLeft color="#3294F8" width={12} height={12} />
                <p>voltar</p>
              </a>
              <a href={post.html_url} target="_blank" rel="noopener noreferrer">
                <p>ver no github</p>
                <MdOpenInNew color="#3294F8" />
              </a>
            </HeaderPost>
            <TitlePost>
              <p>{post.title}</p>
            </TitlePost>
            <DescUser>
              <ul>
                <li>
                  <AiFillGithub color="#3A536B" size={18} /> {post.user.login}
                </li>
                <li>
                  <MdDateRange color="#3A536B" size={18} />
                  <span>
                    {diffInDays > 1
                      ? `há ${diffInDays} dias`
                      : `há ${diffInDays} dia`}
                  </span>
                </li>
                <li>
                  <TbMessageCircle2Filled color="#3A536B" size={18} />
                  {post.comments} comentários
                </li>
              </ul>
            </DescUser>
          </ContentPost>
          <BodyPost>
            <p>{post.body}</p>
          </BodyPost>
        </Container>
      </Main>
    </>
  );
};
