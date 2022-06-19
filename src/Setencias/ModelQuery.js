import dotenv from 'dotenv'
import sql from 'mssql'
// import pkg from 'mssql';
// const { sql } = pkg;
dotenv.config()

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    port: parseInt(process.env.PORTDB, 10),
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: true,
        trustServerCertificate: true,
    }
}

export const modelQuery = function(query){
    const connection  = new sql.ConnectionPool(sqlConfig)
    connection.connect(function(error){
        if(error){
            console.log("Error while connecting database :- " + error)
        }else{
            const request = new sql.Request(connection)
            request.query(`select * from dbo.USUA_DESP_NOMINA AS US WHERE US.DOCUMENTO = '${1074159950}'`, function(error, datos){
                if(error){
                    console.log("Error while query database :- " + error)
                }else{
                    console.log(datos.recordset)
                    connection.close(()=>{
                        console.log('disconnect database')
                    })
                }
            })
        }
    })
}


