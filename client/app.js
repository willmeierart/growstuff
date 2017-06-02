$(function() {
  const getShrooms = 'http://localhost:3000/fungus-among-us'
  appReady();
  let image
  let imageArr = []
  let dataObjs = []
  let titles = []


function appReady() {
  $.get(getShrooms)
  .then(function (response) {
    console.log(response);
    for(let i in response){
        

        image = response[i].Image
        imageArr.push(image)
        dataObjs.push(response[i])
        titles = Object.keys(response)
    }
    for(i in imageArr){
        console.log(i)
        console.log(image)
        // let imagePlace = $('.activator')[i]
        // console.log(imagePlace)
        $('.'+i).attr('src', imageArr[i])
        $('.title'+i).text(titles[i])

    }


  })
}

})
