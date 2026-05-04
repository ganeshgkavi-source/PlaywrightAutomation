const { test,expect } = require("@playwright/test")

test ("My first test",async function({page}){
    expect(100).toBe(100)
})
test ("My second test",async function({page}){
    expect(100).toBe(101)
})
test ("My Third test",async function({page}){
    expect(2.0).toBe(2.0)
})
test ("My Fourth test",async function({page}){
    expect("True").toBeTruthy()
})
test.skip("My Fifth test",async function({page}){
    expect("false").toBeFalsy()
})
test ("My Sixth test",async function({page}){
    expect("Ganesh Guruswamy".includes("Ganesh")).toBeTruthy()
})