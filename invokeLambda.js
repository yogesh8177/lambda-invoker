const AWS = require(`aws-sdk`);
const lambda = new AWS.Lambda();

let invokeLambda = (i) => {
    return new Promise((resolve, reject) => {
        let payload = {
            message: `Hello world, call: ${i}`,
        };
        var params = {
            FunctionName: "invokeMeTest", 
            Payload: JSON.stringify(payload), 
            Qualifier: "$LATEST"
        };
        lambda.invoke(params, function(err, data) {
            if (err) {
                console.log(err, err.stack);
                return reject(err);
            } // an error occurred
            else  {
                console.log(`Lambda invoked successfuly`);
                console.log(data); 
                return resolve(data);
            }
          });
    });
}

module.exports = invokeLambda;