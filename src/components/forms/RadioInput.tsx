import { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

export interface RadioInputOption {
  id: number;
  label: string;
}

export interface RadioInputListProps {
  items: RadioInputOption[];
  onSelected: (id: RadioInputOption["id"]) => void;
  name: string;
}

export const RadioInput = ({
  items,
  name,
  onSelected,
}: RadioInputListProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked, value: id } = e.target;
    if (checked) onSelected(Number(id));
  };
  return (
    <>
      {items.map(({ id, label }) => (
        <Form.Check
          key={id}
          id={`${name}-radio-${id}`}
          type={"radio"}
          label={label}
          value={id}
          name={name}
          onChange={handleChange}
        />
      ))}
    </>
  );
};
