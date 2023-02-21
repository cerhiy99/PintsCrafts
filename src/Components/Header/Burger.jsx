import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useNavigate } from 'react-router';

const Burger = () => {
    const [open, setOpen] = useState(false);
    const navigate=useNavigate();  
    return (
        <div className='burger'>
            <IconButton onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List onClick={()=>setOpen(false)} style={{"color":"white","height":"100%","opcity":"0.5","backgroundColor":"rgba(0,0,0,0.91)"}}>
                    <ListItem button>
                        <ListItemText onClick={()=>navigate("/")} primary="головна" />
                    </ListItem>
                    <ListItem onClick={()=>navigate("/aboutUs")} button>
                        <ListItemText primary="про нас" />
                    </ListItem>
                    <ListItem onClick={()=>navigate("/menu")} button>
                        <ListItemText primary="меню" />
                    </ListItem>
                    <ListItem onClick={()=>navigate("/teem")} button>
                        <ListItemText primary="команда" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
  )
}

export default Burger
