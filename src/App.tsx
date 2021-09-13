import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Box, Fade } from "@material-ui/core";
import flower2 from "./assets/flower2.png";
import cake from "./assets/cake.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  })
);

export default function Album() {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  const handleClickVisible = () => setIsVisible(!isVisible);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Grid container justifyContent="center">
            <Grid item>
              <Box pt={1}>
                <img width="70" src={flower2} alt="flower2" />
              </Box>
            </Grid>
            <Grid item>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  С днём рождения!
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  C один летием!
                </Typography>
              </Container>
            </Grid>
            <Grid item>
              <Box pt={1}>
                <img width="70" src={flower2} alt="flower2" />
              </Box>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container direction="column" alignContent="center">
            <Grid container justifyContent="center">
              <Box p={2}>
                <Typography variant="h5" align="center">
                  Молодая осень родила на свет
                  <br />
                  Злую семиклассницу в возрасте ноль лет.
                  <br />
                  Год она прожила среди холодных вьюг,
                  <br />
                  И злость её почила как один физрук.
                  <br />
                  У жизни её будет добрый впредь сюжет -
                  <br />
                </Typography>
              </Box>
            </Grid>
            <Grid container justifyContent="center">
              <Fade in={!isVisible}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickVisible}
                >
                  Почему?
                </Button>
              </Fade>
            </Grid>
            <Grid item>
              <Fade in={isVisible}>
                <Box p={2}>
                  <Grid container direction="column" alignItems="center">
                    <Typography variant="h4" align="center">
                      Ведь ровно накануне ей больше не ноль лет.
                    </Typography>
                    <Box mt={1}>
                      <img width="70" src={cake} alt="cake" />
                    </Box>
                  </Grid>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Расти большой
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Не будь лапшой
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
