// 1. Убедитесь, что файл имеет расширение .tsx
// 2. Импортируйте React
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header/Header';
import './style.css';

const root = createRoot(
  document.getElementById('app') as HTMLElement
);

// 3. Рендерим JSX напрямую, без кавычек
root.render(
  <img/>
    // <Header />
    // <h1>Привет, мир!</h1>
);