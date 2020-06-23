const config = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root1234',
    database: 'atams'
}


function query(sql,values,callback){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }
        connection.query(sql,values,function(err,results,fields){
            callback(err,results);
            connection.release();
            if(err){
                throw err;
            }
        });   
    });
}

module.exports  = config;