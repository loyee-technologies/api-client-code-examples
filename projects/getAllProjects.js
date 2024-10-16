const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getProjects(queryParams = {}) {
  const url = "<<API_URL>>/projects";

  try {
    const response = await axios.get(url, {
      params: queryParams,
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
const queryParams = {
  limit: 10,
  offset: 0,
}

getProjects(queryParams)
  .then((result) => console.log('Projects fetched:', result))
  .catch((error) => console.error('Failed to fetch projects:', error))
