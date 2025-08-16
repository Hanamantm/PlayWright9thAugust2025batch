const {test, expect} = require('@playwright/test');

test ('first Test for Assertion', async ({page})=>{
    await expect(200).toBe(200)
})

test ('second Test for Assertion', async ({page})=>{
    await expect(true).toBe(true)
})

test ('third Test for Assertion', async ({page})=>{
    await expect(10.75).toBe(10.75)
})

test ('Fourth Test for Assertion', async ({page})=>{
     expect('S G Software Testing Institute').toContain('Software')
})

test ('Fifth Test for Assertion', async ({page})=>{
     expect('Good evening'.includes('evening')).toBeTruthy()
})


test ('Sixth Test for Assertion', async ({page})=>{
     expect(150).toBeGreaterThan(100)
})
