<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="fetchMessage">Fetch Message</button>
  </div>
</template>

<script setup>
const message = ref('');

const fetchMessage = async () => {
  try {
    const response = await fetch('/.netlify/functions/hello');
    const data = await response.json();
    message.value = data.message;
  } catch (error) {
    console.error('Error fetching message:', error);
  }
};
</script>