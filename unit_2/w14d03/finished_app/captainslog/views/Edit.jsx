const React = require('react');
const AppLayout = require('./layouts/AppLayout')

class Edit extends React.Component {
    render(){
        return (
            <AppLayout
            title={`${this.props.log.title} Edit Page`}
            pageClass={'edit'}
            >
            <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
                <label> Title: <input type="text" name="title" value={this.props.log.title}/></label>
                <label> Entry: <input type="text" name="entry" value={this.props.log.entry}/></label>
                <input type="submit" value={'Edit This Log'}/>
            </form>
        </AppLayout>
        )
    }
} 

module.exports = Edit;