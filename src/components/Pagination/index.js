import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

class CustomPagination extends Component {
  get pageCount() {
    const { total, perPage } = this.props;
    return Math.ceil(total / perPage) || 1;
  }

  renderPages = () => {
    const { currentPage, perPage, total } = this.props;
    const { pageCount } = this;
    const from = currentPage * perPage + 1;
    const to =
      currentPage === pageCount - 1 ? total : (currentPage + 1) * perPage;

    if (total === 1) {
      return <p className="my-0 mx-3">1 of 1</p>;
    }

    return (
      <p className="my-0 mx-3 d-flex align-items-center">{`${from} .. ${to}  of  ${total}`}</p>
    );
  };

  render() {
    const { currentPage, onChange } = this.props;
    const { pageCount } = this;

    return (
      <Pagination>
        <Pagination.First
          disabled={currentPage === 0}
          onClick={() => onChange(0)}
        />
        <Pagination.Prev
          disabled={currentPage === 0}
          onClick={() => onChange(currentPage - 1)}
        />
        {this.renderPages()}
        <Pagination.Next
          disabled={currentPage === pageCount - 1}
          onClick={() => onChange(currentPage + 1)}
        />
        <Pagination.Last
          disabled={currentPage === pageCount - 1}
          onClick={() => onChange(pageCount - 1)}
        />
      </Pagination>
    );
  }
}

CustomPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomPagination;
