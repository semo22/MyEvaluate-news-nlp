import {checkForUrl} from '../src/client/js/URLChecker'

describe("Testing the url functionality",()=>{
    test("Testing invalid url return false",()=>{
        expect(checkForUrl("helloJES")).toBe(false);
    });
    test("Testing valid url return true",()=>{
       expect(checkForUrl("www.google.com")).toBe(true);
    })
})