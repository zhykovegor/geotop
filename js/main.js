$(document).ready(myMap);

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("Map"),mapProp);

var marker = new google.maps.Marker({position: new google.maps.LatLng(51.508742,-0.120850)});
marker.setMap(map);
}
