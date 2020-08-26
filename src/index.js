const React = require('react');
import { render } from 'react-dom'
const axios = require('axios')

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            employees = []
        }
    }

    async create(emp){
        const employee = (await axios.post('/api/employees')).data;
        const employees = this.state.friends;
        friends.push(employee)
        this.setState({employees})
    }

    async componentDidMount(){
        this.setState({ employees: (await axios.get('/api/employees')).data });
      }

      render(){
        const { friends: employees } = this.state;
        
        return (
            <div>
                <h1>Acme Employees And Departments</h1>
                <ul>
                    {
                    employees.map( friend => {
                    return (
                        <li key={ employee.id }>
                        { employee.name }
                        <h2>{ employee.name }</h2>
                        </li>
                        );
                    })
                }
                </ul>
            </div>
        );
      }
    } 

    render(<App />, document.querySelector('#root'));


