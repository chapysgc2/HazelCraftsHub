import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import splashImage from '../../../public/images/photo.jpeg';

const Splash = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectToHome = async () => {
      await router.push('/home/home');
    };

    const timer = setTimeout(() => {
      redirectToHome().catch(error => {
        console.error('Error al redirigir a la página de inicio:', error);
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen dark:bg-gray-800"
    >
      <Image
        src={splashImage}
        alt="Splash Image"
        width={500}
        height={300}
      />
      <p
        className="mt-4 text-lg font-semibold text-gray-800 dark:text-white" 
      >
        Version 1.0.1
      </p>
    </div>
  );
};

export default Splash;
