import React, { useState, useEffect } from 'react';
import './App.css';
import './defauld.css';

import CourseTable from './components/courseTable/CourseTable';
import Preload from './components/preload/Preload';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [coursUSD, setCoursUSD] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/data/data.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTimeout(() => {
          setLoading(false);
          setCoursUSD(data);
        }, 2000)
      })
  }, []);

  return (
    <div className="App">
      {isLoading && <Preload />}
      {coursUSD && <CourseTable data={coursUSD} />}
    </div>
  );
}

export default App;
