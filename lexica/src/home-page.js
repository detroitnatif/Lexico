import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import NavBar from './navbar';

function HomePage() {
  // State for the input value
  const [inputValue, setInputValue] = useState('');
  // State for the list of words
  const [wordsList, setWordsList] = useState([]);

  // Function to handle the addition of a word
  // Need to add functionality to detect if the inputted word -- whatever is in inputValue -- is an actual word
  // Maybe can download a txt file with all possible words from dictionary and check it based on that
  const addWord = () => {
    if (!inputValue.trim()) return; // Prevent adding empty strings
    setWordsList([...wordsList, inputValue]); //This line creates a new array with all of the existing elements with the input 
                                             // value added. When it's added we reset the value of inputValue to blank
                                             // to add another word (on the next line)
    setInputValue(''); // Clear the input after adding
  };

  return (
    <>
      <NavBar />

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
