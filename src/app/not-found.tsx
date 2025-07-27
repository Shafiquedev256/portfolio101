import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import FooterSection from "./components/footer";

const Page404 = () => {
  return (
    <>
      <Header />
      <main className='bg-gray-900 min-h-[100vh] pt-6'>
        <div className='flex flex-col justify-center items-center p-2 pt-6'>
          <Image
            src={"/404-computer.svg"}
            width={300}
            height={300}
            alt='404-computer page '
          />
        </div>
        <div className='flex flex-col justify-center space-y-5 items-center'>
          <div className='text-red-500 text-xl'>404 Not Found</div>
          <h1 className='text-white px-3 text-center text-3xl font-bold'>
            Whoops! That page doesn’t exist.
          </h1>
          <p className='text-gray-400'>Here are some helpful links instead:</p>
          <div className='flex flex-col justify-center items-center'>
            <nav className=' flex flex-row space-x-3 text-gray-400 underline'>
              <Link href={"/"}>Home</Link>
              <Link href={"/portfolio"}>Portfolio</Link>
              <Link href={"/contact"}>Contact</Link>
            </nav>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default Page404;
