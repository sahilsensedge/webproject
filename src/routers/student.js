const express =require("express");
const router=new express.Router();
const Student=require("../models/student")


router.post("/students", async(req,res) =>{

    try {
        const user = new Student (req.body);
        const createUser=await user.save();
        res.status(200).send(createUser);  
    } catch (e) {
        res.status(400).send(e);
    }

})

//get data from database
router.get ("/students",async (req,res)=>{
    try {
            const studentData=await Student.find();
            res.send(studentData);
    } catch (e) {
        res.send(e);
    }
})

//get indivisual student data  BY ID
router.get("/students/:id",async (req,res)=>{

    try {
           const _id=req.params.id;
           const studentData=await Student.findById(_id);

           if(!studentData){
               return res.status(404).send();
           }else{
               res.send(studentData);
           }
    } catch (e) {
        res.send(e);
    }
})



//get indivisual student data BY NAME
router.get("/students/:name",async (req,res)=>{

    try {
           const _name=req.params.name;
           const studentData=await Student.findByName(_name);

           if(!studentData){
               return res.status(404).send();
           }else{
               res.send(studentData);
           }
    } catch (e) {
        res.send(e);
    }
})


//delete student data by id
router.delete("/students/:id", async (req,res) =>{

    try {
            const deleteStudent= await Student.findByIdAndDelete(req.params.id);

            if(!req.params.id){
                return res.status(400).send();
            }
            res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
})  

//update student data by id

router.patch("/students/:id", async (req,res) =>{

    try {
            const _id=req.params.id;
            const updateStudents=await Student.findByIdAndUpdate(_id,req.body,{
                new:true
            })

            res.send(updateStudents);
    } catch (e) {
        res.status(400).send(e);
    }
})


module.exports=router;