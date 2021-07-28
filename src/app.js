const express = require("express");
require("./db/bloggers");
const app = express();

const Blogger = require("./models/bloggersschema");

app.use(express.json());

//////////////////////////
const router = new express.Router();

router.get("/aj",(req,res)=>{
    res.send("Hello Bloggers!");
});

app.use(router);
//////////////////////////




app.post("/bloggers",async(req,res)=>{

    try
    {
        const user = new Blogger(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(e)
    {
        res.status(400).send(e);
    }
});

app.get("/bloggers",async(req,res)=>{
    try
    {
        const bloggerData = await Blogger.find();
        res.send(bloggerData);
    }
    catch(e)
    {
        res.send(e);
    }

});

app.get("/bloggers/:username",async(req,res)=>{
    try
    {
        const _username = req.params.username;
        const bloggerData1 = await Blogger.findOne( _username);
        res.send(bloggerData1);
    }
    catch(e)
    {
        res.status(400).send(e);
    }

});

app.get("/bloggers/:id",async(req,res)=>{
    try
    {
        const _id = req.params.id;
        const bloggerData2 = await Blogger.findById(_id);
        console.log(bloggerData2);

        if(!bloggerData2)
        {
            return res.status(404).send();
        }
        else
        {
            res.send(bloggerData2);
        }
    }
    catch(e)
    {
        res.status(500).send(e);
    }

});

app.patch("/bloggers/:id",async(req,res)=>{
    try
    {
        const _id = req.params.id;
        const bloggerData1 = await Blogger.findByIdandUpdate(_id, req.body);
        res.send(bloggerData1);
    }
    catch(e)
    {
        res.status(500).send(e);
    }

});

app.getDocument = async(req,res)=>{
    try
    {
        const sorteddata = await Blogger.find().select({blog}).sort();
        res.send(sorteddata);
    }
    catch(e)
    {
        res.status(400).send(e);
    }

};
getDocument();




app.listen(8000,()=>{
    console.log("blog server has been created");
});