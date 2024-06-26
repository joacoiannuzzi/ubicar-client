import styles from "./ListingFiltersMobile.module.scss";
import React, { useMemo, useCallback, useState } from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  Popover,
  TextField,
  withStyles,
} from "@material-ui/core";
import DropdownItem from "react-bootstrap/DropdownItem";
import { Dropdown } from "react-bootstrap";
import {
  StyleDTO,
  GetTypesUsingGET200Item,
  useGetLoggedUsingGET,
  useSaveFiltersUsingPOST,
  getGetLoggedUsingGETQueryKey,
} from "../../../api";
import { useHistory, useLocation } from "react-router-dom";
import QueryString from "query-string";
import { actions, useAppDispatch, useAppSelector } from "../../../store";
import { selectOption, selectSearchBar } from "../../../store/slices/session";
import { convertCoordinates } from "../../Map/utils";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MapView } from "../../../store/slices/map/mapSlice";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useQueryClient } from "react-query";

const parseIntOrUndefined = (n: string) => (n !== "" ? parseInt(n) : undefined);

type ListingFiltersProp = {
  houseStyles: StyleDTO[] | null;
  houseTypes: GetTypesUsingGET200Item[] | null;
  setZoom: (arg0: number) => void;
  setView: (arg0: MapView) => void;
};

export const StyledButton = withStyles({
  root: {
    width: "200px",
    minWidth: "auto",
    // background: "white",
    paddingLeft: "0.7em",
    paddingRight: "0.7em",
    textTransform: "none",
    // marginLeft: "1.5rem",
    border: "2px solid #E0E0E0",
    color: "rgba(0,0,0,0.70)",
    background: "rgb(255,255,255,0.9)",

    "&:hover": {
      background: "#f2f2f2",
    },
  },
})(Button);

