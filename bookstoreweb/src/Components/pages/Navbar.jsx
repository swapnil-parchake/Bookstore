import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
const navbar = styled.div`
display:flex;
background-color: red;
justify-content:space-evenly;
font-weight:bold;
& a{
  color: voilet;
  text-decoration:none;
}
& a:hover{
  text-decoration: underline;
}`


export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav className = "navbar">
        {/* keep all the NavLinks here */}
      <NavLink to ='/'>Home</NavLink>
      <NavLink to ='/about'>About</NavLink>
      <NavLink to ='/login'>Login</NavLink>
      <NavLink to ='/logout'>Logout</NavLink>
      <NavLink to ='/books'>Books</NavLink>
        
      </nav>
    </>
  );
};
export default Navbar