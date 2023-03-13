import Header from './components/Header/Header'
import Homescreen from './components/Homescreen/Homescreen'
import GlobalStyle from './GlobalStyles'
import jobData from '../src/data'

function App() {
  return (
   <>
   <GlobalStyle/>
   <Header/>
   <Homescreen data={jobData}/>
   </>
  )
}

export default App
