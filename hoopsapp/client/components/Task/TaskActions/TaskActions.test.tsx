import { render } from '@/components/Player/PlayerList/node_modules/@testing-library/react';
import React from 'react';
import TaskActions, { TaskActionsProps } from './TaskActions';

describe('TaskActions', () => {
    const defaultProps: TaskActionsProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<TaskActions {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('TaskActions')).toBeTruthy();
    });
});
