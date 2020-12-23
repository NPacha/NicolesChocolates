const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

const React= require('react');

class Index extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <html>
                <head>

                </head>
                <body>
                    <h1>See All the Pokemon</h1>
                    <ul>
                        {
                            pokemon.map((pokemon, index)=> {
                                return (
                                    <li>
                                        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
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

