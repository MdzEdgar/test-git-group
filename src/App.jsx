import './App.css'
import Camilo from './components/Camilo'
import Edgar from './components/Edgar'
import Esmeralda from './components/Esmeralda'
import Jose from './components/Jose'
import Misael from './components/Misael'

function App() {

  return (
    <div className="App flex gap-6 min-h-screen justify-center items-center 
    bg-black text-white">
      <Camilo />
      <Edgar />
      <Esmeralda />
      <Jose />
      <Misael />
    </div>
  )
}

export default App
