import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CarsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Car Rental
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Rent a car for your next adventure.
        </Typography>
      </Box>
    </Container>
  );
};

export default CarsPage;