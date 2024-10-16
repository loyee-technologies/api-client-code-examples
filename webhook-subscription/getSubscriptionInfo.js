const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getWebhookSubscription() {
  const url = "<<API_URL>>/webhooks";

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
getWebhookSubscription()
  .then((result) => console.log('Webhook subscription:', result))
  .catch((error) => console.error('Failed to get webhook subscription:', error))
