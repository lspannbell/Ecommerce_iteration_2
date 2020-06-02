// import React, {Component} from 'react';
// import Data from './products';
// import  '../App.css';


// class PostList extends Component {
//     render() {
//   return (
//     <div>
//       <header>
//     <div class="header">
//        <h1>ARCHIVE</h1>
//    </div>
//    <nav class="navbar">
//        <ul>
//            <li><a href="index.html">Home</a></li>
//            <li><a href="products.html">Products</a></li>
//            <li><a href="contact.html">Contact</a></li>
//        </ul>
//    </nav>
//    <div class="hero-image">
//        <div class="hero-text">
//          <p>Take a look at some of our products!</p>
//        </div>
//      </div>
// </header>
//         <h2>Products</h2>
//         {ProductData.map((productDetail, index)=>{
//           return <div className="container">
//             <p>{productDetail.title}</p>
//             <p>{productDetail.description}</p>
//             <p>{productDetail.price}</p>
//             <img src={productDetail.image}/>
        
//         </div>

//         })}
//         {/* <div>
//         <img src="img/Product1Record.png" />
//           <img src="img/Product2Record.png" />
//           <img src="img/Product3Record.png" />
//           <img src="img/Product4Record.png" />
//           <img src="img/Product5Record.png" />
//           <img src="img/Product6Record.png" />
//           <img src="img/Product7Record.png" />
//           <img src="img/Product8Record.png" />
//           <img src="img/Product9Table.png" />
//           <img src="img/Product10Table.png" />
//           <img src="img/Product11Headphones.png" />
//           <img src="img/Product12Headphones.png" />
//         </div> */}
        
//         <footer class="footer">     
//     <wrapper class="social">
//         <p>Social Media</p>
//     <a href="facebook.com">Facebook</a>
//     <a href="twitter.com">Twitter</a>
//     <a href="instagram.com">Instagram</a>
//     </wrapper>
//     <wrapper class="questions" >
//         <p>Message Us</p>
//         <p>FAQ</p>
//         <p>Careers</p>
//     </wrapper>
//         <wrapper class="cpyright">
//         <p>©Archive Record Store</p>
//     </wrapper>
// </footer> 
      
//     </div>
//   )
//  } //description type price image ,index
// }

import React from 'react';
import  '../App.css';


const PostList = ({title,description,price,image}) => {
    return (
   
          <header>
          <div class="header">
            <h1>ARCHIVE</h1>
         </div>
        <nav class="navbar">
              <ul>
                  <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="contact.html">Contact</a></li>
             </ul>
       </nav>
       <div class="hero-image">
             <div class="hero-text">
                <p>Take a look at some of our products!</p>
             </div>
            </div>
      </header>
        <div className="card">
         <img src={image} alt="Image of product" className="MenuImg" />
        <div className="container2">
            <h3 className="ProductName">{title}</h3>
            <p className="Description">{description}</p>
           <p className="price">{price}</p>
           <button className="ProductButton " type="button">Buy Now</button>
        </div>
        </div>
      
        
        
    )
}

export default PostList;

// export default PostList;
