import { render } from '@/components/Player/PlayerList/node_modules/@testing-library/react';
import React from 'react';
import ModalAuth, { ModalAuthProps } from './ModalAuth';

describe('ModalAuth', () => {
    const defaultProps: ModalAuthProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<ModalAuth {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ModalAuth')).toBeTruthy();
    });
});
