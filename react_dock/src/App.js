import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {data ? (
        data.map((item, index) => {
          return (
            <div style={{ marginTop: "40px" }} key={index}>
              <h1>this is data at index : {index}</h1>
              <p>ID: {item.UserID}</p>
              <p>Username: {item._username}</p>
              <p>Password: {item._password}</p>
              <p>Role: {item.role}</p>
              <p>Recent Login: {item.last_login_date_time}</p>
              <p>Recent Logout: {item.last_logout_date_time}</p>
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default App;
