const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getProjectAccountEventUpdate(projectId) {
  const url = `<<API_URL>>/projects/${projectId}/account-event-update`;

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

getProjectAccountEventUpdate(projectId)
  .then((result) =>
    console.log('Project account event update settings:', result)
  )
  .catch((error) =>
    console.error(
      'Failed to fetch project account event update settings:',
      error
    )
  )
