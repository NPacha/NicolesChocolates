const React = require('react');

class Form extends React.Component {
    render(){
        return (
            <form action={this.props.endpoint} method="POST">
            Name: <input 
                    type="text" 
                    name="name" 
                    value={this.props.fruit? this.props.fruit.name : '' }
                  />
                 <br/>
            Color: <input 
                    type="text" 
                    name="color" 
                    value={this.props.fruit? this.props.fruit.color : '' }
                  />
                <br/>
            Is Ready To Eat: <input 
                              type="checkbox" 
                              name="readyToEat" 
                              checked={ this.props.fruit && this.props.fruit.readyToEat }
                            />
                         <br/>
            <input type="submit" name="" value={this.props.buttonText}/>
         </form>
        )
    }
}

module.exports = Form;