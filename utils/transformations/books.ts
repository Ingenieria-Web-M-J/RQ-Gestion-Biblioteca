export const booksUpsertTrasnformations = ({
  formData
  
}: {
  formData: any;
  
}) => {
  const dataCreate = {
    title: formData.title,
    author: formData.author,
    isbn: formData.isbn,
    
  };
  const dataUpdate = {
    title: {
      set: formData.title,
    },
    author: {
      set: formData.author,
    },
    
    
  };
  return {
    dataCreate,
    dataUpdate,
  };
};
