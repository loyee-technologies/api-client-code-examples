const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function createEnrichmentRequestQuery(projectId, queryData) {
  const url = `<<API_URL>>/projects/${projectId}/queries`;

  try {
    const response = await axios.post(url, queryData, {
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

//Example invocationss for different query types

// 1. Jobs query
const jobsQuery = {
  query: 'Does the company offer hybrid work options for its employees?',
  sourceType: 'jobs',
  isSearchOpenJobsOnly: true,
  greaterThanLastPostingDate: '2024-01-01',
  instructions:
    'It must be explicitly mentioned that they offer hybrid work options. If jobs are remote-only, this does not apply, however, if there are multiple job postings that are either remote or on-site or simply do not mention the work location, this applies.',
}

// 2. Web query with data extraction
const webQuery = {
  query:
    "Does the company's pricing page explicitly list prices with numerical values for their plans or tiers?",
  sourceType: 'web',
  instructions:
    'The pricing must be explicit and not hidden behind a "contact sales" button or a "request a demo" form. Please focus on traditional pricing pages that list prices for different plans or tiers.',
  metaDataQuery: 'List name of pricing plan and the price',
  metaDataConfig: {
    instructions: 'Prices must contain numerical component',
    schemas: [
      {
        field: 'pricing_plan',
        dataType: 'string',
      },
      {
        field: 'price',
        dataType: 'number',
      },
    ],
  },
}

// 3. Technologies query
const technologiesQuery = {
  query: 'Are they using AWS?',
  sourceType: 'technologies',
  instructions: 'Check if AWS is mentioned as the cloud provider',
}

// Example usage
const projectId = '0192751a-5627-7528-bb33-fef852e46a1e'

// Create jobs query
createEnrichmentRequestQuery(projectId, jobsQuery)
  .then((result) => console.log('Jobs query created:', result))
  .catch((error) => console.error('Failed to create jobs query:', error))

// Create web query
createEnrichmentRequestQuery(projectId, webQuery)
  .then((result) => console.log('Web query created:', result))
  .catch((error) => console.error('Failed to create web query:', error))

// Create technologies query
createEnrichmentRequestQuery(projectId, technologiesQuery)
  .then((result) => console.log('Technologies query created:', result))
  .catch((error) =>
    console.error('Failed to create technologies query:', error)
  )
