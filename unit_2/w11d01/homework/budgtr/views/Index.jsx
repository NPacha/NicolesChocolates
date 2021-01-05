const React= require('react');
const Layout= require('./Layout.jsx');


class Index extends React.Component {
    render() {
       const budget = this.props.budget;
       let bankAccount = 0;
    
  
       for (let i = 0; i < budget.length; i++){
           bankAccount += parseInt(budget[i].amount);
       }


        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/normalize.css"/>
                    <link rel="stylesheet" href="/skeleton.css"/>
                    <title>Hello Adult Life</title>
                </head>
                <body>
                    <h1>Hello Adult Life</h1>

                    {   
                         bankAccount < 0 ? 
                         <h3 style={{backgroundColor: 'red'}}> Bank Account: {bankAccount}</h3> : <h3 style={{backgroundColor: 'green'}}> Bank Account: {bankAccount}</h3> 
                    }
                      
                    
                   
                    <button> <a href={`/new`}> New Item </a> </button>
                        { budget.map((item, index)=> {
                            return (
                                <table>  
                                    <tr>
                                        <td>{item.date}</td>
                                        <td> <a href={`/budget/${index}`}> {item.name} </a> </td>
                                        <td>{item.amount}</td>
                                    </tr>    
                                </table>
                            )
                        })
                        
                        
                        
                        }
                
                </body>
            </html>
        )
    }
}

module.exports = Index;