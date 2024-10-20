const entity = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
  ellipse: {
    semiMinorAxis: 250000.0,
    semiMajorAxis: 400000.0,
    material: Cesium.Color.BLUE.withAlpha(0.5),
  },
});
viewer.zoomTo(viewer.entities);

const ellipse = entity.ellipse; // For upcoming examples