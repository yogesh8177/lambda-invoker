const invoker = require(`./invokeLambda`);

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    try{
        // TODO implement
        let totalInvocations = [];
        for(let i = 0; i < 10; i++) {
            totalInvocations.push(i);
        }
        await Promise.all(
            totalInvocations.map(i => {
                console.log(`invoking ${i}th function`);
                return invoker(i);
            })
        )
        console.log(`finished part 1`);

        await Promise.all(
            totalInvocations.map(i => {
                console.log(`invoking ${i}th function`);
                return invoker(i);
            })
        )

        console.log(`finished part 2`);
        return response;
    }catch(error) {
        response.statusCode = 500;
        console.error(error);
        return response;
    }
};
