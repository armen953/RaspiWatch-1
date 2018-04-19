<template>
  <div>

    <!-- BACKGROUND -->
    <div id="background">
      <vue-particles
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
    </div>
    <!-- END BACKGROUND -->

    <div class="box">
      <!-- <img src="@/assets/logo.png" alt="logo" class="img-responsive" > -->
      <h2>RaspiWatch</h2>
      <p>RaspiWatch is a surveillance system monitoring solution</p>

      <div id="container-login">
        <v-btn large color="white" class=btn-login to="/inscription">
          <div class="btn-text">Log in</div>
          <v-icon left class=icon-login>forward</v-icon>
        </v-btn>
      </div>
    </div>

  </div>
</template>

<script>

</script>

<style>
#background{
  position: absolute;
  background-color: rgb(227,59,59);
  top:0;
  left:0;
  width: 100%;
  height: 100%;
}

.box{
  position:relative;
  width:70vw;
  height:70vh;
  margin:10vh auto;
  text-align:center;
  background:rgba(196, 42, 46, 0.8);
  padding:40px;
  border-radius:2px;
}

h2{
  color: white;
}

p{
  color: white;
  font-size: 15px
}

#container-login{
  margin-top: 60vh;
}

.btn-login{
  width: 30vw;
}

.icon-login{
    padding-left: 25px;
}

</style>
