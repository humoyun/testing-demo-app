import { render, screen, fireEvent } from '@testing-library/react';

import Typography from '.';

describe('unit tests for Typography component', () => {
  test('checks rendering', () => {
    render(<Typography />);
  });
});
