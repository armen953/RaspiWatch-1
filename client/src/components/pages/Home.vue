<template>
  <div id="Home">
    <!-- BACKGROUND -->
    <vue-particles
      class="particuleJs"
      color="#FFFFFF"
      :particleOpacity="0.9"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#FFFFFF"
      :linesWidth="1.5"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles>
    <!-- END BACKGROUND -->
    <!-- MAIN BOX -->
    <div class="box">
      <img src="@/assets/logo.png" alt="logo" class="imgResponsive" >
      <h1 class="white--text display-1 titre">RaspiWatch</h1>
      <p class="white--text subheading">RaspiWatch is a surveillance system monitoring solution</p>
      <div id="container-login">
        <v-btn large color="white" class=btn-login :to="{name: 'signup'}">
          <div class="btn-text">Se connecter</div>
          <v-icon left class=icon-login>forward</v-icon>
        </v-btn>
      </div>
    </div>
    <!-- END BOX -->
  </div>
</template>

<script>

</script>

<style>

#Home {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

 .particuleJs{
  position: absolute;
  background-color: rgb(227,59,59);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.box{
  position: relative;
  width: 70vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(196, 42, 46, 0.8);
  padding: 40px;
  border-radius: 5%;
}

.imgResponsive {
  width: auto;
  height: 75%;
}

.titre {
  font-weight: bold;
}

</style>
