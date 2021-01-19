const React = require('react');
const AppLayout = require('./layouts/AppLayout');
const Post = require('./components/Post');

class Show extends React.Component {
    render(){
        return (
            <AppLayout
              title={`${this.props.log.title} Show Page`}
              pageClass={'show'}            
            >
                <Post
                  title={this.props.log.title}
                  entry={this.props.log.entry}
                />
            </AppLayout>
        )
    }
} 

module.exports = Show;