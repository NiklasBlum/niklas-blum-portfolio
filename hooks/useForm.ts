import { useState, useCallback } from "react";

interface FormData {
  [key: string]: string;
}

interface UseFormReturn<T extends FormData> {
  formData: T;
  setFormData: (data: T) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (onSubmit: (data: T) => void) => (e: React.FormEvent) => void;
  resetForm: () => void;
}

export function useForm<T extends FormData>(initialData: T): UseFormReturn<T> {
  const [formData, setFormData] = useState<T>(initialData);

  const resetForm = useCallback(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (onSubmit: (data: T) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData);
      resetForm();
    },
    [formData, resetForm],
  );

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
