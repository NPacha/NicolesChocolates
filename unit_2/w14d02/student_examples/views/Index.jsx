const React = require('react');

class Index extends React.Component {
  render() {
    return (
        <div>
            <h1>Fruits index page</h1>
            <a href="/fruits/new"> Create A New Fruit </a>
            <ul>
                {
                   this.props.fruits.map((fruit, i) => {
                    return (
                        <li key={i}>
                        The <a href={`/fruits/${fruit._id}`}>{ fruit.name }</a> is { fruit.color }
                        { fruit.readyToEat ? ` It is ready to eat` : ` It is not ready to eat` }
                        </li>
                        )
                    })
                }

            </ul>
        </div> );
  }
}

module.exports = Index;