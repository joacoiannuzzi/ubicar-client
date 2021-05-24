import { Button, Card, Col, Row } from "react-bootstrap";
import { SelectString } from "../../forms/SelectString";
import Calendar from "react-calendar";
import "./Calendar.scss";
import { useState } from "react";
import { actions, useAppDispatch, useAppSelector } from "../../../store";
import { selectOpenHouses } from "../../../store/slices/createPropetyForm/createPropertyFormSlice";
import { FiTrash2 } from "react-icons/all";
import styles from "./OpenHouse.module.scss";

const hours = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
].map((value) => ({ name: value, value }));

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const printDate = (date: Date) => {
  return (
    date.getDate() +
    " de " +
    months[date.getMonth()] +
    " de " +
    date.getFullYear()
  );
};

export const OpenHouse = () => {
  const [initialTime, setInitialTime] = useState(hours[0].value);
  const [finalTime, setFinalTime] = useState(hours[0].value);
  const [day, setDay] = useState(new Date());
  const dispatch = useAppDispatch();
  const openHouseDates = useAppSelector(selectOpenHouses);

  const onAddHouseDate = async () => {
    if (
      openHouseDates.find(
        (openHouse) =>
          openHouse.day === day.toString() &&
          openHouse.initialTime === initialTime &&
          openHouse.finalTime === finalTime
      )
    ) {
      return;
    }

    dispatch(
      actions.createPropertyForm.addOpenHouse({
        initialTime,
        finalTime,
        day: day.toString(),
      })
    );
  };

  const onRemoveOpenHouseDate = (
    day: string,
    initialTime: string,
    finalTime: string
  ) => {
    dispatch(
      actions.createPropertyForm.removeOpenHouseDate({
        day,
        initialTime,
        finalTime,
      })
    );
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h4>Open House</h4>
      </div>
      <Row>
        <Col>
          <Calendar
            defaultValue={day}
            onChange={(date) => {
              if (date instanceof Date) setDay(date);
            }}
          />
        </Col>
        <Col>
          <Row>
            <SelectString
              name={"hours"}
              placeholder={"Desde"}
              options={hours}
              onSelect={(value) => setInitialTime(value)}
              defaultValue={initialTime}
            />
          </Row>
          <br />
          <Row>
            <SelectString
              name={"hours"}
              placeholder={"Hasta"}
              options={hours}
              onSelect={(value) => setFinalTime(value)}
              defaultValue={finalTime}
            />
          </Row>
          <Button
            onClick={onAddHouseDate}
            type="button"
            variant={"outline-dark"}
            className={styles.button}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row className={styles.cardsContainer}>
        <Col>
          {openHouseDates.map(({ initialTime, finalTime, day }) => (
            <Card key={day + initialTime + finalTime} className={styles.card}>
              <Card.Body className={styles.cardBody}>
                <div>
                  <Card.Title>{printDate(new Date(day))}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    Desde {initialTime} hasta {finalTime}
                  </Card.Subtitle>
                </div>
              </Card.Body>
              <div className={styles.deleteButtonContainer}>
                <FiTrash2
                  onClick={() =>
                    onRemoveOpenHouseDate(day, initialTime, finalTime)
                  }
                />
              </div>
            </Card>
          ))}
        </Col>
      </Row>
    </>
  );
};