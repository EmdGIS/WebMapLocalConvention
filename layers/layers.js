var wms_layers = [];

var format_Parcours_de_btail_0 = new ol.format.GeoJSON();
var features_Parcours_de_btail_0 = format_Parcours_de_btail_0.readFeatures(json_Parcours_de_btail_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcours_de_btail_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcours_de_btail_0.addFeatures(features_Parcours_de_btail_0);
var lyr_Parcours_de_btail_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcours_de_btail_0, 
                style: style_Parcours_de_btail_0,
                popuplayertitle: "Parcours_de_bétail",
                interactive: false,
                title: '<img src="styles/legend/Parcours_de_btail_0.png" /> Parcours_de_bétail'
            });
var format_Parcoursdebtail_Kahi_polyline_1 = new ol.format.GeoJSON();
var features_Parcoursdebtail_Kahi_polyline_1 = format_Parcoursdebtail_Kahi_polyline_1.readFeatures(json_Parcoursdebtail_Kahi_polyline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcoursdebtail_Kahi_polyline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcoursdebtail_Kahi_polyline_1.addFeatures(features_Parcoursdebtail_Kahi_polyline_1);
var lyr_Parcoursdebtail_Kahi_polyline_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcoursdebtail_Kahi_polyline_1, 
                style: style_Parcoursdebtail_Kahi_polyline_1,
                popuplayertitle: "Parcours de bétail_Kahi_polyline",
                interactive: false,
                title: '<img src="styles/legend/Parcoursdebtail_Kahi_polyline_1.png" /> Parcours de bétail_Kahi_polyline'
            });
var format_Parcoursdebtail_Boulel_polyline_2 = new ol.format.GeoJSON();
var features_Parcoursdebtail_Boulel_polyline_2 = format_Parcoursdebtail_Boulel_polyline_2.readFeatures(json_Parcoursdebtail_Boulel_polyline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcoursdebtail_Boulel_polyline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcoursdebtail_Boulel_polyline_2.addFeatures(features_Parcoursdebtail_Boulel_polyline_2);
var lyr_Parcoursdebtail_Boulel_polyline_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcoursdebtail_Boulel_polyline_2, 
                style: style_Parcoursdebtail_Boulel_polyline_2,
                popuplayertitle: "Parcours de bétail_Boulel_polyline",
                interactive: false,
                title: '<img src="styles/legend/Parcoursdebtail_Boulel_polyline_2.png" /> Parcours de bétail_Boulel_polyline'
            });
var format_Pb_ToubaMbella_polyline_3 = new ol.format.GeoJSON();
var features_Pb_ToubaMbella_polyline_3 = format_Pb_ToubaMbella_polyline_3.readFeatures(json_Pb_ToubaMbella_polyline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pb_ToubaMbella_polyline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pb_ToubaMbella_polyline_3.addFeatures(features_Pb_ToubaMbella_polyline_3);
var lyr_Pb_ToubaMbella_polyline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pb_ToubaMbella_polyline_3, 
                style: style_Pb_ToubaMbella_polyline_3,
                popuplayertitle: "Pb_Touba Mbella_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pb_ToubaMbella_polyline_3.png" /> Pb_Touba Mbella_polyline'
            });
var format_Pistesbtail_FassThieckene_polyline_4 = new ol.format.GeoJSON();
var features_Pistesbtail_FassThieckene_polyline_4 = format_Pistesbtail_FassThieckene_polyline_4.readFeatures(json_Pistesbtail_FassThieckene_polyline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pistesbtail_FassThieckene_polyline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistesbtail_FassThieckene_polyline_4.addFeatures(features_Pistesbtail_FassThieckene_polyline_4);
var lyr_Pistesbtail_FassThieckene_polyline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pistesbtail_FassThieckene_polyline_4, 
                style: style_Pistesbtail_FassThieckene_polyline_4,
                popuplayertitle: "Pistes à bétail_Fass Thieckene_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pistesbtail_FassThieckene_polyline_4.png" /> Pistes à bétail_Fass Thieckene_polyline'
            });
var format_Pb_Diamal_polyline_5 = new ol.format.GeoJSON();
var features_Pb_Diamal_polyline_5 = format_Pb_Diamal_polyline_5.readFeatures(json_Pb_Diamal_polyline_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pb_Diamal_polyline_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pb_Diamal_polyline_5.addFeatures(features_Pb_Diamal_polyline_5);
var lyr_Pb_Diamal_polyline_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pb_Diamal_polyline_5, 
                style: style_Pb_Diamal_polyline_5,
                popuplayertitle: "Pb_Diamal_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pb_Diamal_polyline_5.png" /> Pb_Diamal_polyline'
            });
