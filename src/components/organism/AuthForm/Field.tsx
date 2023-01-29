interface FieldProps {
  title: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  id: string;
  ariaDescribedby: string;
}

export default function Field({
  title,
  label,
  type,
  placeholder,
  name,
  id,
  ariaDescribedby,
}: FieldProps) {
  return (
    <div className="pt-50">
      <label
        htmlFor={label}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {title}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={name}
        aria-describedby={ariaDescribedby}
        placeholder={placeholder}
      />
    </div>
  );
}
