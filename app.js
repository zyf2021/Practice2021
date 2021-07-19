const config = require('config')

const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

const User = require('./models/User')
const Admin = require('./models/Admin')
const mongoose = require('mongoose')
const express = require('express')
const app = express()


  


AdminBro.registerAdapter(AdminBroMongoose)



app.use(express.json({extended:true}))

app.use('/api/auth/', require('./routes/auth.routes'))
app.use('/api/user/', require('./routes/user.routes'))

const PORT = config.get('port')||5000


async function start(){
    try{
        const mongooseDB = await mongoose.connect(config.get('mongoUri'),{
            useCreateIndex:true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        /*const adminBro = new AdminBro({
            databases: [mongooseDB],
            //... other AdminBroOptions
          })*/
          const adminBro = new AdminBro({
            //databases: [],
            rootPath: '/admin',
            resources: [Admin, User],
          })
        //adminBro должна быть с маленькой буквы
        
        const router = AdminBroExpress.buildRouter(adminBro)
        app.use(adminBro.options.rootPath, router)
        
        app.listen(PORT, () => console.log('App has been started on port ' + PORT))
    } catch(e){
        console.log('Server Error', e.message)
        process.exit(1);
    }
}

start()