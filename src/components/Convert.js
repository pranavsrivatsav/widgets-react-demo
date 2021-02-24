import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [convertedText, setConvertedText] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  const convert = async () => {
    if (!text) {
      setConvertedText('');
      return;
    }

    const response = await axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: debouncedText,
          target: language.value,
          key: process.env.REACT_APP_TRANSLATE_API_KEY,
        },
      }
    );

    setConvertedText(response.data.data.translations[0].translatedText);
  };

  useEffect(() => {
    convert();
  }, [language, debouncedText]);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), 500);
    return () => clearTimeout(timerId);
  }, [text]);

  return <div>{convertedText}</div>;
};

export default Convert;
