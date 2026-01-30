import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const BookingsPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          My Bookings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome {user?.firstName}! Manage all your travel bookings here.
        </Typography>
      </Box>
    </Container>
  );
};

export default BookingsPage;