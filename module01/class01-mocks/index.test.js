const File = require('./src/file');
const {error} = require('./src/constants');
const assert = require('assert');

// IFEE
; (async () => {

    { 
        const filePath = "./mocks/emptyFile-invalid.csv"
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, expected)
    } 

    { 
        const filePath = "./mocks/invalid-header.csv"
        const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, expected)
    } 

    { 
        const filePath = "./mocks/fiveItems-invalid.csv"
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, expected)
    } 

     { 
        const filePath = "./mocks/threeItems-valid.csv"
        const expected = [
            {
                id:1,
                name:"John Doe",
                profession: "Engineer",
                age:30
            },
                        {
                id:2,
                name:"Jane Smith",
                profession: "Doctor",
                age:25
            },
                        {
                id:3,
                name:"Bob Johnson",
                profession: "Artist",
                age:40
            }
        ]
        const result = await File.csvToJson(filePath)
        await assert.deepEqual(result, expected)
    } 

    
})();