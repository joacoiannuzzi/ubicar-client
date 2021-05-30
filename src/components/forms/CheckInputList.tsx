import { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

interface CheckOption {
  id: number;
  label: string;
}

interface CheckInputListProps {
  items: CheckOption[];
  onCheck: (id: CheckOption["id"]) => void;
  onUncheck: (id: CheckOption["id"]) => void;
  defaultValues?: CheckOption["id"][];
}

export const CheckInputList = ({
  items,
  onCheck,
  onUncheck,
  defaultValues = [],
}: CheckInputListProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked, value: id } = e.target;
    if (checked) onCheck(Number(id));
    else onUncheck(Number(id));
  };
  return (
    <>
      {items.map(({ id, label }) => (
        <Form.Check
          key={id}
          id={`${label}-check-${id}`}
          type={"checkbox"}
          label={label}
          value={id}
          onChange={handleChange}
          checked={defaultValues?.includes(id)}
        />
      ))}
    </>
  );
};
