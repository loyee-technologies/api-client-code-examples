const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getProjectScoring(projectId) {
  const url = `<<API_URL>>/projects/${projectId}/scoring`;

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
const projectId = '01924e63-bacf-752b-b5fd-a0d4244f761d'

getProjectScoring(projectId)
  .then((result) => console.log('Project scoring:', result))
  .catch((error) => console.error('Failed to fetch project scoring:', error))
