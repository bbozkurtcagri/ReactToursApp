// useContext hook

import logo from './logo.svg';
import React , { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';


const url = "https://course-api.com/react-tours-project"


function App() {


  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  

  const removeTour = (id) => {
    const newTours = tours.filter( (tour) => tour.id !== id);
    setTours(newTours);
  }


  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }


  useEffect(() => {
    fetchTours();
  },[])


  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className='title'>

          <h2>Uygun tur kalmadı</h2>
          <button className='btn' onClick={() => fetchTours()}>Turları günceller</button>
        
        </div>
      </main>
    )
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
