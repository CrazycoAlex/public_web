//"blastLethalImpactOnHumans"
const entityLethalHumans = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(37.609014274642628,55.7505311245719),
  ellipse: {
    semiMinorAxis: 11.3796,
    semiMajorAxis: 11.3796,
    material: Cesium.Color.KHAKI.withAlpha(0.5),
  },
});

entityLethalHumans.fill = false;
entityLethalHumans.outline = true;
entityLethalHumans.outlineColor = Cesium.Color.YELLOW;
entityLethalHumans.outlineWidth = 2.0;

entityLethalHumans.name = "blastLethalImpactOnHumans";
entityLethalHumans.description = 'p = 0.1'

//"p":1.0,"r":9.81477
//"p":0.9,"r":9.88637
//"p":0.8,"r":9.96642
//"p":0.7,"r":10.0572
//"p":0.6,"r":10.1619
//"p":0.5,"r":10.2858
//"p":0.4,"r":10.4375
//"p":0.3,"r":10.633
//"p":0.2,"r":10.9086
//"p":0.1,"r":11.3796