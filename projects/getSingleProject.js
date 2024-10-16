const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getProject(projectId) {
  const url = `<<API_URL>>/projects/${projectId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'x-api-key': apiKey,
        'x-consumer-id': consumerId,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}

//Example invocations
const projectId = '019274b9-2b4b-7574-8356-7ab933aa6da5'
getProject(projectId)
  .then((result) => console.log('Project fetched:', result))
  .catch((error) => console.error('Failed to fetch project:', error))
