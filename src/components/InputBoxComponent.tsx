interface InputBoxComponentIF {
  label: string;
  name: string;
  value: string | undefined | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  isImportant?: boolean;
}

const InputBoxComponent: React.FC<InputBoxComponentIF> = ({
  label,
  name,
  value = "",
  onChange,
  isImportant = false,
}) => {
  return (
    <>
      <div>
        <label htmlFor="firstKanji" className="block text-gray-700 font-medium">
          {label}{" "}
          {isImportant == true && (
            <span className="text-red-500 text-[18px]">*</span>
          )}
        </label>
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-2 block w-full px-4 py-1 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required={isImportant ? true : false}
        />
      </div>
    </>
  );
};

export default InputBoxComponent;
