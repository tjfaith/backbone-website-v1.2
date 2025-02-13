import { Checkbox, CheckboxProps } from "@heroui/checkbox";

const CustomCheckbox = ({
  isSelected,
  children,
  onValueChange,
}: CheckboxProps) => {
  return (
    <Checkbox
      className=" flex items-start gap-2 transition-all ease-in-out duration-300"
      classNames={{
        label: `${isSelected ? "text-background" : "text-primary"}`,
        base: `data-[selected=true]:bg-primary  bg-background-100 rounded-xl p-3 ${!isSelected && "data-[hover=true]:bg-background-300"} `,
        icon: "bg-background rounded-sm h-full w-full text-primary p-0.5 ",
      }}
      isSelected={isSelected}
      size="sm"
      onValueChange={onValueChange}
    >
      {children}
    </Checkbox>
  );
};

export default CustomCheckbox;
