import { render } from '@/components/Player/PlayerList/node_modules/@testing-library/react';
import React from 'react';
import Loading, { LoadingProps } from './Loading';

describe('Loading', () => {
    const defaultProps: LoadingProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Loading {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Loading')).toBeTruthy();
    });
});
