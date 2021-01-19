const React = require('react');

class Buy extends React.Component {
    render(){
        return(
            <form action={this.props.endpoint} method="POST">
                <input type="submit" value={`Buy ${this.props.name}`} className="buyButton"></input>
            </form>
        )
    }
}

module.exports = Buy;