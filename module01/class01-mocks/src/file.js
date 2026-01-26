const { error } = require('./constants');

const {readFile} = require('fs/promises');
const DFAULT_OPTIONS = {
    maxLines: 3,
    fields: ["id", "name", "profession", "age"]
}

class File {
   static async csvToJson(FilePath) {
    const content = await readFile(FilePath, "utf8")
    // console.log('content', {content})
    const validation = this.isValid(content)
    if (!validation.valid) {
        throw new Error(validation.error)
    }
  }

  static isValid(csvString, options = DFAULT_OPTIONS) {
   
    // csvString = csvString.split(/\r?\n/)
    // console.log('csvString', {csvString})
    // [0] header
    // [1] line 1
    // [2] line 2
    // [3] line 3
    // [4] ...
    const [header, ...fileWithoutHeaders] = csvString.split(/\r?\n/)
    const isHeaderValid = header === options.fields.join(',')
    if (!isHeaderValid) {
        return {
            error: error.FILE_FIELDS_ERROR_MESSAGE,
            valid: false
        }
    }
    // console.log('headers', {headers})
    // console.log('fileWithoutHeaders', {fileWithoutHeaders})
    if (!fileWithoutHeaders.length || fileWithoutHeaders.length > options.maxLines) {
        return {
            error: error.FILE_LENGTH_ERROR_MESSAGE,
            valid: false
        }
    }

  }
}
module.exports = File;