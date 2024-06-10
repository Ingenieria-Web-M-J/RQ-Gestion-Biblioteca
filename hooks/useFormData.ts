import { useRef, useState } from 'react';

const useFormData = (initial: any) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({} as any);

  const getFormData = () => {
    if (form.current) {
      const fd = new FormData(form.current);
      const obj: any = {};

      fd.forEach((value, key) => {
        const str = key.split(':');
        if (str.length > 1) {
          obj[str[0]] = {
            ...obj[str[0]],
            [str[1]]: value,
          };
        } else {
          obj[str[0]] = value;
        }
      });

      return obj;
    }
    return {};
  };

  const updateFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(getFormData());
  };

  const resetFormData = () => {
    setFormData({});
  };

  return { form, formData, updateFormData, resetFormData } as const;
};

export default useFormData;
