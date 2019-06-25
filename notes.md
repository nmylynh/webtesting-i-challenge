# Testing

### Step 1: Add jest as a dev dependency.

First:
    
    npm run init -y

Then:

    yarn add jest --dev

### Step 2: Add test script to package.json:

     "test": "jest --watch --verbose"

### Step 3: Create a folder we can test our files on / or spec.js:

    __tests__

It will automatically detect any file name in tehre as a test file.
But usually, people usually rename their file as .spec.js to avoid confusion in nomenclature and easier refactoring.

### Step 4: In your testing file, i.e. spec.js, describe the test:

Require your actual file's function:

    const { add } = require('./calculator.js');

    describe('the add function', () => {
        
        
        it('should add two values', () => {
        
        //arrange
        const result = add(2,2);

        //assertion
        expect(result).toBe(4);
        expect(add(-1,4)).toBe(3);
        expect(add(0,6)).toBe(6);
        });

        it('should return 0 when no arguments are provided', () => {
            expect(add()).toBe(0);
        });
    });

And in your calculator:

    function add(a = 0, b = 0) {
        return a + b;
    }

The technique should be arrange, act, assert.

