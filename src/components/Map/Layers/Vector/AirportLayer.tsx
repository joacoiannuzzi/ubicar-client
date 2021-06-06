import React from "react";
import { TVectorLayerComponentProps, TVectorLayerProps } from "./vector-types";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import { MapContext } from "../../map";
import { IMapContext } from "../../maptypes";
import { GeoJSON } from "ol/format";

class AirportLayer extends React.PureComponent<TVectorLayerComponentProps> {
  layer: VectorLayer;
  source: VectorSource;
  state = { visible: false };

  componentDidMount() {
    this.source = new VectorSource({
      url: "./geojson/Aeropuerto.geojson",
      format: new GeoJSON(),
    });
    const style = new Style({
      image: new Icon({
        src: "./icons/airport.png",
        scale: 50 / 1024,
        anchor: [1, 1],
      }),
    });

    this.layer = new VectorLayer({
      source: this.source,
      visible: false, //Todo set redux variable.
      style: function () {
        return [style];
      },
    });

    this.layer.set("title", "Aeropuertos");
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

export const AirportLayerWithContext = (props: TVectorLayerProps) => {
  return (
    <MapContext.Consumer>
      {(mapContext: IMapContext | void) => {
        if (mapContext) {
          return <AirportLayer {...props} map={mapContext.map} />;
        }
      }}
    </MapContext.Consumer>
  );
};
