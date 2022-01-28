import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      await axios
        .get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          const articles = res.data;
          setArticles(articles.response.docs);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchNews();
  }, [query]);

  return (
    <>
      <div className="showcase">
        <div className="overlay">
          <h1 className="mainTitle">Articles about {query}</h1>
          <SearchForm searchText={(text) => setQuery(text)} />
        </div>
      </div>

      {isLoading ? (
        <h1 className="title">Loading...</h1>
      ) : (
        <section className="listItem">
          {articles.map((article) => {
            const {
              abstract,
              headline: { main },
              news_desk,
              web_url,
              word_count,
              byline: { original },
              section_name,
              _id,
              lead_paragraph,
            } = article;

            return (
              <article key={_id} className="bodyArticle">
                <h2 className="title">{main}</h2>
                <p>{abstract}</p>
                <p>{lead_paragraph}</p>
                <ul className="listArticles">
                  <li>{original}</li>
                  <li>
                    <span className="infoTitle">News Desk:</span> {news_desk}
                  </li>
                  <li>
                    <span className="infoTitle">Name:</span> {section_name}
                  </li>
                  <li>
                    <span className="infoTitle">Word Count:</span> {word_count}
                  </li>
                </ul>
                <a href={web_url} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
}

export default App;
