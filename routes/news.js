const express = require('express');
const router = express.Router();

// Dummy news data (replace with real API or database)
const newsData = [
  { title: 'Breaking News 1', content: 'Content of news 1' },
  { title: 'Breaking News 2', content: 'Content of news 2' },
  { title: 'Breaking News 3', content: 'Content of news 3' },
];

// Search news
router.get('/search', (req, res) => {
  const { query } = req.query;
  const filteredNews = newsData.filter(news => news.title.toLowerCase().includes(query.toLowerCase()));
  res.json(filteredNews);
});

// Dashboard (List of news)
router.get('/dashboard', (req, res) => {
  res.json(newsData);
});

module.exports = router;

