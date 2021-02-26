import { render } from '@testing-library/react';
import React from 'react';
import PlayerList, { PlayerListProps } from './PlayerList';

describe('PlayerList', () => {
    const defaultProps: PlayerListProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<PlayerList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('PlayerList')).toBeTruthy();
    });
});
