const React = require('react');

class Layout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <title>Nicole's Chocolates</title>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <h1>
                        <div class="storeNameContainer">
                            <p>Nicole's</p> 
                            <p id="subtext">Fine Chocolates</p>
                        </div>
                        <ul class="header">
                            <li> About </li>
                            <li> <a href="/NicolesChocolates/new" class="addChocolate">Add A New Chocolate</a> </li>
                            
                        </ul>
                    </h1>
                    {this.props.children}

                    <footer>
                        <ul>
                            <li>
                                Contact Us
                            </li>
                        </ul>
                    </footer>
                </body>
               
            </html>
        )
    }
}

module.exports = Layout;