import "./index.scss";

const CustomCheckbox = ({
  checked,
  taskId,
  handleChange,
}: {
  checked: boolean;
  taskId: number;
  handleChange: () => void;
}) => {
  return (
    <label className="container">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="checkmark-span"></span>
    </label>
  );
};

export default CustomCheckbox;