var format_Parcours_btail_Gniby_polyline_6 = new ol.format.GeoJSON();
var features_Parcours_btail_Gniby_polyline_6 = format_Parcours_btail_Gniby_polyline_6.readFeatures(json_Parcours_btail_Gniby_polyline_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcours_btail_Gniby_polyline_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcours_btail_Gniby_polyline_6.addFeatures(features_Parcours_btail_Gniby_polyline_6);
var lyr_Parcours_btail_Gniby_polyline_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcours_btail_Gniby_polyline_6, 
                style: style_Parcours_btail_Gniby_polyline_6,
                popuplayertitle: "Parcours_bétail_Gniby_polyline",
                interactive: false,
                title: '<img src="styles/legend/Parcours_btail_Gniby_polyline_6.png" /> Parcours_bétail_Gniby_polyline'
            });
var format_Pistesbtail_IdaMouride_polyline_7 = new ol.format.GeoJSON();
var features_Pistesbtail_IdaMouride_polyline_7 = format_Pistesbtail_IdaMouride_polyline_7.readFeatures(json_Pistesbtail_IdaMouride_polyline_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pistesbtail_IdaMouride_polyline_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistesbtail_IdaMouride_polyline_7.addFeatures(features_Pistesbtail_IdaMouride_polyline_7);
var lyr_Pistesbtail_IdaMouride_polyline_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pistesbtail_IdaMouride_polyline_7, 
                style: style_Pistesbtail_IdaMouride_polyline_7,
                popuplayertitle: "Pistes à bétail_Ida Mouride_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pistesbtail_IdaMouride_polyline_7.png" /> Pistes à bétail_Ida Mouride_polyline'
            });
var format_Pb_Khelcom_polyline_8 = new ol.format.GeoJSON();
var features_Pb_Khelcom_polyline_8 = format_Pb_Khelcom_polyline_8.readFeatures(json_Pb_Khelcom_polyline_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pb_Khelcom_polyline_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pb_Khelcom_polyline_8.addFeatures(features_Pb_Khelcom_polyline_8);
var lyr_Pb_Khelcom_polyline_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pb_Khelcom_polyline_8, 
                style: style_Pb_Khelcom_polyline_8,
                popuplayertitle: "Pb_Khelcom_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pb_Khelcom_polyline_8.png" /> Pb_Khelcom_polyline'
            });
var format_PbKeurBaka_polyline_9 = new ol.format.GeoJSON();
var features_PbKeurBaka_polyline_9 = format_PbKeurBaka_polyline_9.readFeatures(json_PbKeurBaka_polyline_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PbKeurBaka_polyline_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PbKeurBaka_polyline_9.addFeatures(features_PbKeurBaka_polyline_9);
var lyr_PbKeurBaka_polyline_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PbKeurBaka_polyline_9, 
                style: style_PbKeurBaka_polyline_9,
                popuplayertitle: "Pb KeurBaka_polyline",
                interactive: false,
                title: '<img src="styles/legend/PbKeurBaka_polyline_9.png" /> Pb KeurBaka_polyline'
            });
var format_Pb_Thiar_polyline_10 = new ol.format.GeoJSON();
var features_Pb_Thiar_polyline_10 = format_Pb_Thiar_polyline_10.readFeatures(json_Pb_Thiar_polyline_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pb_Thiar_polyline_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pb_Thiar_polyline_10.addFeatures(features_Pb_Thiar_polyline_10);
var lyr_Pb_Thiar_polyline_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pb_Thiar_polyline_10, 
                style: style_Pb_Thiar_polyline_10,
                popuplayertitle: "Pb_Thiaré_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pb_Thiar_polyline_10.png" /> Pb_Thiaré_polyline'
            });
var format_Pistesdebtail_DaraMboss_polyline_11 = new ol.format.GeoJSON();
var features_Pistesdebtail_DaraMboss_polyline_11 = format_Pistesdebtail_DaraMboss_polyline_11.readFeatures(json_Pistesdebtail_DaraMboss_polyline_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pistesdebtail_DaraMboss_polyline_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistesdebtail_DaraMboss_polyline_11.addFeatures(features_Pistesdebtail_DaraMboss_polyline_11);
var lyr_Pistesdebtail_DaraMboss_polyline_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pistesdebtail_DaraMboss_polyline_11, 
                style: style_Pistesdebtail_DaraMboss_polyline_11,
                popuplayertitle: "Pistes de bétail_Dara Mboss_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pistesdebtail_DaraMboss_polyline_11.png" /> Pistes de bétail_Dara Mboss_polyline'
            });
var format_Pb_NgathieNaoud_polyline_12 = new ol.format.GeoJSON();
var features_Pb_NgathieNaoud_polyline_12 = format_Pb_NgathieNaoud_polyline_12.readFeatures(json_Pb_NgathieNaoud_polyline_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pb_NgathieNaoud_polyline_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pb_NgathieNaoud_polyline_12.addFeatures(features_Pb_NgathieNaoud_polyline_12);
var lyr_Pb_NgathieNaoud_polyline_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pb_NgathieNaoud_polyline_12, 
                style: style_Pb_NgathieNaoud_polyline_12,
                popuplayertitle: "Pb_Ngathie Naoudé_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pb_NgathieNaoud_polyline_12.png" /> Pb_Ngathie Naoudé_polyline'
            });
