import './App.css'
import Edgar from './components/Edgar'
import Esmeralda from './components/Esmeralda'
import Jose from './components/Jose'
import Misael from './components/Misael'

function App() {

  return (
    <div className="App flex gap-6 min-h-screen justify-center items-center ">
      <Edgar />
      <Esmeralda />
      <Jose />
      <Misael />
    </div>
  )
}

export default App
