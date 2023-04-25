import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import PostsProvider from './context/post_context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>
);
