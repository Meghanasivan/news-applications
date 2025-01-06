import React, { useState, useEffect } from "react";
import NewsCard from "./newscard";

function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f0dbcba5c8c94d519151233dd49add05")
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  const handleSearch = () => {
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=f0dbcba5c8c94d519151233dd49add05`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          imageUrl={article.urlToImage}
        />
      ))}
    </div>
  );
}

export default Dashboard;
