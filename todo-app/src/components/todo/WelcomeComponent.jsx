import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
        this.state = {
            welcomeMessage: ''
        }
    }

    render() {
        return (
                <div>
                    <h1>Welcome!</h1>
                    <div className="container">
                        Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                    </div>
                    <div>
                        <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Test Message</button>
                    </div>
                    <div>
                        {this.state.welcomeMessage}
                    </div>
                    <div>
                        {this.state.errorMessage}
                    </div>
                </div>
            );
    }

    retrieveWelcomeMessage() {
        //HelloWorldService.executeHelloWorldService()
        //.then(response => this.handleSuccessfulResponse(response));

        //HelloWorldService.executeHelloWorldBeanService()
        //.then(response => this.handleSuccessfulResponse(response));

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleErrorResponse(error));
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleErrorResponse(error) {
        let errorMessage = '';
        if(error.message) {
            errorMessage+=error.message;
        }
        if(error.response && error.response.data) {
            errorMessage+=error.response.data.message;
        }
        this.setState({
            welcomeMessage: errorMessage
        })
    }
}

export default WelcomeComponent