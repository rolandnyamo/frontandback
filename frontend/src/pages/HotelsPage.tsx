import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HotelsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Hotel Booking
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Find and book the perfect accommodation for your stay.
        </Typography>
      </Box>
    </Container>
  );
};

export default HotelsPage;