'use strict';
module.exports = function stamper(req,res,next){
    req.timeStamp = new Date();
next();
}