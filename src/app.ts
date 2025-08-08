import express from 'express';
import type {Request ,Response} from 'express';
import mainRoutes from './routes/mainRoutes'

let app=express();
const PORT=3000;
app.use(express.json());
app.use('/game',mainRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/",(req: Request,res: Response)=>{
    console.log("getting");
    res.send("hi");
})