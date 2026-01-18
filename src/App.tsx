import { useState } from 'react'
import './App.css'

import { Header } from './components/Layout/Header/Header';
import Layout from "./components/Layout/Layout"
import Content from "./components/Layout/Content/Content"

export const App: React.FC = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Content />
      </Layout>
    </div>
  );
};


