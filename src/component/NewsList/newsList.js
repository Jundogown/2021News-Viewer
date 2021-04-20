import React from "react";
import NewsItem from "../NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

import "./newsList.css";

const API_KEY = "d95c584899464accbd99891ab9e98e22";

const NewsList = ({ category }) => {
  const [loading, resolved, error] = usePromise(() => {
    const qurey = category === "all" ? "" : `${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&category=${qurey}&apiKey=${API_KEY}`
    );
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!resolved) {
    return <div>null</div>;
  }

  if (error) {
    return <div>error발생</div>;
  }

  const article = resolved.data.articles;

  return (
    <ul className="newsList">
      {article.map((article) => (
        <li key={article.title}>
          <NewsItem key={article.url} article={article} />
          <hr/>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
