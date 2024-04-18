import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country = "in", pageSize = 8, category = "general" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `News: ${category}`;
    fetchArticles();
  }, [country, category, pageSize]);

  const fetchArticles = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=cd62595a7a124188b3749e1a3a4f4103&page=${page}&pageSize=${pageSize}`;

    try {
      const response = await fetch(url);
      const parsedData = await response.json();

      setArticles([...articles, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchMoreData = () => {
    if (page * pageSize <= totalResults) {
      setPage(page + 1);
      fetchArticles();
    }
  };

  return (
    <div>
      <div className="container my-4 my-2 mb-2">
        <h1 className="text-center" style={{ margin: "35px", marginTop: "90px" }}>
          Newsapp - Top headlines from News: {category}
        </h1>
        {loading && <Spinner />} {/* Render spinner when loading is true */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4 className="text-center">{loading ? "loading..." : ""}</h4>}
        >
          <div className="container">
            <div className="row">
              {articles.map((e) => (
                <div className="col-md-4 my-4 my-2 mb-2" key={e.url}>
                  <NewsItem
                    title={e.title ? e.title.slice(0, 45) : ""}
                    description={
                      e.description ? e.description.slice(0, 88) : ""
                    }
                    imgurl={
                      e.urlToImage
                        ? e.urlToImage
                        : "https://techcrunch.com/wp-content/uploads/2024/04/GettyImages-503231076.jpg?resize=1200,800"
                    }
                    newsurl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
        <div className="text-center my-4">
          <small className="text-muted">Developed by Vishal Prajapati</small>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
