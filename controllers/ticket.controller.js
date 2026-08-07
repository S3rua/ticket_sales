const ticketModel = require("../models").ticket;
const Op = require("sequelize").Op;

exports.getAllTicket = async (req,res)=>{
    try{
        const seat = await ticketModel.findAll()

        return res.json({
            success:true,
            data:seat,
            message:"All ticket loaded"
        })

    }catch(err){
        return res.json({
            success:false,
            message:err.message
        })
    }
}
exports.findTicket = async(req,res)=>{

    let keyword=req.params.key

    let ticket=await ticketModel.findAll({

        where:{
            [Op.or]:[
                {
                    bookedDate:{
                        [Op.substring]:keyword
                    }
                }
            ]
        }

    })

    return res.json({
        success:true,
        data:ticket
    })

}
exports.addTicket=async(req,res)=>{

    let newTicket={

        eventID:req.body.eventID,
        userID:req.body.userID,
        seatID:req.body.seatID,
        bookedDate:req.body.bookedDate

    }

    await ticketModel.create(newTicket)

    return res.json({

        success:true,
        message:"Ticket berhasil ditambah"

    })

}
exports.updateTicket=async(req,res)=>{

    let id=req.params.id

    let data={

        eventID:req.body.eventID,
        userID:req.body.userID,
        seatID:req.body.seatID,
        bookedDate:req.body.bookedDate

    }

    await ticketModel.update(data,{

        where:{
            ticketID:id
        }

    })

    return res.json({

        success:true,
        message:"Update berhasil"

    })

}
exports.deleteTicket=async(req,res)=>{

    let id=req.params.id

    await ticketModel.destroy({

        where:{
            ticketID:id
        }

    })

    return res.json({

        success:true,
        message:"Delete berhasil"

    })

}