
import "babel-polyfill";

import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing submit functionality", ()=>{
    test("Testing handleSubmit defined or not", async ()=>{
        expect(handleSubmit).toBeDefined();
    })
  
})