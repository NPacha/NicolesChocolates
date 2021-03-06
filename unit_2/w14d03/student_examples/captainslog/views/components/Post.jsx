const React = require('react');

class Post extends React.Component {
    render(){
        return (
           <li className={'post-card'}>
               <h2 className={'post-card__heading'}>{this.props.title}</h2>
               <h4 className={'post-card__body'}>{this.props.entry}</h4>
               {this.props.children}
           </li>
        )
    }
        
}

module.exports = Post;