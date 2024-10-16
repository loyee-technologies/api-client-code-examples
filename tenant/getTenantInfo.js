const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function getTenantInfo() {
  const url = "<<API_URL>>/tenant";

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

getTenantInfo()
  .then((result) => console.log('Tenant information:', result))
  .catch((error) => console.error('Failed to fetch tenant information:', error))
