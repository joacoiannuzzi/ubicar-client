import styles from "./HouseCard.module.scss";
import { Image } from "react-bootstrap";
import { Tooltip } from "@material-ui/core";
import pluralize from "pluralize";
import { useHistory } from "react-router-dom";
import { urls } from "../../constants";
import { PropertyPreviewDTO } from "../../api";
import clsx from "clsx";

export interface HouseCardProps {
  house: PropertyPreviewDTO;
  clickable?: boolean;
  isLarge?: boolean;
}

export function HouseCard({
  house,
  clickable = true,
  isLarge = false,
}: HouseCardProps) {
  const history = useHistory();
  const houseAddress = house.address;
  const houseStreetNumber = `${houseAddress?.street ?? ""} ${
    houseAddress?.number ?? ""
  }`;
  const stateCity =
    houseAddress?.city && houseAddress.state
      ? `${houseAddress?.city}, ${houseAddress.state}`
      : "";
  const baths = pluralize("baño", house.fullBaths);

  if (isLarge)
    return (
      <div
        className={clsx(styles.large, styles.cardContainer)}
        onClick={() =>
          clickable && history.push(urls.viewProperty.byId(house.id))
        }
      >
        <div>
          <Image
            className={styles.imageContainer}
            src="https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg"
            rounded
          />
        </div>
        <div className={styles.infoContainer}>
          <Tooltip title={house.title}>
            <span className={styles.title}>{house.title}</span>
          </Tooltip>
          <div className={styles.price}>${house.price.toLocaleString()}</div>
          <div className={styles.details}>
            {house.squareFoot} m² &nbsp;&nbsp;|&nbsp;&nbsp; {house.rooms} hab.
            &nbsp;&nbsp;|&nbsp;&nbsp; {house.fullBaths} {baths}
            &nbsp;&nbsp;|&nbsp;&nbsp; En{" "}
            {house.condition === "SALE" ? "Venta" : "Alquiler"}
          </div>
          <div className={styles.address}>
            <span className={styles.streetNumber}>{houseStreetNumber}</span>
            <span className={styles.stateCity}> {stateCity}</span>
          </div>
        </div>
      </div>
    );

  return (
    <div
      className={styles.cardContainer}
      onClick={() =>
        clickable && history.push(urls.viewProperty.byId(house.id))
      }
    >
      <div>
        <Image
          className={styles.imageContainer}
          src="https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg"
          rounded
        />
      </div>
      <div className={styles.infoContainer}>
        <Tooltip title={house.title}>
          <span className={styles.title}>{house.title}</span>
        </Tooltip>
        <div className={styles.address}>
          <span className={styles.streetNumber}>{houseStreetNumber}</span>
          <span className={styles.stateCity}> {stateCity}</span>
        </div>

        <div className={styles.details}>
          {house.squareFoot} m² &nbsp;&nbsp;|&nbsp;&nbsp; {house.rooms} hab.
          &nbsp;&nbsp;|&nbsp;&nbsp; {house.fullBaths} {baths}
          &nbsp;&nbsp;|&nbsp;&nbsp; En{" "}
          {house.condition === "SALE" ? "Venta" : "Alquiler"}
        </div>
        <div className={styles.price}>${house.price.toLocaleString()}</div>
      </div>
    </div>
  );
}
