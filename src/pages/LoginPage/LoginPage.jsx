import React from 'react'
import {Link} from 'react-router-dom'
import userService from '../../utilities/userService'
import './LoginPage.css'

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e)=> {
        e.preventDefault()
        try {
            await userService.login(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/')
        } catch (err) {
            alert('Invalid Credentials')
        }
    }

    render() {
        return(
            <div>
                <form className='login-page' onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="form-header col-12">
                            <h2>Login</h2>
                        </div>
                        <div className="form-group col-12">
                            <input className='form-control' type='email' name='email' placeholder='Enter e-mail' value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-12">
                            <input className='form-control' type='password' name='password' placeholder='Enter password' value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-12">
                            <button className="btn btn-primary">Login</button>&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                </div>
                </form>
            </div>
        )
    }
}

export default LoginPage