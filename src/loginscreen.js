import Login from './login';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import RaisedButton from '@material-ui/core/Button';
//import Register from './Register';
import React from 'react';

class Loginscreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginscreen: [],
            loginmessage: '',
            buttonLabel: 'Register',
            isLogin: true
        }
    }
    componentWillMount() {
        var loginscreen = [];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} />);
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage
        })
    }
    render() {
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Loginscreen;