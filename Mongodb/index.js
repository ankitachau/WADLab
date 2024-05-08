
const dbConnect = require("./mongodb");
const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());

// GET API
app.get('/', async (req, res) => {
    try {
        let result = await dbConnect();
        result = await result.find().toArray();
        res.send(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});

//Post API

app.post("/",async(req,res)=>{
    try{
        let result=await dbConnect();
        result=await result.insertOne(req.body);
        res.send("Data inserted Successfully");
    }catch(error){
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");

    }
   
});

//put api

app.put('/:name',async(req,res)=>{
    try{
        let result=await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data Updated Successfully");

    }catch{
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");

    }
});

//delete API 

app.delete('/:name', async(req,res)=>{
    try{
        let result=await dbConnect();
        result=await result.deleteOne({name:req.params.name});
        res.send("Data Deleted Successfully");

    }catch{
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");

    }

})

app.listen(port, () => {
    console.log(`App is listening to ${port}`);
});

