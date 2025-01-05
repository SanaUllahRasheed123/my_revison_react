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

/* ================================================
                🔵 3.2 Making GET Requests 🔵 
                
When working with RESTful APIs, GET requests are the most common. They retrieve data from the server without modifying it. Let's enhance our example to include query parameters and handle different aspects of the GET request.
                🔵 3.3 Handling Asynchronous Operations with async/await 🔵 
          The use of async/await syntax makes asynchronous code more readable and easier to work with. It allows you to write asynchronous code that looks and behaves similar to synchronous code.
                🔵 3.4 Error Handling 🔵 

                It's essential to handle errors gracefully when making API requests. In the previous examples, we introduced a basic error handling mechanism using try/catch blocks. Let's expand on this to provide more detailed error messages.
   ================================================ */

// import { useEffect, useState } from "react";
// import { FaSpinner } from "react-icons/fa"; // Import spinner icon

// const ApiExample = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true); // Set initial loading state to true
//   const [error, setError] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts/1/comments"
//         );
//         if (!response.ok) {
//           throw new Error(`Error with status code ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//         setLoading(false); // Turn off loading after data is fetched
//       } catch (error) {
//         console.log(`Error message: `, error);
//         setError(
//           `An Error occuring while fetching the data. Please try again later`
//         );
//         setLoading(false); // Ensure loading stops on error
//       }
//     };

//     fetchData(); // Fetch data on mount
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-red-600 text-center text-7xl mb-6">API Data</h1>

//       {loading ? (
//         <div className="flex justify-center items-center h-48">
//           {/* Spinner Icon */}
//           <FaSpinner className="text-chocolate-500 text-7xl animate-spin m-20" />
//         </div>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <ul className="text-center text-2xl text-green-400 space-y-4">
//           {data.map((item) => (
//             <li key={item.id} className="p-4 bg-gray-100 rounded shadow">
//               {item.body}
//               <br />
//               <p className="text-blue-400">{item.email}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ApiExample;

/* ================================================
                🔵 4. How to Display API Data in React Components
4.1 State and Props in React🔵 
 ================================================ */
// import axios from "axios";
// import { useEffect, useState } from "react";
// import MyComponents from "./MyComponents";
// import { FaSpinner } from "react-icons/fa";
// const DisplayData = () => {
//   const [apiData, setApiData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts/1/comments"
//         );
//         // const result = response.json();
//         setApiData(response.data);
//       } catch (error) {
//         console.log(`Error with status code`, error.message);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>Api Display data using axios</h1>
//       {apiData ? (
//         <MyComponents data={apiData} />
//       ) : (
//         <FaSpinner className="text-chocolate-500 text-7xl animate-spin m-20" />
//       )}
//     </div>
//   );
// };

// export default DisplayData;

/* ================================================
  🔵 5. CRUD Operations with RESTful APIs 5.1 Creating Data (POST Requests)🔵 
 ================================================ */

// import axios from "axios";
// import React from "react";
// import { useState } from "react";

// const CreateData = () => {
//   const [newData, setNewData] = useState("");

//   const handleCreate = async () => {
//     try {
//       await axios.post(
//         "https://jsonplaceholder.typicode.com/posts/1/comments",
//         { newData }
//       );
//       alert("Data created successfully!");
//     } catch (error) {
//       console.error(`Error in creating data`, error);
//     }
//   };
//   return (
//     <div>
//       <h1>Create new Data</h1>
//       <input
//         type="text"
//         value={newData}
//         onChange={(e) => {
//           setNewData(e.target.value);
//         }}
//         className="focus:none bg-red-200"
//       />
//       <br />

//       <button onClick={handleCreate} className="p-3 bg-gray-300">
//         Submit
//       </button>
//     </div>
//   );
// };

// export default CreateData;

import axios from "axios";
import React, { useState } from "react";

const CreateData = () => {
  const [newData, setNewData] = useState("");

  const handleCreate = async () => {
    try {
      // Generate the full payload based on the input
      const payload = {
        postId: 1, // Static value as per the example structure
        id: Date.now(), // Unique ID (could be timestamp or other logic)
        name: newData, // User input
        email: "user@example.com", // Placeholder email
        body: "Default body text for the new comment", // Static text or dynamically generated
      };

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/1/comments",
        payload
      );

      alert("Data created successfully!");
      console.log("Created Data:", response.data);
    } catch (error) {
      console.error("Error in creating data", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Data</h1>
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
        placeholder="Enter name"
        className="p-2 border border-gray-300 rounded w-full mb-4"
      />
      <button
        onClick={handleCreate}
        className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default CreateData;
