
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import HOme from './components/HOme'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
      <Navbar/>
      <HOme/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Paste/>

      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
        
      </div>
    },
  ]
)


function App() {


  return (
    <div className='bg-black text-white '>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
