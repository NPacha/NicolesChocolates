const React = require('react');
const AppLayout = require('./layouts/AppLayout');
const Post = require('./components/Post');
class Index extends React.Component {
    render(){
        return (
            <AppLayout>
                <ul>
                    {this.props.logs.map((log)=>{
                        return (
                            <Post
                              key={log._id}
                              title={log.title}
                              entry={log.entry}
                            >
                            <a href={`/logs/${log._id}`}> Take me to {`${log.title}`}</a>
                            </Post>
                        )
                    })}
                </ul>
            </AppLayout>
        )
    }
} 

module.exports = Index;