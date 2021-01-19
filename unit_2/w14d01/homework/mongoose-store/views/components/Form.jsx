const React = require('react');

class Form extends React.Component {
    render(){
        return(
            <form action={this.props.endpoint} method="POST" className="form">
                Name: <input
                        type="text"
                        name="name"
                        value={this.props.product? this.props.product.name :''}/> <br/>
                Description: <input
                                type="text"
                                name="description"
                                value={this.props.product? this.props.product.description : ''}/> <br/>
                Image: <input
                        type="text"
                        name="img"
                        value={this.props.product? this.props.product.img : ''}/> <br/>
                Quantity: <input
                            type="text"
                            name="qty"
                            value={this.props.product? this.props.product.qty : ''}/> <br/>
                Price: <input
                            type="text"
                            name="price"
                            value={this.props.product? this.props.product.price : ''}/> <br/>
                <input type="submit" value={this.props.buttonText} className="submitButton"/>
            </form>

        )
    }
}

module.exports = Form;