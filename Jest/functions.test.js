functions = require('./functions')
//write tests
test('Adds 4 to 29', ()=>{
    expect(functions.add(4,29)).toBe(33);
});



//this should not output meaning the supplied arguments should fail but the test succeeds

test('Adds 37 to 2 should not be 12', ()=>{
    expect(functions.add(37,2)).not.toBe(12);
})

//toBe is used for String or number
//toEqual is used for Primitive Types(Object, Array)


//toBeNull
test('Should Be Null', ()=>{
    expect(functions.isNull()).toBeNull();
})

//this should pass because null is a falsy value also 0,undefine should pass as well because 0 and undefined is falsy
test('Should Be Falsy', ()=>{
    expect(functions.checkValue(null)).toBeFalsy();
})

//this should pass because I use toEqual because toEqual compares Objects
test('An Object Output', ()=>{
    expect(functions.createUser()).toEqual({ 
        firstName: 'Ramo',
        lastName: 'Ydakleb'
    });
});

/*
Other Matchers:
- Less Than
- Greater Than
*/

test('Should be under 1600', ()=>{
    const firstLoad = 800;
    const secLoad = 962;
    expect(firstLoad+secLoad).toBeLessThan(2000)
    //there is also toBeLessThanOrEqual
});

//regex testing
test('There is no llp in Java', ()=>{
    //this will fail regardless if I have P uppercase or lowercase
    expect('Pascal').not.toMatch('/p/P')
});


//Array Testing
test('There should be 727225 listed as his favorite Programming Language!', ()=>{
    unames= ['Polan26', '35', '2436-7864', '429','375'];
    //Array Checking using the toContain Method
    expect(unames).toContain('35');
})

//Async Data Usage using Promise
test('Fetched The User With Name Should Be Clementine Bauch', ()=>{
    /*
    when using async data I must have expect and the assertions
    with the number of assertions I am expecting to be called
    */
    
    //expect.assertions(1);
    return functions.fetchMeTheUser()
    .then(the_data=>{
        expect(the_data.name).toEqual('Clementine Bauch');
    });
});

//Async Data using Async Await
test('Fetched The User With Name Should Be Clementine Bauch', async()=>{
    expect.assertions(1);
    const my_data = await functions.fetchMeTheUser();
    expect(my_data.name).toEqual('Clementine Bauch');
});
