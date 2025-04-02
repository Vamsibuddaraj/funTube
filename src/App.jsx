import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import Body from "./components/Body"
import WatchPage from "./components/WatchPage"
import HistoryPage from "./components/HistoryPage"



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Body />}>
          <Route path="/" element={<MainContainer />} />
          {/* <Route path="/home" element={<MainContainer />}/> */}
          <Route path="/history" element={<HistoryPage />}/> 
          <Route path="watch" element={<WatchPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
