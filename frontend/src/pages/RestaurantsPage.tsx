import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const RestaurantsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Restaurant Recommendations
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover amazing local restaurants and cuisine.
        </Typography>
      </Box>
    </Container>
  );
};

export default RestaurantsPage;