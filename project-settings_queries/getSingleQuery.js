const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getEnrichmentRequestQuery(projectId, queryId) {
  const url = `<<API_URL>>/projects/${projectId}/queries/${queryId}`;

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
const queryId = '01924e63-bacf-752b-b5fd-a0d4244f761e'

getEnrichmentRequestQuery(projectId, queryId)
  .then((result) => console.log('Enrichment request query:', result))
  .catch((error) =>
    console.error('Failed to fetch enrichment request query:', error)
  )
