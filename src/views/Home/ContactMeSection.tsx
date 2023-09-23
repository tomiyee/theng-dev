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

const ContactMeSection: React.FC = () => {
  const theme = useTheme();
  return (
    <HomePageSection
      title="Contact Me"
      id="contact"
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
              />
              <Typography fontWeight="bold">Email</Typography>
              <TextField
                variant="filled"
                id="contact-email"
                placeholder="Enter your email"
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
              />
            </Stack>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
            <Box p={1} display="flex" justifyContent="end">
              <Button variant="contained">Send</Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </HomePageSection>
  );
};
export default ContactMeSection;
