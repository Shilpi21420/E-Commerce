import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import './App.css';
import Productslist from './components/product/ProductList';


const App =() => {
  return (
    <>
    <Navbar bg='dark' expand='sm' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>
          <h1>The Generics</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Productslist />
    </>
  
  );
}

export default App;
