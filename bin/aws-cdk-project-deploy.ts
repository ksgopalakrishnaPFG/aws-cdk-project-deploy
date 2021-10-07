#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkProjectPipelineStack } from '../lib/aws-cdk-project-pipeline-stack';

const app = new cdk.App();
new AwsCdkProjectPipelineStack(app, 'AwsCdkProjectPipelineStack', {
  env :{account:'935483961059' ,region: 'us-east-1'}

});
app.synth();