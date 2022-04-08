import db from 'mongoose';
db.Promise = global.Promise;

async function connect(uri)
{
    await db.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() =>{
        console.log('[db] conectada con exito');
       })
       .catch((err)=>{
        console.log('[db] salio algo mal '+ err);
    
    })
}
export default {connect};
