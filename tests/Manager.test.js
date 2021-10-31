const Manager = require('../lib/Manager');
describe('Check employee has name,id,email', () => {
    it('should be a manager', () => {
        const steve = new Manager('Steve','1','steve@email.com','112222');
      expect(steve.name).toBe('Steve');
      expect(steve.id).toBe('1');
      expect(steve.email).toBe('steve@email.com');
      expect(steve.role).toBe('Manager');
      expect(steve.phone).toBe('112222');
    });

})