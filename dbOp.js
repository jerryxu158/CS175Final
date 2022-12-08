const config = require('./dbConfig'),
sql = require('mssql')

const getCards = async(cardName, setCode, setNum) => {
    try{
        let pool = await sql.connect(config)
        let rows = await pool.request().query(` SELECT * 
                                                FROM dbo.cardList 
                                                WHERE cardName = '${cardName}' 
                                                AND setCode = '${setCode} '
                                                AND setNumber = ${setNum}`)
        return rows
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getCards
}