var format_Pistesdebtail_PanalOuolof_polyline_13 = new ol.format.GeoJSON();
var features_Pistesdebtail_PanalOuolof_polyline_13 = format_Pistesdebtail_PanalOuolof_polyline_13.readFeatures(json_Pistesdebtail_PanalOuolof_polyline_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pistesdebtail_PanalOuolof_polyline_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistesdebtail_PanalOuolof_polyline_13.addFeatures(features_Pistesdebtail_PanalOuolof_polyline_13);
var lyr_Pistesdebtail_PanalOuolof_polyline_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pistesdebtail_PanalOuolof_polyline_13, 
                style: style_Pistesdebtail_PanalOuolof_polyline_13,
                popuplayertitle: "Pistes de bétail_Panal Ouolof_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pistesdebtail_PanalOuolof_polyline_13.png" /> Pistes de bétail_Panal Ouolof_polyline'
            });
var format_Pb_Mbadakhoune_polyline_14 = new ol.format.GeoJSON();
var features_Pb_Mbadakhoune_polyline_14 = format_Pb_Mbadakhoune_polyline_14.readFeatures(json_Pb_Mbadakhoune_polyline_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pb_Mbadakhoune_polyline_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pb_Mbadakhoune_polyline_14.addFeatures(features_Pb_Mbadakhoune_polyline_14);
var lyr_Pb_Mbadakhoune_polyline_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pb_Mbadakhoune_polyline_14, 
                style: style_Pb_Mbadakhoune_polyline_14,
                popuplayertitle: "Pb_Mbadakhoune_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pb_Mbadakhoune_polyline_14.png" /> Pb_Mbadakhoune_polyline'
            });
var format_Pb_Ndiago_polyline_15 = new ol.format.GeoJSON();
var features_Pb_Ndiago_polyline_15 = format_Pb_Ndiago_polyline_15.readFeatures(json_Pb_Ndiago_polyline_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pb_Ndiago_polyline_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pb_Ndiago_polyline_15.addFeatures(features_Pb_Ndiago_polyline_15);
var lyr_Pb_Ndiago_polyline_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pb_Ndiago_polyline_15, 
                style: style_Pb_Ndiago_polyline_15,
                popuplayertitle: "Pb_Ndiago_polyline",
                interactive: false,
                title: '<img src="styles/legend/Pb_Ndiago_polyline_15.png" /> Pb_Ndiago_polyline'
            });
var format_ShapAiresprotges_16 = new ol.format.GeoJSON();
var features_ShapAiresprotges_16 = format_ShapAiresprotges_16.readFeatures(json_ShapAiresprotges_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShapAiresprotges_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShapAiresprotges_16.addFeatures(features_ShapAiresprotges_16);
var lyr_ShapAiresprotges_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShapAiresprotges_16, 
                style: style_ShapAiresprotges_16,
                popuplayertitle: "Shap- Aires -protégées",
                interactive: true,
                title: '<img src="styles/legend/ShapAiresprotges_16.png" /> Shap- Aires -protégées'
            });
var format_ShapFotsAmnages_17 = new ol.format.GeoJSON();
var features_ShapFotsAmnages_17 = format_ShapFotsAmnages_17.readFeatures(json_ShapFotsAmnages_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShapFotsAmnages_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShapFotsAmnages_17.addFeatures(features_ShapFotsAmnages_17);
var lyr_ShapFotsAmnages_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShapFotsAmnages_17, 
                style: style_ShapFotsAmnages_17,
                popuplayertitle: "Shap-Foêts -Aménagées",
                interactive: false,
                title: '<img src="styles/legend/ShapFotsAmnages_17.png" /> Shap-Foêts -Aménagées'
            });
var format_17communescibles_18 = new ol.format.GeoJSON();
var features_17communescibles_18 = format_17communescibles_18.readFeatures(json_17communescibles_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17communescibles_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17communescibles_18.addFeatures(features_17communescibles_18);
var lyr_17communescibles_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17communescibles_18, 
                style: style_17communescibles_18,
                popuplayertitle: "17communescibles",
                interactive: false,
                title: '<img src="styles/legend/17communescibles_18.png" /> 17communescibles'
            });
