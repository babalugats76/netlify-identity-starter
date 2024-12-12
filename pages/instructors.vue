<template>
  <div>
    <pre>
      {{ message }}
    </pre>
    <button @click="fetchMessage">
      Fetch Message
    </button>
  </div>
</template>

<script setup>
const message = ref('');

const fetchMessage = async () => {
  try {
    const response = await fetch('/.netlify/functions/instructors');
    const data = await response.json();
    message.value = data;
  }
  catch (error) {
    console.error('Error fetching message:', error);
  }
};
</script>