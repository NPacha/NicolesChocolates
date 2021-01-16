const React = require('react');
const Layout = require('./layout/Layout');
const Form = require('./components/Form');

class Edit extends React.Component {
    render(){
        return (
            <Layout>
                <Form
                    endpoint={`/NicolesChocolates/${this.props.product._id}?_method=PUT`}
                    buttonText={`Edit the ${this.props.product.name}`}
                    product={this.props.product}
                    />
            </Layout>
        )
    }
}

module.exports = Edit;