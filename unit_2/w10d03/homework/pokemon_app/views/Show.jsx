const React= require('react');



const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

class Show extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <html>
                <head>

                </head>
                <body>
                    <h1>Gotta Catch 'Em All</h1>
                    
                        
            
                            <h2>
                            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                            </h2>  
                            
                            <img src={pokemon.img + '.jpg'} alt="" className="src"/> <br/>
                            <a href={`/pokemon`}>Back</a>
                </body>
            </html>
        )
    }


}

module.exports = Show;