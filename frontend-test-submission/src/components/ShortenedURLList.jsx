import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const ShortenedURLList = ({ list }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {list.map((item, index) => (
        <Card key={index} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  🔗 <strong>Original:</strong> {item.url}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  🌐 <strong>Short URL:</strong>{" "}
                  <a
                    href={`http://localhost:3000/${item.shortcode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://localhost:3000/{item.shortcode}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  ⏳ <strong>Expires at:</strong> {item.expiresAt}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShortenedURLList;
