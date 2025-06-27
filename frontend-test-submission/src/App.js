import React, { useState } from "react";
import URLShortenerForm from "./components/URLShortenerForm";
import ShortenedURLList from "./components/ShortenedURLList";
import { Container } from "@mui/material";

function App() {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleShorten = ({ url, validity, shortcode }) => {
    const now = new Date();
    const minutes = validity ? parseInt(validity) : 30;
    const expiresAt = new Date(now.getTime() + minutes * 60000).toLocaleString();

    const shortCode = shortcode || Math.random().toString(36).substring(2, 7);

    const newEntry = {
      url,
      shortcode: shortCode,
      expiresAt,
    };

    setShortenedLinks([...shortenedLinks, newEntry]);
  };

  return (
    <Container maxWidth="md">
      <h2>⚡ URL Shortener</h2>
      <URLShortenerForm onShorten={handleShorten} />
      <ShortenedURLList list={shortenedLinks} />
    </Container>
  );
}

export default App;