var format_Limitecommunale14112018_19 = new ol.format.GeoJSON();
var features_Limitecommunale14112018_19 = format_Limitecommunale14112018_19.readFeatures(json_Limitecommunale14112018_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitecommunale14112018_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitecommunale14112018_19.addFeatures(features_Limitecommunale14112018_19);
var lyr_Limitecommunale14112018_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitecommunale14112018_19, 
                style: style_Limitecommunale14112018_19,
                popuplayertitle: "Limite communale14112018",
                interactive: false,
                title: '<img src="styles/legend/Limitecommunale14112018_19.png" /> Limite communale14112018'
            });
var format_Limite_rgionale14112018_20 = new ol.format.GeoJSON();
var features_Limite_rgionale14112018_20 = format_Limite_rgionale14112018_20.readFeatures(json_Limite_rgionale14112018_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_rgionale14112018_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_rgionale14112018_20.addFeatures(features_Limite_rgionale14112018_20);
var lyr_Limite_rgionale14112018_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_rgionale14112018_20, 
                style: style_Limite_rgionale14112018_20,
                popuplayertitle: "Limite_régionale14112018",
                interactive: false,
                title: '<img src="styles/legend/Limite_rgionale14112018_20.png" /> Limite_régionale14112018'
            });
var group_Ressources = new ol.layer.Group({
                                layers: [lyr_ShapAiresprotges_16,lyr_ShapFotsAmnages_17,],
                                fold: "open",
                                title: "Ressources"});
var group_Parcs_reservesnaturellesetAMP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Parcs_reservesnaturelles et AMP"});
var group_Kaolack = new ol.layer.Group({
                                layers: [lyr_Pb_Khelcom_polyline_8,lyr_PbKeurBaka_polyline_9,lyr_Pb_Thiar_polyline_10,lyr_Pistesdebtail_DaraMboss_polyline_11,lyr_Pb_NgathieNaoud_polyline_12,lyr_Pistesdebtail_PanalOuolof_polyline_13,lyr_Pb_Mbadakhoune_polyline_14,lyr_Pb_Ndiago_polyline_15,],
                                fold: "open",
                                title: "Kaolack"});
var group_Kaffrine = new ol.layer.Group({
                                layers: [lyr_Parcours_de_btail_0,lyr_Parcoursdebtail_Kahi_polyline_1,lyr_Parcoursdebtail_Boulel_polyline_2,lyr_Pb_ToubaMbella_polyline_3,lyr_Pistesbtail_FassThieckene_polyline_4,lyr_Pb_Diamal_polyline_5,lyr_Parcours_btail_Gniby_polyline_6,lyr_Pistesbtail_IdaMouride_polyline_7,],
                                fold: "open",
                                title: "Kaffrine"});

