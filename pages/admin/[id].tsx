import React from 'react'
import PrivateRoute from "@/components/PrivateRoute";
import { NavbarDesk, NavbarMobile, HomeMain } from "@/components/plantilla";
import useFormData from '@/hooks/useFormData';
import { useQuery, useMutation } from '@apollo/client';
import { UPSERT_BOOK } from '@/utils/mutations/books';
import { booksUpsertTransformations } from '@/utils/transformations/books';

export async function getServerSideProps(context: { params: { id: any } }) {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
}


 


    const Index = ({ id }: any) => {

      const { form, formData, updateFormData } = useFormData({});
      const [upsertBook, {loading:loadingMutations}] = useMutation(UPSERT_BOOK);

      const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        
        const { dataCreate, dataUpdate } =booksUpsertTransformations({
          formData,
          
        });
        await upsertBook({
          variables: {
            where: {
              id: id === 'new' ? '' : id,
            },
           
            create: dataCreate,
            update: dataUpdate,
          },
        })
          
          
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
        <section className=" p-6 mx-auto bg-black rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-white capitalize dark:text-white">Account settings Libro : {id}</h2>

          <form
          ref={form}
          onChange={updateFormData}
          onSubmit={handleSubmit}
          className='mt-8'
          autoComplete='off'
        >
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 " >
              <div>
                <label className="text-white" htmlFor="titulo">Titulo</label>
                <input id="titulo" name="titulo" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-white" htmlFor="autor">Autor</label>
                <input id="autor" name="autor" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-white" htmlFor="isbn">Isbn</label>
                <input id="isbn"  name="isbn" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              
            </div>

            <div className="flex justify-end mt-6">
              <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
          </form>
        </section>
      </div>

      </div>

    
  )
}

export default Index


