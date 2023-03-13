"use strict"

const AWS = require("aws-sdk");

const fetchItem = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    let item;

    try {
        const result = await dynamoDB.get({
            TableName: "ItemTableNew",
            key: {id}
        }).promise();

        item = result.item;
    
    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        bodt: JSON.stringify(item),
    }

}

module.exports = {
    handler: fetchItem,
};