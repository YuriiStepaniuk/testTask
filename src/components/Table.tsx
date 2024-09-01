import { useState, useEffect } from "react";
import LoadingSpinner from "./UI/LoadingSpinner";

interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: any;
  company: any;
}
// {any} to avoid describing nested objects, since it`s not required for the task

const Table = () => {
  const [userData, setUserData] = useState<null | User[]>(null);
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);

        setUserData(data);
        setIsFetching(false);
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  const tableCol = "px-4 py-2 border text-center";

  let output = <LoadingSpinner message="Fetching all users data..." />;
  if (!isFetching)
    output = (
      <table className="table-auto">
        <thead>
          <tr className="text-3xl text-gray-50 bg-gray-950">
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <tr key={user.id} className="text-2xl bg-slate-400">
              <td className={tableCol}>{user.id}</td>
              <td className={tableCol}>{user.name}</td>
              <td className={tableCol}>{user.username}</td>
              <td className={tableCol}>{user.email}</td>
              <td className={tableCol}>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  return <>{output}</>;
};

export default Table;
