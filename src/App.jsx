import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ArticleList from './components/ArticleList';
import Button from './components/Button';
import Loader from './components/Loader';
import { fetchArticlesWithQuery } from './services/api';
import './styles/App.scss';

class App extends Component {
  state = {
    articles: [],
    query: 'react',
    page: 0,
    isLoading: false,
    error: null,
    totalPages: 0,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchArticles();
    }
  }

  fetchArticles = async () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const data = await fetchArticlesWithQuery(query, page);
      this.setState((prevState) => ({
        articles: page === 0 ? data.hits : [...prevState.articles, ...data.hits],
        totalPages: data.nbPages,
      }));
    } catch (err) {
      this.setState({ error: 'Failed to fetch articles.' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = (newQuery) => {
    if (newQuery !== this.state.query) {
      this.setState({
        query: newQuery,
        page: 0,
        articles: [],
        totalPages: 0,
        error: null,
      });
    }
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { articles, isLoading, error, page, totalPages } = this.state;
    const hasMoreArticles = page < totalPages - 1;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <p className="error">{error}</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {isLoading && <Loader />}
        {articles.length > 0 && !isLoading && hasMoreArticles && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;