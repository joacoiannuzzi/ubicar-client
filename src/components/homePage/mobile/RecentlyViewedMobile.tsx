import styles from "./HomePageMobile.module.scss";
import React from "react";
import { Grid } from "@material-ui/core";
import { useGetHomePagePropertiesUsingGET } from "../../../api";
import { urls } from "../../../constants";
import { useHistory } from "react-router-dom";
import { MostLikedMobile } from "./MostLikedMobile";
import { HouseCardMobile } from "../../newListingHouse";

export function RecentlyViewedMobile() {
  const { data: properties } = useGetHomePagePropertiesUsingGET();
  const history = useHistory();

  return (
    <div>
      {properties && properties?.length > 0 ? (
        <div className={styles.personalDataMainDiv}>
          <Grid className={styles.properties}>
            <div className={styles.propertyList}>
              <h4 className={styles.title}>Propiedades vistas recientemente</h4>
              <div className={styles.propertyCard}>
                {properties?.map((casa) => (
                  <div
                    onClick={() =>
                      history.push(urls.viewProperty.byId(casa.id))
                    }
                  >
                    <HouseCardMobile
                      key={casa.id}
                      house={casa}
                      isLarge={true}
                      // from={"properties"}
                      // state={""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </div>
      ) : (
        <MostLikedMobile />
      )}
    </div>
  );
}
