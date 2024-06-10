interface BookFormData {
  titulo: string;
  autor: string;
  isbn: string;
  available: boolean;
}

export const booksUpsertTransformations = ({ formData }: { formData: BookFormData }) => {
  const dataCreate = {
    title: formData.titulo,
    author: formData.autor,
    isbn: formData.isbn,
    available: formData.available === 'on' ? true : false,
  };

  const dataUpdate = {
    title: { set: formData.titulo },
    author: { set: formData.autor },
    isbn: { set: formData.isbn },
    available: { set: formData.available === 'on' ? true : false },
  };

  return { dataCreate, dataUpdate };
};
