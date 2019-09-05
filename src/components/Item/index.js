import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FontAwesome from 'react-fontawesome';

import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleModal = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  markFavorite = imageId => {
    const { markFavorite } = this.props;
    this.toggleModal();
    markFavorite(imageId);
  };

  renderModal = () => {
    const { show } = this.state;
    const { data } = this.props;

    return (
      <Modal show={show} onHide={this.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={data.url} alt="Preview" />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            disabled={data.isFavorite}
            onClick={() => this.markFavorite(data.id)}
          >
            <FontAwesome name="thumbs-up" />
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  render() {
    const { data } = this.props;

    return (
      <Card className="item m-1" style={{ width: 150 }}>
        <Card.Img
          className="c-pointer"
          variant="top"
          src={data.thumbnailUrl}
          onClick={this.toggleModal}
        />
        <Card.Body className="p-1">
          <Card.Text>{data.title}</Card.Text>
        </Card.Body>
        {data.isFavorite && (
          <FontAwesome className="favorite" name="thumbs-up" />
        )}
        {this.renderModal()}
      </Card>
    );
  }
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
  markFavorite: PropTypes.func.isRequired,
};

export default Item;
