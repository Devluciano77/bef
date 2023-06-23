import Navbar from './components/navbar'
import Portada from './components/portada'
import './App.css'
import BandasCard from './components/bandasCard'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div id='root'>
        <Navbar />
        <Portada />
        <BandasCard />
        <Footer />
      </div>
    </>
  )
}

export default App
