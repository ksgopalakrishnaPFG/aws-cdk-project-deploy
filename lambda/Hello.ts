import { Construct } from '@aws-cdk/core'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
export const getHandler = async(event:APIGatewayProxyEvent,construct:Construct):Promise<APIGatewayProxyResult> =>{
    const result: APIGatewayProxyResult ={
        statusCode : 200,
        body: 'Sucessfully processed'
    }
    return result;
}