//import react library
const React = require('react');
const Layout = require('./Layout.jsx');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Create a new Fruit</h1>
                <form action="/fruits" method="POST">
                    Name: <input type="text" name="name"/> <br/>
                    Color: <input type="text" name="color"/><br/>
                    Is Ready to Eat: <input type="checkbox" name="readyToEat"/>
                    <input type="submit" name="" value="Create Fruit"/>
                </form>
            </Layout>
        )
    }
}

module.exports = New;