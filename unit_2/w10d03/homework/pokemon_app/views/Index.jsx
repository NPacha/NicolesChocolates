const React= require('react');
const Show = require('./Show.jsx');


const myStyle = {
    color: 'darkgreen',
    
  };

class Index extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <html>
                <head>

                </head>
                <body>
                    <h1 style={myStyle}>See All the Pokemon</h1>
                    <ul>
                        {
                            pokemon.map((pokemon, index)=> {
                                return (
                                    <li>
                                        <a href={`/pokemon/${index}`}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </body>
            </html>
        )
    }


}

module.exports = Index;

