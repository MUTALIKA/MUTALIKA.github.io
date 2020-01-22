var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Diamond_0 = new ol.format.GeoJSON();
var features_Diamond_0 = format_Diamond_0.readFeatures(json_Diamond_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diamond_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Diamond_0.addFeatures(features_Diamond_0);var lyr_Diamond_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diamond_0, 
                style: style_Diamond_0,
                title: '<img src="styles/legend/Diamond_0.png" /> Diamond'
            });var format_Tourmaline_1 = new ol.format.GeoJSON();
var features_Tourmaline_1 = format_Tourmaline_1.readFeatures(json_Tourmaline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tourmaline_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tourmaline_1.addFeatures(features_Tourmaline_1);var lyr_Tourmaline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tourmaline_1, 
                style: style_Tourmaline_1,
                title: '<img src="styles/legend/Tourmaline_1.png" /> Tourmaline'
            });var format_Wolframite_2 = new ol.format.GeoJSON();
var features_Wolframite_2 = format_Wolframite_2.readFeatures(json_Wolframite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wolframite_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Wolframite_2.addFeatures(features_Wolframite_2);var lyr_Wolframite_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wolframite_2, 
                style: style_Wolframite_2,
                title: '<img src="styles/legend/Wolframite_2.png" /> Wolframite'
            });var format_Coltan_3 = new ol.format.GeoJSON();
var features_Coltan_3 = format_Coltan_3.readFeatures(json_Coltan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coltan_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coltan_3.addFeatures(features_Coltan_3);var lyr_Coltan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coltan_3, 
                style: style_Coltan_3,
                title: '<img src="styles/legend/Coltan_3.png" /> Coltan'
            });var format_Cassiterite_4 = new ol.format.GeoJSON();
var features_Cassiterite_4 = format_Cassiterite_4.readFeatures(json_Cassiterite_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cassiterite_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cassiterite_4.addFeatures(features_Cassiterite_4);var lyr_Cassiterite_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cassiterite_4, 
                style: style_Cassiterite_4,
                title: '<img src="styles/legend/Cassiterite_4.png" /> Cassiterite'
            });var format_Gold_5 = new ol.format.GeoJSON();
var features_Gold_5 = format_Gold_5.readFeatures(json_Gold_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gold_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gold_5.addFeatures(features_Gold_5);var lyr_Gold_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gold_5, 
                style: style_Gold_5,
                title: '<img src="styles/legend/Gold_5.png" /> Gold'
            });var format_Cobalt_6 = new ol.format.GeoJSON();
var features_Cobalt_6 = format_Cobalt_6.readFeatures(json_Cobalt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cobalt_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cobalt_6.addFeatures(features_Cobalt_6);var lyr_Cobalt_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cobalt_6, 
                style: style_Cobalt_6,
                title: '<img src="styles/legend/Cobalt_6.png" /> Cobalt'
            });var format_Cuivre_7 = new ol.format.GeoJSON();
var features_Cuivre_7 = format_Cuivre_7.readFeatures(json_Cuivre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuivre_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cuivre_7.addFeatures(features_Cuivre_7);var lyr_Cuivre_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuivre_7, 
                style: style_Cuivre_7,
                title: '<img src="styles/legend/Cuivre_7.png" /> Cuivre'
            });

