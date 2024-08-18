import * as sdk from '@botpress/sdk'
import * as bp from '.botpress'
import axios from 'axios';

export default new bp.Integration({
  register: async () => {},
  unregister: async () => {},
  actions: {
    httpRequest: async (args) => {
      const input = args.input;
      const url = input.url;
      const method = input.method?.toUpperCase() || 'GET';
      const headers = input.headers || {};
      const inputBody = input.body || null;
    
      const allowedMethods = ['GET', 'POST', 'DELETE', 'PUT'];
    
      // Validate HTTP method
      if (!allowedMethods.includes(method)) {
        throw new Error(`Invalid HTTP method: ${method}`);
      }
    
      // Parse headers if they are provided as a JSON string
      let parsedHeaders = {};
      try {
        if (typeof headers === 'string') {
          parsedHeaders = JSON.parse(headers);
        } else {
          parsedHeaders = headers;
        }
      } catch (error:any) {
        args.logger.forBot().error('Error during parsing headers', error);
        throw new sdk.RuntimeError('Unexpected error during parsing headers', error);
      }
    
      // Parse body if it's provided as a JSON string
      let parsedBody = null;
      try {
        if (typeof inputBody === 'string') {
          parsedBody = JSON.parse(inputBody);
        } else {
          parsedBody = inputBody;
        }
      } catch (error:any) {
        args.logger.forBot().error('Error during parsing body', error);
        throw new sdk.RuntimeError('Unexpected error during parsing body', error);
      }
    
      // Prepare Axios config
      const config = {
        method: method,
        url: url,
        headers: parsedHeaders,
        data: parsedBody
      };
    
      // Perform the HTTP request
      try {
        const response = await axios(config);
        return { response: response.data };
      } catch (error:any) {
        
        args.logger.forBot().error('Error during HTTP request', error);
        return { response: error.response?.data || error.message };
        // throw new sdk.RuntimeError('Unexpected error during API call', error);
      }

    }
  },
  channels: {},
  handler: async () => {},
})
