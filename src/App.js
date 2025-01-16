import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>GraphQL React Client</h1>
          <nav>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
          </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
