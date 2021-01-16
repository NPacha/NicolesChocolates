const React = require('react');
const AppLayout = require('./layout/AppLayout');
const Button = require('./components/Button');

class Show extends React.Component {
    render(){
        return (
            <AppLayout title={`${this.props.fruit.name.toUpperCase()} show page`}>
                <h1>Fruits show page</h1>
                The { this.props.fruit.name } is { this.props.fruit.color }
        { this.props.fruit.readyToEat ? ` It is ready to eat` : ` It is not ready to eat` }
            <Button endpoint={`/fruits/${this.props.fruit._id}?_method=DELETE`} name={this.props.fruit.name}/>
            <a href={`/fruits/${this.props.fruit._id}/edit`}> Edit this Fruit Here</a>
            </AppLayout>
        )
    }
}
module.exports = Show;