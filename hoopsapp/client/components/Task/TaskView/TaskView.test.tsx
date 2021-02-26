import { render } from '@/components/Player/PlayerList/node_modules/@testing-library/react';
import React from 'react';
import TaskView, { TaskViewProps } from './TaskView';

describe('TaskView', () => {
    const defaultProps: TaskViewProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<TaskView {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('TaskView')).toBeTruthy();
    });
});
