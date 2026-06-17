import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Produto from "./pages/Produto"
import Carrinho from "./pages/Carrinho"

function App() {

    return (

  <div className="min-h-screen flex flex-col">

      <Header />

        <main className="flex-1">

          <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/produto/:id"
                element={<Produto />}
              />

              <Route
                path="/carrinho"
                element={<Carrinho />}
              />

          </Routes>

        </main>

      <Footer />

    </div>

  )

}

export default App