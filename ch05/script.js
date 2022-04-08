var bMapAPIKey = "Your API KEY";
var map;

function initMap() {
  "use strict";

  var storeLocationA = new Microsoft.Maps.Location(34.103201, -118.326276);
  var storeLocationB = new Microsoft.Maps.Location(34.073935, -118.241942);
  var theMapCenter = new Microsoft.Maps.Location(34.094, -118.28);

  map = new Microsoft.Maps.Map("#hplus-map", {
    credentials: bMapAPIKey,
    center: theMapCenter,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 13,
    disableScrollWheelZoom: true,
    disablePanning: true,
  });

  //Create an infobox at the center of the map but don't show it.
  var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
    visible: false,
  });

  //Assign the infobox to a map instance.
  infobox.setMap(map);

  /* Store  A */

  //Create custom Pushpin A
  var pinA = new Microsoft.Maps.Pushpin(storeLocationA, {
    title: "H+ Sport",
    subTitle: "Hollywood Flagship Store",
    //text: 'H'
  });

  //Store some metadata with pushpin A.
  pinA.metadata = {
    title: "H+ Sport",
    description: "1750 Vine St, Los Angeles, CA",
  };

  //Add click event handlers to the pushpins.
  Microsoft.Maps.Events.addHandler(pinA, "click", pinClicked);

  //Add the pushpin to the map
  map.entities.push(pinA);

  /* Store B */

  //Create custom Pushpin B
  var pinB = new Microsoft.Maps.Pushpin(storeLocationB, {
    title: "H+ Sport",
    subTitle: "LA Pop-Up Store",
  });

  //Store some metadata with pushpin B.
  pinB.metadata = {
    title: "H+ Sport",
    description: "1000 Vin Scully Ave, Los Angeles, CA",
  };

  //Add click event handlers to the pushpins.
  Microsoft.Maps.Events.addHandler(pinB, "click", pinClicked);

  //Add the pushpin to the map
  map.entities.push(pinB);

  /* Function to display pin metadata */
  function pinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
      //Set the infobox options with the metadata of the pushpin.
      infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: true,
      });
    }
  }
}
