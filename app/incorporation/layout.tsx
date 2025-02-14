export const metadata = {
  title: "Incorporation",
};

export default function IncorporationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative  min-h-screen">
      <div className="w-full -z-20 min-h-screen absolute  inset-0 bg-[radial-gradient(ellipse_at_70%_30%,_var(--tw-gradient-stops))] from-success-100/80 from-0%  via-transparent via-40%  to-transparent to-100%" />
      <div className="w-full -z-20 min-h-screen absolute  inset-0 bg-[radial-gradient(ellipse_at_30%_90%,_var(--tw-gradient-stops))] from-warning/15 from-0%  via-transparent via-70%  to-transparent to-100%" />
      <div className="w-full -z-20 min-h-screen absolute  inset-0 bg-[radial-gradient(circle_at_20%_40%,_var(--tw-gradient-stops))] from-info/20 from-0%  via-transparent via-70%  to-transparent to-100%" />
      <div className="page-max-width ">{children}</div>
    </div>
  );
}
