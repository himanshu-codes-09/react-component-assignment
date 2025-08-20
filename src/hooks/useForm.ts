import { useState } from "react";

export function useForm<T extends Record<string, any>>(initial: T) {
  const [values, setValues] = useState<T>(initial);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return { values, handleChange };
}
