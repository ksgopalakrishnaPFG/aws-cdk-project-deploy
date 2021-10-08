import * as cdk from '@aws-cdk/core';
import { CfnOutput } from '@aws-cdk/core';
import { AwsCdkProjectDeployStack } from './aws-cdk-project-deploy-stack';

export class AwsCdkProjectPipelineStage extends cdk.Stage {
public readonly urlOutput : CfnOutput;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    const stage  = new AwsCdkProjectDeployStack(this,'FirstWebService');

    this.urlOutput = stage.urlOutput; 
  }
}
