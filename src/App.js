
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import './App.css';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './components/Home'));
const World = lazy(() => import(/* webpackChunkName: "world" */ './components/World'));
const Tech = lazy(() => import(/* webpackChunkName: "tech" */ './components/Tech'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './components/Contact'));
const Article1 = lazy(() => import(/* webpackChunkName: "article1" */ './components/Article1'));
const Article2 = lazy(() => import(/* webpackChunkName: "article2" */ './components/Article2'));
const Article3 = lazy(() => import(/* webpackChunkName: "article3" */ './components/Article3'));
const Article4 = lazy(() => import(/* webpackChunkName: "article4" */ './components/Article4'));

const App = () => (
  <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/pages/world" component={World} />
        <Route exact path="/pages/tech" component={Tech} />
        <Route exact path="/pages/contact" component={Contact} />
        <Route exact path="/pages/article1" component={Article1} />
        <Route exact path="/pages/article2" component={Article2} />
        <Route exact path="/pages/article3" component={Article3} />
        <Route exact path="/pages/article4" component={Article4} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