lyr_Parcours_de_btail_0.setVisible(true);lyr_Parcoursdebtail_Kahi_polyline_1.setVisible(true);lyr_Parcoursdebtail_Boulel_polyline_2.setVisible(true);lyr_Pb_ToubaMbella_polyline_3.setVisible(true);lyr_Pistesbtail_FassThieckene_polyline_4.setVisible(true);lyr_Pb_Diamal_polyline_5.setVisible(true);lyr_Parcours_btail_Gniby_polyline_6.setVisible(true);lyr_Pistesbtail_IdaMouride_polyline_7.setVisible(true);lyr_Pb_Khelcom_polyline_8.setVisible(true);lyr_PbKeurBaka_polyline_9.setVisible(true);lyr_Pb_Thiar_polyline_10.setVisible(true);lyr_Pistesdebtail_DaraMboss_polyline_11.setVisible(true);lyr_Pb_NgathieNaoud_polyline_12.setVisible(true);lyr_Pistesdebtail_PanalOuolof_polyline_13.setVisible(true);lyr_Pb_Mbadakhoune_polyline_14.setVisible(true);lyr_Pb_Ndiago_polyline_15.setVisible(true);lyr_ShapAiresprotges_16.setVisible(true);lyr_ShapFotsAmnages_17.setVisible(true);lyr_17communescibles_18.setVisible(true);lyr_Limitecommunale14112018_19.setVisible(true);lyr_Limite_rgionale14112018_20.setVisible(true);
var layersList = [group_Kaffrine,group_Kaolack,group_Ressources,lyr_17communescibles_18,lyr_Limitecommunale14112018_19,lyr_Limite_rgionale14112018_20];
lyr_Parcours_de_btail_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid': 'objectid', 'type': 'type', 'shape_leng': 'shape_leng', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'longueur_k': 'longueur_k', 'itineraire': 'itineraire', });
lyr_Parcoursdebtail_Kahi_polyline_1.set('fieldAliases', {'ID': 'ID', 'R�_GION': 'R�_GION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'ITINERAIRE': 'ITINERAIRE', 'ARR': 'ARR', 'ZONAGES': 'ZONAGES', 'CARTO': 'CARTO', 'LONGUEUR': 'LONGUEUR', });
lyr_Parcoursdebtail_Boulel_polyline_2.set('fieldAliases', {'ID': 'ID', 'R�_GION': 'R�_GION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'ITINERAIRE': 'ITINERAIRE', 'ARR': 'ARR', 'ZONAGES': 'ZONAGES', 'CARTO': 'CARTO', 'LONGUEUR': 'LONGUEUR', });
lyr_Pb_ToubaMbella_polyline_3.set('fieldAliases', {'ID': 'ID', 'ITINERAIRE': 'ITINERAIRE', 'LONGUEUR': 'LONGUEUR', 'COMENT': 'COMENT', });
lyr_Pistesbtail_FassThieckene_polyline_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'ITIN�_RAIR': 'ITIN�_RAIR', 'ZONE': 'ZONE', 'LONGUEUR': 'LONGUEUR', 'NOM': 'NOM', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_Pb_Diamal_polyline_5.set('fieldAliases', {'ID': 'ID', 'ITINERAIRE': 'ITINERAIRE', 'LONGUEUR': 'LONGUEUR', 'COMENT': 'COMENT', });
lyr_Parcours_btail_Gniby_polyline_6.set('fieldAliases', {'ID': 'ID', 'R�_GION': 'R�_GION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'ITINERAIRE': 'ITINERAIRE', 'ARR': 'ARR', 'ZONAGES': 'ZONAGES', 'CARTO': 'CARTO', 'LONGUEUR': 'LONGUEUR', });
lyr_Pistesbtail_IdaMouride_polyline_7.set('fieldAliases', {'ID': 'ID', 'ITINERAIRE': 'ITINERAIRE', 'NOM': 'NOM', 'ITINER': 'ITINER', });
lyr_Pb_Khelcom_polyline_8.set('fieldAliases', {'code': 'code', 'id': 'id', 'itin�_rair': 'itin�_rair', 'long': 'long', 'obs': 'obs', });
lyr_PbKeurBaka_polyline_9.set('fieldAliases', {'ID': 'ID', 'COMMENT_1': 'COMMENT_1', 'OBS_1': 'OBS_1', 'LONGUEUR': 'LONGUEUR', });
lyr_Pb_Thiar_polyline_10.set('fieldAliases', {'ID': 'ID', 'ITINERAIRE': 'ITINERAIRE', 'LONGUEUR': 'LONGUEUR', 'COMENT': 'COMENT', });
lyr_Pistesdebtail_DaraMboss_polyline_11.set('fieldAliases', {'OID_': 'OID_', 'NAME': 'NAME', 'FOLDERPATH': 'FOLDERPATH', 'SYMBOLID': 'SYMBOLID', 'ALTMODE': 'ALTMODE', 'BASE': 'BASE', 'CLAMPED': 'CLAMPED', 'EXTRUDED': 'EXTRUDED', 'SNIPPET': 'SNIPPET', 'POPUPINFO': 'POPUPINFO', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_Pb_NgathieNaoud_polyline_12.set('fieldAliases', {'ID': 'ID', 'ITIN�_RAIR': 'ITIN�_RAIR', 'LONGUEUR': 'LONGUEUR', 'OBSERV': 'OBSERV', });
lyr_Pistesdebtail_PanalOuolof_polyline_13.set('fieldAliases', {'OID_': 'OID_', 'NAME': 'NAME', 'FOLDERPATH': 'FOLDERPATH', 'SYMBOLID': 'SYMBOLID', 'ALTMODE': 'ALTMODE', 'BASE': 'BASE', 'CLAMPED': 'CLAMPED', 'EXTRUDED': 'EXTRUDED', 'SNIPPET': 'SNIPPET', 'POPUPINFO': 'POPUPINFO', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_Pb_Mbadakhoune_polyline_14.set('fieldAliases', {'ID': 'ID', 'ITIN�_RAIR': 'ITIN�_RAIR', 'LONGUEUR': 'LONGUEUR', 'OBSERV': 'OBSERV', });
lyr_Pb_Ndiago_polyline_15.set('fieldAliases', {'ID': 'ID', 'TRACES': 'TRACES', 'LONG': 'LONG', });
lyr_ShapAiresprotges_16.set('fieldAliases', {'NOM': 'NOM', 'Superficie': 'Superficie', });
lyr_ShapFotsAmnages_17.set('fieldAliases', {'NOM': 'NOM', 'SUP': 'SUP', });
lyr_17communescibles_18.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'reg': 'reg', 'dept': 'dept', 'cav': 'cav', 'ccrca': 'ccrca', 'cod_reg': 'cod_reg', 'cod_dept': 'cod_dept', 'cod_cav': 'cod_cav', 'cod_ccrca': 'cod_ccrca', 'cod_entite': 'cod_entite', 'superficie': 'superficie', 'sup_ha': 'sup_ha', 'ccrca_1': 'ccrca_1', 'milieu': 'milieu', 'masculin': 'masculin', 'feminin': 'feminin', 'total': 'total', });
lyr_Limitecommunale14112018_19.set('fieldAliases', {'REG': 'REG', 'DEPT': 'DEPT', 'CAV': 'CAV', 'CCRCA': 'CCRCA', 'COD_REG': 'COD_REG', 'COD_DEPT': 'COD_DEPT', 'COD_CAV': 'COD_CAV', 'COD_CCRCA': 'COD_CCRCA', 'COD_ENTITE': 'COD_ENTITE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_HA': 'SUP_HA', 'CCRCA_1': 'CCRCA_1', 'Milieu': 'Milieu', 'Masculin': 'Masculin', 'Feminin': 'Feminin', 'TOTAL': 'TOTAL', });
lyr_Limite_rgionale14112018_20.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'REG': 'REG', 'DEPT': 'DEPT', 'CAV': 'CAV', 'CCRCA': 'CCRCA', 'COD_REG': 'COD_REG', 'COD_DEPT': 'COD_DEPT', 'COD_CAV': 'COD_CAV', 'COD_CCRCA': 'COD_CCRCA', 'COD_ENTITE': 'COD_ENTITE', 'SUPERFICIE': 'SUPERFICIE', 'SUP_HA': 'SUP_HA', 'CCRCA_1': 'CCRCA_1', 'Milieu': 'Milieu', 'Masculin': 'Masculin', 'Feminin': 'Feminin', 'TOTAL': 'TOTAL', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Parcours_de_btail_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'objectid': '', 'type': '', 'shape_leng': '', 'region': '', 'departemen': '', 'arrondisse': '', 'commune': '', 'longueur_k': '', 'itineraire': '', });
lyr_Parcoursdebtail_Kahi_polyline_1.set('fieldImages', {'ID': 'TextEdit', 'R�_GION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'ITINERAIRE': 'TextEdit', 'ARR': 'TextEdit', 'ZONAGES': 'TextEdit', 'CARTO': 'TextEdit', 'LONGUEUR': 'TextEdit', });
lyr_Parcoursdebtail_Boulel_polyline_2.set('fieldImages', {'ID': 'TextEdit', 'R�_GION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'ITINERAIRE': 'TextEdit', 'ARR': 'TextEdit', 'ZONAGES': 'TextEdit', 'CARTO': 'TextEdit', 'LONGUEUR': 'TextEdit', });
lyr_Pb_ToubaMbella_polyline_3.set('fieldImages', {'ID': 'TextEdit', 'ITINERAIRE': 'TextEdit', 'LONGUEUR': 'TextEdit', 'COMENT': 'TextEdit', });
lyr_Pistesbtail_FassThieckene_polyline_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'ITIN�_RAIR': 'TextEdit', 'ZONE': 'TextEdit', 'LONGUEUR': 'TextEdit', 'NOM': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr_Pb_Diamal_polyline_5.set('fieldImages', {'ID': 'TextEdit', 'ITINERAIRE': 'TextEdit', 'LONGUEUR': 'TextEdit', 'COMENT': 'TextEdit', });
lyr_Parcours_btail_Gniby_polyline_6.set('fieldImages', {'ID': 'TextEdit', 'R�_GION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'ITINERAIRE': 'TextEdit', 'ARR': 'TextEdit', 'ZONAGES': 'TextEdit', 'CARTO': 'TextEdit', 'LONGUEUR': 'TextEdit', });
lyr_Pistesbtail_IdaMouride_polyline_7.set('fieldImages', {'ID': 'TextEdit', 'ITINERAIRE': 'TextEdit', 'NOM': 'TextEdit', 'ITINER': 'TextEdit', });
lyr_Pb_Khelcom_polyline_8.set('fieldImages', {'code': 'TextEdit', 'id': 'TextEdit', 'itin�_rair': 'TextEdit', 'long': 'TextEdit', 'obs': 'TextEdit', });
lyr_PbKeurBaka_polyline_9.set('fieldImages', {'ID': 'TextEdit', 'COMMENT_1': 'TextEdit', 'OBS_1': 'TextEdit', 'LONGUEUR': 'TextEdit', });
lyr_Pb_Thiar_polyline_10.set('fieldImages', {'ID': 'TextEdit', 'ITINERAIRE': 'TextEdit', 'LONGUEUR': 'TextEdit', 'COMENT': 'TextEdit', });
lyr_Pistesdebtail_DaraMboss_polyline_11.set('fieldImages', {'OID_': 'TextEdit', 'NAME': 'TextEdit', 'FOLDERPATH': 'TextEdit', 'SYMBOLID': 'TextEdit', 'ALTMODE': 'TextEdit', 'BASE': 'TextEdit', 'CLAMPED': 'TextEdit', 'EXTRUDED': 'TextEdit', 'SNIPPET': 'TextEdit', 'POPUPINFO': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr_Pb_NgathieNaoud_polyline_12.set('fieldImages', {'ID': 'TextEdit', 'ITIN�_RAIR': 'TextEdit', 'LONGUEUR': 'TextEdit', 'OBSERV': 'TextEdit', });
lyr_Pistesdebtail_PanalOuolof_polyline_13.set('fieldImages', {'OID_': 'TextEdit', 'NAME': 'TextEdit', 'FOLDERPATH': 'TextEdit', 'SYMBOLID': 'TextEdit', 'ALTMODE': 'TextEdit', 'BASE': 'TextEdit', 'CLAMPED': 'TextEdit', 'EXTRUDED': 'TextEdit', 'SNIPPET': 'TextEdit', 'POPUPINFO': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr_Pb_Mbadakhoune_polyline_14.set('fieldImages', {'ID': 'TextEdit', 'ITIN�_RAIR': 'TextEdit', 'LONGUEUR': 'TextEdit', 'OBSERV': 'TextEdit', });
lyr_Pb_Ndiago_polyline_15.set('fieldImages', {'ID': 'TextEdit', 'TRACES': 'TextEdit', 'LONG': 'TextEdit', });
lyr_ShapAiresprotges_16.set('fieldImages', {'NOM': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ShapFotsAmnages_17.set('fieldImages', {'NOM': 'TextEdit', 'SUP': 'TextEdit', });
lyr_17communescibles_18.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'reg': 'TextEdit', 'dept': 'TextEdit', 'cav': 'TextEdit', 'ccrca': 'TextEdit', 'cod_reg': 'TextEdit', 'cod_dept': 'TextEdit', 'cod_cav': 'TextEdit', 'cod_ccrca': 'TextEdit', 'cod_entite': 'TextEdit', 'superficie': 'TextEdit', 'sup_ha': 'TextEdit', 'ccrca_1': 'TextEdit', 'milieu': 'TextEdit', 'masculin': 'TextEdit', 'feminin': 'TextEdit', 'total': 'TextEdit', });
lyr_Limitecommunale14112018_19.set('fieldImages', {'REG': 'TextEdit', 'DEPT': 'TextEdit', 'CAV': 'TextEdit', 'CCRCA': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_DEPT': 'TextEdit', 'COD_CAV': 'TextEdit', 'COD_CCRCA': 'TextEdit', 'COD_ENTITE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUP_HA': 'TextEdit', 'CCRCA_1': 'TextEdit', 'Milieu': 'TextEdit', 'Masculin': 'TextEdit', 'Feminin': 'TextEdit', 'TOTAL': 'TextEdit', });
lyr_Limite_rgionale14112018_20.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'REG': 'TextEdit', 'DEPT': 'TextEdit', 'CAV': 'TextEdit', 'CCRCA': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_DEPT': 'TextEdit', 'COD_CAV': 'TextEdit', 'COD_CCRCA': 'TextEdit', 'COD_ENTITE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUP_HA': 'TextEdit', 'CCRCA_1': 'TextEdit', 'Milieu': 'TextEdit', 'Masculin': 'TextEdit', 'Feminin': 'TextEdit', 'TOTAL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parcours_de_btail_0.set('fieldLabels', {'OBJECTID': 'no label', 'objectid': 'no label', 'type': 'no label', 'shape_leng': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'longueur_k': 'no label', 'itineraire': 'no label', });
lyr_Parcoursdebtail_Kahi_polyline_1.set('fieldLabels', {'ID': 'no label', 'R�_GION': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'ITINERAIRE': 'no label', 'ARR': 'no label', 'ZONAGES': 'no label', 'CARTO': 'no label', 'LONGUEUR': 'no label', });
lyr_Parcoursdebtail_Boulel_polyline_2.set('fieldLabels', {'ID': 'no label', 'R�_GION': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'ITINERAIRE': 'no label', 'ARR': 'no label', 'ZONAGES': 'no label', 'CARTO': 'no label', 'LONGUEUR': 'no label', });
lyr_Pb_ToubaMbella_polyline_3.set('fieldLabels', {'ID': 'no label', 'ITINERAIRE': 'no label', 'LONGUEUR': 'no label', 'COMENT': 'no label', });
lyr_Pistesbtail_FassThieckene_polyline_4.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'ITIN�_RAIR': 'no label', 'ZONE': 'no label', 'LONGUEUR': 'no label', 'NOM': 'no label', 'SHAPE_LENG': 'no label', });
lyr_Pb_Diamal_polyline_5.set('fieldLabels', {'ID': 'no label', 'ITINERAIRE': 'no label', 'LONGUEUR': 'no label', 'COMENT': 'no label', });
lyr_Parcours_btail_Gniby_polyline_6.set('fieldLabels', {'ID': 'no label', 'R�_GION': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'ITINERAIRE': 'no label', 'ARR': 'no label', 'ZONAGES': 'no label', 'CARTO': 'no label', 'LONGUEUR': 'no label', });
lyr_Pistesbtail_IdaMouride_polyline_7.set('fieldLabels', {'ID': 'no label', 'ITINERAIRE': 'no label', 'NOM': 'no label', 'ITINER': 'no label', });
lyr_Pb_Khelcom_polyline_8.set('fieldLabels', {'code': 'no label', 'id': 'no label', 'itin�_rair': 'no label', 'long': 'no label', 'obs': 'no label', });
lyr_PbKeurBaka_polyline_9.set('fieldLabels', {'ID': 'no label', 'COMMENT_1': 'no label', 'OBS_1': 'no label', 'LONGUEUR': 'no label', });
lyr_Pb_Thiar_polyline_10.set('fieldLabels', {'ID': 'no label', 'ITINERAIRE': 'no label', 'LONGUEUR': 'no label', 'COMENT': 'no label', });
lyr_Pistesdebtail_DaraMboss_polyline_11.set('fieldLabels', {'OID_': 'no label', 'NAME': 'no label', 'FOLDERPATH': 'no label', 'SYMBOLID': 'no label', 'ALTMODE': 'no label', 'BASE': 'no label', 'CLAMPED': 'no label', 'EXTRUDED': 'no label', 'SNIPPET': 'no label', 'POPUPINFO': 'no label', 'SHAPE_LENG': 'no label', });
lyr_Pb_NgathieNaoud_polyline_12.set('fieldLabels', {'ID': 'no label', 'ITIN�_RAIR': 'no label', 'LONGUEUR': 'no label', 'OBSERV': 'no label', });
lyr_Pistesdebtail_PanalOuolof_polyline_13.set('fieldLabels', {'OID_': 'no label', 'NAME': 'no label', 'FOLDERPATH': 'no label', 'SYMBOLID': 'no label', 'ALTMODE': 'no label', 'BASE': 'no label', 'CLAMPED': 'no label', 'EXTRUDED': 'no label', 'SNIPPET': 'no label', 'POPUPINFO': 'no label', 'SHAPE_LENG': 'no label', });
lyr_Pb_Mbadakhoune_polyline_14.set('fieldLabels', {'ID': 'no label', 'ITIN�_RAIR': 'no label', 'LONGUEUR': 'no label', 'OBSERV': 'no label', });
lyr_Pb_Ndiago_polyline_15.set('fieldLabels', {'ID': 'no label', 'TRACES': 'no label', 'LONG': 'no label', });
lyr_ShapAiresprotges_16.set('fieldLabels', {'NOM': 'header label - visible with data', 'Superficie': 'header label - visible with data', });
lyr_ShapFotsAmnages_17.set('fieldLabels', {'NOM': 'inline label - always visible', 'SUP': 'header label - visible with data', });
lyr_17communescibles_18.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'reg': 'hidden field', 'dept': 'hidden field', 'cav': 'hidden field', 'ccrca': 'header label - visible with data', 'cod_reg': 'hidden field', 'cod_dept': 'hidden field', 'cod_cav': 'hidden field', 'cod_ccrca': 'hidden field', 'cod_entite': 'hidden field', 'superficie': 'hidden field', 'sup_ha': 'hidden field', 'ccrca_1': 'hidden field', 'milieu': 'hidden field', 'masculin': 'hidden field', 'feminin': 'hidden field', 'total': 'hidden field', });
lyr_Limitecommunale14112018_19.set('fieldLabels', {'REG': 'hidden field', 'DEPT': 'hidden field', 'CAV': 'hidden field', 'CCRCA': 'header label - visible with data', 'COD_REG': 'hidden field', 'COD_DEPT': 'hidden field', 'COD_CAV': 'hidden field', 'COD_CCRCA': 'hidden field', 'COD_ENTITE': 'hidden field', 'SUPERFICIE': 'hidden field', 'SUP_HA': 'hidden field', 'CCRCA_1': 'hidden field', 'Milieu': 'hidden field', 'Masculin': 'hidden field', 'Feminin': 'hidden field', 'TOTAL': 'hidden field', });
lyr_Limite_rgionale14112018_20.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'REG': 'inline label - visible with data', 'DEPT': 'hidden field', 'CAV': 'hidden field', 'CCRCA': 'hidden field', 'COD_REG': 'hidden field', 'COD_DEPT': 'hidden field', 'COD_CAV': 'hidden field', 'COD_CCRCA': 'hidden field', 'COD_ENTITE': 'hidden field', 'SUPERFICIE': 'hidden field', 'SUP_HA': 'hidden field', 'CCRCA_1': 'hidden field', 'Milieu': 'hidden field', 'Masculin': 'hidden field', 'Feminin': 'hidden field', 'TOTAL': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Limite_rgionale14112018_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});