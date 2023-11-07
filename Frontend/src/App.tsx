import { useEffect, useState } from "react";
import "./App.css";

interface User {
  name: string,
  age: number
}

function App() {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/getAll")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <h1 className="font-bold text-2xl tracking-wider mb-10">CONEXION CON EL BACK END</h1>
    <ul className='menu bg-base-200 w-[25rem] rounded-box'>
        <li className='menu-title text-lg'>Users</li>
        {users.map((item: User, index: number) => (
          <li key={index}><a className="text-gray-400">{index+1}. {item.name}</a></li>
        ))}
    </ul>
    </>
  );
}

export default App;
