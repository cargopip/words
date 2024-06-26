export function TextButton({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["button"]) {
  return (
    <button
      {...rest}
      className={`py-4 px-8 inline-flex justify-center items-center gap-2 rounded-md bg-pink-500 border border-transparent font-semibold text-white text-xl  hover:bg-pink-600 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800 ${className}`}
    >
      {children}
    </button>
  );
}
