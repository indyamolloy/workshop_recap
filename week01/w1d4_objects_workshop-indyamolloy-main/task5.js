let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};

const text = communication.payload.message.text;

if (communication.payload.message.priority === "URGENT") {
  console.log(text);
}
