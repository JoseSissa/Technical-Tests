import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetchFacto } from './hooks/useCatFacto';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from './config';
// import { useFetchImage } from './hooks/useFetchImage';

function App() {
  const { facto, error, loading, getFacto } = useFetchFacto();
  // const [imageURL, setImageURL] = useState('');
  const [firstWord, setFirstWord] = useState('');
  const [textButton, setTextButton] = useState('Get Facto');

  useEffect(() => {
    if (facto === '') return;
    const word = facto.split(" ")[0];
    setFirstWord(word);
    setTextButton('Get Another Facto');
  }, [facto]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Technical Test</h1>
      <div className="card">
        <button onClick={getFacto}>
          {textButton}
        </button>
        <p>{facto}</p>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {/* {imageURL !== '' && <img src={imageURL} alt={`Image got with first word of the sentence: ${facto}`} width={400} />} */}
        {firstWord && <img src={API_URL.CATFACT_WORD_IMAGE + firstWord} alt={`Image got with first word of the sentence: ${facto}`} width={400} />}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
