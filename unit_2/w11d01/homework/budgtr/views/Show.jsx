const React = require('react');
// const Layout = require('./Layout.jsx');

class Show extends React.Component {
    render() {
        const budget = this.props.budget;
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/normalize.css"/>
                    <link rel="stylesheet" href="/skeleton.css"/>
                    <title>Hello Adult Life</title>
                </head>
                <body>
                    
                    <div class="container">
                        <h1>{budget.name}</h1>
                        <button><a href={`/`}>Back</a></button>
                        <table>  
                        <tr>
                            <th>date</th>
                        </tr>
                        <tr>
                            <td>{budget.date}</td>
                        </tr>

                        <tr>
                            <th>name</th>
                        </tr>
                        <tr>
                            <td>{budget.name}</td>
                        </tr>
                        <tr>
                            <th>from</th>
                        </tr>
                        <tr>
                            <td>{budget.from}</td>
                        </tr>

                        <tr>
                            <th>amount</th>
                        </tr>
                        <tr>
                            <td>{budget.amount}</td>
                        </tr>
                        <tr>
                            <th>tags</th>
                        </tr>
                        <tr>
                            <td>{budget.tags}</td>
                        </tr>
                        </table>
                      
                    </div>
                    
                </body>
             
            </html>
        )
    }
}

module.exports =  Show;