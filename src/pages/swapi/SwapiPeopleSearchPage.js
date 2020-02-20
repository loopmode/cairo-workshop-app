import React from "react";
import { Link } from "react-router-dom";
import qs from "qs";

const urlUtils = {
  /** Parses the query params of a location object and returns an object */
  getParams: str => qs.parse(str, { ignoreQueryPrefix: true }),

  /** Returns the value of the page query param ("?searchTerm=" or "&searchTerm=") */
  getSearchTerm: str => urlUtils.getParams(str).searchTerm,

  /** Returns the value of the page query param ("?page=" or "&page=") */
  getPageNumber: str => {
    return urlUtils.getParams(str).page;
  },

  /**
   * Returns the id part of a swapi entity URL.
   * The last segment in the URL is the ID, e.g. "https://swapi.co/api/people/1/" -> "1"
   * @param {string} url
   * @return {string} the ID
   */

  getIdFromUrl: url => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  }
};

const initialState = {
  results: [],
  isLoading: false,
  previous: "",
  next: "",
  searchTerm: ""
};

export default class SwapiPeopleSearchPage extends React.Component {
  static defaultProps = {
    apiUrl: "https://swapi.co/api/people/"
  };
  state = {
    ...initialState
  };

  async componentDidMount() {
    this.handleQueryParams(this.props.location.search);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.handleQueryParams(this.props.location.search);
    }
  }

  componentWillUnmount() {
    if (this.abortFetch) {
      this.abortFetch();
    }
  }

  render() {
    const { previous, next, isLoading, searchTerm, results } = this.state;
    return (
      <div>
        <header>
          <h3>People search</h3>
          <form onSubmit={this.handleFormSubmit}>
            <input type="text" onChange={this.handleInputChange} value={searchTerm} disabled={isLoading} />
            <button type="submit" disabled={isLoading}>
              Search
            </button>
          </form>
        </header>

        {results.map(result => {
          return (
            <div key={result.url}>
              <Link to={`/swapi/people/${urlUtils.getIdFromUrl(result.url)}`}> {result.name}</Link>
            </div>
          );
        })}

        <footer>
          <nav>
            {previous && (
              <Link to={`/swapi/people/?searchTerm=${this.state.searchTerm}&page=${urlUtils.getPageNumber(previous)}`}>
                prev
              </Link>
            )}
            {next && (
              <Link to={`/swapi/people/?searchTerm=${this.state.searchTerm}&page=${urlUtils.getPageNumber(next)}`}>
                next
              </Link>
            )}
          </nav>
        </footer>
      </div>
    );
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm) {
      this.props.history.push(`/swapi/people/?searchTerm=${encodeURIComponent(this.state.searchTerm || "*")}`);
    } else {
      this.props.history.push(`/swapi/people/`);
    }
  };

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleQueryParams(queryString) {
    const { page, searchTerm } = urlUtils.getParams(queryString);
    if (searchTerm) {
      this.search(searchTerm, page);
    } else {
      this.setState(initialState);
    }
  }
  async search(searchTerm, page) {
    this.setState({ isLoading: true, searchTerm });

    const controller = new AbortController();
    const signal = controller.signal;
    this.abortFetch = () => controller.abort();

    try {
      let url = `${this.props.apiUrl}?format=json`;
      if (searchTerm !== "*") {
        url = `${url}&search=${searchTerm}`;
      }
      if (page) {
        url = `${url}&page=${page}`;
      }
      const response = await fetch(url, { signal });
      const { next, previous, results } = await response.json();
      this.setState({ isLoading: false, previous, next, results });
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("search failed", error);
      }
    }

    this.abortFetch = null;
  }
}
