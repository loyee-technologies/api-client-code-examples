const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function updateProjectMessaging(projectId, messagingData) {
  const url = `<<API_URL>>/projects/${projectId}/messaging`;

  try {
    const response = await axios.put(url, messagingData, {
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
const messagingData = {
  fields: [
    {
      order: 1,
      fieldId: '7dbd22ea-0e97-4ad6-b250-e2c72012f45e',
      instructions: 'Only look into the mentioned projects/products.',
      triggerExample: 'I noticed you are selling SAAS solutions',
      matchingBuckets: [
        {
          points: 2,
          values: ['yes'],
        },
      ],
      sourceVariables: [],
      userCreatedVariables: [],
      traitFieldIdVariables: [],
    },
    {
      order: 2,
      fieldId: 'department_headcount_sales',
      instructions: '',
      triggerExample:
        'Looks like you have more than {{department_headcount_sales}} sales people!',
      matchingBuckets: [
        {
          value: 3,
          points: 1,
          operator: 'gt',
        },
      ],
      sourceVariables: [],
      userCreatedVariables: [],
      traitFieldIdVariables: ['department_headcount_sales'],
    },
  ],
}

updateProjectMessaging(projectId, messagingData)
  .then((result) => console.log('Project messaging settings updated:', result))
  .catch((error) =>
    console.error('Failed to update project messaging settings:', error)
  )
