interface BookFormData {
  title: string;
  author: string;
  isbn: string;
  available: boolean;
}

export const booksUpsertTransformations = ({
  formData
}: {
  formData: BookFormData;
}) => {
  const dataCreate = {
    title: formData.title,
    author: formData.author,
    isbn: formData.isbn,
    available: formData.available,
  };

  const dataUpdate = {
    title: { set: formData.title },
    author: { set: formData.author },
    isbn: { set: formData.isbn },
    available: { set: formData.available },
  };

  return {
    dataCreate,
    dataUpdate,
  };
};
