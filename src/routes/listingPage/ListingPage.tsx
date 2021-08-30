import Grid from "@material-ui/core/Grid";
import { ListingFilters } from "../../components/listingFilters/";
import { ListingHouse } from "../../components/listingHouse/";
import { MapComponent } from "../../components/Map/map";
import { actions, useAppSelector } from "../../store";
import { selectView, selectZoom } from "../../store/slices/map/mapSlice";
import styles from "./ListingPage.module.scss";
import { useEffect, useMemo, useState } from "react";
import {
  PropertyPreviewDTO,
  useGetFilteredProperties,
  useGetStylesUsingGET,
  useGetTypesUsingGET,
} from "../../api";
import { Switch, useLocation } from "react-router-dom";
import QueryString from "query-string";
import { Loading } from "../../components/common/loading/Loading";
import { convertCoordinates } from "../../components/Map/utils";
import { selectSearchBar } from "../../store/slices/session";
import { useDispatch } from "react-redux";

const checkNotUndefined = (value: any) => {
  return value ? value : null;
};

export const ListingPage = () => {
  const location = useLocation();

  const search = useAppSelector(selectSearchBar);

  const dispatch = useDispatch();

  const [init, setInit] = useState(true);

  const query = useMemo(
    () => QueryString.parse(location.search) as any,
    [location.search]
  );

  const { data: houseStyles } = useGetStylesUsingGET();
  const { data: houseTypes } = useGetTypesUsingGET();

  const { data, isLoading, isError } = useGetFilteredProperties({
    params: { page: 0 },
    data: {
      condition: checkNotUndefined(query.condition),
      typeProperty: checkNotUndefined(query.typeProperty),
      minPrice: parseFloat(checkNotUndefined(query.minPrice)),
      maxPrice: parseFloat(checkNotUndefined(query.maxPrice)),
      style: checkNotUndefined(query.style),
      minAmountBathroom: checkNotUndefined(query.minAmountBathroom),
      minAmountRoom: checkNotUndefined(query.minAmountRoom),
      minAmountSquareMeter: checkNotUndefined(query.minAmountSquareMeter),
      maxAmountSquareMeter: checkNotUndefined(query.maxAmountSquareMeter),
    },
  });

  const buildDataset = async (data: PropertyPreviewDTO[]) => {
    const response = await fetch(
      "http://localhost:3000/public/property/viewBox2?b1=" +
        bbox[1] +
        "&b2=" +
        bbox[0] +
        "&b3=" +
        bbox[3] +
        "&b4=" +
        bbox[2]
    );
    const propsInViewBox = await response.json();
    if (propsInViewBox) {
      if (data) {
        if (propsInViewBox.length > 0) {
          let obj: PropertyPreviewDTO[] = [];
          data.map((house) => {
            let matched = propsInViewBox.filter(
              (h: PropertyPreviewDTO) => house.id === h.id
            );
            if (matched.length) {
              obj?.push(matched[0]);
            }
          });
          setFinalData(obj);
          setLoad(false);
        } else {
          setFinalData([]);
        }
      }
    }
  };

  const [zoom, setZoom] = useState(useAppSelector(selectZoom));
  const [view, setView] = useState(useAppSelector(selectView));
  const [bbox, setBbox] = useState([0]);
  const [load, setLoad] = useState(true);
  const [finalData, setFinalData] = useState<PropertyPreviewDTO[]>();

  useEffect(() => {
    dispatch(actions.map.setZoom(zoom));
  }, [zoom]);
  useEffect(() => {
    dispatch(actions.map.setView(view));
  }, [view]);

  useEffect(() => {
    if (!isLoading && data && data.content) {
      buildDataset(data.content);
    }
  }, [bbox]);

  const handleSearch = async (input: string) => {
    if (search !== "") {
      input = search;
    }
    if (input !== "") {
      //reverse query, set zoom on field.
      const response = await fetch(
        "https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre,centroide&nombre=" +
          input,
        {
          method: "GET",
        }
      );

      const res = await response.json();
      if (res) {
        if (res.municipios) {
          const cord = convertCoordinates(
            res.municipios[0].centroide.lon,
            res.municipios[0].centroide.lat
          );
          setView({ latitude: cord[1], longitude: cord[0] });
          setZoom(13);
        }
      }
    }
  };

  useEffect(() => {
    if (init) {
      handleSearch(search);
    }
    setInit(true);
  }, [search]);

  return (
    <div>
      <ListingFilters
        houseStyles={houseStyles ? houseStyles : null}
        houseTypes={houseTypes ? houseTypes : null}
        handleSearch={handleSearch}
      />
      <Grid container className={styles.mapAndProperties}>
        <Grid item xl={9} sm={8} className={styles.map}>
          <MapComponent
            properties={[]}
            zoom={zoom}
            view={view}
            renderLayers={true}
            editable={false}
            setZoom={setZoom}
            setView={setView}
            setBbox={setBbox}
          />
        </Grid>
        <Grid item xl={3} sm={4} className={styles.propertyList}>
          <Switch>
            {isLoading && <Loading />}
            {isError && <h2>Hubo un error</h2>}
            {!load && finalData ? (
              <PropertyList properties={finalData} />
            ) : (
              <h2>No hay publicaciones disponibles</h2>
            )}
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

type PropertyListProps = {
  properties?: PropertyPreviewDTO[] | null;
};

const PropertyList = ({ properties }: PropertyListProps) => {
  debugger;
  return (
    <>
      {properties?.map((property) => (
        <ListingHouse key={property.id} house={property} />
      ))}
    </>
  );
};
