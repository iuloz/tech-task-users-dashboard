import { Card } from '@mui/material';
import styles from '../UserCard.module.scss';

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

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <Card className={styles.userCard}>
      <h2>{user.name}</h2>
      <p><span>Email:</span> {user.email}</p>
      <p><span>Phone:</span> {user.phone}</p>
      <p><span>Website:</span> {user.website}</p>
      <p><span>Address:</span> {`${user.address.street}, ${user.address.city}`}</p>
    </Card>
  );
}

export default UserCard;
