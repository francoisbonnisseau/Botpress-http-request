import { IntegrationDefinition , z} from '@botpress/sdk'
import { integrationName } from './package.json'


const headersDescription = 'Headers to include in the request, often used for authentication with Authorization.'
const bodyDescription = 'Body of the request (JSON). Include here the payload to send in the request.'
const methodDescription = 'HTTP method to use for the request. Supported methods are GET, POST, PUT, DELETE.'

export default new IntegrationDefinition({
  name: integrationName,
  version: '0.0.3',
  readme: 'hub.md',
  icon: 'icon.svg',
  title: 'Simple HTTP request',
  description: 'This integration sends a simple HTTP request',
  channels: {},
  actions: {
    httpRequest: {
      title: 'HTTP Request',
      description: 'Send a simple HTTP request',
      input: {
        schema: z.object({
          url: z.string(),
          method: z.string().default('GET').describe(methodDescription),
          headers: z.string().optional().describe(headersDescription),
          body: z.string().optional().describe(bodyDescription),
        }),
      },
      output: {
        schema: z.object({
          response: z.record(z.unknown())
        }),
      },
    },
  },
  events: {},
})
