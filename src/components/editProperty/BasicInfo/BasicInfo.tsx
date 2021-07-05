import { CustomForm } from "../../forms/customForm/CustomForm";
import { useCustomForm } from "../../../hooks/useCustomForm";
import * as yup from "yup";
import { Col, Container, Form } from "react-bootstrap";
import { createCustomTextInput } from "../../forms/customForm/TextInput";
import { RadioOption } from "../../forms/ComposedRadioInput";
import { actions, useAppDispatch, useAppSelector } from "../../../store";
import {
  selectIsInitialized,
  selectOperationType,
  Step,
} from "../../../store/slices/editPropertyForm/editPropertyFormSlice";
import { RadioInput } from "../../forms/RadioInput";
import styles from "./BasicInfo.module.scss";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { StepButtons } from "../StepButtons/StepButtons";
import { PropertyDTO, PropertyDTOCondition } from "../../../api";
import { Loading } from "../../common/loading/Loading";
import { useGetTypesUsingGET } from "../../../api";

const schema = yup.object({
  price: yup.number().positive().required(),
  expenses: yup.number().positive().required(),
  title: yup.string().required(),
});

export type BasicInfoFormData = yup.InferType<typeof schema>;

const BasicInfoTextInput = createCustomTextInput<BasicInfoFormData>();

type BasicInfoProps = {
  property: PropertyDTO;
};

export const BasicInfo = ({ property }: BasicInfoProps) => {
  const defaults = useAppSelector(
    ({ editPropertyForm: { basicInfo, propertyType } }) => ({
      ...basicInfo,
      type: propertyType,
    })
  );

  const dispatch = useAppDispatch();

  const isInitialized = useAppSelector(selectIsInitialized);

  const { data: types } = useGetTypesUsingGET();

  useEffect(() => {
    if (defaults.type === undefined && types?.[0] !== undefined) {
      dispatch(actions.editPropertyForm.setPropertyType(types[0]));
    }
  }, [defaults.type, types, dispatch]);

  const customForm = useCustomForm<BasicInfoFormData>({
    schema,
    onSubmit: (data) => {
      dispatch(actions.editPropertyForm.setBasicInfo(data));
      dispatch(actions.editPropertyForm.setStep(Step.Address));
    },
  });

  if (!isInitialized) return <Loading />;

  return (
    <Container>
      <CustomForm {...customForm}>
        <Form.Row>
          <Col>
            <div className={styles.operationTypeContainer}>
              <Form.Row>
                <Col>
                  <h3>Tipo de operacion</h3>
                </Col>
                <Col>
                  <OperationTypeRadio />
                </Col>
              </Form.Row>
            </div>
          </Col>
          <Col>
            <Form.Row>
              <Col>
                <BasicInfoTextInput
                  name="title"
                  label="Titulo"
                  placeholder={"Increible casa en la playa..."}
                  defaultValue={property.title}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Row>
                  <Col>
                    <BasicInfoTextInput
                      name="price"
                      label="Precio (ARS)"
                      defaultValue={property.price.toString()}
                    />
                  </Col>
                  <Col>
                    <BasicInfoTextInput
                      name="expenses"
                      label="Expensas (ARS)"
                      defaultValue={property.expenses.toString()}
                    />
                  </Col>
                </Form.Row>
              </Col>
            </Form.Row>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Row>
              <Col>
                <h3>Tipo de inmueble</h3>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <div className={styles.typeContainer}>
                  {types && (
                    <RadioInput
                      items={types}
                      name={"propertyType"}
                      onSelected={(label) => {
                        if (types)
                          dispatch(
                            actions.editPropertyForm.setPropertyType(label)
                          );
                      }}
                      defaultValue={property.type}
                    />
                  )}
                </div>
              </Col>
            </Form.Row>
          </Col>
        </Form.Row>
        <Form.Row>
          <StepButtons type={"submit"} showPrevious={false} />
        </Form.Row>
      </CustomForm>
    </Container>
  );
};

const operationTypes: RadioOption[] = [
  {
    value: PropertyDTOCondition.SALE,
    displayName: "Venta",
  },
  {
    value: PropertyDTOCondition.RENT,
    displayName: "Alquiler",
  },
];

const OperationTypeRadio = () => {
  const defaultOperationType = useAppSelector(selectOperationType);
  const [currentValue, setCurrentValue] = useState(defaultOperationType);
  const dispatch = useAppDispatch();

  const handleSelect = (value: string) => {
    setCurrentValue(value);
    dispatch(actions.editPropertyForm.setOperationType(value));
  };
  return (
    <>
      <div className={styles.itemContainer}>
        {operationTypes.map(({ displayName, value }) => (
          <div
            key={value}
            className={styles.item}
            onClick={() => handleSelect(value)}
          >
            <span>{displayName}</span>
            <div
              className={clsx(styles.highlighter, {
                [styles.active]: value === currentValue,
              })}
            />
          </div>
        ))}
      </div>
    </>
  );
};