/*colors scheme #05386B #379683 #5cdb95 #8ee4af #EDF5E1 */

import React, {useState} from 'react';
import {useAuth} from '../contexts/authContext';
import UpdateProfile from "../login/updateProfile";
import {useHistory, Route} from "react-router-dom"; 
import {TrackProduct} from "./trackProduct";
import {AddProduct} from "./addProduct" ;
import "./navbar.scss";
import {About} from "./about";
import {Nav ,Navbar , NavDropdown,Container} from "react-bootstrap";


export function ManuDash(props){

    const [icon, setIcon] = useState(true);
    const [open,setOpen] = useState(false);
    const {logout} = useAuth();
    const history = useHistory();

      const handlelogout = async (e) => {
        await logout().then((user) => {
          history.push('./login')
      }
      )
    }

    function handleOpen(){
      setOpen(true)
    }

    return(<div style = {{
      height:"100vh",
        backgroundColor:"#5cdb95"
    }}>
            <Navbar expand ="lg" style = {{
              background: "#8ee4af",
              overflow:"visible",
              borderBottom:"4px solid #05386B",
      }} sticky="top" collapseOnSelect>
              <Navbar.Brand style = {{
                marginLeft: "50px",
                color:"#05386B",
                fontWeight: "500",
                fontSize:"22px",
                flexGrow: "10"
              }}>
                Supply Chain
              </Navbar.Brand>
              <Navbar.Toggle style = {{
                border:"none",
                color: "#05386B",
                fontSize:"25px"
              }}  onClick = {() => {setIcon(prev => !prev)}}>
                <i class = {icon?"fa fa-bars":"fa fa-times"} ></i>
              </Navbar.Toggle>
              <Navbar.Collapse>
          <Nav onSelect={() => setIcon(prev => !prev)}>
              <Nav.Link href="./#/home/addproduct" >Add Product</Nav.Link>
              <Nav.Link href="./#/home/trackproduct" >Track Product</Nav.Link>
              <Nav.Link onClick = {handleOpen} >About</Nav.Link>
              < NavDropdown title = "Profile">
                <NavDropdown.Item href="./#/home/profile">Update Profile</NavDropdown.Item>
                <NavDropdown.Item onClick = {handlelogout} >Logout</NavDropdown.Item>
            </NavDropdown>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Container component="main">
                <Route path = "/home/profile" component = {UpdateProfile}></Route>
                <Route path = "/home/trackproduct" component = {TrackProduct}></Route>
                <Route path = "/home/addproduct" component = {AddProduct}></Route>
                <About open = {open} setOpen = {setOpen}/>
            </Container>
            </div>
          )
}
