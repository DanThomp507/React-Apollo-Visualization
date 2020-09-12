import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks'
import { getPosts } from './services/get-posts'


const App = () => {
  const { loading, error, data } = useQuery(getPosts)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <div className="App">
      {data.allPosts.length}
    </div>
  );
}

export default App;
