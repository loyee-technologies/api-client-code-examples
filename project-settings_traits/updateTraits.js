const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function updateProjectTraits(projectId, traitsData) {
  const url = `<<API_URL>>/projects/${projectId}/traits`;

  try {
    const response = await axios.put(url, traitsData, {
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
const projectId = '0192751a-5627-7528-bb33-fef852e46a1e'
const traitsData = [
  {
    fieldId: 'cloud_providers',
  },
  {
    fieldId: 'department_headcount_sales',
  },
  {
    fieldId: 'employee_size',
  },
  {
    fieldId: 'total_funding_amount',
  },
  {
    fieldId: 'year_founded',
  },
  {
    fieldId: 'last_funding_date',
  },
]

updateProjectTraits(projectId, traitsData)
  .then((result) => console.log('Project traits updated:', result))
  .catch((error) => console.error('Failed to update project traits:', error))
