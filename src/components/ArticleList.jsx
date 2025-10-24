import React, { Component } from 'react';
import '../styles/ArticleList.scss';

class ArticleList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <ul className="article-list">
        {articles.map(({ objectID, url, title }) => (
          <li key={objectID} className="article-item">
            <a href={url} target="_blank" rel="noreferrer noopener">
              {title || 'Untitled'}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default ArticleList;