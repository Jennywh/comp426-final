
require([
    "esri/tasks/Locator",
    "esri/Map",
    "esri/layers/FeatureLayer",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
], function (Locator, Map, FeatureLayer, MapView, Search, Graphic, GraphicsLayer) {

    var locatorTask = new Locator({
        url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
    });
    var map = new Map({
        basemap: "topo-vector",
    })

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-79.05117, 35.91183],
        zoom: 16
    });




    // Search widget
    var search = new Search({
        view: view
    });

    view.ui.add(search, "top-right");

    //pop-up reaction

    // view.popup.autoOpenEnabled = false;
    // view.on("click", function (event) {
    //     // Get the coordinates of the click on the view

    //     // var lat = event.mapPoint.latitude;
    //     // var lon = event.mapPoint.longitude
    //     var lat = Math.round(event.mapPoint.latitude * 100000) / 100000;
    //     var lon = Math.round(event.mapPoint.longitude * 100000) / 100000;

    //     view.popup.open({
    //         // Set the popup's title to the coordinates of the location
    //         title: "Reverse geocode: [" + lon + ", " + lat + "]",
    //         location: event.mapPoint // Set the location of the popup to the clicked location
    //     });

    //     var params = {
    //         location: event.mapPoint
    //     };

    //     // Display the popup
    //     // Execute a reverse geocode using the clicked location
    //     locatorTask
    //         .locationToAddress(params)
    //         .then(function (response) {
    //             // If an address is successfully found, show it in the popup's content
    //             view.popup.content = response.address;
    //         })
    //         .catch(function (error) {
    //             // If the promise fails and no result is found, show a generic message
    //             view.popup.content = "No address was found for this location";
    //         });
    // });




    // --------------pop up ends----------------
    //graphic layer is for points / lines / polygons

    // Create popup template
    var popupTemplate = {
        title: "{Name}",
        content: "Overall Rating: <b>{Rating}</b>."
    };
    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    for (let dorm of dormsArr) {
        var point = {
            type: "point",
            longitude: dorm.coordinate[0],
            latitude: dorm.coordinate[1],
        };

        var dormMarker = {
            type: "simple-marker",
            color: [75, 156, 211, 0.8],  // orange
            outline: {
                color: [255, 255, 255], // white
                width: 0.4
            }
        };

        var attributes = {
            Name: dorm.name,  // The name of the
            Rating: dorm.rating,  // The owner of the
        };

        var dormGraphic = new Graphic({
            geometry: point,
            symbol: dormMarker,
            attributes: attributes,
            popupTemplate: popupTemplate
        });

        graphicsLayer.add(dormGraphic);

    }




});