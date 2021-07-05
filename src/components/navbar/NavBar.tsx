import { Grid, List, ListItem, Popover } from "@material-ui/core";
import styles from "./NavBar.module.scss";
import { useState } from "react";
import logo from "./Logo/Logo-Ubicar.png";
import { Image } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/all";
import { Link, useHistory } from "react-router-dom";
import { urls } from "../../constants";
import firebase from "firebase";
import { useGetLoggedUsingGET, useLogOut } from "../../api";

export function NavBar() {
  const [anchorAccount, setAnchorAccount] = useState(null);

  const openAccountPopover = (event: any) => {
    setAnchorAccount(event.currentTarget);
  };

  const history = useHistory();

  const { data: user } = useGetLoggedUsingGET();
  const { mutateAsync: logOut } = useLogOut();

  const handleLogout = async (e: any) => {
    setAnchorAccount(null);
    e.preventDefault();
    await logOut();
    await firebase.auth().signOut();
    history.push(urls.home);
  };

  return (
    <div className={styles.divNavBarContainer}>
      <Grid container className={styles.navBarContainer}>
        <Grid item xs>
          <Grid item xs={4} className={styles.navBarLogo} container>
            <Image src={logo} alt="Logo Ubicar" className={styles.imageLogo} />
            <p>
              <Link to={urls.home} className={styles.UbicarTitle}>
                Ubicar
              </Link>
            </p>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Grid item xs>
          <Grid container className={styles.gridTagsContainer}>
            <Grid item xs></Grid>
            {/* <Grid item xs={3} xl={2} className={styles.gridTags}>
              <Link to={urls.listingPage} className={styles.navBarTags}>
                Compra
              </Link>
            </Grid> */}
            <Grid item xs={3} xl={2} className={styles.gridTags}>
              <Link to={urls.listingPage} className={styles.navBarTags}>
                Ver Publicaciones
              </Link>
            </Grid>
            <Grid item xs={3} xl={2} className={styles.gridTags}>
              <Link to={urls.createProperty} className={styles.navBarTags}>
                Publicar
              </Link>
            </Grid>
            <Grid item xs={3} xl={2} className={styles.navBarAccount}>
              <div>
                {user ? (
                  <div>
                    <button
                      className={styles.myAccountButton}
                      id="buttonForm"
                      onClick={openAccountPopover}
                    >
                      {user.userName}
                      <IoMdArrowDropdown
                        className={styles.myAccountDropdownIcon}
                      />
                    </button>
                    <Popover
                      open={Boolean(anchorAccount)}
                      anchorEl={anchorAccount}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      onClose={() => setAnchorAccount(null)}
                    >
                      <List>
                        <ListItem>
                          <Link
                            to={urls.userProfile}
                            className={styles.myAccountDropdownAccount}
                          >
                            Mi perfil
                          </Link>
                        </ListItem>
                        <ListItem
                          onClick={handleLogout}
                          className={styles.myAccountDropdownAccount}
                        >
                          Cerrar sesión
                        </ListItem>
                      </List>
                    </Popover>
                  </div>
                ) : (
                  <Link to={urls.logIn} className={styles.navBarTags}>
                    Iniciar Sesion
                  </Link>
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}