lyr_Diamond_0.setVisible(true);lyr_Tourmaline_1.setVisible(true);lyr_Wolframite_2.setVisible(true);lyr_Coltan_3.setVisible(true);lyr_Cassiterite_4.setVisible(true);lyr_Gold_5.setVisible(true);lyr_Cobalt_6.setVisible(true);lyr_Cuivre_7.setVisible(true);
var layersList = [baseLayer,lyr_Diamond_0,lyr_Tourmaline_1,lyr_Wolframite_2,lyr_Coltan_3,lyr_Cassiterite_4,lyr_Gold_5,lyr_Cobalt_6,lyr_Cuivre_7];
lyr_Diamond_0.set('fieldAliases', {'source': 'source', 'name': 'name', 'mineral1': 'mineral1', 'mineral2': 'mineral2', 'childunde0': 'childunde0', });
lyr_Tourmaline_1.set('fieldAliases', {'source': 'source', 'name': 'name', 'mineral1': 'mineral1', 'mineral2': 'mineral2', 'childunde0': 'childunde0', });
lyr_Wolframite_2.set('fieldAliases', {'source': 'source', 'name': 'name', 'mineral1': 'mineral1', 'mineral2': 'mineral2', 'childunde0': 'childunde0', });
lyr_Coltan_3.set('fieldAliases', {'source': 'source', 'name': 'name', 'mineral1': 'mineral1', 'mineral2': 'mineral2', 'childunde0': 'childunde0', });
lyr_Cassiterite_4.set('fieldAliases', {'source': 'source', 'name': 'name', 'mineral1': 'mineral1', 'mineral2': 'mineral2', 'childunde0': 'childunde0', });
lyr_Gold_5.set('fieldAliases', {'source': 'source', 'name': 'name', 'mineral1': 'mineral1', 'mineral2': 'mineral2', 'childunde0': 'childunde0', });
lyr_Cobalt_6.set('fieldAliases', {'source': 'source', 'name': 'name', 'mineral1': 'mineral1', 'mineral2': 'mineral2', 'childunde0': 'childunde0', });
lyr_Cuivre_7.set('fieldAliases', {'source': 'source', 'name': 'name', 'mineral1': 'mineral1', 'mineral2': 'mineral2', 'childunde0': 'childunde0', });
lyr_Diamond_0.set('fieldImages', {'source': 'TextEdit', 'name': 'TextEdit', 'mineral1': 'TextEdit', 'mineral2': 'TextEdit', 'childunde0': 'TextEdit', });
lyr_Tourmaline_1.set('fieldImages', {'source': 'TextEdit', 'name': 'TextEdit', 'mineral1': 'TextEdit', 'mineral2': 'TextEdit', 'childunde0': 'TextEdit', });
lyr_Wolframite_2.set('fieldImages', {'source': 'TextEdit', 'name': 'TextEdit', 'mineral1': 'TextEdit', 'mineral2': 'TextEdit', 'childunde0': 'TextEdit', });
lyr_Coltan_3.set('fieldImages', {'source': 'TextEdit', 'name': 'TextEdit', 'mineral1': 'TextEdit', 'mineral2': 'TextEdit', 'childunde0': 'TextEdit', });
lyr_Cassiterite_4.set('fieldImages', {'source': 'TextEdit', 'name': 'TextEdit', 'mineral1': 'TextEdit', 'mineral2': 'TextEdit', 'childunde0': 'TextEdit', });
lyr_Gold_5.set('fieldImages', {'source': 'TextEdit', 'name': 'TextEdit', 'mineral1': 'TextEdit', 'mineral2': 'TextEdit', 'childunde0': 'TextEdit', });
lyr_Cobalt_6.set('fieldImages', {'source': 'TextEdit', 'name': 'TextEdit', 'mineral1': 'TextEdit', 'mineral2': 'TextEdit', 'childunde0': 'TextEdit', });
lyr_Cuivre_7.set('fieldImages', {'source': 'TextEdit', 'name': 'TextEdit', 'mineral1': 'TextEdit', 'mineral2': 'TextEdit', 'childunde0': 'TextEdit', });
lyr_Diamond_0.set('fieldLabels', {'source': 'no label', 'name': 'no label', 'mineral1': 'no label', 'mineral2': 'no label', 'childunde0': 'no label', });
lyr_Tourmaline_1.set('fieldLabels', {'source': 'no label', 'name': 'no label', 'mineral1': 'no label', 'mineral2': 'no label', 'childunde0': 'no label', });
lyr_Wolframite_2.set('fieldLabels', {'source': 'no label', 'name': 'no label', 'mineral1': 'no label', 'mineral2': 'no label', 'childunde0': 'no label', });
lyr_Coltan_3.set('fieldLabels', {'source': 'no label', 'name': 'no label', 'mineral1': 'no label', 'mineral2': 'no label', 'childunde0': 'no label', });
lyr_Cassiterite_4.set('fieldLabels', {'source': 'no label', 'name': 'no label', 'mineral1': 'no label', 'mineral2': 'no label', 'childunde0': 'no label', });
lyr_Gold_5.set('fieldLabels', {'source': 'no label', 'name': 'no label', 'mineral1': 'no label', 'mineral2': 'no label', 'childunde0': 'no label', });
lyr_Cobalt_6.set('fieldLabels', {'source': 'no label', 'name': 'no label', 'mineral1': 'no label', 'mineral2': 'no label', 'childunde0': 'no label', });
lyr_Cuivre_7.set('fieldLabels', {'source': 'no label', 'name': 'no label', 'mineral1': 'no label', 'mineral2': 'no label', 'childunde0': 'no label', });
lyr_Cuivre_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});