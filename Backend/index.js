'use strict'
 
const  express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser')
const config = require('./config.js')
const users= require('./routes/user-routes')
const presentProjets= require('./routes/presentProjets-routes.js')
const em= require('./routes/em-routes.js')
const sc= require('./routes/sc-routes.js')
const gop= require('./routes/gop-routes.js')
const pfp= require('./routes/pfp-routes.js')
const businessPlan= require('./routes/businessPlan-routes.js')
const epargnePersonelle= require('./routes/epargne-routes.js')
const apport= require('./routes/apport-routes.js')
const loveMoney= require('./routes/loveMoney-routes.js')
const appel= require('./routes/appel-routes.js')
const pret= require('./routes/pret-routes.js')
const subvention= require('./routes/subvention-routes.js')
const mode= require('./routes/mode-routes.js')
const test= require('./routes/test-routes.js')











const projet= require('./routes/projet-routes.js')

const presentEntrepreneurs= require('./routes/presentEntrepreneurs-routes.js');
const { estAuth } = require('./Enchaineur/est-auth.js');

const httpContext= require('express-http-context');
const rechercheFinancement = require('./routes/rechercheFinancement-routes');



const port=8080
const app= express()
app.use(httpContext.middleware);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use((req,res,next)=>{
    
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    if(req.method==='OPTIONS'){
      return res.sendStatus(200);
    } 
      next();
   })
app.use((req,res,next)=>{
  httpContext.set('user', estAuth(req))
  next()
})
//app.use(estAuth);
app.listen(port,()=>console.log(`l'application  a été lancée sur url http://localhost:` + port))

app.use('/api/users',users.routes)
app.use('/api/projet',projet.routes)

app.use('/api/presentProjet',presentProjets.routes)
app.use('/api/presentEntrepreneur',presentEntrepreneurs.routes)
app.use('/api/etudeMarche',em.routes)
app.use('/api/strategieCom',sc.routes)
app.use('/api/gestionOperationnelle',gop.routes)
app.use('/api/pfp',pfp.routes)
app.use('/api/businessplan',businessPlan.routes)
app.use('/api/rechercheFinancement',rechercheFinancement.routes)
app.use('/api/epargnePersonelle',epargnePersonelle.routes)
app.use('/api/apport',apport.routes)
app.use('/api/loveMoney',loveMoney.routes)
app.use('/api/appelAssocie',appel.routes)
app.use('/api/pret',pret.routes)
app.use('/api/subvention',subvention.routes)
app.use('/api/mode',mode.routes)
app.use('/api/test',test.routes)











