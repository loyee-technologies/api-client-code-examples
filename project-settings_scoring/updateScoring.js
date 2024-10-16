const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

async function updateProjectScoring(projectId, scoringData) {
  const url = `<<API_URL>>/projects/${projectId}/scoring`;

  try {
    const response = await axios.put(url, scoringData, {
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
const scoringData = {
  tiers: [
    {
      label: 'Tier 1',
      value: 'tier_1',
      maxPoints: null,
      minPoints: 15,
    },
    {
      label: 'Tier 2',
      value: 'tier_2',
      maxPoints: 14,
      minPoints: 8,
    },
    {
      label: 'Tier 3',
      value: 'tier_3',
      maxPoints: 7,
      minPoints: null,
    },
  ],
  conditions: [
    {
      buckets: [
        {
          points: 2,
          values: ['yes'],
        },
        {
          points: -1,
          values: ['no'],
        },
      ],
      fieldId: '389c2942-3793-45b4-b70e-e957d641f2b9',
      isMustHave: false,
    },
    {
      fieldId: 'cloud_providers',
      isMustHave: false,
      buckets: [
        {
          points: 2,
          values: ['AWS', 'Google'],
        },
        {
          points: 1,
          values: ['Microsoft'],
        },
      ],
    },
    {
      fieldId: 'department_headcount_sales',
      isMustHave: false,
      buckets: [
        {
          value: 10,
          points: 1,
          operator: 'gt',
        },
        {
          value: 50,
          points: 2,
          operator: 'gt',
        },
      ],
    },
    {
      fieldId: 'employee_size',
      isMustHave: false,
      buckets: [
        {
          points: 1,
          values: ['1-10', '11-50'],
        },
        {
          points: 2,
          values: ['51-200', '201-500'],
        },
        {
          points: 3,
          values: ['501-1000', '1001-5000', '5001-10000', '10001+'],
        },
      ],
    },
    {
      fieldId: 'total_funding_amount',
      isMustHave: false,
      buckets: [
        {
          value: 1000000,
          points: 1,
          operator: 'gt',
        },
        {
          value: 10000000,
          points: 2,
          operator: 'gt',
        },
      ],
    },
    {
      fieldId: 'year_founded',
      isMustHave: false,
      buckets: [
        {
          value: 2010,
          points: 2,
          operator: 'lt',
        },
        {
          value: 2020,
          points: 1,
          operator: 'lt',
        },
      ],
    },
    {
      fieldId: 'last_funding_date',
      isMustHave: false,
      buckets: [
        {
          values: ['1', '3'],
          points: 5,
        },
        {
          values: ['6', '12'],
          points: 2,
        },
        {
          values: ['24'],
          points: 1,
        },
      ],
    },
  ],
}

updateProjectScoring(projectId, scoringData)
  .then((result) => console.log('Project scoring updated:', result))
  .catch((error) => console.error('Failed to update project scoring:', error))
