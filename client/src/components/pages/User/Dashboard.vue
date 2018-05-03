<template>
  <div>
    <div id="left" class="container">
        <button type="button" class="menu">PRENDRE UNE PHOTO</button>
        <button type="button" class="menu">BOUTON 2</button>
        <button type="button" class="menu">BOUTON 3</button>
        <button type="button" class="menu">BOUTON 4</button>
    </div>
    <div id="right" class="container">
        <iframe title="Vidéo surveillance" src="https://www.youtube.com/watch?v=55_zcLkcuYw" width="600" height="450"></iframe>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
iframe{
    margin-left : 10%;
    display:inline-block;
}
button{
    display : block;
}
.menu{
    margin-top : 10%;
    padding : 5px;
    height: 50px;
    width : 150px;
    color:white;
    background-color : rgb(229,57,53);
    border : 1px solid rgb(255,57,53);
    border-radius:2px;
    transition-duration: 0.4s;
}
.menu:hover{
    background-color : rgb(232,80,77);
    box-shadow: 0 12px 16px 0 rgba(255, 57, 53, 0.24), 0 17px 50px 0 rgba(255,57,53,0.19);
}
.container{
    display:inline-block;
}
#left{
    margin-top:5%;
    margin-left:10%;
    width:10%;
}
#right{
    width:80%;
    float : right;
}
</style>
