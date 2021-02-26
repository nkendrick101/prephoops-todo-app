import { render } from '@/components/AuthLinks/node_modules/@testing-library/react';
import React from 'react';
import Task, { TaskProps } from './Task';

describe('Task', () => {
    const defaultProps: TaskProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Task {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Task')).toBeTruthy();
    });
});
