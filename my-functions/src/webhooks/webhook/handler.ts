/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/docs/8base-console/custom-functions/webhooks/
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    webhook:
 *      ...
 *
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local webhook -p src/resolvers/webhook/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local webhook -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock webhook -m [MOCK_FILE_NAME]
 */
import gql from 'graphql-tag';
import { FunctionContext, FunctionEvent } from '8base-cli-types';



type WebhookResult = {
  statusCode: number,
  body: string,
};

const QUERY_MUTATION: any =gql`
mutation Invoice($data: TaskUpdateInput!){
  taskUpdate(data: $data) {
    status
  }
}
`

const responseBuilder = (code = 200, message: string  , headers = {}) => ({
  body: JSON.stringify({ message }),
  statusCode: code,
  headers,
});

export default async (
  event: FunctionEvent,
  ctx: FunctionContext,
): Promise<WebhookResult> => {
 // const data: any = JSON.parse(event.body as any)  ;
    const data = JSON.parse(event.body); 
  let response;

  try{

  response = await ctx.api.gqlRequest(QUERY_MUTATION, data, {checkPermissions:false})
   const result = JSON.parse(response);

  return {
    statusCode: 200,
    body: JSON.stringify({
      result,
    }),
  };

  //console.log(response);
  }catch(err){
    return responseBuilder(422, 'Failed to update invoice');
  }


};
