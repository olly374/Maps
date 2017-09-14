function myFunction() {
  var map = L.map('map').setView([51.101516, 10.313446], 6);
  if (map.tap) map.tap.disable();
  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=5;


// add var "code" i.e. spreadsheet key
var code = '1SIU5KR29zNm52A9GtF137Y8Juire76G58Jzs75-bYfw'

// loop through spreadsheet with Tabletop
    Tabletop.init({ 
    key: code,
    callback: function(sheet, tabletop){ 
      
      for (var i in sheet){
        var data = sheet[i];
		   L.circle([data.longitude, data.latitude], {radius: 1000}) // radius of circle in metres. Don't use circleMarker, as radius is in pixels
          .addTo(map)
          .bindPopup("<strong style='color: #84b819'>" + data.newsroom + "</strong><br>" + data.company + " | " + data.city + "<br>Head: " + data.head).openPopup();
      }
    },
    simpleSheet: true 
	})
  
}
