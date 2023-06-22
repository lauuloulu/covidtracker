import { AppBar, Button, IconButton, Toolbar, Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import './navbar.css'

 function Navbar() {
  return (
    <AppBar className="navBar">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          aria-label="menu"
          
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Covid
        </Typography>
        <Button color="inherit">Data</Button>
        <Button color="inherit">Start</Button>

        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar


