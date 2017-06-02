$(function() {
  const getShrooms = 'http://localhost:3000/fungus-among-us'
  appReady();


function appReady() {
  $.get(getShrooms)
  .then(function (response) {
    console.log(response);
  })
}

})
