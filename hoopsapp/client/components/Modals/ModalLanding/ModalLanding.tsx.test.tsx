import { render } from '@/components/Player/PlayerList/node_modules/@testing-library/react';
import React from 'react';
import ModalLanding.tsx, { ModalLanding.tsxProps } from './ModalLanding.tsx';

describe('ModalLanding.tsx', () => {
    const defaultProps: ModalLanding.tsxProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<ModalLanding.tsx {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ModalLanding.tsx')).toBeTruthy();
    });
});
