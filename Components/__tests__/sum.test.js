const { sum } = require("../sum")

test("sum function should give sum of two numbers",()=>{
   const result=sum(9,1);
   expect(result).toBe(10);
});