const React = require('react');
const Layout = require('./layout/Layout.jsx');


class Index extends React.Component {
  render() {
      
    return (
        <Layout>
            
                <ul class="chocolateContainer">
                    {
                        this.props.products.map((product, i)=>{
                            return(
                                
                                    <li>
                                        <img src={product.img} alt=""/> <br/>
                                        <a href={`/NicolesChocolates/${product._id}`}>{product.name}</a> <br/>  
                                        Price ${product.price} <br/>
                                        Amount in Stock: {product.qty}
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