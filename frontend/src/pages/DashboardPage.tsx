import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  Flight,
  Hotel,
  DirectionsCar,
  Restaurant,
  TrendingUp,
  BookOnline,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: 'Book Flight',
      description: 'Find and book your next flight',
      icon: <Flight sx={{ fontSize: 40 }} />,
      link: '/flights',
      color: '#2196f3',
    },
    {
      title: 'Book Hotel',
      description: 'Reserve accommodation',
      icon: <Hotel sx={{ fontSize: 40 }} />,
      link: '/hotels',
      color: '#4caf50',
    },
    {
      title: 'Rent Car',
      description: 'Get a rental car',
      icon: <DirectionsCar sx={{ fontSize: 40 }} />,
      link: '/cars',
      color: '#ff9800',
    },
    {
      title: 'Find Restaurants',
      description: 'Discover local cuisine',
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      link: '/restaurants',
      color: '#e91e63',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Welcome back, {user?.firstName}!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ready for your next adventure? Explore our services below.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <CardContent>
              <BookOnline sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h4">0</Typography>
              <Typography variant="body2" color="text.secondary">
                Total Bookings
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <CardContent>
              <TrendingUp sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
              <Typography variant="h4">$0</Typography>
              <Typography variant="body2" color="text.secondary">
                Total Spent
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" sx={{ mb: 4 }}>
        Quick Actions
      </Typography>
      
      <Grid container spacing={3}>
        {quickActions.map((action, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                textAlign: 'center', 
                p: 3, 
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent>
                <Box sx={{ color: action.color, mb: 2 }}>
                  {action.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {action.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {action.description}
                </Typography>
                <Button
                  component={Link}
                  to={action.link}
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: action.color }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;