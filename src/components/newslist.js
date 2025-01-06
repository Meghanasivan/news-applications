

import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";

const App = () => {
  const [news, setNews] = useState([]);
  const apiKey = "f0dbcba5c8c94d519151233dd49add05"; // Replace with your actual API key

  useEffect(() => {
    // Simulated API call
    const fetchNews = async () => {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=us", {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
        },
      });
      const data = await response.json();
      setNews(data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default App;
