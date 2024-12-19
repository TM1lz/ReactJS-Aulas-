import React, { useEffect, useState } from "react";
import { useFetch } from "./hooks/useEffect"; // Assuming useFetch is correctly defined
//Api Fake 
const url = "https://jsonplaceholder.typicode.com/albums";

function App() {
  // Fetch data using custom hook
  const { data, loading, error } = useFetch(url);

  // Render loading state
  if (loading) return <div>Loading...</div>;

  // Render error state
  if (error) return <div>Error: {error.message}</div>;

  // If there's data, render it
  return (
    <div className="App">
      <h1>Album de Musicas:</h1>
      <ul>
        {data?.map((albums, id) => (
          <li key={id}> {albums.id}-{albums.title}
          <p></p></li> // Assuming each person object has a "name" property
        ))}
      </ul>
    </div>
  );
}

export default App;
