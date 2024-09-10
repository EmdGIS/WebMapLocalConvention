var wms_layers = [];

var format_ShapAiresprotges_0 = new ol.format.GeoJSON();
var features_ShapAiresprotges_0 = format_ShapAiresprotges_0.readFeatures(json_ShapAiresprotges_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShapAiresprotges_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShapAiresprotges_0.addFeatures(features_ShapAiresprotges_0);
var lyr_ShapAiresprotges_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShapAiresprotges_0, 
                style: style_ShapAiresprotges_0,
                popuplayertitle: "Shap- Aires -protégées",
                interactive: true,
                title: '<img src="styles/legend/ShapAiresprotges_0.png" /> Shap- Aires -protégées'
            });
var format_ShapFotsAmnages_1 = new ol.format.GeoJSON();
var features_ShapFotsAmnages_1 = format_ShapFotsAmnages_1.readFeatures(json_ShapFotsAmnages_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShapFotsAmnages_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShapFotsAmnages_1.addFeatures(features_ShapFotsAmnages_1);
var lyr_ShapFotsAmnages_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShapFotsAmnages_1, 
                style: style_ShapFotsAmnages_1,
                popuplayertitle: "Shap-Foêts -Aménagées",
                interactive: true,
                title: '<img src="styles/legend/ShapFotsAmnages_1.png" /> Shap-Foêts -Aménagées'
            });
var format_Limitecommunale14112018_2 = new ol.format.GeoJSON();
var features_Limitecommunale14112018_2 = format_Limitecommunale14112018_2.readFeatures(json_Limitecommunale14112018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitecommunale14112018_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitecommunale14112018_2.addFeatures(features_Limitecommunale14112018_2);
var lyr_Limitecommunale14112018_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitecommunale14112018_2, 
                style: style_Limitecommunale14112018_2,
                popuplayertitle: "Limite communale14112018",
                interactive: true,
                title: '<img src="styles/legend/Limitecommunale14112018_2.png" /> Limite communale14112018'
            });
var format_Limite_rgionale14112018_3 = new ol.format.GeoJSON();
var features_Limite_rgionale14112018_3 = format_Limite_rgionale14112018_3.readFeatures(json_Limite_rgionale14112018_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_rgionale14112018_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_rgionale14112018_3.addFeatures(features_Limite_rgionale14112018_3);
var lyr_Limite_rgionale14112018_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_rgionale14112018_3, 
                style: style_Limite_rgionale14112018_3,
                popuplayertitle: "Limite_régionale14112018",
                interactive: true,
                title: '<img src="styles/legend/Limite_rgionale14112018_3.png" /> Limite_régionale14112018'
            });
var group_Ressources = new ol.layer.Group({
                                layers: [lyr_ShapAiresprotges_0,lyr_ShapFotsAmnages_1,],
                                fold: "open",
                                title: "Ressources"});
var group_Parcs_reservesnaturellesetAMP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Parcs_reservesnaturelles et AMP"});

lyr_ShapAiresprotges_0.setVisible(true);lyr_ShapFotsAmnages_1.setVisible(true);lyr_Limitecommunale14112018_2.setVisible(true);lyr_Limite_rgionale14112018_3.setVisible(true);
var layersList = [group_Ressources,lyr_Limitecommunale14112018_2,lyr_Limite_rgionale14112018_3];
lyr_ShapAiresprotges_0.set('fieldAliases', {'NOM': 'NOM', 'Superficie': 'Superficie', });
lyr_ShapFotsAmnages_1.set('fieldAliases', {'NOM': 'NOM', 'SUP': 'SUP', });
lyr_Limitecommunale14112018_2.set('fieldAliases', {'REG': 'REG', 'DEPT': 'DEPT', 'CAV': 'CAV', 'CCRCA': 'CCRCA', 'COD_REG': 'COD_REG', 'COD_DEPT': 'COD_DEPT', 'COD_CAV': 'COD_CAV', 'COD_CCRCA': 'COD_CCRCA', 'COD_ENTITE': 'COD_ENTITE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_HA': 'SUP_HA', 'CCRCA_1': 'CCRCA_1', 'Milieu': 'Milieu', 'Masculin': 'Masculin', 'Feminin': 'Feminin', 'TOTAL': 'TOTAL', });
lyr_Limite_rgionale14112018_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'REG': 'REG', 'DEPT': 'DEPT', 'CAV': 'CAV', 'CCRCA': 'CCRCA', 'COD_REG': 'COD_REG', 'COD_DEPT': 'COD_DEPT', 'COD_CAV': 'COD_CAV', 'COD_CCRCA': 'COD_CCRCA', 'COD_ENTITE': 'COD_ENTITE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_HA': 'SUP_HA', 'CCRCA_1': 'CCRCA_1', 'Milieu': 'Milieu', 'Masculin': 'Masculin', 'Feminin': 'Feminin', 'TOTAL': 'TOTAL', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ShapAiresprotges_0.set('fieldImages', {'NOM': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ShapFotsAmnages_1.set('fieldImages', {'NOM': 'TextEdit', 'SUP': 'TextEdit', });
lyr_Limitecommunale14112018_2.set('fieldImages', {'REG': 'TextEdit', 'DEPT': 'TextEdit', 'CAV': 'TextEdit', 'CCRCA': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_DEPT': 'TextEdit', 'COD_CAV': 'TextEdit', 'COD_CCRCA': 'TextEdit', 'COD_ENTITE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUP_HA': 'TextEdit', 'CCRCA_1': 'TextEdit', 'Milieu': 'TextEdit', 'Masculin': 'TextEdit', 'Feminin': 'TextEdit', 'TOTAL': 'TextEdit', });
lyr_Limite_rgionale14112018_3.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'REG': 'TextEdit', 'DEPT': 'TextEdit', 'CAV': 'TextEdit', 'CCRCA': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_DEPT': 'TextEdit', 'COD_CAV': 'TextEdit', 'COD_CCRCA': 'TextEdit', 'COD_ENTITE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUP_HA': 'TextEdit', 'CCRCA_1': 'TextEdit', 'Milieu': 'TextEdit', 'Masculin': 'TextEdit', 'Feminin': 'TextEdit', 'TOTAL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ShapAiresprotges_0.set('fieldLabels', {'NOM': 'no label', 'Superficie': 'no label', });
lyr_ShapFotsAmnages_1.set('fieldLabels', {'NOM': 'no label', 'SUP': 'no label', });
lyr_Limitecommunale14112018_2.set('fieldLabels', {'REG': 'no label', 'DEPT': 'no label', 'CAV': 'no label', 'CCRCA': 'no label', 'COD_REG': 'no label', 'COD_DEPT': 'no label', 'COD_CAV': 'no label', 'COD_CCRCA': 'no label', 'COD_ENTITE': 'no label', 'SUPERFICIE': 'no label', 'SUP_HA': 'no label', 'CCRCA_1': 'no label', 'Milieu': 'no label', 'Masculin': 'no label', 'Feminin': 'no label', 'TOTAL': 'no label', });
lyr_Limite_rgionale14112018_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'REG': 'inline label - visible with data', 'DEPT': 'no label', 'CAV': 'no label', 'CCRCA': 'no label', 'COD_REG': 'no label', 'COD_DEPT': 'no label', 'COD_CAV': 'no label', 'COD_CCRCA': 'no label', 'COD_ENTITE': 'no label', 'SUPERFICIE': 'no label', 'SUP_HA': 'no label', 'CCRCA_1': 'no label', 'Milieu': 'no label', 'Masculin': 'no label', 'Feminin': 'no label', 'TOTAL': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Limite_rgionale14112018_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});