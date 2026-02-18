describe('add operators', () => {
    test('should return 2 when 1 and 1 are added', () => {
        expect(1 + 1).toBe(2); 
    });  

    describe('function "generate and add even numbers', () => {
        test('should return true when summary of two even numbers is even', () => {
            const evenLeft = Math.floor(Math.random()*10)*2;
            const evenRight = Math.floor(Math.random()*10)*2;
            expect((evenLeft + evenRight)% 2 === 0).toBe(true);
        });  
    })
})