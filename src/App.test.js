import {render, cleanup, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom";
import axiosMock from 'axios'
import App from './App'

afterEach(cleanup)

it("fetches and displays data", async() => {

axiosMock.get.mockResolvedValue({ articles: {} })
 
let query = 'everything'

const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`

const { getByTestId } = render(<App url={url} />)
expect(getByTestId("checkTitle")).toHaveTextContent('Articles about')


 const resolvedData =  await waitFor(() => getByTestId("article"));
 expect(resolvedData).toHaveTextContent("");
 expect(axiosMock.get).toHaveBeenCalledTimes(1);
 expect(axiosMock.get).toHaveBeenCalledWith(url);

})