export function ListingFiltersMobile({
  houseStyles,
  houseTypes,
  setZoom,
  setView,
}: ListingFiltersProp) {
  const [anchorSale, setAnchorSale] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [anchorPrice, setAnchorPrice] =
    React.useState<HTMLButtonElement | null>(null);
  const [anchorRooms, setAnchorRooms] =
    React.useState<HTMLButtonElement | null>(null);
  const [anchorBaths, setAnchorBaths] =
    React.useState<HTMLButtonElement | null>(null);
  const [anchorSqMts, setAnchorSqMts] =
    React.useState<HTMLButtonElement | null>(null);
  const [anchorStyles, setAnchorStyles] =
    React.useState<HTMLButtonElement | null>(null);
  const [anchorTypes, setAnchorTypes] =
    React.useState<HTMLButtonElement | null>(null);

  // Distances
  const [distanceSchool, setDistanceSchool] =
    React.useState<HTMLButtonElement | null>(null);
  const [distanceUniversities, setDistanceUniversities] =
    React.useState<HTMLButtonElement | null>(null);
  const [distanceHospitals, setDistanceHospitals] =
    React.useState<HTMLButtonElement | null>(null);
  const [distanceFireStation, setDistanceFireStation] =
    React.useState<HTMLButtonElement | null>(null);
  const [distancePenitentiary, setDistancePenitentiary] =
    React.useState<HTMLButtonElement | null>(null);
  const [distanceCommissary, setDistanceCommissary] =
    React.useState<HTMLButtonElement | null>(null);
  const [distanceSubway, setDistanceSubway] =
    React.useState<HTMLButtonElement | null>(null);

  const openSalePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorSale(event.currentTarget);
  };

  const openPricePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorPrice(event.currentTarget);
  };

  const openRoomsPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorRooms(event.currentTarget);
  };

  const openBathsPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorBaths(event.currentTarget);
  };

  const openSqMtsPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorSqMts(event.currentTarget);
  };

  const openStylePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorStyles(event.currentTarget);
  };

  const openTypesPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorTypes(event.currentTarget);
  };

  // Distances
  const openDistanceSchoolsPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDistanceSchool(event.currentTarget);
  };

  const openDistanceUniversitiesPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDistanceUniversities(event.currentTarget);
  };

  const openDistanceHospitalsPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDistanceHospitals(event.currentTarget);
  };

  const openDistanceFireStationPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDistanceFireStation(event.currentTarget);
  };

  const openDistancePenitentiaryPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDistancePenitentiary(event.currentTarget);
  };

  const openDistanceCommissaryPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDistanceCommissary(event.currentTarget);
  };

  const openDistanceSubwayPopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDistanceSubway(event.currentTarget);
  };

  const location = useLocation();
  const history = useHistory();
  const search = useAppSelector(selectOption);
  const dispatch = useAppDispatch();

  const clearFilters = useCallback(() => {
    history.push({
      pathname: location.pathname,
      search: QueryString.stringify({}),
    });
  }, [history, location.pathname]);

  const pushQueryParams = useCallback(
    (params: Record<string, string | number | undefined>) => {
      const query = { ...QueryString.parse(location.search), ...params };
      history.push({
        pathname: location.pathname,
        search: QueryString.stringify(query),
      });
    },
    [history, location.pathname, location.search]
  );

  const query = useMemo(
    () => QueryString.parse(location.search) as any,
    [location.search]
  );

  const checkNotUndefined = (value: any) => {
    return value ? value : null;
  };

  const bar = useAppSelector(selectSearchBar);

  const [unsavedFilters, setUnsavedFilters] = React.useState<boolean>(true);

  const body = {
    condition: checkNotUndefined(query.condition),
    typeProperty: checkNotUndefined(query.typeProperty),
    minPrice: parseFloat(checkNotUndefined(query.minPrice)),
    maxPrice: parseFloat(checkNotUndefined(query.maxPrice)),
    style: checkNotUndefined(query.style),
    minAmountBathroom: checkNotUndefined(query.minAmountBathroom),
    minAmountRoom: checkNotUndefined(query.minAmountRoom),
    maxAmountRoom: checkNotUndefined(query.maxAmountRoom),
    minAmountSquareMeter: checkNotUndefined(query.minAmountSquareMeter),
    maxAmountSquareMeter: checkNotUndefined(query.maxAmountSquareMeter),
    minDistanceSchools: checkNotUndefined(query.minDistanceSchools),
    maxDistanceSchool: checkNotUndefined(query.maxDistanceSchool),
    minDistanceUniversity: checkNotUndefined(query.minDistanceUniversity),
    maxDistanceUniversity: checkNotUndefined(query.maxDistanceUniversity),
    minDistanceHospital: checkNotUndefined(query.minDistanceHospital),
    maxDistanceHospital: checkNotUndefined(query.maxDistanceHospital),
    minDistanceFireStation: checkNotUndefined(query.minDistanceFireStation),
    maxDistanceFireStation: checkNotUndefined(query.maxDistanceFireStation),
    minDistancePenitentiary: checkNotUndefined(query.minDistancePenitentiary),
    maxDistanceCommissary: checkNotUndefined(query.maxDistanceCommissary),
    minDistanceSubway: checkNotUndefined(query.minDistanceSubway),
    maxDistanceSubway: checkNotUndefined(query.maxDistanceSubway),
    location: checkNotUndefined(bar),
  };

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([
    { id: "", name: "", stateName: "", centroid: { lat: 0, long: 0 } },
  ]);
  const loading = open && options.length === 0;

  const onChangeHandle = async (value: any) => {
    const response = await fetch(
      "http://localhost:3000/public/cities-and-states?name=" + value
    );

    const citiesAndStates = await response.json();
    if (citiesAndStates && citiesAndStates.content) {
      const options = citiesAndStates.content.map((option: any) => {
        if (option.type === "STATE") {
          return option.state;
        } else {
          return option.city;
        }
      });
      setOptions(options);
    }
  };

  const handleChangeView = (longitude: number, latitude: number) => {
    setView({ longitude: longitude, latitude: latitude });
    setZoom(12);
  };
  const handleChangeName = (name: string) => {
    dispatch(actions.session.setSearchBar(name));
  };

  const handleOptionLabel = (option: any) => {
    if (option.id !== "") {
      if (option.stateName)
        return (
          option.name[0].toUpperCase() +
          option.name.substr(1).toLowerCase() +
          ", " +
          option.stateName
        );
      return option.name[0].toUpperCase() + option.name.substr(1).toLowerCase();
    }
    return "";
  };

  return (
    <div>
      <div className={styles.OptionsFilters}>
        <StyledButton
          id="buttonForm"
          size="small"
          onClick={openSalePopover}
          style={
            query.condition
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          {query.condition
            ? query.condition === "SALE"
              ? "En Venta"
              : "En Alquiler"
            : "Tipo de Operación"}
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openPricePopover}
          style={
            query.minPrice || query.maxPrice
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Precio
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openRoomsPopover}
          style={
            query.minAmountRoom || query.maxAmountRoom
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          {query.minAmountRoom && query.maxAmountRoom
            ? query.minAmountRoom + "-" + query.maxAmountRoom + " Habitaciones"
            : "Habitaciones"}
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openBathsPopover}
          style={
            query.minAmountBathroom
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          {query.minAmountBathroom
            ? query.minAmountBathroom + "+ Baños"
            : "Baños"}
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openSqMtsPopover}
          style={
            query.minAmountSquareMeter || query.maxAmountSquareMeter
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Metros cuadrados
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openStylePopover}
          style={
            query.style
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Estilo
        </StyledButton>

        <StyledButton
          size="small"
          onClick={openTypesPopover}
          style={
            query.typeProperty
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Tipo
        </StyledButton>

        <StyledButton
          size="small"
          onClick={openDistanceSchoolsPopover}
          style={
            query.minDistanceSchool || query.maxDistanceSchool
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Distancia Escuelas
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openDistanceUniversitiesPopover}
          style={
            query.minDistanceUniversity || query.maxDistanceUniversity
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Distancia Universidades
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openDistanceHospitalsPopover}
          style={
            query.minDistanceHospital || query.maxDistanceHospital
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Distancia Hospitales
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openDistanceFireStationPopover}
          style={
            query.minDistanceFireStation || query.maxDistanceFireStation
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Distancia Bomberos
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openDistancePenitentiaryPopover}
          style={
            query.minDistancePenitentiary
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Distancia Penitenciaria
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openDistanceCommissaryPopover}
          style={
            query.maxDistanceCommissary
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Distancia Comisaria
        </StyledButton>
        <StyledButton
          size="small"
          onClick={openDistanceSubwayPopover}
          style={
            query.minDistanceSubway || query.maxDistanceSubway
              ? {
                  background: "rgba(255, 64, 0, 0.25)",
                  border: "2px solid #FF4000",
                  color: "#FF4000",
                }
              : {}
          }
        >
          Distancia Subte
        </StyledButton>

        <StyledButton size="small" onClick={clearFilters}>
          Limpiar Filtros
        </StyledButton>
      </div>
      <Popover
        open={Boolean(anchorSale)}
        anchorEl={anchorSale}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setAnchorSale(null)}
      >
        <List>
          <ListItem
            onClick={() =>
              query.condition === "SALE"
                ? pushQueryParams({ condition: undefined })
                : pushQueryParams({ condition: "SALE" })
            }
            className={styles.conditionHover}
          >
            En Venta
          </ListItem>
          <ListItem
            onClick={() =>
              query.condition === "RENT"
                ? pushQueryParams({ condition: undefined })
                : pushQueryParams({ condition: "RENT" })
            }
            className={styles.conditionHover}
          >
            En Alquiler
          </ListItem>
        </List>
      </Popover>
      <Popover
        open={Boolean(anchorStyles)}
        anchorEl={anchorStyles}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={() => setAnchorStyles(null)}
      >
        <Dropdown>
          {houseStyles?.map((data) => {
            return (
              <DropdownItem
                key={data.id}
                onClick={() =>
                  query.style === data.id
                    ? pushQueryParams({ style: undefined })
                    : pushQueryParams({ style: data.id })
                }
                style={
                  query.style === data.id
                    ? {
                        background: "rgba(255, 64, 0, 0.25)",
                        border: "2px solid #FF4000",
                        color: "#FF4000",
                      }
                    : {}
                }
              >
                {data.label}
              </DropdownItem>
            );
          })}
        </Dropdown>
      </Popover>
      <Popover
        open={Boolean(anchorTypes)}
        anchorEl={anchorTypes}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setAnchorTypes(null)}
      >
        <Dropdown>
          {houseTypes?.map((data) => {
            return (
              <DropdownItem
                key={data}
                onClick={() =>
                  query.typeProperty === data
                    ? pushQueryParams({ typeProperty: undefined })
                    : pushQueryParams({ typeProperty: data })
                }
                style={
                  query.typeProperty === data
                    ? {
                        background: "rgba(255, 64, 0, 0.25)",
                        border: "2px solid #FF4000",
                        color: "#FF4000",
                      }
                    : {}
                }
              >
                {data}
              </DropdownItem>
            );
          })}
        </Dropdown>
      </Popover>
      <Popover
        open={Boolean(anchorPrice)}
        anchorEl={anchorPrice}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setAnchorPrice(null)}
      >
        <Grid className={styles.popoversTitles}>Precio</Grid>
        <Grid container className={styles.price}>
          <TextField
            placeholder="Min"
            className={styles.priceMinInp}
            variant="outlined"
            type="number"
            value={query.minPrice}
            size="small"
            onChange={(e) =>
              pushQueryParams({ minPrice: parseIntOrUndefined(e.target.value) })
            }
          />

          <TextField
            placeholder="Max"
            className={styles.priceMaxInp}
            variant="outlined"
            type="number"
            value={query.maxPrice}
            size="small"
            onChange={(e) =>
              pushQueryParams({ maxPrice: parseIntOrUndefined(e.target.value) })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(anchorRooms)}
        anchorEl={anchorRooms}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setAnchorRooms(null)}
      >
        <Grid className={styles.popoversTitles}>Habitaciones</Grid>
        <Grid container className={styles.price}>
          <TextField
            placeholder="Min"
            className={styles.priceMinInp}
            variant="outlined"
            type="number"
            value={query.minAmountRoom}
            size="small"
            onChange={(e) => {
              return pushQueryParams({
                minAmountRoom: parseIntOrUndefined(e.target.value),
              });
            }}
          />
          <TextField
            placeholder="Max"
            className={styles.priceMaxInp}
            variant="outlined"
            type="number"
            value={query.maxAmountRoom}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                maxAmountRoom: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(anchorBaths)}
        anchorEl={anchorBaths}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setAnchorBaths(null)}
      >
        <Grid className={styles.popoversTitles}>Baños</Grid>
        <Grid
          className={styles.roomsBathsButtons}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={
              Number(query.minAmountBathroom) === 1
                ? {
                    background: "rgba(255, 64, 0, 0.25)",
                    border: "2px solid #FF4000",
                    color: "#FF4000",
                  }
                : {}
            }
            onClick={() =>
              Number(query.minAmountBathroom) === 1
                ? pushQueryParams({ minAmountBathroom: undefined })
                : pushQueryParams({ minAmountBathroom: 1 })
            }
          >
            1+
          </Button>
          <Button
            style={
              Number(query.minAmountBathroom) === 2
                ? {
                    background: "rgba(255, 64, 0, 0.25)",
                    border: "2px solid #FF4000",
                    color: "#FF4000",
                  }
                : {}
            }
            onClick={() =>
              Number(query.minAmountBathroom) === 2
                ? pushQueryParams({ minAmountBathroom: undefined })
                : pushQueryParams({ minAmountBathroom: 2 })
            }
          >
            2+
          </Button>
          <Button
            style={
              Number(query.minAmountBathroom) === 3
                ? {
                    background: "rgba(255, 64, 0, 0.25)",
                    border: "2px solid #FF4000",
                    color: "#FF4000",
                  }
                : {}
            }
            onClick={() =>
              Number(query.minAmountBathroom) === 3
                ? pushQueryParams({ minAmountBathroom: undefined })
                : pushQueryParams({ minAmountBathroom: 3 })
            }
          >
            3+
          </Button>
          <Button
            style={
              Number(query.minAmountBathroom) === 4
                ? {
                    background: "rgba(255, 64, 0, 0.25)",
                    border: "2px solid #FF4000",
                    color: "#FF4000",
                  }
                : {}
            }
            onClick={() =>
              Number(query.minAmountBathroom) === 4
                ? pushQueryParams({ minAmountBathroom: undefined })
                : pushQueryParams({ minAmountBathroom: 4 })
            }
          >
            4+
          </Button>
        </Grid>
      </Popover>
      <Popover
        open={Boolean(anchorSqMts)}
        anchorEl={anchorSqMts}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setAnchorSqMts(null)}
      >
        <Grid className={styles.popoversTitles}>Metros Cuadrados</Grid>
        <Grid container className={styles.price}>
          <TextField
            placeholder="Min"
            className={styles.priceMinInp}
            variant="outlined"
            type="number"
            value={query.minAmountSquareMeter}
            size="small"
            onChange={(e) => {
              return pushQueryParams({
                minAmountSquareMeter: parseIntOrUndefined(e.target.value),
              });
            }}
          />
          <TextField
            placeholder="Max"
            className={styles.priceMaxInp}
            variant="outlined"
            type="number"
            value={query.maxAmountSquareMeter}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                maxAmountSquareMeter: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(distanceSchool)}
        anchorEl={distanceSchool}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setDistanceSchool(null)}
      >
        <Grid className={styles.popoversTitles}>
          Distancia Escuelas (metros)
        </Grid>
        <Grid container className={styles.price}>
          <TextField
            placeholder="Min"
            className={styles.priceMinInp}
            variant="outlined"
            type="number"
            value={query.minDistanceSchool}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                minDistanceSchool: parseIntOrUndefined(e.target.value),
              })
            }
          />
          <TextField
            placeholder="Max"
            className={styles.priceMaxInp}
            variant="outlined"
            type="number"
            value={query.maxDistanceSchool}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                maxDistanceSchool: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(distanceUniversities)}
        anchorEl={distanceUniversities}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setDistanceUniversities(null)}
      >
        <Grid className={styles.popoversTitles}>
          Distancia Universidades (metros)
        </Grid>
        <Grid container className={styles.price}>
          <TextField
            placeholder="Min"
            className={styles.priceMinInp}
            variant="outlined"
            type="number"
            value={query.minDistanceUniversity}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                minDistanceUniversity: parseIntOrUndefined(e.target.value),
              })
            }
          />
          <TextField
            placeholder="Max"
            className={styles.priceMaxInp}
            variant="outlined"
            type="number"
            value={query.maxDistanceUniversity}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                maxDistanceUniversity: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(distanceHospitals)}
        anchorEl={distanceHospitals}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setDistanceHospitals(null)}
      >
        <Grid className={styles.popoversTitles}>
          Distancia Hospitales (metros)
        </Grid>
        <Grid container className={styles.price}>
          <TextField
            placeholder="Min"
            className={styles.priceMinInp}
            variant="outlined"
            type="number"
            value={query.minDistanceHospital}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                minDistanceHospital: parseIntOrUndefined(e.target.value),
              })
            }
          />
          <TextField
            placeholder="Max"
            className={styles.priceMaxInp}
            variant="outlined"
            type="number"
            value={query.maxDistanceHospital}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                maxDistanceHospital: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(distanceFireStation)}
        anchorEl={distanceFireStation}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setDistanceFireStation(null)}
      >
        <Grid className={styles.popoversTitles}>
          Distancia Bomberos (metros)
        </Grid>
        <Grid container className={styles.price}>
          <TextField
            placeholder="Min"
            className={styles.priceMinInp}
            variant="outlined"
            type="number"
            value={query.minDistanceFireStation}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                minDistanceFireStation: parseIntOrUndefined(e.target.value),
              })
            }
          />
          <TextField
            placeholder="Max"
            className={styles.priceMaxInp}
            variant="outlined"
            type="number"
            value={query.maxDistanceFireStation}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                maxDistanceFireStation: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(distancePenitentiary)}
        anchorEl={distancePenitentiary}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setDistancePenitentiary(null)}
      >
        <Grid className={styles.popoversTitles}>
          Distancia Penitenciaria (metros)
        </Grid>
        <Grid container className={styles.oneValue}>
          <TextField
            placeholder="Min"
            className={styles.oneValueInp}
            variant="outlined"
            type="number"
            value={query.minDistancePenitentiary}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                minDistancePenitentiary: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(distanceCommissary)}
        anchorEl={distanceCommissary}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setDistanceCommissary(null)}
      >
        <Grid className={styles.popoversTitles}>
          Distancia Comisaria (metros)
        </Grid>
        <Grid container className={styles.oneValue}>
          <TextField
            placeholder="Max"
            className={styles.oneValueInp}
            variant="outlined"
            type="number"
            value={query.maxDistanceCommissary}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                maxDistanceCommissary: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
      <Popover
        open={Boolean(distanceSubway)}
        anchorEl={distanceSubway}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setDistanceSubway(null)}
      >
        <Grid className={styles.popoversTitles}>Distancia Subtes (metros)</Grid>
        <Grid container className={styles.price}>
          <TextField
            placeholder="Min"
            className={styles.priceMinInp}
            variant="outlined"
            type="number"
            value={query.minDistanceSubway}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                minDistanceSubway: parseIntOrUndefined(e.target.value),
              })
            }
          />
          <TextField
            placeholder="Max"
            className={styles.priceMaxInp}
            variant="outlined"
            type="number"
            value={query.maxDistanceSubway}
            size="small"
            onChange={(e) =>
              pushQueryParams({
                maxDistanceSubway: parseIntOrUndefined(e.target.value),
              })
            }
          />
        </Grid>
      </Popover>
    </div>
  );
}
