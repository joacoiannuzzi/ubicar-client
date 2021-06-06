import React from "react";
import { TVectorLayerComponentProps, TVectorLayerProps } from "./vector-types";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Fill, Icon, Stroke, Style, Text } from "ol/style";
import { MapContext } from "../../map";
import { IMapContext } from "../../maptypes";
import { GeoJSON } from "ol/format";

class FireDepartmentLayer extends React.PureComponent<TVectorLayerComponentProps> {
  layer: VectorLayer;
  source: VectorSource;
  state = { visible: false };

  componentDidMount() {
    this.source = new VectorSource({
      url: "./geojson/Cuartel_de_bomberos.geojson",
      format: new GeoJSON(),
    });
    const style = new Style({
      fill: new Fill({
        color: "rgba(30, 400, 240, 0.3)",
      }),
      stroke: new Stroke({
        width: 3,
        color: "rgba(0, 100, 240, 0.8)",
      }),
      image: new Icon({
        src: "./icons/fire.png",
        scale: 10 / 1024,
        anchor: [1, 1],
      }),
      text: new Text(),
    });

    this.layer = new VectorLayer({
      source: this.source,
      visible: false, //Todo set redux variable.
      style: function () {
        return [style];
      },
    });

    this.layer.set("title", "Estaciones de Bomberos");
    this.props.map.addLayer(this.layer);
  }

  componentWillUnmount() {
    this.props.map.removeLayer(this.layer);
  }

  componentDidUpdate(prevProps: TVectorLayerComponentProps) {
    if (prevProps.features !== this.props.features) {
      this.source.clear();
      if (this.props.features) {
        this.source.addFeatures(this.props.features);
      }
    }
  }

  render() {
    return null;
  }
}

export const FireDepartmentLayerWithContext = (props: TVectorLayerProps) => {
  return (
    <MapContext.Consumer>
      {(mapContext: IMapContext | void) => {
        if (mapContext) {
          return <FireDepartmentLayer {...props} map={mapContext.map} />;
        }
      }}
    </MapContext.Consumer>
  );
};
