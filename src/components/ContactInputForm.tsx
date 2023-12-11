import { useState, FC } from "react";
interface ContactInputFormProps {
  name: string;
  required: boolean;
  id: string;
}
const ContactInputForm: FC<ContactInputFormProps> = ({
  name,
  required,
  id,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="relative">
      <label
        className={`absolute block bg-white px-1 left-4 transition-all duration-200 
                ${
                  isFocused
                    ? "top-0 text-primary text-[13px] z-10 bg-white"
                    : inputValue
                    ? "top-0 text-silver text-[13px]"
                    : "top-1/2 text-16 text-silver -z-10"
                }
                 transform ${
                   isFocused || inputValue
                     ? "-translate-y-2"
                     : "-translate-y-1/2"
                 } 
                `}
        htmlFor={id}
      >
        {name}
      </label>
      <input
        id={id}
        type="text"
        className="w-[500px] bg-transparent text-[18px] py-[18px] px-[24px] text-silver rounded border-silver-2 border focus:outline-primary focus:outline-1"
        name="name"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
      />
    </div>
  );
};

export default ContactInputForm;
