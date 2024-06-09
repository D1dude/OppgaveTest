<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="Navbar h-20">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
          <RouterLink to="/Admin">Admin</RouterLink>
  </nav>


    <main class="main_container">

      <div class="line">
      <div class="vertikal-linje_1"></div>
      <div class="vertikal-linje2"></div>
      <div class="vertikal-linje3"></div>
      <div class="vertikal-linje4"></div>
      <div class="vertikal-linje5"></div>
      <div class="vertikal-linje6"></div>
      <div class="vertikal-linje7"></div>
      <div class="vertikal-linje8"></div>
      <div class="vertikal-linje9"></div>
      <div class="vertikal-linje10"></div>
      <div class="vertikal-linje11"></div>
      </div>



      <RouterView />
    </main>

</template>

<style scoped>
.main_container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

/* Stil for innholdet i RouterView */
.RouterView_content {
  grid-column: span 12; /* Innholdet spenner over alle 3 kolonnene */
}


.line{
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: -400px;         
}
.line:hover {
    box-shadow: 0 50px 50px rgba(255, 255, 255, 0.5); /* Legg til en box-shadow når du svever */
    opacity: 0.3; /* Reduser opasiteten når du svever */
    animation-play-state: paused;
}
.vertikal-linje_1 {
  width: 1px; /* Endre bredden her */
  height: 200px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 5s linear infinite;
  
}
.vertikal-linje2 {
  width: 1px; /* Endre bredden her */
  height: 150px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 3s linear infinite;


}
.vertikal-linje3 {
  width: 1px; /* Endre bredden her */
  height: 200px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 2s linear infinite;


}
.vertikal-linje4 {
  width: 1px; /* Endre bredden her */
  height: 100px; /* Endre høyden her */
  background-color: rgb(255, 255, 255);
  animation: line 4s linear infinite;
}
.vertikal-linje5 {
  width: 1px; /* Endre bredden her */
  height: 250px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 3s linear infinite;

}
.vertikal-linje6 {
  width: 3px; /* Endre bredden her */
  height: 250px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
 animation: line 5s linear infinite;

}
.vertikal-linje7 {
  width: 2px; /* Endre bredden her */
  height: 350px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 8s linear infinite;

}
.vertikal-linje8 {
  width: 1px; /* Endre bredden her */
  height: 300px; /* Endre høyden her */
  background-color: rgb(255, 255, 255);
  animation: line 5s linear infinite;
}
.vertikal-linje9 {
  width: 1px; /* Endre bredden her */
  height: 100px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 3s linear infinite;
}
.vertikal-linje10 {
  width: 1px; /* Endre bredden her */
  height: 300px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 2s linear infinite;
}
.vertikal-linje11 {
  width: 2px; /* Endre bredden her */
  height: 250px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 6s linear infinite;
}
.vertikal-linje12 {
  width: 1px; /* Endre bredden her */
  height: 300px; /* Endre høyden her */
  background-color: rgb(6, 196, 209);
  animation: line 8s linear infinite;

}

@keyframes line{
  0%{
    transform: translateY(0);
    opacity: 0;
  }
  50%{
    
    opacity: 1;
  }
  70%{
    
    opacity: 1;
  }
  100%{
    transform: translateY(-100vh);
    opacity: 0;
  }
  
}
</style>
