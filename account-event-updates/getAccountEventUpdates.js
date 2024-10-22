const axios = require("axios");

const apiKey = "your-api-key";
const consumerId = "your-consumer-id";

async function getAccountEventUpdates(params) {
  const url = "<<API_URL>>/account-event-updates";

  const queryParams = new URLSearchParams({
    projectId: params.projectId,
    sortOrder: params.sortOrder || "desc",
    limit: params.limit || 50,
    offset: params.offset || 0,
  });

  try {
    const response = await axios.get(`${url}?${queryParams.toString()}`, {
      headers: {
        "x-api-key": apiKey,
        "x-consumer-id": consumerId,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}

// Example invocation
const params = {
  projectId: "01924e63-bacf-752b-b5fd-a0d4244f761d",
  sortOrder: "desc",
  limit: 20,
  offset: 0,
};

getAccountEventUpdates(params)
  .then((result) => console.log("Account event updates:", result))
  .catch((error) =>
    console.error("Failed to fetch account event updates:", error)
  );
