import React, { useState } from 'react';
import PrivateRoute from "@/components/PrivateRoute";
import { NavbarDesk, NavbarMobile, HomeMain } from "@/components/plantilla";
import useFormData from '@/hooks/useFormData';
import { useMutation, ApolloError } from '@apollo/client';
import { UPSERT_BOOK } from '@/utils/mutations/books';
import { booksUpsertTransformations, BookFormData } from '@/utils/transformations/books'; // Asegúrate de que la ruta de importación sea correcta

// Función para obtener las props del lado del servidor
export async function getServerSideProps(context: { params: { id: any } }) {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
}

const Index = ({ id }: any) => {
  const { form, formData, updateFormData } = useFormData<BookFormData>({});
  const [upsertBook, { loading: loadingMutations }] = useMutation(UPSERT_BOOK);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { dataCreate, dataUpdate } = booksUpsertTransformations({ formData });

    console.log('Form Data:', formData);
    console.log('Data Create:', dataCreate);
    console.log('Data Update:', dataUpdate);

    try {
      const result = await upsertBook({
        variables: {
          where: {
            id: id === 'new' ? '' : id,
          },
          create: dataCreate,
          update: dataUpdate,
        },
      });

      console.log('Mutation result:', result);
      setSuccessMessage('El libro se ha agregado/actualizado con éxito.');
      setErrorMessage('');
    } catch (error: any) {
      console.error('Error al agregar/actualizar el libro:', error);
      if (error instanceof ApolloError) {
        console.log('GraphQL error details:', error.graphQLErrors);
        console.log('Network error details:', error.networkError);
      } else {
        console.error('Unexpected error:', error);
      }

      setSuccessMessage('');
      setErrorMessage('Hubo un error al agregar/actualizar el libro. Verifica los datos ingresados.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:block hidden">
        <NavbarDesk />
      </div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>

      <div className="bg-black w-full py-[300px]">
        <section className="p-6 mx-auto bg-black rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-white capitalize dark:text-white">
            Account settings Libro: {id}
          </h2>

          {successMessage && (
            <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
              {errorMessage}
            </div>
          )}

          <form
            ref={form}
            onChange={updateFormData}
            onSubmit={handleSubmit}
            className="mt-8"
            autoComplete="off"
          >
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white" htmlFor="titulo">
                  Titulo
                </label>
                <input
                  id="titulo"
                  name="titulo"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white" htmlFor="autor">
                  Autor
                </label>
                <input
                  id="autor"
                  name="autor"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white" htmlFor="isbn">
                  ISBN
                </label>
                <input
                  id="isbn"
                  name="isbn"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white" htmlFor="available">
                  Disponible
                </label>
                <input
                  id="available"
                  name="available"
                  type="checkbox"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Guardar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Index;
