import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented, amountAdded } from "./features/counter/counterSlice";
import { Counter } from "./features/counter/Counter";
import {useFetchFactsQuery } from "./features/cats/CatsApiSlice";

function App() {
  // const count = 0;
  const count = useSelector((state) => state.counter.value); //state in CounterSlice.jsx name = 'counter'
  const dispatch = useDispatch();
  // const [numFacts, setNumFacts] = useState(10);
  // const { data = [] } = useFetchFactsQuery(numFacts); //have to use data here even though I cannot use it in Slice use for if there is parameters
  const { data = [] } = useFetchFactsQuery();

  function handleClick() {
    dispatch(incremented()); //dispatches action incremented from CounterSlice.jsx

    // dispatch(decremented()); can also increment here
    // dispatch(amountAdded(5)); or add certain amount
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello dCC Class!</h3>
        <p>Let's Learn Redux Toolkit</p>

        <button type="button" onClick={handleClick}>
          Count is: {count}
        </button>
        <Counter />

        {/* Number of records to fetch if there is a query limit parameter */}
        {/* <div>
          <p>Facts to fetch:</p>
          <select
            value={numFacts}
            onChange={(e) => setNumFacts(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div> */}

          {/* Records actually fetched */}
          <p>Number of facts fetched: {data.length} </p>
          {/* Table of results */}
          <table>
            <thead>
              <tr>
                <th>Fact</th>
                <th>Source</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((fact) => (
                <tr key={fact._id}>
                  <td>{fact.text}</td>
                  <td>{fact.source}</td>
                  <td>{fact.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </header>
    </div>
  );
}

export default App;
