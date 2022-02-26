import cors from 'cors';
import  express  from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import loginRoutes from './routes/login.js';

const app = express();

app.use('/api',loginRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://ouday11:ouday1999@cluster0.vng4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000 ;
mongoose.connect(CONNECTION_URL,{ useNewUrlParser : true , useUnifiedTopology : true })
    .then( () => {
        app.listen(PORT , () => { console.log(`Server up and running on port : ${PORT}`) })
    } )
    .catch((error) => { console.log(error.message) });
