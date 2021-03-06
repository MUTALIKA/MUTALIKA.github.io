var size = 0;
var placement = 'point';

var style_Diamond_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "9.75px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(88,0,60,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(244,40,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
