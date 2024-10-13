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
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'name' | 'email')}>
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
      </select>
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort Order: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </button>
    </div>
  );
}

export default SearchAndSortBar;
