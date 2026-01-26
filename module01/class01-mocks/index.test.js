const File = require('./src/file');
const {error} = require('./src/constants');
const assert = require('assert');

// IFEE
; (async () => {

    { 
        const filePath = "./mocks/emptyFile-invalid.csv"
        const expectedError = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, expectedError)
    } 

    { 
        const filePath = "./mocks/invalid-header.csv"
        const expectedError = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, expectedError)
    } 

    { 
        const filePath = "./mocks/fiveItems-invalid.csv"
        const expectedError = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, expectedError)
    } 

    
})();