const mongoose=require("mongoose")
const StudentModel=require("../Models/StudentModel")
mongoose.connect('mongodb://127.0.0.1:27017/mybikes')

const StudentService={
    showbikes:async()=>{
        var bikes=await StudentModel.find();
        console.log(bikes);
        return bikes;
    },
    addbikes:async(item)=>{
        await StudentModel.create(item);
        var bikes=await StudentModel.find();
        return bikes;
    },
    updatebikes:async(id,item)=>{
        await StudentModel.findOneAndUpdate({id:id},{
            model:item.model,
            brand:item.brand,
            category:item.category,
            cost:item.cost,
        })
        return await StudentModel.findOne({id:id});
    },
    deletebikes:async(id)=>{
        await StudentModel.findOneAndDelete({id:id});
        return await StudentModel.find();
    },
    searchbikes:async(value)=>{
        var bikes=await StudentModel.find({ 
            $or: [
                { model: value }, 
                { brand: value }, 
                { category: value },
                { cost: value }
            ] 
        })
        return bikes;
    }
}

module.exports=StudentService;