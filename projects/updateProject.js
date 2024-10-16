const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function updateProject(projectId, updateData) {
  const url = `<<API_URL>>/projects/${projectId}`;

  try {
    const response = await axios.put(url, updateData, {
      headers: {
        'Content-Type': 'application/json',
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
const updateData = {
  name: 'Updated Project Name',
  description: 'This is an updated project description',
  // Add other fields you want to update
}

updateProject(projectId, updateData)
  .then((result) => console.log('Project update result:', result))
  .catch((error) => console.error('Failed to update project:', error))
