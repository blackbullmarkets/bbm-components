interface InputProps {
  fieldID: string;
  label?: string;
  placeholder: string;
  validatingText: string;
  isValidating?: boolean;
  errorText: string;
  isError?: boolean;
}

export default function InputField({
  fieldID,
  label,
  placeholder,
  validatingText,
  isValidating = false,
  errorText,
  isError = false,
}: InputProps) {
  return (
    <div>
      <label className="block" htmlFor={fieldID}>
        <span className="block text-labelgray font-semibold mb-3 ml-1">
          {label}
        </span>
        <input
          className="block w-full border-2 border-black-25 rounded-sm py-5 px-4 placeholder:text-base placeholder:text-black-25 hover:border-black-50 focus:outline-none focus:ring-2 focus:border-primary-default focus:ring-primary-default"
          placeholder={placeholder}
          id={fieldID}
        />
      </label>
      {isValidating && (
        <div className="text-primary-default mt-3 flex items-center">
          <span
            className="material-symbols-outlined animate-spin"
            style={{ fontSize: "1.125em" }}
          >
            progress_activity
          </span>
          <p className="text-sm font-light ml-1">{validatingText}</p>
        </div>
      )}
      {isError && (
        <div className="text-danger-default mt-3 flex items-center">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.125em" }}
          >
            block
          </span>
          <p className="text-sm font-light ml-1">{errorText}</p>
        </div>
      )}
    </div>
  );
}
