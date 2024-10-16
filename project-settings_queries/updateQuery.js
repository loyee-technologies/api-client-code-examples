const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function updateEnrichmentRequestQuery(projectId, queryId, queryData) {
  const url = `<<API_URL>>/projects/${projectId}/queries/${queryId}`;

  try {
    const response = await axios.put(url, queryData, {
      headers: {
        'Content-Type': 'application/json',
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
const queryData = {
  query: 'Are they using GCP?',
  sourceType: 'technologies',
  instructions: 'Check if GCP is mentioned as the cloud provider',
}

updateEnrichmentRequestQuery(projectId, queryId, queryData)
  .then((result) => console.log('Enrichment request query updated:', result))
  .catch((error) =>
    console.error('Failed to update enrichment request query:', error)
  )
