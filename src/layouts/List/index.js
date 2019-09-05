import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { getImagesRequest, markFavorite } from '../../redux/images/actions';
import { Item, Pagination } from '../../components';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pageLimit: 14,
    };
  }

  componentDidMount() {
    const { getImages } = this.props;
    getImages();
  }

  handleChangePage = currentPage => {
    this.setState({ currentPage });
  };

  handleMarkFavorite = imageId => {
    const { markAsFavorite } = this.props;
    markAsFavorite(imageId);
  };

  render() {
    const { list, loading } = this.props;
    const { currentPage, pageLimit } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <Row className="justify-content-center mb-4">
          {list
            .slice(currentPage * pageLimit, (currentPage + 1) * pageLimit)
            .map(item => (
              <Item
                key={item.id}
                data={item}
                markFavorite={this.handleMarkFavorite}
              />
            ))}
        </Row>
        <Row className="justify-content-center">
          <Pagination
            currentPage={currentPage}
            perPage={pageLimit}
            total={list.length}
            onChange={this.handleChangePage}
          />
        </Row>
      </Container>
    );
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  markAsFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  list: state.images.list,
  loading: state.images.loading,
});

const mapDispatchToProps = {
  getImages: getImagesRequest,
  markAsFavorite: markFavorite,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
