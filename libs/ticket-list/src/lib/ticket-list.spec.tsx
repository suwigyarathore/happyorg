import React from 'react';
import { render } from '@testing-library/react';

import TicketList from './ticket-list';

describe(' TicketList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketList />);
    expect(baseElement).toBeTruthy();
  });
});
