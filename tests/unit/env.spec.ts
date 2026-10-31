import { getPort } from '@/config/env';

describe('getPort', () => {
  it('usa 3000 quando PORT não está definida', () => {
    expect(getPort({})).toBe(3000);
  });

  it('lê a porta do ambiente', () => {
    expect(getPort({ PORT: '4000' })).toBe(4000);
  });

  it('rejeita uma porta inválida', () => {
    expect(() => getPort({ PORT: 'abc' })).toThrow('PORT inválida: abc');
  });
});
