const React = require('react');
const AppLayout = require('./layouts/AppLayout')

class New extends React.Component {
    render(){
        return (
            <AppLayout>
                <form action="/logs" method="POST">
                    <label> Title: <input type="text" name="title"/></label>
                    <label> Entry: <input type="text" name="entry"/></label>
                    <input type="submit" value={'Create A Log'}/>
                </form>
            </AppLayout>
        )
    }
} 

module.exports = New;