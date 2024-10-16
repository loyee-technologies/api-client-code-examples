const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function deleteWebhookSubscription() {
  const url = "<<API_URL>>/webhooks";

  try {
    const response = await axios.delete(url, {
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
deleteWebhookSubscription()
  .then(() => console.log('Webhook subscription deleted successfully'))
  .catch((error) =>
    console.error('Failed to delete webhook subscription:', error)
  )
