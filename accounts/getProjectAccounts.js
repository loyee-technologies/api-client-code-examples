const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getProjectAccounts(projectId, queryParams = {}) {
  const url = `<<API_URL>>/projects/${projectId}/accounts`;

  try {
    const response = await axios.get(url, {
      params: queryParams,
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
const queryParams = {
  limit: 10,
  offset: 0,
}

getProjectAccounts(projectId, queryParams)
  .then((result) => console.log('Project accounts fetched:', result))
  .catch((error) => console.error('Failed to fetch project accounts:', error))
