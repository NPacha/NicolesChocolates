const React = require('react');
const Layout = require('./layout/Layout.jsx');


class Index extends React.Component {
  render() {
    const stockCheck = (currentProduct) => {
        if (currentProduct.qty <= 0) {
        return <p>Out Of Stock</p> }
        else {
            return <p>Amount in Stock: {currentProduct.qty}</p>
        }
    }
      
    return (
        <Layout>
            
                <ul class="chocolateContainer">
                    {
                        this.props.products.map((product, i)=>{
                            return(
                                    
                                    <li className="test">
                                        <img src={product.img} alt=""/> <br/>
                                        
                                        <a href={`/NicolesChocolates/${product._id}`} className="chocolateName">{product.name}</a><br/>  
                                        Price ${product.price} <br/>
                                        { stockCheck(product) }
                                        <a href={`/NicolesChocolates/${product._id}/edit`}>Update</a>
                            
                                    </li>
                                    
                                
                            )
                        })
                    }
                </ul>
            
        </Layout>
    )
  }
}


module.exports = Index;