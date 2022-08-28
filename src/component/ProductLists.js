import React from 'react';
import Product from './Product';

export default function ProductLists(props) {
  return props.productLists.length > 0 ?
    props.productLists.map((product, i) => {
      return <Product product={product} key={i} incrementQuantity={props.a} index={i} decrementQuantity={props.b} removeItem={props.removeItem} />
    }) : <h1>No Products Exists in the Carts</h1>
}


