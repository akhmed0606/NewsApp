import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [articles, setArticles] = useState([])
  const [query, setQuery] = useState('everything')
  const [load, setLoad] = useState(true)

  const fetchNews = async () => {
    await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`).then((res) => {
      const articles =  res.data
      setArticles(articles.response.docs)
    })
    .catch((error) => {
      console.log(error)
    });
    }

  useEffect(() => {
     fetchNews()
  },[])
  
  return (
    <>
    <div className='showcase'>
      <div className='overlay'>
        <h1 className='title'>Articles about {query}</h1>

      </div>
    </div>
    
    <section className='listItem'>
      {articles.map((article) => {
        const {abstract, headline:{main}, news_desk, web_url, word_count, byline:{original},section_name, _id, lead_paragraph} = article

        return(
          <article key={_id}>
            <h2>{main}</h2>
            <h4>{abstract}</h4>
            <a href={web_url} target='_blank'>
              Web Resource
            </a>
            <p>{lead_paragraph}</p>
            <ul>
              <li>{original}</li>
              <li>{news_desk}</li>
              <li>{section_name}</li>
              <li>{word_count}</li>
            </ul>
          </article>
        )
      })}
    </section>
    </>
  );
}

export default App;
