const axios = require('axios')

const apiKey = 'your-api-key'
const consumerId = 'your-consumer-id'

const baseUrl = "<<API_URL>>/projects";

const headers = {
  'x-api-key': apiKey,
  'x-consumer-id': consumerId,
}

async function makeRequest(url, method = 'post') {
  try {
    const response = await axios({
      method,
      url,
      headers,
    })
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}

async function startProject(projectId) {
  return makeRequest(`${baseUrl}/${projectId}/start`)
}

async function pauseProject(projectId) {
  return makeRequest(`${baseUrl}/${projectId}/pause`)
}

async function resumeProject(projectId) {
  return makeRequest(`${baseUrl}/${projectId}/resume`)
}

async function cancelProject(projectId) {
  return makeRequest(`${baseUrl}/${projectId}/cancel`)
}

async function restartProject(projectId) {
  return makeRequest(`${baseUrl}/${projectId}/restart`)
}

const projectId = '0192751a-5627-7528-bb33-fef852e46a1e'

async function handleCommand(command) {
  try {
    switch (command.toLowerCase().trim()) {
      case 'start':
        console.log('Starting project...')
        const startResult = await startProject(projectId)
        console.log('Project started:', startResult)
        break
      case 'pause':
        console.log('Pausing project...')
        const pauseResult = await pauseProject(projectId)
        console.log('Project paused:', pauseResult)
        break
      case 'resume':
        console.log('Resuming project...')
        const resumeResult = await resumeProject(projectId)
        console.log('Project resumed:', resumeResult)
        break
      case 'cancel':
        console.log('Cancelling project...')
        const cancelResult = await cancelProject(projectId)
        console.log('Project cancelled:', cancelResult)
        break
      case 'restart':
        console.log('Restarting project...')
        const restartResult = await restartProject(projectId)
        console.log('Project restarted:', restartResult)
        break
      case 'exit':
        return false
      default:
        console.log(
          'Invalid command. Available commands: start, pause, resume, cancel, restart, exit'
        )
    }
  } catch (error) {
    console.error('An error occurred:', error)
  }
  return true
}

function promptUser() {
  process.stdout.write(
    'Enter a command (start, pause, resume, cancel, restart): '
  )
}

process.stdin.setEncoding('utf8')

promptUser()

process.stdin.on('data', async (input) => {
  const shouldContinue = await handleCommand(input)
  if (!shouldContinue) {
    console.log('Exiting...')
    process.exit(0)
  } else {
    promptUser()
  }
})

process.stdin.on('end', () => {
  console.log('Input stream ended. Exiting...')
  process.exit(0)
})
