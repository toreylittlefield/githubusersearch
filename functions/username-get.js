const axios = require('axios');

const MYTOKEN = process.env.AUTH

exports.handler = async (event, context) => {
    const search = event.queryStringParameters.search;
    const targetURL = `https://api.github.com/users/${search}`;

    console.log({ MYTOKEN })

    try {

        const response = await axios.get(targetURL, {
            headers: {
                "Authorization": `TOKEN ${MYTOKEN}`
            }
        });

        console.log(response)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }



    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

};