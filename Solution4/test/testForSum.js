let sum = require('../index');


let expect = require("chai").expect;
 

 
    describe('Function tests', () => {
        it('should return zero for a zero length input array', () => {
            expect(sum.s(0,0)).to.equal(0);            
        });
 
        it('should return the member value for a one member array', () => {
            expect(sum.s(1,0)).to.equal(1);            
        });
 
        it('should return the member value for a one member array when given as string', () => {
            expect(sum.s('1',1)).to.equal('Enter numbers');            
        });
 
        it('should add whole number arrays', () => {
            expect(sum.s(1,2)).to.equal(3);            
        });
 
        it('should add whole number arrays including negative numbers', () => {
            expect(sum.s(-1,2)).to.equal(1);            
        });
 
        it('should add whole number arrays including strings', () => {
            expect(sum.s(-1,'2')).to.equal('Enter numbers');            
        });
 
        it('should add fractions', () => {
            expect(sum.s(1.1,5.2)).to.be.closeTo(6.3,0.0001);            
        });
 
        it('should not add arrays of invalid data', () => {
            expect(sum.s('pesho','gosho')).to.equal('Enter numbers');           
        });
    });