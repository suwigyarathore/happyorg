import React, { useEffect, useState } from 'react';
import { TicketList } from '@happyorg/ticket-list';
import { Message } from '@happyorg/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to tickets!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>
      <TicketList></TicketList>
    </>
  );
};

export default App;
