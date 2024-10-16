const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getProjectTraits(projectId) {
  const url = `<<API_URL>>/projects/${projectId}/traits`;

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

getProjectTraits(projectId)
  .then((result) => console.log('Project traits:', result))
  .catch((error) => console.error('Failed to fetch project traits:', error))
