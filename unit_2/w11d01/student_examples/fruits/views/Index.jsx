const React = require("react");
const Layout = require("./Layout.jsx");

class Index extends React.Component {
    render() {
        const fruits = this.props.fruits;
        return (
            <Layout>
                <h1>Fruits Index Page</h1>
                <ul>
                    {
                        fruits.map((fruit,index)=> {
                            return (
                                <li key={index}>
                                    The <a href={`/fruits/${index}`}>{fruit.name}</a> is {fruit.color} <br />
                                    {fruit.readyToEat ? "Is ready to eat" : "Is not ready to eat"}
                                </li>
                            )
                        })
                    }
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;