import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import productfile from './components/producttile';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstState: 'hello World',
      cartCount: 0 ,
      alertOncartCount : 10 ,
      products : [],
      cart : []
    }
  }
  componentDidMount() {
    this.loadproducts();
    this.initCart();
    this.setState({
      firstState: 'Welcome to our shop'
    })
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.cartCount >= this.state.alertOncartCount)
    {
      alert('Oops cart limit exceeded')
    }
  }
  initCart()
  {
    let mycart = localStorage.getItem('cart')
    mycart = JSON.parse(mycart)
    this.setState({
      cart: mycart || []
    })
  }
  addtoCart(product)
  {
    const newCart = this.state.cart;
    newCart.push(product);

    localStorage.setItem('cart', JSON.stringify(newCart))
    this.setState({
      cart: newCart
    })
  }
  loadproducts()
  {
    fetch('http://my-json-server.typicode.com/shiyasvp92/sample_products/products', {
      method: 'GET'
    })
    .then((response) => {
      return response.json()
    })
    .then((data)=> {
      console.log(data)
      this.setState({
        products: data
      })
    })
    .catch((error)=> {
      console.error(error)
    })
  }
  viewCart()
  {
    console.log(this.state.cart)
  }
  render() {
    const productlist = this.state.products.map((product) =>{
      return productfile(this.addtoCart.bind(this),product)
    })
    console.log(productlist)
    return (
      <div>
        <nav className="navbar  navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Famazon%2Famazon_PNG22.png&f=1&nofb=1"
              width="30" height="30" className="d-inline-block align-top" alt="" />
            Amazon
          </a>
          {this.state.firstState}
          <button onClick={() =>{this.loadproducts()}}>load products</button>
          <button type="button" className="btn btn-success" onclick={() => {
            this.viewCart();
          }}>
            Cart ({this.state.cart.length})
          </button>
        </nav>
        <div className="container">
          <p className="sh">Laptops</p>   
          {productlist}
          <div className="row d-flex justify-content-end">
            <button type="button" className="btn btn-primary" id="er">CHECKOUT </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;