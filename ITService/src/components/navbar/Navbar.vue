<script>
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'Navbar',
  components: {
    RouterLink
  }
});
</script>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">home</RouterLink>
          <RouterLink to="/hello">HelloWorld</RouterLink>
          <RouterLink to="/example">ExamplePage</RouterLink>
          
        </nav>
      </div>
    </header>
    <RouterView />

</template>