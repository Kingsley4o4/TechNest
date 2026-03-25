



export default function Layout({ children }) {
  return (
    <div className="">
      <div className="bg-red-400 flex justify-center lg:flex-col md:bg-green-400 lg:bg-orange-600 items-center mx-10  lg:items-end lg:hover:bg-red-500 md:hover:bg-purple-400 hover:bg-amber-500">
       <h1> hello </h1> 
       <h2>heklo</h2>
       <h3>mama</h3>
      </div>

      <div className="mt-20 w-full px-4 md:mx-auto md:pt-16 lg:w-1/2 lg:px-8 xl:px-20">
        {children}
      </div>
    </div>
  );
}
