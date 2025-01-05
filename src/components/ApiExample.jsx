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

// import { useEffect, useState } from "react";

// const ApiExample = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts/1/comments"
//         );
//         if (!response.ok) {
//           throw new Error(`Fetching Error status ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error(`Error in fetching the data`, error.message);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>Fetching Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ApiExample;

/* ================================================
                🔵 3.2 Making GET Requests 🔵 
When working with RESTful APIs, GET requests are the most common. They retrieve data from the server without modifying it. Let's enhance our example to include query parameters and handle different aspects of the GET request.
   ================================================ */
// import { useEffect, useState } from "react";
// import { FaSpinner } from "react-icons/fa"; // Import spinner icon

// const ApiExample = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setTimeout(async () => {
//           const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts/1/comments"
//           );
//           if (!response.ok) {
//             throw new Error(`Error with Status code ${response.status}`);
//           }
//           const result = await response.json();
//           setData(result);
//           setLoading(false);
//         }, 1000);
//       } catch (error) {
//         console.error(`Error message `, error.message);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div className="p-4">
//       <h1 className="text-red-600 text-center text-7xl">Api Data</h1>

//       {loading ? (
//         <div className="flex justify-center items-center">
//           {/* <p>loading...</p> */}
//           <FaSpinner
//             style={{ fontSize: "2rem", animation: "spin 1s linear infinite" }}
//             className="text-blue-500 text-20xl animate-spin"
//           />
//         </div>
//       ) : (
//         <ul className="text-center text-2xl text-green-400">
//           {data.map((item) => {
//             return (
//               <li key={item.id} className="p-2 bg-gray-100 rounded shadow">
//                 {item.id}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ApiExample;

import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

const ApiExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        if (!response.ok) {
          throw new Error(`Error with status code ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false); // Turn off loading after data is fetched
      } catch (error) {
        console.error(`Error message: `, error.message);
        setLoading(false); // Ensure loading stops on error
      }
    };

    fetchData(); // Fetch data on mount
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-red-600 text-center text-7xl mb-6">API Data</h1>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          {/* Spinner Icon */}
          <FaSpinner className="text-chocolate-500 text-7xl animate-spin m-20" />
        </div>
      ) : (
        <ul className="text-center text-2xl text-green-400 space-y-4">
          {data.map((item) => (
            <li key={item.id} className="p-4 bg-gray-100 rounded shadow">
              {item.body}
              <br />
              <p className="text-blue-400">{item.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiExample;
