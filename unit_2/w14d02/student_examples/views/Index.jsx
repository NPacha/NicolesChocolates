const React = require('react');
const AppLayout = require('./layout/AppLayout');
const Button = require('./components/Button');

class Index extends React.Component {
  render() {
    return (
        <AppLayout title={'Fruits Index Page'}>
            <h1>Fruits index page</h1>
            <a href="/fruits/new"> Create A New Fruit </a>
            <ul>
                {
                   this.props.fruits.map((fruit, i) => {
                    return (
                        <li key={i}>
                        The <a href={`/fruits/${fruit._id}`}>{ fruit.name }</a> is { fruit.color }
                        { fruit.readyToEat ? ` It is ready to eat` : ` It is not ready to eat` }
                        <a href={`/fruits/${fruit._id}/edit`}>Edit Fruit Here</a>
                        <Button endpoint={`/fruits/${fruit._id}?_method=DELETE`} name={fruit.name}/>
                        </li>
                        )
                    })
                }

            </ul>
        </AppLayout> );
  }
}

module.exports = Index;