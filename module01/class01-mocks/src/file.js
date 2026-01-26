const {readFile} = require('fs').promises;
const DFAULT_OPTIONS = {
    maxLines: 3,
    fields: ["id", "name", "profession", "age"]
}

class File {
   static async csvToJson(FilePath) {
    const content = await readFile(FilePath, 'utf8')
    console.log('content', {content})
    this.isValid(content)
  }

  static isValid(csvString, options = DFAULT_OPTIONS) {
    csvString = csvString.split(/\r?\n/)
    console.log('csvString', {csvString})

  }
}
module.exports = File;