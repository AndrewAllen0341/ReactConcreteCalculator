const { secondsToMilliseconds } = require('date-fns');
const Section = require('../models/Section')

//Get all sections 
//Route: GET /api/v1/section
exports.getSection = async (req, res, next) => {
    try{
        const section = await Section.find();
        return res.status(200).json({
            success: true,
            count: secondsToMilliseconds.length,
            data: section
        })
    }
    catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

//Add sections 
//Route: POST /api/v1/section
exports.addSection = async (req, res, next) => {
try {
    const { text, squareFeet, InToFe } = req.body;

    const section = await Section.create(req.body);

    return res.status(201).json({
        success: true,
        data: section
    });
}
catch (err) {
    if(err.name === "ValidationError"){
        const messages = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({
            success: false,
            error: messages
        });
    }
    else {
        return res.status(500).json({
            success:false,
            error: 'Server Error'
        })
    }
  }  
}

//Delete sections 
//Route: Delete /api/v1/section/:id
exports.deleteSection = async (req, res, next) => {
    try{
        const section = await Section.findById(req.params.id);

        if(!section){
            return res.status(404).json({
                success: false,
                error: 'No section found'
            });
        }
        await section.remove();
        return res.status(200).json({
            success: true,
            data: {}
        })
    }
    catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}