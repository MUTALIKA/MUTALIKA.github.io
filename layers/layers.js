var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Provinces_0 = new ol.format.GeoJSON();
var features_Provinces_0 = format_Provinces_0.readFeatures(json_Provinces_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provinces_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Provinces_0.addFeatures(features_Provinces_0);var lyr_Provinces_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provinces_0, 
                style: style_Provinces_0,
                title: '<img src="styles/legend/Provinces_0.png" /> Provinces'
            });var format_Territories_1 = new ol.format.GeoJSON();
var features_Territories_1 = format_Territories_1.readFeatures(json_Territories_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Territories_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Territories_1.addFeatures(features_Territories_1);var lyr_Territories_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Territories_1, 
                style: style_Territories_1,
                title: '<img src="styles/legend/Territories_1.png" /> Territories'
            });var format_Artisanalzones_2 = new ol.format.GeoJSON();
var features_Artisanalzones_2 = format_Artisanalzones_2.readFeatures(json_Artisanalzones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Artisanalzones_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Artisanalzones_2.addFeatures(features_Artisanalzones_2);var lyr_Artisanalzones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Artisanalzones_2, 
                style: style_Artisanalzones_2,
                title: '<img src="styles/legend/Artisanalzones_2.png" /> Artisanal zones'
            });var format_Licences_3 = new ol.format.GeoJSON();
var features_Licences_3 = format_Licences_3.readFeatures(json_Licences_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Licences_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Licences_3.addFeatures(features_Licences_3);var lyr_Licences_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Licences_3, 
                style: style_Licences_3,
                title: '<img src="styles/legend/Licences_3.png" /> Licences'
            });var format_SpecialAreas_4 = new ol.format.GeoJSON();
var features_SpecialAreas_4 = format_SpecialAreas_4.readFeatures(json_SpecialAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecialAreas_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SpecialAreas_4.addFeatures(features_SpecialAreas_4);var lyr_SpecialAreas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpecialAreas_4, 
                style: style_SpecialAreas_4,
                title: '<img src="styles/legend/SpecialAreas_4.png" /> Special Areas'
            });var format_Otheroccurrences_5 = new ol.format.GeoJSON();
var features_Otheroccurrences_5 = format_Otheroccurrences_5.readFeatures(json_Otheroccurrences_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Otheroccurrences_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Otheroccurrences_5.addFeatures(features_Otheroccurrences_5);var lyr_Otheroccurrences_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Otheroccurrences_5, 
                style: style_Otheroccurrences_5,
                title: '<img src="styles/legend/Otheroccurrences_5.png" /> Other occurrences'
            });var format_Gypsum_6 = new ol.format.GeoJSON();
var features_Gypsum_6 = format_Gypsum_6.readFeatures(json_Gypsum_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gypsum_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gypsum_6.addFeatures(features_Gypsum_6);var lyr_Gypsum_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gypsum_6, 
                style: style_Gypsum_6,
                title: '<img src="styles/legend/Gypsum_6.png" /> Gypsum'
            });var format_Phosphate_7 = new ol.format.GeoJSON();
var features_Phosphate_7 = format_Phosphate_7.readFeatures(json_Phosphate_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phosphate_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Phosphate_7.addFeatures(features_Phosphate_7);var lyr_Phosphate_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Phosphate_7, 
                style: style_Phosphate_7,
                title: '<img src="styles/legend/Phosphate_7.png" /> Phosphate'
            });var format_Tourmaline_8 = new ol.format.GeoJSON();
var features_Tourmaline_8 = format_Tourmaline_8.readFeatures(json_Tourmaline_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tourmaline_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tourmaline_8.addFeatures(features_Tourmaline_8);var lyr_Tourmaline_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tourmaline_8, 
                style: style_Tourmaline_8,
                title: '<img src="styles/legend/Tourmaline_8.png" /> Tourmaline'
            });var format_Beryllium_9 = new ol.format.GeoJSON();
var features_Beryllium_9 = format_Beryllium_9.readFeatures(json_Beryllium_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beryllium_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Beryllium_9.addFeatures(features_Beryllium_9);var lyr_Beryllium_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beryllium_9, 
                style: style_Beryllium_9,
                title: '<img src="styles/legend/Beryllium_9.png" /> Beryllium'
            });var format_Diamond_10 = new ol.format.GeoJSON();
