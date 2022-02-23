import { GetServerSideProps, NextPage } from "next";

import { IPost } from "types";
import { getArticle } from "services";

interface PostProps {
  post: IPost;
}

export const getServerSideProps: GetServerSideProps<PostProps> = async ({
  params,
}) => {
  if (typeof params?.id === "string") {
    const { data } = await getArticle(params.id);
    return {
      props: {
        post: data,
      },
    };
  }
  return {
    notFound: true,
  };
};

const Post: NextPage<PostProps> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default Post;
