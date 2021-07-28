import axios from "axios";
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchResult from "./pages/SearchResult";
import TrafficCam from "./pages/TrafficCam";
import Footer from "./components/Footer";
import Erp from "./pages/Erp";

const App = () => {
  const [queryCpObj, setQueryCpObj] = useState({
    queryLocation: "",
    result: [],
    isLoading: false,
  });
  const { queryLocation, result, isLoading } = queryCpObj;

  const history = useHistory();

  useEffect(() => {
    if (queryCpObj.queryLocation) {
      history.push({
        pathname: "/search_result",
        search: `?location=${queryLocation}`,
      });
      axios
        .get(`http://localhost:4444/proxyServer/carpark/${queryLocation}`)
        .then((res) => {
          setQueryCpObj({ ...queryCpObj, result: res.data, isLoading: false });
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
    }
  }, [queryLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryCpObj({
      result: [],

      isLoading: true,
      queryLocation: e.target.query.value,
    });
  };
  return (
    <div className="App">
      <header>
        <h1 className="main_header">¿Where To Park?</h1>

        <div className="navbar_container">
          <NavBar />
        </div>
      </header>
      <Switch>
        <Route path="/" exact>
          <Home handleSubmit={handleSubmit} query={queryLocation} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/search_result">
          <SearchResult
            isLoading={isLoading}
            query={queryLocation}
            result={result}
            handleSubmit={handleSubmit}
            // handleChange={handleChange}
          />
        </Route>
        <Route path="/traffic_cam">
          <TrafficCam />
        </Route>
        <Route path="/erp">
          <Erp />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
