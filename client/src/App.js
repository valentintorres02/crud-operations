import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import Home from './Home';
import Abm from './Abm';
import Nabvar from './Nabvar';

function App() {
  const [operationsList, setOperationsList] = useState([]);

  const fetchData = () => {
    Axios.get('http://localhost:3001/api/get')
      .then((response) => {
        setOperationsList(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Nabvar />
      <Route
        exact
        path="/"
        render={() => (
          <Home operationsList={operationsList} />
        )}
      />
      <Route
        exact
        path="/abm"
        render={() => (
          <Abm
            fetchData={fetchData}
            operationsList={operationsList}
            setOperationsList={setOperationsList}
          />
        )}
      />
    </div>
  );
}

export default App;
