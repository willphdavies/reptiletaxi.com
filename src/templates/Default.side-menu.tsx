import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from "react-router-dom";

interface DefaultSideMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export function DefaultSideMenu(props: DefaultSideMenuProps) {
  const { isOpen, setIsOpen } = props;
  return (
    <Drawer
        anchor="right"
        open={isOpen}
      >
        <Box
          className="side-menu"
          sx={{ width: 250 }}
          component="aside"
          role="presentation"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}>
          <List className="side-menu__list" disablePadding>
            <ListItem>
              <ListItemButton component={Link} to="/">
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component={Link} to="/about">
                <ListItemIcon><HelpIcon /></ListItemIcon>
                <ListItemText>About Us</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
  )
}