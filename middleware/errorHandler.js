const {constants} = require("../errorConstants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    // res.json({title : "ERROR_TITLE" ,message: err.message, stackTrace : err.stack});

    switch(statusCode){
        case constants.NOT_FOUND:
            res.json({
                title: "NOT FOUND",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        
        case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message,
                stackTrace: err.stack
            });
            break;
            
        case constants.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.VALIDATION_ERROR:
            res.json({
                title: "VALIDATION ERROR",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        
        case constants.SERVER_ERROR:
            res.json({
                title: "SERVER ERROR",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("NO ERROR\n");
            break;
    }


    // console.log(err.module);
}


module.exports = errorHandler;