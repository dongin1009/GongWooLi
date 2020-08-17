
$(document).ready(function() {
  document.getElementById('floor_value').innerHTML = getParameter('floor') + "층";
  document.getElementById('location_name').innerHTML = decodeURIComponent(getParameter('room_nm'));

  var pathImg = document.getElementById('path_img');

  pathImg.src = decodeURIComponent(getParameter('path_url'));
})

function getParameter(paramName) {
  var _tempUrl = window.location.search.substring(1);
  var _tempArray = _tempUrl.split('&');

  for(var i = 0; _tempArray.length; i++) {
    var _keyValuePair = _tempArray[i].split('=');

    if(_keyValuePair[0] == paramName) {
      return _keyValuePair[1];
    }
  }
}

function deleteCharacter(sentence, char) {
  parsedSentence = "";
  splitSentence = sentence.split(char);

  for(var i=0; i<splitSentence.length; i++) {
    parsedSentence += splitSentence[i];
  }

  return parsedSentence;
}

function goSpaceInfoSystem() {
  console.log(deleteCharacter(getParameter('room_fnr'), '-'));
  location.href="http://intra.wku.ac.kr/WFiles/asset/space/room.jsp?room_no=" + deleteCharacter(getParameter('room_fnr'), '-');
}
