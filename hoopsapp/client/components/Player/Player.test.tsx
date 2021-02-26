import { render } from '@/components/Player/PlayerList/node_modules/@testing-library/react';
import React from 'react';
import Player, { PlayerProps } from './Player';

describe('Player', () => {
    const defaultProps: PlayerProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Player {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Player')).toBeTruthy();
    });
});
