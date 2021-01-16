const React = require('react');
const AppLayout = require('./layout/AppLayout');
const Form = require('./components/Form')

class New extends React.Component {
    render() {
        return (
            <AppLayout title={'New Fruit Page'}>
            <a href={'/fruits'}>Back Home</a>
            <Form
             endpoint={'/fruits'}
             buttonText={'Create A New Fruit'}
            />
        </AppLayout>)
    }
}

module.exports = New;