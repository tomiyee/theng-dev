import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Pdf from '../../assets/tommy-heng-resume.pdf';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Fade,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import useIsMobile from '../../hooks/useIsMobile';
import { Menu } from '@mui/icons-material';

const navbarLinks = [
  ['/#about', 'About'],
  ['/#projects', 'Projects'],
  ['/#contact', 'Contact'],
] as const;

const Navbar: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [, height] = useWindowSize();
  const scrollTop = useScrollTop();
  const isMobile = useIsMobile();
  const fadeIn =
    !isHomePage || scrollTop < height * 0.2 || scrollTop > height * 0.8;
  const alpha = isHomePage && scrollTop < height * 0.3 ? 0 : 1;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <Box flexGrow={1}>
      <Fade in={fadeIn}>
        <AppBar
          sx={{ background: `rgba(50, 53, 77, ${alpha})` }}
          elevation={alpha}
        >
          <Toolbar
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              gap: 4,
            }}
          >
            <Button href="/#banner">
              <NavbarTypography>Home</NavbarTypography>
            </Button>

            {!isMobile &&
              navbarLinks.map(([href, label]) => (
                <Button href={href} key="label">
                  <NavbarTypography>{label}</NavbarTypography>
                </Button>
              ))}
            {isMobile && (
              <>
                <Box flex={1} />
                <IconButton onClick={() => setDrawerOpen((old) => !old)}>
                  <Typography color="white">
                    <Menu />
                  </Typography>
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Fade>
      <Drawer anchor="top" open={isMobile && drawerOpen} onClose={closeDrawer}>
        <List sx={{ background: theme.palette.primary.main }}>
          <Link href={'/'} onClick={closeDrawer}>
            <ListItem>
              <ListItemText primaryTypographyProps={{ color: 'white' }}>
                Home
              </ListItemText>
            </ListItem>
          </Link>
          {navbarLinks.map(([href, label]) => (
            <Link href={href} onClick={closeDrawer} key={label}>
              <ListItem>
                <ListItemText primaryTypographyProps={{ color: 'white' }}>
                  {label}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
          <Link href={Pdf} target="_blank" onClick={closeDrawer}>
            <ListItem>
              <ListItemText primaryTypographyProps={{ color: 'white' }}>
                Resume
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

const useScrollTop = (): number => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const updateScrollTop = () => setScrollTop(window.scrollY);
    window.addEventListener('scroll', updateScrollTop);
    return () => window.removeEventListener('scroll', updateScrollTop);
  });

  return scrollTop;
};

const NavbarTypography = styled(Typography)({
  color: 'white',
  texTransform: 'uppercase',
  fontWeight: 'bold',
});
