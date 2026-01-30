import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const FlightsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Flight Booking
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Search and book flights to your favorite destinations.
        </Typography>
      </Box>
    </Container>
  );
};

export default FlightsPage;