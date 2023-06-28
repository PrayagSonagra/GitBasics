exports.getAll = (req , res)=>{
    console.log("dkjsf");
    res.json({message : "RUNNING"})
}
exports.postAll = (req , res)=>{
    console.log(req.body);
    res.json({message : req.body})


}