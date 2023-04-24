import axios from "axios";
import { differenceInDays } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { CardPosts } from "../styles/home";
import { useNavigate } from "react-router-dom";

interface ReposProps {
  title: string;
  desc: string;
  created_at: string;
  body: string;
  id: number;
}

interface DaysObj {
  [key: number]: string;
}

export const Posts = ({ posts }: any) => {
  const [repos, setRepos] = useState<ReposProps[]>([]);
  const navigate = useNavigate();

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
    fetchRepos();
  }, [fetchRepos]);

  const dataPost = repos.map((post) => {
    const data = new Date(post.created_at);
    return data;
  });

  const differenceDays = dataPost.map((items) => {
    return differenceInDays(new Date(), items);
  });

  const daysObj: DaysObj = {};
  differenceDays.forEach((day) => {
    daysObj[day] = day > 1 ? `${day} dias` : `${day} dia`;
  });

  function handleClick(posts: any) {
    navigate("/post", { state: posts });
  }
  return (
    <CardPosts onClick={() => handleClick(posts)}>
      <h2>
        {posts.title}
        <span>
          Há {daysObj[differenceInDays(new Date(), new Date(posts.created_at))]}
        </span>
      </h2>
      <p>{posts.body.slice(0, 200)}... </p>
    </CardPosts>
  );
};
