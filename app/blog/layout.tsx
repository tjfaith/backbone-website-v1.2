export const metadata = {
  title: "Blog",
  description: "Exciting incite about our everyday life.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
