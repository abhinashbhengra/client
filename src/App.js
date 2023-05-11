import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);
  return <div>App</div>;
};

export default App;
