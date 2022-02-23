import axios from "axios";

export const getArticles = () =>
  axios.get(`https://dev.to/api/articles?username=${process.env.DEV_USERNAME}`);

export const getArticle = (path: string) =>
  axios.get(`https://dev.to/api/articles/${process.env.DEV_USERNAME}/${path}`);
