const Intern = require('../lib/Intern');
describe('Check employee has name,id,email', () => {
    it('should be a employee', () => {
        const steve = new Intern('Steve','1','steve@email.com','Gtech');
      expect(steve.name).toBe('Steve');
      expect(steve.id).toBe('1');
      expect(steve.email).toBe('steve@email.com');
      expect(steve.role).toBe('Intern');
      expect(steve.school).toBe('Gtech');
    });
})