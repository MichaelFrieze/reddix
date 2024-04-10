import Navbar from "./navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto h-full max-w-7xl pt-12">{children}</div>
    </>
  );
};

export default MainLayout;
