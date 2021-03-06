const React = require('react');

class Button extends React.Component {
    render(){
        return(
            <form action={this.props.endpoint} method="POST" >
                <input type="submit" value={`Delete ${this.props.name}`} className="deleteButton"></input>
            </form>
        )
    }
}

module.exports = Button;