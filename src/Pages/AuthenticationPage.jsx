import React from 'react';
import { 
  Card, 
  CardContent, 
  Button, 
  Typography, 
  Grid, 
  Avatar,
  Paper,
  Container
} from '@mui/material';
import { Google as GoogleIcon, Logout as LogoutIcon } from '@mui/icons-material';
import {useDispatch} from 'react-redux';
import {login} from '../Redux/authenticationSlice';
const AuthenticationPage = ({}) => {
  const dispatch = useDispatch();
  const handleclick=()=>{
    dispatch(login());
  }
    return (
      <Container sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <Card sx={{ maxWidth: 400, width: '100%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom align="center">
              Sign In
            </Typography>
            <Button
              variant="contained"
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={handleclick}
              sx={{ mt: 2 }}
            >
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  };
  export default AuthenticationPage;