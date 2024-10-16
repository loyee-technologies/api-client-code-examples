const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function updateProjectAccountEventUpdate(
  projectId,
  accountEventUpdateData
) {
  const url = `<<API_URL>>/projects/${projectId}/account-event-update`;

  try {
    const response = await axios.put(url, accountEventUpdateData, {
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
const accountEventUpdateData = {
  tiers: ['tier_1', 'tier_2', 'tier_3'],
  events: [
    {
      type: 'fundraising',
      schedule: 'daily',
      isRecurring: true,
    },
  ],
}

updateProjectAccountEventUpdate(projectId, accountEventUpdateData)
  .then((result) =>
    console.log('Project account event update settings updated:', result)
  )
  .catch((error) =>
    console.error(
      'Failed to update project account event update settings:',
      error
    )
  )
