// export default function AuthLayout({ children }) {
//   return <div className="flex items-center justify-center w-full min-h-screen bg-[url('/images/bg-office.png')]">{children}</div>;
// }
export default function AuthLayout({ children }) {
    return (
      <div className="relative flex items-center justify-center w-full min-h-screen bg-[url('/images/bg-office.png')] bg-cover bg-center">
        {/* Overlay สีขาวโปร่งแสง */}
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative">{children}</div>
      </div>
    );
  }
  