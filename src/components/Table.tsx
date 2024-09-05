import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, User } from "../store/slices/userSlice";

import LoadingSpinner from "./UI/LoadingSpinner";
import { RootState } from "../store/store";

const Table = ({ column, query }: { column: string; query: string }) => {
  // const [userData, setUserData] = useState<null | User[]>(null);

  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        dispatch(setUsers(data));

        setIsFetching(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [dispatch]);

  const filteredData = userData.filter((user) =>
    user[column as keyof User]
      .toString()
      .toLowerCase()
      .includes(query.toLowerCase())
  );

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
          {filteredData.map((user: User) => (
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
