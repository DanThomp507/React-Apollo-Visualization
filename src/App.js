import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks'
import { getPosts } from './services/get-posts'
import PostsDisplay from './Components/PostsDisplay'


const App = () => {
  const { loading, error, data } = useQuery(getPosts)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <PostsDisplay posts={data?.allPosts} />
    </div>
  );
}

export default App;
