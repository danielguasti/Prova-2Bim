import express from 'express';
import lanceRouter from './routes/lanceRoutes';
import leilaoRouter from './routes/leilaoRoutes';
import UserRouter from './routes/UsuarioRoutes';

const app = express();
app.use(express.json());


app.use(UserRouter);
app.use(leilaoRouter);
app.use(lanceRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})