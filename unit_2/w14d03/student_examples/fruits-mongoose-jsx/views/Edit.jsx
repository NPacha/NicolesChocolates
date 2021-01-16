const React = require('react');
const AppLayout = require('./layout/AppLayout');
const Form = require('./components/Form')

class Edit extends React.Component {
    render() {
        return (
            <AppLayout title={`${this.props.fruit.name.toUpperCase()} Edit Page`}>
            <a href={`/fruits/${this.props.fruit._id}`}>Back To Show Page</a>
            <Form
             endpoint={`/fruits/${this.props.fruit._id}?_method=PUT`}
             buttonText={`Edit the ${this.props.fruit.name}`}
             fruit={this.props.fruit}
            />
        </AppLayout>)
    }
}

module.exports = Edit;