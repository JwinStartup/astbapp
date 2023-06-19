const mongoose = require ('mongoose')

mongoose.connect('mongodb+srv://jeanakoupaul:jupy0500908420@cluster0.t2vaevc.mongodb.net/',{
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }).then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
