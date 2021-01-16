const React = require('react');
const Form = require('./components/Form');
const Layout = require('./layout/Layout');


class New extends React.Component {
    render() {
        return (
            <Layout>
                <a href={'/NicolesChocolates'}>Go Back Home</a>
                <Form
                    endpoint={'/NicolesChocolates'}
                    buttonText={'Submit New Chocolate'}
                    />
            </Layout>
        )
    }
}

module.exports = New;