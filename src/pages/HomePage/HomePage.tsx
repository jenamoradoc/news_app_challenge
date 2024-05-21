import { Header, Footer, Navbar, NewsList, Spinner } from '../../components';
import useNews from './hooks/useNews';

const HomePage = () => {
  const {
    articles,
    loading,
    searchTerm,
    handleNewsSearch,
    handleSearchTermChange,
  } = useNews();

  return (
    <>
      <Navbar />
      <Header
        handleSubmit={handleNewsSearch}
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      {loading ? <Spinner /> : <NewsList articles={articles} />}
      <Footer />
    </>
  );
};

export default HomePage;
