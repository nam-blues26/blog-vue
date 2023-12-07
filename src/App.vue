
<template>


  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
body{
  font-family: 'Roboto Mono', monospace;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul.no-bullets {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}

.material-icons{
  font-size: 36px;
}

.btn-custome{
    color: #fff;
    background-color: rgb(214, 71, 52);
    border-radius: 10px;
    transition: all 0.3s;
}

.btn-custome:hover,
.btn-custome:active{
  color: rgb(214, 71, 52);
    background-color: #fff;
    border: 1px solid rgb(194, 76, 60);
}

/* Thiết bị di động, hiển thị chiều dọc */
@media only screen and (max-width: 320px) {
  p {
    font-size: 0.75em !important; /* 14px / 16px */
  }
}

/* Thiết bị di động, hiển thị chiều ngang */
@media only screen and (min-width: 321px) and (max-width: 480px) {
  p {
    font-size: 0.8em !important; /* 16px / 16px */
  }
}

/* Máy tính bảng, hiển thị chiều dọc */
@media only screen and (min-width: 481px) and (max-width: 600px) {
  p {
    font-size: 1em !important; /* 18px / 16px */
  }
}

/* Máy tính bảng loại to, hiển thị chiều dọc */
@media only screen and (min-width: 601px) and (max-width: 768px) {
  p {
    font-size: 1em !important; /* 20px / 16px */
  }
}

/* Máy tính bảng loại to, hiển thị chiều ngang */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  p {
    font-size: 1em !important; /* 22px / 16px */
  }
}

@media only screen and (min-width: 1025px) {
  body {
    font-size: 1em !important; /* 22px / 16px */
  }
}

</style>
