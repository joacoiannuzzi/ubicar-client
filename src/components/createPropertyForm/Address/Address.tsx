import { CustomForm } from "../../forms/customForm/CustomForm";
import { useCustomForm } from "../../../hooks/useCustomForm";
import * as yup from "yup";
import { Col, Container, Form } from "react-bootstrap";
import { createCustomTextInput } from "../../forms/customForm/TextInput";
import { Step } from "../../../store/slices/createPropetyForm/createPropertyFormSlice";
import { actions, useAppDispatch, useAppSelector } from "../../../store";
import { Select } from "../../forms/Select";
import React from "react";
import { StepButtons } from "../StepButtons/StepButtons";

import styles from "./Address.module.scss";
import {
  useFetchCities,
  useFetchStates,
  useFetchTowns,
} from "../../../api/property/address";

const requiredMessage = "Este campo es requerido";

const schema = yup.object({
  postalCode: yup.string().required(requiredMessage),
  street: yup.string().required(requiredMessage),
  number: yup.number().required(requiredMessage),
  department: yup.string().required(requiredMessage),
});

export type AddressFormData = yup.InferType<typeof schema>;

const AddressTextInput = createCustomTextInput<AddressFormData>();

export const Address = () => {
  const defaults = useAppSelector(
    ({ createPropertyForm: { address, addressDropdowns } }) => ({
      ...addressDropdowns,
      ...address,
    })
  );
  const dispatch = useAppDispatch();

  const { data: states } = useFetchStates();
  const { data: cities } = useFetchCities(defaults.state);
  const { data: towns } = useFetchTowns(defaults.city);

  if (defaults.state === undefined && states?.[0]?.id !== undefined) {
    dispatch(actions.createPropertyForm.setState(states[0]?.id));
  }
  if (defaults.city === undefined && cities?.[0]?.id !== undefined) {
    dispatch(actions.createPropertyForm.setCity(cities[0]?.id));
  }
  if (defaults.town === undefined && towns?.[0]?.id !== undefined) {
    dispatch(actions.createPropertyForm.setTown(towns[0]?.id));
  }

  const customForm = useCustomForm<AddressFormData>({
    schema,
    onSubmit: (data) => {
      dispatch(actions.createPropertyForm.setAddress(data));
      dispatch(actions.createPropertyForm.setStep(Step.Characteristics));
    },
  });

  const handlePreviousButton = async () => {
    const isValid = await customForm.methods.trigger();
    if (isValid) {
      const data = customForm.methods.getValues();
      dispatch(actions.createPropertyForm.setAddress(data));
      dispatch(actions.createPropertyForm.setStep(Step.BasicInfo));
    }
  };

  return (
    <Container>
      <CustomForm {...customForm}>
        <Form.Row>
          <Col>
            <Form.Row>
              <Col>
                <div className={styles.input}>
                  <Form.Group>
                    <Form.Label>{"Pais"}</Form.Label>
                    <Form.Control type={"text"} value={"Argentina"} disabled />
                  </Form.Group>
                </div>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <div className={styles.input}>
                  {states && (
                    <Select
                      name="state"
                      placeholder="Provincia"
                      options={states}
                      onSelect={(id) => {
                        dispatch(actions.createPropertyForm.setState(id));
                        dispatch(actions.createPropertyForm.setCity(undefined));
                        dispatch(actions.createPropertyForm.setTown(undefined));
                      }}
                      defaultValue={defaults.state}
                    />
                  )}
                </div>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <div className={styles.input}>
                  {cities && (
                    <Select
                      name="city"
                      placeholder="Ciudad"
                      options={cities}
                      onSelect={(id) => {
                        dispatch(actions.createPropertyForm.setCity(id));
                        dispatch(actions.createPropertyForm.setTown(undefined));
                      }}
                      defaultValue={defaults.city}
                    />
                  )}
                </div>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <div className={styles.input}>
                  {towns && (
                    <Select
                      name="town"
                      placeholder="Barrio"
                      options={towns}
                      onSelect={(id) =>
                        dispatch(actions.createPropertyForm.setTown(id))
                      }
                      defaultValue={defaults.town}
                    />
                  )}
                </div>
              </Col>
            </Form.Row>
          </Col>
          <Col xs={2} />
          <Col>
            <Form.Row>
              <Col>
                <div className={styles.input}>
                  <AddressTextInput
                    name="postalCode"
                    label="Codigo postal"
                    defaultValue={defaults.postalCode}
                  />
                </div>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <div className={styles.input}>
                  <AddressTextInput
                    name="street"
                    label="Calle"
                    defaultValue={defaults.street}
                  />
                </div>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <div className={styles.input}>
                  <AddressTextInput
                    name="number"
                    label="Numero"
                    defaultValue={defaults.number.toString()}
                  />
                </div>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <div className={styles.input}>
                  <AddressTextInput
                    name="department"
                    label="Departamento"
                    defaultValue={defaults.department}
                  />
                </div>
              </Col>
            </Form.Row>
          </Col>
        </Form.Row>
        <StepButtons type={"submit"} onPrevious={handlePreviousButton} />
      </CustomForm>
    </Container>
  );
};