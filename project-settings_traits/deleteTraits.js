const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function deleteProjectTraits(projectId) {
  const url = `<<API_URL>>/projects/${projectId}/traits`;

  try {
    const response = await axios.delete(url, {
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
const projectId = '01924e63-bacf-752b-b5fd-a0d4244f761d'

deleteProjectTraits(projectId)
  .then(() => console.log('Project traits deleted successfully'))
  .catch((error) => console.error('Failed to delete project traits:', error))
