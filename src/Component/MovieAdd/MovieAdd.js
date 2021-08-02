import React, { useState } from "react";
import { Button,Modal } from "react-bootstrap";

const AddMovie = ({ handleAdd}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [url, setUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      id: Math.random(),
      title,
      description,
      rate,
      posterUrl: url,
    }
    if (title && description && rate && url) {
        handleAdd(newMovie);
        setTitle("");
        setDescription("");
        setRate(0);
        setUrl("");
    } else {
      alert("all fiels shouldn be empty");
    }
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            title:
            <input
              type="text"
              placeholder="enter movie title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="form-control"
            />
            description:
            <input
              type="text"
              placeholder="enter description movie"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="form-control"
            />
            rate:
            <input
              type="number"
              placeholder="enter movie rate"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
              className="form-control"
            />
            posterUrl:
            <input
              type="url"
              placeholder="enter movie url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              className="form-control"
            />
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
