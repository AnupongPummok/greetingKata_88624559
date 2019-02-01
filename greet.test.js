const greet = require('./greet');


test('Require 1 : Write greet medthod', ()=>{
    expect(greet("Bob"));
})

test('Require 2 : A simple greeting.', ()=>{
    expect(greet(null)).toBe("Hello, my friend.");
})

test('Require 3 : When name is all uppercase."', ()=>{
    expect(greet("JERRY")).toBe("HELLO JERRY!");
})

test('Require 4 : When name is an array of two names."', ()=>{
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
})

test('Require 5 :  When name represents more than two names.', ()=>{
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
})

test('Require 6 : When names are mixing of normal and shouted names', ()=>{
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})

test('Require 7 : When names are a string containing a comma.', ()=>{
    expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
})

test('Require 8 : When names are contain comma.', ()=>{
    expect(greet(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.");
})