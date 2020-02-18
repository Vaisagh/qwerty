import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import productTile from './components/producttile';
import './App.css';
const productsarray = [
  {
    "id": 1,
    "title" : "HP Core i3 6th Gen",
    "price" : "Rs 45000",
    "image" : "https://rukminim1.flixcart.com/image/704/704/jdyuefk0/computer/t/u/4/hp-na-laptop-original-imaf2rdcgrw8nzfv.jpeg?q=70"
  },
  
  {
    "id": 2,
    "title" : "MSI GV 62 7RE",
    "price" : "Rs 70000",
    "image" : "https://rukminim1.flixcart.com/image/704/704/ja73ki80/computer/v/v/x/msi-na-gaming-laptop-original-imaeztu7nz9e6mz9.jpeg?q=70"
  },

  {
    "id" : 3,
    "title" : "Airgun",
    "price" : "Rs 6000",
    "image" : "https://www.airsoftgunindia.com/wp-content/uploads/2018/01/img_6810.jpg" 
  }
]


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstState: 'hello World',
      cartCount: 0,
      alertOnCartCount: 10,
      limitreached: false,
      products : []
    }
  }
  componentDidMount() {
    this.setState({
      firstState: 'Welcome to our shop'
    })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state)
    if (this.state.cartCount >= this.state.alertOnCartCount) {
      this.state.limitreached = true
      alert("Oops,Count exceeded more than 10 items")
    }
  }
  loadProducts()
  {
    this.setState({
      
        products : productsarray
    }
    )
  }
  
  addCount() {
    if (this.state.limitreached == false) {
      const newCount = this.state.cartCount + 1;
      this.setState({
        cartCount: newCount
      })
    }

  }
  
  render() {
    const productlist = this.state.products.map((product)=>{
      return productTile(this.addCount.bind(this),product)
    })
    console.log(productlist)
    return (
      <div>
        <nav className="navbar  navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <img src="hprttps://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Famazon%2Famazon_PNG22.png&f=1&nofb=1"
              width="30" height="30" className="d-inline-block align-top" alt="" />
            Amazon
          </a>
          {this.state.firstState}
          <button onClick={() =>{this.loadProducts()}}>load products</button>
          <button type="button" className="btn btn-success"
          >Cart {this.state.cartCount}
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