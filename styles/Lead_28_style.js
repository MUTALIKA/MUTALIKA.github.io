var size = 0;
var placement = 'point';

var style_Lead_28 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(127,127,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(10,1,8,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
