[![N|Solid](https://static01.nyt.com/images/nytco/NYT-wordmark.png)](https://nodesource.com/products/nsolid)

## 💡 About

*New York Times article feed with real-time updates that allows to search the latest news.*
 
 [Live Demo](https://akhmed0606.github.io/news_app/)

<br>

## ⚙ Technologies

This project was developed using the following tools and technologies:

- [React](https://create-react-app.dev/)
- [Axios](https://www.npmjs.com/package/axios)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

<br>

**How I worked on this project**

- Created React App and installed npm package axios
- Created Api key in New York Times Dev Portal and encrypted in .env file
- Set up state variables and fetched data using axios
- Rendered list of data using map function
- Created a new file with search form and passed props to main component
- Styled HTML elements and applied classes for a nice layout
 
<br>

* #### _New York Times_ API

In order to fetch data from the _New York Times_ API, you'll need to make calls to the following URL: `http://api.nytimes.com/svc/news/v3/content/all/all.json`

In addition to making calls to these URLs, you will need to request an API key from [here](https://developer.nytimes.com/signup). Once you have the key, you will "sign" your requests by attaching the key to the URL like so:
```
http://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=<your key here>
```
<br>

## 🚀 Quick start

- ``npm i && npm start``