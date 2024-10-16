const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function addWebhookSubscription(subscriptionData) {
  const url = "<<API_URL>>/webhooks";

  try {
    const response = await axios.post(url, subscriptionData, {
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
const subscriptionData = {
  endpoint: 'https://example.com/webhook',
}

addWebhookSubscription(subscriptionData)
  .then((result) => console.log('Webhook subscription added:', result))
  .catch((error) => console.error('Failed to add webhook subscription:', error))
