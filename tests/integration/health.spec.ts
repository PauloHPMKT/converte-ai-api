import request from 'supertest';
import { createApp } from '@/app';

describe('GET /health', () => {
  it('responde que a API está no ar', async () => {
    const response = await request(createApp()).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
