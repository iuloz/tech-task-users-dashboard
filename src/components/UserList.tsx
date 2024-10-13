import UserCard from './UserCard';
import styles from '../UserList.module.scss';

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

interface UserListProps {
  fileteredUsers: User[];
}

function UserList({ fileteredUsers }: UserListProps) {
  return (
    <div className={styles.userList}>
      {fileteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
