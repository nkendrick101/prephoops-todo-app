import React from 'react';
import { Button } from '@material-ui/core/';


 import { API_BASE_URL  } from '../../config/config'



 interface PlayersProps {
     id: string;
    playerId: string;
    isUpdating: boolean;
  }

  interface PlayersState {
    id: string;
    isUpdating: boolean;
  }

    export class PlayerRightButton extends React.PureComponent<PlayersProps, PlayersState> {
        state: PlayersState;
        props: PlayersProps;

  constructor(playersprops: PlayersProps) {
      super(playersprops);
        this.state = {
            id: this.props.playerId,
            isUpdating: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        this.setState({
            isUpdating: true
        });

       /*  const accessToken = await this.props.auth.getAccessToken(); */
        const response = await fetch(API_BASE_URL  + '/players/' + this.state.id + '/answers', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                /* Authorization: `Bearer ${accessToken}`, */
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "correct": true
            })
        });

        const player = await response.json();
        await this.setState({
            isUpdating: false
        });
        // eslint-disable-next-line react/prop-types
        this.props.onRightButton(this.state.id, player.data);
    }

    render() {
        return (
            <Button onSubmit={this.onSubmit}>
                <Button type='submit'>(+1) Right</Button>
            </Button>
        )
    }
}
