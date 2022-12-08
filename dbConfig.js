const sqlConfig ={
    user:'group7',
    password:'group7',
    server:'LAPTOP-A3DJ90N5',
    databse:'cs175',
    TrustServerCertificate:'true',
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        instancename: 'MSSQLSERVER01',
        trustServerCertificate: true,
        requestTimeout:100000
      },
};

module.exports = sqlConfig