import { render } from '@/components/Player/PlayerList/node_modules/@testing-library/react';
import React from 'react';
import Modals, { ModalsProps } from './Modals';

describe('Modals', () => {
    const defaultProps: ModalsProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Modals {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Modals')).toBeTruthy();
    });
});
