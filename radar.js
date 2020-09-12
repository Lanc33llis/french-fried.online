const key = "prj_test_pk_5839199a08bcf0038d469fa62943bc1076c5b04e"
var userID = 0

const button = document.getElementById("testingbutton")
button.addEventListener('click', function(){
  Radar.getLocation(function(err, result) {
    if (!err) {
      let userLat = result.location.latitude
      let userLong = result.location.longitude
      Radar.getDistance({
        origin: {
          latitude: userLat,
          longitude: userLong
        },
        destination: {
          latitude: raeLat,
          longitude: raeLong
        },
        modes: [
          'car'
        ],
        units: 'imperial'
      }, function(err, result) {
        if (!err) {
          test.textContent = "Working!"
          console.log("Working!")
          console.log(result.routes.car.distance.text)
        }
        else{
          console.error(err + 2)
          test.textContent = "I'm not working!"
        }
      });
    }
    else{
      console.error(err + 1)
    }
  });
  
})

function Trunc(input, accuracy){
  let isNeg = false
  if (input < 0){
    isNeg = true
  }
  let a = input.toString()
  let c = String()
  if (isNeg){
    c = a.slice(0, accuracy + 4)
  }
  else{
    c = a.slice(0, accuracy + 3)
  }
  return Number(c)
}

// double gTrunc(double in, int accuracy)
// {
// auto c1 = trunc(in);

// auto c2 = in - c1;
// c2 *= pow(10, accuracy);
// c2 = trunc(c2);
// c2 *= pow(10, -accuracy);

// return c1 + c2;
// }

Radar.initialize(key)
Radar.setUserId(userID)


var userLat = String(), userLong = String()

const raeLat = 29.651190, raeLong = -98.490837
const test = document.getElementById("test")
