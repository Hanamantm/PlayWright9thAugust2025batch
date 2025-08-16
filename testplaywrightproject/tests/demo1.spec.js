const {test, expect} = require('@playwright/test')
 
test('First PLaywright Test', async function display({page}){
    console.log('Running first Playwright test'); 
})

test.skip('second Playwright Test', async function({}){
    console.log('Running second playwright test');
})

test.only('third Playwright Test', async ({})=>{
    console.log('Running third playwright test');
})

