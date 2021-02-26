import { render } from '@/components/Player/PlayerList/node_modules/@testing-library/react';
import React from 'react';
import UserDashBoard, { UserDashBoardProps } from './UserDashBoard';

describe('UserDashBoard', () => {
    const defaultProps: UserDashBoardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<UserDashBoard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('UserDashBoard')).toBeTruthy();
    });
});
