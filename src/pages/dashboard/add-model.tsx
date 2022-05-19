import type { InferGetServerSidePropsType, NextPage, NextPageContext } from 'next';
import Layout from '../../components/Layout';
import { getUserFromContext } from '../../utils/auth';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import Router from 'next/router';

export async function getServerSideProps(context: NextPageContext) {
  const user = await getUserFromContext(context);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { user } };
}

type FormInputs = {
  title: string;
  description: string;
  price: number;
  model: FileList;
  images: FileList;
};

const AddModel: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ user }) => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const addModelMutation = useMutation(async (formData: any) => {
    const res = await axios.post('https://trading-platform-3d.herokuapp.com/api/products/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res.data;
  });

  const submitHandler = async (formData: FormInputs) => {
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price.toString());
    formDataToSend.append('model', formData.model[0]);
    Array.from(formData.images).forEach((file) => {
      formDataToSend.append('imagesToUpload', file);
    });

    await addModelMutation.mutateAsync(formDataToSend, {
      onSuccess: () => {
        toast.success('Model added successfully');
        Router.push('/dashboard');
      },
      onError: () => {
        toast.error('Something went wrong');
      },
    });
  };

  return (
    <>
      <Layout type="dashboard">
        <div className="container mx-auto px-4 py-24">
          <h1 className="mb-4 font-heading text-9xl leading-tight">Dodaj model</h1>

          <form onSubmit={handleSubmit(submitHandler)} className="grid gap-6 max-w-2xl">
            <div>
              <p className="text-xl font-medium mb-1">Title</p>
              <input
                {...register('title')}
                className={classNames(
                  'w-full py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
                  formState.isSubmitting && 'disabled',
                )}
              />
            </div>

            <div>
              <p className="text-xl font-medium mb-1">Description</p>
              <input
                {...register('description')}
                className={classNames(
                  'w-full py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
                  formState.isSubmitting && 'disabled',
                )}
              />
            </div>

            <div>
              <p className="text-xl font-medium mb-1">Price</p>
              <input
                {...register('price')}
                className={classNames(
                  'w-full py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
                  formState.isSubmitting && 'disabled',
                )}
              />
            </div>

            <div>
              <p className="text-xl font-medium mb-1">Model</p>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  {...register('model')}
                  type="file"
                  className={classNames(
                    'w-full py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
                    formState.isSubmitting && 'disabled',
                  )}
                />
              </div>
            </div>

            <div>
              <p className="text-xl font-medium mb-1">Zdjęcia</p>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  {...register('images')}
                  type="file"
                  multiple
                  className={classNames(
                    'w-full py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
                    formState.isSubmitting && 'disabled',
                  )}
                />
              </div>
            </div>

            <button
              type="submit"
              className={classNames(
                'mt-2 block py-5 px-7 w-full text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl',
                formState.isSubmitting && 'disabled',
              )}
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default AddModel;
