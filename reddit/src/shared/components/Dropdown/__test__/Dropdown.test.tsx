

import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from '/Users/edgar/Desktop/рабочий стол/Skillbox/4 React/5/homework/skillbox-4.5/reddit/src/shared/components/Dropdown/Dropdown.tsx';
import { noop } from '/Users/edgar/Desktop/рабочий стол/Skillbox/4 React/5/homework/skillbox-4.5/reddit/src/utils/js/noop';



describe('Dropdown', () => {
    test('should render', () => {
        render(<Dropdown onOpen={noop} onClose={noop} />)
        expect(screen.getByTestId('dropdown')).toBeDefined()
    });
});


/**
 * @jest-environment js-dom
 */