// require react
const React = require('react');
const Layout = require("./Layout.jsx");

class Show extends React.Component {
    // props = {
        //fruit: ''
    //}
    render() {
        const fruit = this.props.fruit;
        // const isReadyToEat;
        // if (fruit.readyToEat === true) {
        //     isReadyToEat = "Is ready to eat";
        // } else {
        //     isReadyToEat = "Is not ready to eat";
        // }
        return (
            <Layout>
                <h1>Show Page</h1>
                <p>The {fruit.name} is {fruit.color}</p>
                <p>{fruit.readyToEat === true ? "Is ready to eat" : "Is not ready to eat"}</p>       
            </Layout>
        )
    }
}

module.exports = Show;