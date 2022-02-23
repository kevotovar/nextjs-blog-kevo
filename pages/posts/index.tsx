import type { NextPage, GetServerSideProps } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

import { IPostsRequest } from "types";
import { getArticles } from "services";
import Link from "src/Link";

export interface HomeProps {
  posts: IPostsRequest;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data } = await getArticles();

  return {
    props: {
      posts: data,
    },
  };
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {posts.map((post) => (
          <Box key={post.id}>
            <Card>
              <CardActionArea
                LinkComponent={Link}
                href={`/posts/${post.path.replace(
                  `/${process.env.DEV_USERNAME}`,
                  ""
                )}`}
              >
                <CardMedia
                  component="img"
                  src={post.social_image}
                  height="140"
                />
                <CardContent>
                  <Typography variant="h4">{post.title}</Typography>
                  <Typography>{post.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
