import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ list, title }) => {
  return (
    <Box p={{ xs: 2, sm: 2, md: 6, lg: 6 }} minHeight="50vh">
      <Box mb={2}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 3, md: 4, lg: 6 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
          justifyContent="flex-start"
          columns={16}
        >
          {list?.results?.map((result) => (
            <Grid item key={result?.id} xs={16} sm={6} md={4} lg={2}>
              <MovieItem result={result} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MovieList;
