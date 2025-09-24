import { Suspense } from 'react'
import './App.css'
import Books from './components/Books'
import Loader from './components/Loader'

//?Fetching Inforamtion from the json demo data
const booksFromJsonFile = async () => {
  const url = '../public/books.json'
  const res = await fetch(url);
  return res.json();
}

function App() {
  //? Getting the promse the booksFromJsonFile Provided
  const booksPromises = booksFromJsonFile();

  return (
    <>
      <Suspense fallback={<Loader></Loader>}>
        <Books booksPromises={booksPromises}></Books>
      </Suspense>
    </>
  )
}

export default App
