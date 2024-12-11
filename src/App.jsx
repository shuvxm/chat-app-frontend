import toast from 'react-hot-toast'
import './App.css'
import JoinCreateChat from './components/JoinCreateChat'

function App() {

  return (
    <>
      {/* <h1>Hello</h1>
      <button onClick={ () => {
        toast.success("this is toast message")
      }}>Click me</button> */}
      <JoinCreateChat />
    </>
  )
}

export default App
