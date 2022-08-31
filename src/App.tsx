import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/core/Header'
import Config from './pages/Config'
import Recipe from './pages/Recipe'
import RecipeDetail from './pages/RecipeDetail'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'

import { onError } from '@apollo/client/link/error'
import CreateRecipe from './pages/CreateRecipe'

const errorLink = onError((
  {
    graphQLErrors, networkError
  }
) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
}
)

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" })
])

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})




function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Recipe />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/recipe/new" element={<CreateRecipe />} />
          <Route path="/searchByIngredients" element={<Recipe />} />
          <Route path="/favorites" element={<Recipe />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
