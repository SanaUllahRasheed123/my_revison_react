/* ================================================
                🔵 Fetch API Example 🔵 
   Topic: API Example - Fetching and Handling Errors
   File: ApiExample.js
   Description: Demonstrates how to fetch data from an API, 
                handle errors, and display results dynamically.
   ================================================ */
// import { useState, useEffect } from "react";

// const ApiExample = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts/1/comments"
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>API Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ApiExample;

import { useEffect, useState } from "react";

const ApiExample = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        if (!response.ok) {
          throw new Error(`Fetching Error status ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(`Error in fetching the data`, error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetching Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiExample;
