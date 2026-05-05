import 'remixicon/fonts/remixicon.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
  return (
    <div className='select-none'>
      <Sidebar />
      <Navbar />
      <Main />
    </div>
  )
}

export default App