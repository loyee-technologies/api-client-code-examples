const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function deleteProjectMessaging(projectId) {
  const url = `<<API_URL>>/projects/${projectId}/messaging`;

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

// Example invocation
const projectId = '01924e63-bacf-752b-b5fd-a0d4244f761d'

deleteProjectMessaging(projectId)
  .then((result) => console.log('Project messaging settings deleted:', result))
  .catch((error) =>
    console.error('Failed to delete project messaging settings:', error)
  )
