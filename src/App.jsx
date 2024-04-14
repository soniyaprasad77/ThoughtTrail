import './App.css'

function App() {
 // console.log(process.env.REACT_APP_APPWRITE_URL) for react app build using create-react-app
 console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <h1>Blog app with appwrite</h1>
    </>
  )
}

export default App
