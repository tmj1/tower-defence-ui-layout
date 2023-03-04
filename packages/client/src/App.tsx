import { Route, Routes, useLocation } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import { Profile } from './pages/Profile'
import { Leaderboard } from './pages/Leaderboard'
import { NotFound } from './pages/NotFound'
import { Forum } from './pages/Forum'
import { RoutesNameList } from './constant'

import './App.css'

function App() {
  const { pathname } = useLocation()
  return (
    <MainLayout background={pathname}>
      <Routes>
        <Route path={RoutesNameList.Main} element={<Main />} />
        <Route path={RoutesNameList.Login} element={<Login />} />
        <Route path={RoutesNameList.Registration} element={<Registration />} />
        <Route path={RoutesNameList.Forum} element={<Forum />} />
        <Route path={RoutesNameList.Profile} element={<Profile />} />
        <Route path={RoutesNameList.Leaderboard} element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

// function App() {
//   useEffect(() => {
//     const fetchServerData = async () => {
//       const url = `http://localhost:${__SERVER_PORT__}`
//       const response = await fetch(url)
//       const data = await response.json()
//       console.log(data)
//     }

//     fetchServerData()
//   }, [])
//   return <div className="App">Вот тут будет жить ваше приложение :)</div>
// }

export default App
