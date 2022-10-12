export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-[375px] m-auto flex flex-col pt-5">{children}</main>
  );
};
