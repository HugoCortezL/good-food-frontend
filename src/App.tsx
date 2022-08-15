import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecipeDetail from './pages/RecipeDetail'
import Recipes from './pages/Recipes'
import Header from './components/core/Header'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipe/:recipeName" element={<RecipeDetail />} />
        <Route path="/searchByIngredients" element={<Recipes />} />
        <Route path="/favorites" element={<Recipes />} />
        <Route path="/config" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
