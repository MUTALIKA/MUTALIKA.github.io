var size = 0;
var placement = 'point';

var style_Gold_21 = function(feature, resolution){
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
        image: new ol.style.RegularShape({radius: 13.6 + size, points: 5,
            radius2: 6.8, stroke: new ol.style.Stroke({color: 'rgba(174,174,0,0.21568627451)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,183,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        image: new ol.style.Circle({radius: 4.25 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,127,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
