import { PolicyNavigation } from "@/components";

export const metadata = {
  title: "Policies",
  description: "Get to know our terms of service",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" space-y-9 min-h-screen bg-[radial-gradient(circle_at_40%_15%,_var(--tw-gradient-stops))] md:bg-[radial-gradient(circle_at_70%_15%,_var(--tw-gradient-stops))] from-[#d2e8df] dark:from-success-100/60 from-0% via-background dark:via-background-200  via-5% md:via-20% to-background dark:to-background-200 to-100% md:pt-20 pt-20 pb-7">
      <PolicyNavigation />
      <main className="w-full max-w-none px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-20 lg:py-12">
        {children}
      </main>
    </div>
  );
}
