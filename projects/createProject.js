const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function createProject(projectData) {
  const url = "<<API_URL>>/projects";

  try {
    const response = await axios.post(url, projectData, {
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
const newProject = {
  name: 'Sample Project',
  description: 'This is a sample project',
  promptResponseLocale: 'en',
  // Add other required fields based on the CreateProjectSchema
}

createProject(newProject)
  .then((result) => console.log('Project creation result:', result))
  .catch((error) => console.error('Project creation failed:', error))
