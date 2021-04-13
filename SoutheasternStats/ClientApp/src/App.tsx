import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FetchData from "./components/FetchData";
import Counter from "./components/Counter";

interface IAppProps { };
interface IAppState { };

export default class App extends React.Component<IAppProps, IAppState> {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
      </Layout>
    );
  }
}