var features_Diamond_10 = format_Diamond_10.readFeatures(json_Diamond_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diamond_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Diamond_10.addFeatures(features_Diamond_10);var lyr_Diamond_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diamond_10, 
                style: style_Diamond_10,
                title: '<img src="styles/legend/Diamond_10.png" /> Diamond'
            });var format_REE_11 = new ol.format.GeoJSON();
var features_REE_11 = format_REE_11.readFeatures(json_REE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REE_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_REE_11.addFeatures(features_REE_11);var lyr_REE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REE_11, 
                style: style_REE_11,
                title: '<img src="styles/legend/REE_11.png" /> REE'
            });var format_Manganese_12 = new ol.format.GeoJSON();
var features_Manganese_12 = format_Manganese_12.readFeatures(json_Manganese_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manganese_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Manganese_12.addFeatures(features_Manganese_12);var lyr_Manganese_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manganese_12, 
                style: style_Manganese_12,
                title: '<img src="styles/legend/Manganese_12.png" /> Manganese'
            });var format_Aluminium_13 = new ol.format.GeoJSON();
var features_Aluminium_13 = format_Aluminium_13.readFeatures(json_Aluminium_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aluminium_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Aluminium_13.addFeatures(features_Aluminium_13);var lyr_Aluminium_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aluminium_13, 
                style: style_Aluminium_13,
                title: '<img src="styles/legend/Aluminium_13.png" /> Aluminium'
            });var format_Strontium_14 = new ol.format.GeoJSON();
var features_Strontium_14 = format_Strontium_14.readFeatures(json_Strontium_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strontium_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Strontium_14.addFeatures(features_Strontium_14);var lyr_Strontium_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Strontium_14, 
                style: style_Strontium_14,
                title: '<img src="styles/legend/Strontium_14.png" /> Strontium'
            });var format_Cadmium_15 = new ol.format.GeoJSON();
var features_Cadmium_15 = format_Cadmium_15.readFeatures(json_Cadmium_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadmium_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cadmium_15.addFeatures(features_Cadmium_15);var lyr_Cadmium_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cadmium_15, 
                style: style_Cadmium_15,
                title: '<img src="styles/legend/Cadmium_15.png" /> Cadmium'
            });var format_Palladium_16 = new ol.format.GeoJSON();
var features_Palladium_16 = format_Palladium_16.readFeatures(json_Palladium_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Palladium_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Palladium_16.addFeatures(features_Palladium_16);var lyr_Palladium_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Palladium_16, 
                style: style_Palladium_16,
                title: '<img src="styles/legend/Palladium_16.png" /> Palladium'
            });var format_Monazite_17 = new ol.format.GeoJSON();
var features_Monazite_17 = format_Monazite_17.readFeatures(json_Monazite_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monazite_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Monazite_17.addFeatures(features_Monazite_17);var lyr_Monazite_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Monazite_17, 
                style: style_Monazite_17,
                title: '<img src="styles/legend/Monazite_17.png" /> Monazite'
            });var format_Platinium_18 = new ol.format.GeoJSON();
var features_Platinium_18 = format_Platinium_18.readFeatures(json_Platinium_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platinium_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Platinium_18.addFeatures(features_Platinium_18);var lyr_Platinium_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Platinium_18, 
                style: style_Platinium_18,
                title: '<img src="styles/legend/Platinium_18.png" /> Platinium'
            });var format_Titanium_19 = new ol.format.GeoJSON();
var features_Titanium_19 = format_Titanium_19.readFeatures(json_Titanium_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titanium_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Titanium_19.addFeatures(features_Titanium_19);var lyr_Titanium_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titanium_19, 
                style: style_Titanium_19,
                title: '<img src="styles/legend/Titanium_19.png" /> Titanium'
            });var format_Silver_20 = new ol.format.GeoJSON();
