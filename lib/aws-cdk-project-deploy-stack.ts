import { LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway';
import { Runtime } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import * as cdk from '@aws-cdk/core';
import { CfnOutput } from '@aws-cdk/core';
import { join } from 'path';

export class AwsCdkProjectDeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new NodejsFunction(this,'',{
      entry : join(__dirname,'..','lambda','Hello.ts'),
      handler : 'getHandler',
      runtime : Runtime.NODEJS_14_X
    })

    const api = new RestApi(this,'restApi');

    const integartion = new LambdaIntegration(handler);
    api.root.addResource('hi').addMethod('GET',integartion);

    new CfnOutput(this,'urlValue'{
      value : api.url
    })
  }
}
