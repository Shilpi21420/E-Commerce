import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductContext from '../../store/product-context';


const Product=(props)=> {
 
  const cartState=useContext(ProductContext);
  const addproductcart=()=>{

    cartState.addItem({...props,quantity:props.quantity})

  }
  return (
    <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Title className='text-center'>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <h4>${props.price}</h4>
        
        <Button className='text-center' onClick={addproductcart} variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}
export default Product;