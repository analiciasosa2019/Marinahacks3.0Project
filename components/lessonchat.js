app.component('lessonchat', {
    template: /*html*/ `
    <div class="chatbot-container">
    <button class="chat-button" @click="showModal = true">Open Chatbot</button>
    <div v-if="showModal" class="modal-container">
      <div class="modal-content">
        <span class="close-button" @click="showModal = false">&times;</span>
        <iframe class="chatbot-iframe" src="https://web.powerva.microsoft.com/environments/Default-d175679b-acd3-4644-be82-af041982977a/bots/new_bot_51024a6744d440b1b85399572530cbf2/webchat"></iframe>
      </div>
    </div>
  </div>
    `,
    data() {
        return {
          showModal: false,
        };
      },
  });