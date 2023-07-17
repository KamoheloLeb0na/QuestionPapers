import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Person } from '@mui/icons-material';

const settings = ['Profile',  'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky" sx={{backgroundColor:"transparent",color:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Math
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem  onClick={handleCloseNavMenu}>
              <Button sx={{width:"100%",justifyContent:"start"}}> <a href="/" style={{textDecoration:"none",color:"black"}}>Home</a> </Button>
              </MenuItem>

              <MenuItem  onClick={handleCloseNavMenu}>
              <Button sx={{width:"100%",justifyContent:"start"}}> <a href="/lgcse2" style={{textDecoration:"none",color:"black",}}>LGCSE 2</a> </Button>
              </MenuItem>

              <MenuItem  onClick={handleCloseNavMenu}>
              <Button sx={{width:"100%",justifyContent:"start"}}> <a href="/lgcse4" style={{textDecoration:"none",color:"black",}}>LGCSE 4</a> </Button>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
              <Button sx={{width:"100%",justifyContent:"start"}}> <a href="/lgcse" style={{textDecoration:"none",color:"black"}}>Notes</a> </Button>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
              <Button sx={{width:"100%",justifyContent:"start"}}> <a href="/" style={{textDecoration:"none",color:"black"}}>SaveMyExams 2</a> </Button>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
              <Button sx={{width:"100%",justifyContent:"start"}}> <a href="/" style={{textDecoration:"none",color:"black"}}>SaveMyExams 4</a> </Button>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Math
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,color:"black"}}
              >
                Paper 2
              </Button>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,color:"black"}}
              >
                Paper 4
              </Button>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,color:"black"}}
              >
                Paper 2(SaveMyExams)
              </Button>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,color:"black"}}
              >
                Paper 4(SaveMyExams)
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={Person} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;