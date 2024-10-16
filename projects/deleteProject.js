const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function deleteProject(projectId) {
  const url = `<<API_URL>>/projects/${projectId}`;

  try {
    await axios.delete(url, {
      headers: {
        'x-api-key': apiKey,
        'x-consumer-id': consumerId,
      },
    })
  } catch (error) {
    throw error
  }
}

//Example invocations
const projectId = '019274b9-2b4b-7574-8356-7ab933aa6da5'
deleteProject(projectId)
  .then(() => console.log('Project deleted successfully'))
  .catch((error) => console.error('Failed to delete project:', error))
