//import react library
const React = require('react');


class New extends React.Component {
    render() {
        return (
            <html>
                <head>
                <link rel="stylesheet" href="/normalize.css"/>
                <link rel="stylesheet" href="/skeleton.css"/>
                <title>Hello Adult Life</title>
                </head>
                <body>
                    <div class="container">
                        <h1>Add New Item</h1>
                        <form action="/" method="POST">
                            <input type="text" name="date" placeholder="date"/>
                            <input type="text" name="name" placeholder="name"/>
                            <input type="text" name="amount" placeholder="amount"/>
                            <input type="text" name="from" placeholder="from"/>
                            <input type="text" name="tags" placeholder="tags"/>
                            <input type="submit" name="" value="Create New Item"/>
                        </form>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = New;