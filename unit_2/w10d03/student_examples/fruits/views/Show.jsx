//require react
const React = require('react');
const Layout = require('./Layout.jsx');

class Show extends React.Component {
    render() {
        const fruit = this.props.fruit;
        return (
            <Layout>
                <h1>Show Page</h1>
                <p>The {fruit.name} is {fruit.color} </p>
                <p>{fruit.readyToEat === true ? "Is ready to eat" : "Is not ready to eat"}</p>
            </Layout>
        )
    }
}

module.exports =  Show;