import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Button } from '@mui/joy';
import styles from '../SearchAndSortBar.module.scss';

interface SearchAndSortBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'name' | 'email';
  setSortBy: (field: 'name' | 'email') => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
}

function SearchAndSortBar({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder
}: SearchAndSortBarProps) {
  return (
    <div className={styles.searchAndSortBar}>
      <TextField
        label="Search users by name"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        size='small'
      />
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'email')}
          label="Sort By"
          size='small'
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="outlined" // Use "solid" for a filled button in MUI Joy
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        fullWidth
        size='sm'
      >
        Sort Order: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </Button>
    </div>
  );
}

export default SearchAndSortBar;
