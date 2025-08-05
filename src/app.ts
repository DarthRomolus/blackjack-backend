import express from 'express';
import type {Request ,Response} from 'express';

let app=express();
const PORT=3000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/",(req: Request,res: Response)=>{
    console.log("getting");
    res.send("hi");
})