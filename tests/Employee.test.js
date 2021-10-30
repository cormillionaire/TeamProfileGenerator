const Employee = require('../lib/Employee');

describe('Check employee has name,id,email', () => {
    it('should be a employee', () => {
        const steve = new Employee('Steve','1','steve@email.com');
      expect(steve.name).toBe('Steve');
      expect(steve.id).toBe('1');
      expect(steve.email).toBe('steve@email.com');
      expect(steve.role).toBe('employee');
    });
})