import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function HomePage() {
  // State for the input value
  const [inputValue, setInputValue] = useState('');
  // State for the list of words
  const [wordsList, setWordsList] = useState([]);

  // Function to handle the addition of a word
  const addWord = () => {
    if (!inputValue.trim()) return; // Prevent adding empty strings
    setWordsList([...wordsList, inputValue]);
    setInputValue(''); // Clear the input after adding
  };

  return (
    <>
      <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light">
        <Container>
          <Link to="/" className="navbar-brand">Lexica</Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#ai-sentence-generation">Use it in a Sentence</Nav.Link>
            <Nav.Link href="#type-sentence">Write it Out</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Dylan</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="p-4 fs-1 text-center" style={{ maxWidth: '80%', margin: 'auto' }}>
        Welcome to Lexica! Add your words below and cement them into your vocabulary with our customized AI training.
      </div>

      {/* Search Bar */}
      <Container className="my-3">
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="wordInput">
            <Form.Control
              type="text"
              placeholder="Enter a word"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={addWord}>
            Add Word
          </Button>
        </Form>
      </Container>

      {/* Words List */}
      <Container>
        <ul>
          {wordsList.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default HomePage;
