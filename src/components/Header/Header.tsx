import { FaMagnifyingGlass } from 'react-icons/fa6';

import './styles/index.css';

export interface HeaderProps {
  handleSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  searchTerm: string;
}

const Header = ({
  handleSearchTermChange,
  handleSubmit,
  searchTerm,
}: HeaderProps) => {
  return (
    <header className='header'>
      <form id='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search news...'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button type='submit'>
          <FaMagnifyingGlass />
        </button>
      </form>
    </header>
  );
};

export default Header;
