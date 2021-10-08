import { LambdaIntegration, LambdaRestApi, RestApi } from '@aws-cdk/aws-apigateway';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import * as cdk from '@aws-cdk/core';
import { CfnOutput } from '@aws-cdk/core';
import * as path from 'path';

export class AwsCdkProjectDeployStack extends cdk.Stack {
  public readonly urlOutput : CfnOutput;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new Function(this,'LambdaHandler',{
      runtime: Runtime.NODEJS_12_X,
      handler: 'Hello.handler',
      code : Code.fromAsset(path.resolve(__dirname,'..','lambda'))
    });

    const api = new LambdaRestApi(this,'restApi',{
    description: 'Endpoint for the simple Lambda',
      handler
    });

    this.urlOutput = new CfnOutput(this, 'URL',{
      value : api.url
    })
  }
}
