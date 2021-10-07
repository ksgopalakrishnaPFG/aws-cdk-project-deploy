import * as cdk from "@aws-cdk/core";
import * as codepipeline from "@aws-cdk/aws-codepipeline";
import * as codepipeline_actions from "@aws-cdk/aws-codepipeline-actions";
import * as pipe_line from "@aws-cdk/pipelines";
import { SecretValue } from "@aws-cdk/core";
import { pipeline } from "stream";

export class AwsCdkProjectPipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();

    const pipeline = new pipe_line.CdkPipeline(this, "PipeLine", {
      //the pipeline name
      pipelineName: "MyPipeLine",
      cloudAssemblyArtifact,

      //this the source information
      sourceAction: new codepipeline_actions.GitHubSourceAction({
        actionName: "MyGitHubSource",
        oauthToken: SecretValue.secretsManager("AWS_CDK_Piepline_token"),
        output: sourceArtifact,
        owner: "ksgopalakrishnaPFG",
        repo: "aws-cdk-project-deploy",
        branch: "master"
      }),

      //how to build
      synthAction: pipe_line.SimpleSynthAction.standardNpmSynth({
        sourceArtifact,
        cloudAssemblyArtifact,

        //we need to build the typescript contents
        buildCommand: "npm run build",
      }),
    });
    // The code that defines your stack goes here
  }
}
