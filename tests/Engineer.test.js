const Engineer = require('../lib/Engineer');
describe('Check employee has name,id,email', () => {
  it('should be a employee', () => {
      const steve = new Engineer('Steve','1','steve@email.com','zzzalways');
    expect(steve.name).toBe('Steve');
    expect(steve.id).toBe('1');
    expect(steve.email).toBe('steve@email.com');
    expect(steve.role).toBe('engineer');
    expect(steve.github).toBe('zzzalways');
  });
})