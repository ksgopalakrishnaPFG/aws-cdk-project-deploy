import * as cdk from '@aws-cdk/core';
import { CfnOutput } from '@aws-cdk/core';
import { AwsCdkProjectStack } from './aws-cdk-project-stack';

export class AwsCdkProjectPipelineStage extends cdk.Stage {
public readonly urlOutput : CfnOutput;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    const stage  = new AwsCdkProjectStack(this,'FirstWebService');

    new CfnOutput(this,'StageUrlSuffix',{
      value : stage.urlSuffix
    })
     
  }
}
