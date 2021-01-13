const React = require('react');
class Index extends React.Component {
  render() {
      
    return (
        <div>
            <h1>Chocolates Index Page</h1>
            <ul>
                {
                    this.props.products.map((product, i)=>{
                        return(
                            <li>
                                {product.name} <br/>{product.description}  <br/> <img src={product.img} alt=""/> <br/>{product.price} <br/>{product.qty}
                            </li>
                            
                        )
                    })
                }
            </ul>
        </div>
    )
  }
}


module.exports = Index;