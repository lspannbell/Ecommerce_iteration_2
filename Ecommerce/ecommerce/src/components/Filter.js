
import React, { Component } from "react";
import Data from './products.json';
import PostList from "./PostList.js"
import '../App.css'




const initialState = {
  products: Data
}



export default class Filter extends Component {
        constructor() {
            super()
            this.state = initialState
      
      }
      
      filterProducts =(evt) => {
        let value = evt.target.value
      
        const allProducts =  [...initialState.products] 
          if (value === "All"){
            this.setState({products: allProducts})
            return 
          }
        const filterProducts = allProducts.filter(product => {
          return product.type === value
        })
        this.setState({products: filterProducts})
      };
      
      
      filterPrice =(evt) => {
        let value = evt.target.value
      
        const allProducts =  [...initialState.products] 
          if (value === "All"){
            this.setState({products: allProducts})
            return 
          }
        const filterPrice = allProducts.filter(product => {
          return product.price === value
        })
       
        this.setState({products: filterPrice})
      };
      
      
      render(){
      const mappedProducts = this.state.products.map(product => {
         
          return <PostList name={product.title} price={product.price} description={product.description} image={product.image} />
      
        })
      
      return (
      
        <div className="ProductsContainer ">
          <h1> Menu</h1>
            <select onChange={evt => this.filterProducts(evt)}>
                    <option value="All">All Types</option>
                    <option value="record">Record</option>
                     <option value="table">Tables</option>
                     <option value="headphones">Headphones</option>
            </select> 
      
            <select onChange={evt => this.filterPrice(evt)} >
                    <option value="All">All Prices</option>
                    <option value=">20.00">$5.00</option>
                    <option value=">50.00">$7.00</option>
                    <option value="100.00">$10.00</option>
                    <option value="200.00">$12.00</option>
            </select>
      <div>{mappedProducts}</div>
            </div>
  );
}}