var features_Silver_20 = format_Silver_20.readFeatures(json_Silver_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Silver_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Silver_20.addFeatures(features_Silver_20);var lyr_Silver_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Silver_20, 
                style: style_Silver_20,
                title: '<img src="styles/legend/Silver_20.png" /> Silver'
            });var format_Gold_21 = new ol.format.GeoJSON();
var features_Gold_21 = format_Gold_21.readFeatures(json_Gold_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gold_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gold_21.addFeatures(features_Gold_21);var lyr_Gold_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gold_21, 
                style: style_Gold_21,
                title: '<img src="styles/legend/Gold_21.png" /> Gold'
            });var format_Tungsten_22 = new ol.format.GeoJSON();
var features_Tungsten_22 = format_Tungsten_22.readFeatures(json_Tungsten_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tungsten_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tungsten_22.addFeatures(features_Tungsten_22);var lyr_Tungsten_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tungsten_22, 
                style: style_Tungsten_22,
                title: '<img src="styles/legend/Tungsten_22.png" /> Tungsten'
            });var format_Lithium_23 = new ol.format.GeoJSON();
var features_Lithium_23 = format_Lithium_23.readFeatures(json_Lithium_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lithium_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lithium_23.addFeatures(features_Lithium_23);var lyr_Lithium_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lithium_23, 
                style: style_Lithium_23,
                title: '<img src="styles/legend/Lithium_23.png" /> Lithium'
            });var format_Coltan_24 = new ol.format.GeoJSON();
var features_Coltan_24 = format_Coltan_24.readFeatures(json_Coltan_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coltan_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coltan_24.addFeatures(features_Coltan_24);var lyr_Coltan_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coltan_24, 
                style: style_Coltan_24,
                title: '<img src="styles/legend/Coltan_24.png" /> Coltan'
            });var format_Tin_25 = new ol.format.GeoJSON();
var features_Tin_25 = format_Tin_25.readFeatures(json_Tin_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tin_25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tin_25.addFeatures(features_Tin_25);var lyr_Tin_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tin_25, 
                style: style_Tin_25,
                title: '<img src="styles/legend/Tin_25.png" /> Tin'
            });var format_Iron_26 = new ol.format.GeoJSON();
var features_Iron_26 = format_Iron_26.readFeatures(json_Iron_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iron_26 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Iron_26.addFeatures(features_Iron_26);var lyr_Iron_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Iron_26, 
                style: style_Iron_26,
                title: '<img src="styles/legend/Iron_26.png" /> Iron'
            });var format_Uranium_27 = new ol.format.GeoJSON();
var features_Uranium_27 = format_Uranium_27.readFeatures(json_Uranium_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uranium_27 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Uranium_27.addFeatures(features_Uranium_27);var lyr_Uranium_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uranium_27, 
                style: style_Uranium_27,
                title: '<img src="styles/legend/Uranium_27.png" /> Uranium'
            });var format_Lead_28 = new ol.format.GeoJSON();
var features_Lead_28 = format_Lead_28.readFeatures(json_Lead_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lead_28 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lead_28.addFeatures(features_Lead_28);var lyr_Lead_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lead_28, 
                style: style_Lead_28,
                title: '<img src="styles/legend/Lead_28.png" /> Lead'
            });var format_Chromite_29 = new ol.format.GeoJSON();
var features_Chromite_29 = format_Chromite_29.readFeatures(json_Chromite_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chromite_29 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Chromite_29.addFeatures(features_Chromite_29);var lyr_Chromite_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chromite_29, 
                style: style_Chromite_29,
                title: '<img src="styles/legend/Chromite_29.png" /> Chromite'
            });var format_Nickel_30 = new ol.format.GeoJSON();
var features_Nickel_30 = format_Nickel_30.readFeatures(json_Nickel_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nickel_30 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nickel_30.addFeatures(features_Nickel_30);var lyr_Nickel_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nickel_30, 
                style: style_Nickel_30,
                title: '<img src="styles/legend/Nickel_30.png" /> Nickel'
            });var format_Zinc_31 = new ol.format.GeoJSON();
var features_Zinc_31 = format_Zinc_31.readFeatures(json_Zinc_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zinc_31 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Zinc_31.addFeatures(features_Zinc_31);var lyr_Zinc_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zinc_31, 
                style: style_Zinc_31,
                title: '<img src="styles/legend/Zinc_31.png" /> Zinc'
            });var format_Cobalt_32 = new ol.format.GeoJSON();
