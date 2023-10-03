
import React, { useState } from "react";
import styled from "styled-components";


const MenuLabel = styled.label`
  background-color: transparent;
  position: fixed;
  top: 5rem;
  left: 3rem;
  height: 9rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition:  0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f8f9fa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: #343078;
    }
  }
`;

const Hamburger = ({ open, setOpen }) => {
  return (
    <MenuLabel htmlFor="navi-toggle" onClick={() => setOpen(!open)}>
      <Icon clicked={open}>&nbsp;</Icon>
    </MenuLabel>
  );
};

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Profile</a>
      <a href="/todo">Todo App</a>
    </StyledMenu>
  );
};

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Hamburgermenu = () => {
  const [open, setOpen] = useState(false);
  const node = React.useRef();

  const closeMenu = () => {
    if (open) {
      setOpen(false);
    }
  };

  useOnClickOutside(node, closeMenu);

  return (
    <div>
      <div ref={node}>
        <Hamburger open={open} setOpen={setOpen} />
        <Menu open={open} />
        
      </div>
    </div>
  );
};

export default Hamburgermenu;
