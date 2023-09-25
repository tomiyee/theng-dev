import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import HomePageSection from './HomePageSection';
import { useState } from 'react';

const ContactMeSection: React.FC = () => {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    // Check for valid fields first
    if (name.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }
    if (message.trim().length === 0) {
      return;
    }
  };
  return (
    <HomePageSection
      title="Contact Me"
      id="contact"
      subtitle="Feel free to contact me using the form below and I will get back to you as soon as possible!"
      componentProps={{ sx: { backgroundColor: theme.palette.grey[200] } }}
    >
      <Box width="100%" maxWidth="md">
        <Card elevation={2}>
          <CardHeader title="Email Me" />
          <CardContent>
            <Stack spacing={1} component="form">
              <Typography fontWeight="bold">Name</Typography>
              <TextField
                variant="filled"
                id="contact-name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Typography fontWeight="bold">Email</Typography>
              <TextField
                variant="filled"
                id="contact-email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Typography fontWeight="bold" pt={2}>
                Message
              </Typography>
              <TextField
                variant="filled"
                id="contact-message"
                multiline
                minRows={7}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Stack>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
            <Box p={1} display="flex" justifyContent="end" onClick={sendEmail}>
              <Button variant="contained">Send</Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </HomePageSection>
  );
};
export default ContactMeSection;