var features_Cobalt_32 = format_Cobalt_32.readFeatures(json_Cobalt_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cobalt_32 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cobalt_32.addFeatures(features_Cobalt_32);var lyr_Cobalt_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cobalt_32, 
                style: style_Cobalt_32,
                title: '<img src="styles/legend/Cobalt_32.png" /> Cobalt'
            });var format_Copper_33 = new ol.format.GeoJSON();
var features_Copper_33 = format_Copper_33.readFeatures(json_Copper_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copper_33 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Copper_33.addFeatures(features_Copper_33);var lyr_Copper_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Copper_33, 
                style: style_Copper_33,
                title: '<img src="styles/legend/Copper_33.png" /> Copper'
            });

lyr_Provinces_0.setVisible(true);lyr_Territories_1.setVisible(true);lyr_Artisanalzones_2.setVisible(true);lyr_Licences_3.setVisible(true);lyr_SpecialAreas_4.setVisible(true);lyr_Otheroccurrences_5.setVisible(true);lyr_Gypsum_6.setVisible(true);lyr_Phosphate_7.setVisible(true);lyr_Tourmaline_8.setVisible(true);lyr_Beryllium_9.setVisible(true);lyr_Diamond_10.setVisible(true);lyr_REE_11.setVisible(true);lyr_Manganese_12.setVisible(true);lyr_Aluminium_13.setVisible(true);lyr_Strontium_14.setVisible(true);lyr_Cadmium_15.setVisible(true);lyr_Palladium_16.setVisible(true);lyr_Monazite_17.setVisible(true);lyr_Platinium_18.setVisible(true);lyr_Titanium_19.setVisible(true);lyr_Silver_20.setVisible(true);lyr_Gold_21.setVisible(true);lyr_Tungsten_22.setVisible(true);lyr_Lithium_23.setVisible(true);lyr_Coltan_24.setVisible(true);lyr_Tin_25.setVisible(true);lyr_Iron_26.setVisible(true);lyr_Uranium_27.setVisible(true);lyr_Lead_28.setVisible(true);lyr_Chromite_29.setVisible(true);lyr_Nickel_30.setVisible(true);lyr_Zinc_31.setVisible(true);lyr_Cobalt_32.setVisible(true);lyr_Copper_33.setVisible(true);
var layersList = [baseLayer,lyr_Provinces_0,lyr_Territories_1,lyr_Artisanalzones_2,lyr_Licences_3,lyr_SpecialAreas_4,lyr_Otheroccurrences_5,lyr_Gypsum_6,lyr_Phosphate_7,lyr_Tourmaline_8,lyr_Beryllium_9,lyr_Diamond_10,lyr_REE_11,lyr_Manganese_12,lyr_Aluminium_13,lyr_Strontium_14,lyr_Cadmium_15,lyr_Palladium_16,lyr_Monazite_17,lyr_Platinium_18,lyr_Titanium_19,lyr_Silver_20,lyr_Gold_21,lyr_Tungsten_22,lyr_Lithium_23,lyr_Coltan_24,lyr_Tin_25,lyr_Iron_26,lyr_Uranium_27,lyr_Lead_28,lyr_Chromite_29,lyr_Nickel_30,lyr_Zinc_31,lyr_Cobalt_32,lyr_Copper_33];
lyr_Provinces_0.set('fieldAliases', {'NOM': 'NOM', 'CHEF_LIEU': 'CHEF_LIEU', });
lyr_Territories_1.set('fieldAliases', {'NOM': 'NOM', 'CHEF_LIEU': 'CHEF_LIEU', });
lyr_Artisanalzones_2.set('fieldAliases', {'Code': 'Code', 'Parties': 'Parties', 'Licence_': 'Licence_', 'Status': 'Status', 'Area': 'Area', });
lyr_Licences_3.set('fieldAliases', {'Code': 'Code', 'Parties': 'Parties', 'Licence_': 'Licence_', 'Status': 'Status', 'Area': 'Area', });
lyr_SpecialAreas_4.set('fieldAliases', {'NOM': 'NOM', 'ET_ID': 'ET_ID', });
lyr_Otheroccurrences_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Gypsum_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Phosphate_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Tourmaline_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Beryllium_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Diamond_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_REE_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Manganese_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Aluminium_13.set('fieldAliases', {'NAME': 'NAME', 'MINERLSTN': 'MINERLSTN', 'COMMODITY': 'COMMODITY', '1ST_SUrani': '1ST_SUrani', 'SIZE': 'SIZE', 'RESC_and_P': 'RESC_and_P', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_Strontium_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Cadmium_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Palladium_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Monazite_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Platinium_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Titanium_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Silver_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Gold_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Tungsten_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Lithium_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Coltan_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Tin_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Iron_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Uranium_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Lead_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Chromite_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Nickel_30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Zinc_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Cobalt_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Copper_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Provinces_0.set('fieldImages', {'NOM': 'TextEdit', 'CHEF_LIEU': 'TextEdit', });
lyr_Territories_1.set('fieldImages', {'NOM': 'TextEdit', 'CHEF_LIEU': 'TextEdit', });
lyr_Artisanalzones_2.set('fieldImages', {'Code': 'TextEdit', 'Parties': 'TextEdit', 'Licence_': 'TextEdit', 'Status': 'TextEdit', 'Area': 'TextEdit', });
lyr_Licences_3.set('fieldImages', {'Code': 'TextEdit', 'Parties': 'TextEdit', 'Licence_': 'TextEdit', 'Status': 'TextEdit', 'Area': 'TextEdit', });
lyr_SpecialAreas_4.set('fieldImages', {'NOM': 'TextEdit', 'ET_ID': 'TextEdit', });
lyr_Otheroccurrences_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Gypsum_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Phosphate_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Tourmaline_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Beryllium_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Diamond_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_REE_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Manganese_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Aluminium_13.set('fieldImages', {'NAME': 'TextEdit', 'MINERLSTN': 'TextEdit', 'COMMODITY': 'TextEdit', '1ST_SUrani': 'TextEdit', 'SIZE': 'TextEdit', 'RESC_and_P': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', });
lyr_Strontium_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Cadmium_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Palladium_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Monazite_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Platinium_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Titanium_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Silver_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Gold_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Tungsten_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Lithium_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Coltan_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Tin_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Iron_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Uranium_27.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Lead_28.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Chromite_29.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Nickel_30.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Zinc_31.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Cobalt_32.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Copper_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Provinces_0.set('fieldLabels', {'NOM': 'no label', 'CHEF_LIEU': 'no label', });
lyr_Territories_1.set('fieldLabels', {'NOM': 'no label', 'CHEF_LIEU': 'no label', });
lyr_Artisanalzones_2.set('fieldLabels', {'Code': 'no label', 'Parties': 'no label', 'Licence_': 'no label', 'Status': 'no label', 'Area': 'no label', });
lyr_Licences_3.set('fieldLabels', {'Code': 'no label', 'Parties': 'no label', 'Licence_': 'no label', 'Status': 'no label', 'Area': 'no label', });
lyr_SpecialAreas_4.set('fieldLabels', {'NOM': 'no label', 'ET_ID': 'no label', });
lyr_Otheroccurrences_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Gypsum_6.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Phosphate_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Tourmaline_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Beryllium_9.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Diamond_10.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_REE_11.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Manganese_12.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Aluminium_13.set('fieldLabels', {'NAME': 'header label', 'MINERLSTN': 'no label', 'COMMODITY': 'no label', '1ST_SUrani': 'no label', 'SIZE': 'no label', 'RESC_and_P': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', });
lyr_Strontium_14.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Cadmium_15.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Palladium_16.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Monazite_17.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Platinium_18.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Titanium_19.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Silver_20.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Gold_21.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Tungsten_22.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Lithium_23.set('fieldLabels', {'OBJECTID': 'inline label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Coltan_24.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Tin_25.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Iron_26.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Uranium_27.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Lead_28.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Chromite_29.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Nickel_30.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Zinc_31.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Cobalt_32.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Copper_33.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Copper_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});