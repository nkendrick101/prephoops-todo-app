import React, { Component } from 'react';
import { Button } from '@material-ui/core/';


 import { NEXT_PUBLIC_API_HOST_URL } from '../../config/config'

export default class PlayerWrongButton extends Component {

    constructor (props) {
        super(props);
        this.state = {
            id: props.playerId,
            isUpdating: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        this.setState({
            isUpdating: true
        });

        const accessToken = await this.props.auth.getAccessToken();
        const response = await fetch(NEXT_PUBLIC_API_HOST_URL + '/players/' + this.state.id + '/answers', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "correct": false
            })
        });

        const player = await response.json();
        await this.setState({
            isUpdating: false
        });
        this.props.onWrongAnswer(this.state.id, player.data);
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Button type='submit' loading={this.state.isUpdating}>(-1) Wrong</Button>
            </Form>
        )
    }
};






/* import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { withAuth } from '@okta/okta-react';

import { API_BASE_URL } from './config'

export default withAuth(class WrongAnswerButton extends Component {

    constructor (props) {
        super(props);
        this.state = {
            id: props.playerId,
            isUpdating: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        this.setState({
            isUpdating: true
        });

        const accessToken = await this.props.auth.getAccessToken();
        const response = await fetch(API_BASE_URL + '/players/' + this.state.id + '/answers', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "correct": false
            })
        });

        const player = await response.json();
        await this.setState({
            isUpdating: false
        });
        this.props.onWrongAnswer(this.state.id, player.data);
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Button type='submit' loading={this.state.isUpdating}>(-1) Wrong</Button>
            </Form>
        )
    }
}); */
