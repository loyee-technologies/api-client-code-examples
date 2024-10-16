const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function addAccountsToProject(projectId, accounts) {
  const url = `<<API_URL>>/projects/${projectId}/accounts`;

  try {
    const response = await axios.post(url, accounts, {
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
const accounts = [
  {
    accountName: 'Example Company',
    websiteUrl: 'https://example.com',
    linkedInCompanyUrl: 'https://www.linkedin.com/company/example-company',
  },
  // Add more accounts as needed
]

addAccountsToProject(projectId, accounts)
  .then((result) => console.log('Accounts added successfully:', result))
  .catch((error) => console.error('Failed to add accounts:', error))
