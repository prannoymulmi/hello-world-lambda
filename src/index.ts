import {APIGatewayEvent} from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<any> => {
    console.log('Hello World!');
    return {
        statusCode: 200,
        body: "hello world"
    }
}