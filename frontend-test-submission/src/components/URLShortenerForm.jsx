import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { log } from "../utils/logger";

const URLShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [error, setError] = useState("");

  // ✅ Validate the given string is a valid URL
  const isValidURL = (input) => {
    try {
      new URL(input);
      return true;
    } catch (_) {
      return false;
    }
  };

  // ✅ Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ URL invalid
    if (!isValidURL(url)) {
      const msg = "❌ Invalid URL format";
      setError(msg);
      log("frontend", "error", "component", msg);
      return;
    }

    // ❌ Validity not a number
    if (validity && isNaN(validity)) {
      const msg = "❌ Validity must be a number";
      setError(msg);
      log("frontend", "error", "component", msg);
      return;
    }

    // ✅ Clear error & log
    setError("");
    log("frontend", "info", "component", "Form submitted successfully");

    // 🔁 Pass data to parent
    onShorten({ url, validity, shortcode });

    // ♻️ Reset form fields
    setUrl("");
    setValidity("");
    setShortcode("");
  };

  return (
    <Card variant="outlined" sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          🔗 Shorten a URL
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Original URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Validity (min)"
                value={validity}
                onChange={(e) => setValidity(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Custom Shortcode"
                value={shortcode}
                onChange={(e) => setShortcode(e.target.value)}
                fullWidth
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography color="error">{error}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Shorten
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default URLShortenerForm;
