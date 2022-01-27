import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [articles, setArticles] = useState([])
  const [query, setQuery] = useState('everything')
  const [load, setLoad] = useState(true)

  const fetchNews = async () => {
    await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`).then((res) => {
      const articles =  res.data
      console.log(articles)
    })
    .catch((error) => {
      console.log(error)
    });
    }

  useEffect(() => {
     fetchNews()
  },[])
  
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
