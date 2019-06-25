const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe('the succeed function', () => {
    it('should upgrade the enhancement level', () => {

        const item = {
            name: 'Lunar Sword',
            enhancement: 17,
            durability: 90 
        }
        
        const result = succeed(item);

        expect(result.enhancement).toBe(18);
    })
})

describe('the fail function', () => {
    it('should decrease the enhancement level & durability', () => {

        const item = {
            name: 'Lunar Sword',
            enhancement: 17,
            durability: 90 
        }
        
        const result = fail(item);

        expect(result).toEqual({...item, enhancement: 16, durability: 80 });
    })
})

describe('the repair function', () => {
    it('should give max durability', () => {

        const item = {
            name: 'Lunar Sword',
            enhancement: 17,
            durability: 90 
        }
        
        const result = repair(item);

        expect(result).toEqual({...item, durability: 100 });
    })
})

describe('the get function', () => {
    it('should show enhancement level', () => {

        const item = {
            name: 'Lunar Sword',
            enhancement: 17,
            durability: 90 
        }
        
        const result = get(item);

        expect(result).toEqual({...item, name: 'Lunar Sword [+17]'});
    })
})

