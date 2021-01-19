const React = require('react');

class AppLayout extends React.Component {
    render(){
        return (
            <div>
                <h1>App Layout</h1>
                {this.props.children}
            </div>
        )
    }
} 

module.exports = AppLayout;