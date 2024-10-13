import { useEffect, useState } from 'react';
import UserList from './components/UserList';
import SearchAndSortBar from './components/SearchAndSortBar';
import styles from './App.module.scss';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'email'>('name');

  // Fetching users data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Initialize filtered users with the fetched users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Filter and sort users based on search query, sort order and sort criteria
  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      let compareValue = 0;

      if (sortBy === 'name') {
        compareValue = a.name.localeCompare(b.name);
      } else if (sortBy === 'email') {
        compareValue = a.email.localeCompare(b.email);
      }

      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

    setFilteredUsers(sorted);
  }, [searchQuery, sortOrder, sortBy, users]);

  return (
    <div className={styles.app}>
      <SearchAndSortBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <UserList fileteredUsers={filteredUsers} />
    </div>
  );
}

export default App;
