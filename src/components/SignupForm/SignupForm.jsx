import React from 'react'
import {Link} from 'react-router-dom'
import userService from '../../utilities/userService'
import './SignupForm.css'

class SignupForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: '',
    }

    handleChange = (e) => {
        this.props.updateMessage('')
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userService.signup(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/')
        } catch (err) {
            this.props.updateMessage(err.message)
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf)
    }
    
    render() {
        return (
            <div>
                <form className='signup-page' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-header col-12">
                            <h2>Signup</h2>
                        </div>
                        <div className="form-group col-12">
                            <input className='form-control' type='text' placeholder='Enter Name' name='name' value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-12">
                            <input className='form-control' type='email' placeholder='Enter email' name='email' value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-12">
                            <input className='form-control' type='password' placeholder='Enter Password' name='password' value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-12">
                            <input className='form-control' type='password' placeholder='Confirm Password' name='passwordConf' value={this.state.passwordConf} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-12">
                            <button className="btn btn-primary" >Sign Up</button>
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm