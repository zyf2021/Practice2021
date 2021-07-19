const config = require('config')

const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
//const AdminBroExpressjs = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

const User = require('./models/User')
const Admin = require('./models/Admin')
const mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcryptjs')
const app = express()


  


AdminBro.registerAdapter(AdminBroMongoose)




app.use(express.json({extended:true}))

app.use('/api/auth/', require('./routes/auth.routes'))
app.use('/api/user/', require('./routes/user.routes'))

const PORT = config.get('port')||5000


async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useCreateIndex:true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const adminBro = new AdminBro({
            //databases: [],
            rootPath: '/admin',
            resources: [
                {
                    resource: Admin,
                    options: {
                        properties: {
                            encryptedPassword: {
                            isVisible: false,
                            },
                            password: {
                                type: 'string',
                                isVisible: {
                                    list: false, edit: true, filter: false, show: false,
                                },
                            },
                        },
                        actions: {
                            new: {
                                before: async (request) => {
                                    if(request.payload.password) {
                                        request.payload = {
                                ...         request.payload,
                                            encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                                            password: undefined,
                                        }
                                    }
                                    return request
                                },
                            }
                        }
                    }
                },          
                User],
          })
        //adminBro должна быть с маленькой буквы
        
        //const router = AdminBroExpress.buildRouter(adminBro)
        const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
            authenticate: async (email, password) => {
              console.log('AuthAdmin', email, ' ', password)
              const admin = await Admin.findOne({ email })
              if (admin) {
                
                const a_pass = admin.encryptedPassword
                console.log('AuthAdmin', a_pass)
                const matched = await bcrypt.compare(password, a_pass)
                if (matched) {
                  return admin
                }
              }
              return false
            },
            cookiePassword: 'some-secret-password-used-to-secure-cookie',
          })
        app.use(adminBro.options.rootPath, router)
        
        app.listen(PORT, () => console.log('App has been started on port ' + PORT))
    } catch(e){
        console.log('Server Error', e.message)
        process.exit(1);
    }
}

start()