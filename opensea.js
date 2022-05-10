import { OpenSeaStreamClient } from '@opensea/stream-js';
import { WebSocket } from 'ws';

const client = new OpenSeaStreamClient({
  token: '421c6d38a2f24078a709f85b53dd50bc',
  connectOptions: {
    transport: WebSocket
  }
});

export default client;