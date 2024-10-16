const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getProjectStatus(projectId) {
  const url = `<<API_URL>>/projects/${projectId}/status`;

  try {
    const response = await axios.get(url, {
      headers: {
        'x-api-key': apiKey,
        'x-consumer-id': consumerId,
      },
    })

    console.log('Project status:', response.data)
    return response.data
  } catch (error) {
    console.error(
      'Error fetching project status:',
      error.response?.data || error.message
    )
    throw error
  }
}

//Example invocations
const projectId = '019274ea-aa39-7598-91b8-b584117b53c9'
getProjectStatus(projectId)
  .then((result) => console.log('Project status fetched:', result))
  .catch((error) => console.error('Failed to fetch project status:', error))
