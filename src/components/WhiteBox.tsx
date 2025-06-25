type WhiteBoxProps = React.HTMLAttributes<HTMLDivElement>;

export default function WhiteBox({ children, className, ...rest }: WhiteBoxProps) {
  return (
    <div
      className={`bg-hifi-white shadow-hifi-wbox px-6 py-6 sm:px-10 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}