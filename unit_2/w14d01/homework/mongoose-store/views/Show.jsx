const React = require('react');
const Layout = require('./layout/Layout.jsx')


class Show extends React.Component {
    render(){
        return(
            <Layout>
                <a href={`/NicolesChocolates`}>Back to Home Page</a>
                <h2>{`${this.props.product.name}`}</h2>
                <div class="showContainer">
                    <img src={`${this.props.product.img}`}/>
                    <p id="productDescription">{`${this.props.product.description}`} </p>
                    <p> Price: ${`${this.props.product.price}`}</p>
                    <p> Amount left: {`${this.props.product.qty}`}</p>
                </div>
            </Layout>
            
        )
    }
}

module.exports = Show;