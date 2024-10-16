const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getAccount(projectId, accountId) {
  const url = `<<API_URL>>/projects/${projectId}/accounts/${accountId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'x-api-key': apiKey,
        'x-consumer-id': consumerId,
      },
    })

    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

//Example invocations
const projectId = '019274ea-aa39-7598-91b8-b584117b53c9'
const accountId = '019274eb-1e3d-7fe3-ba44-9eeeb33e851f'

getAccount(projectId, accountId)
  .then((result) => console.log('Account fetched:', result))
  .catch((error) => console.error('Failed to fetch account:', error))
