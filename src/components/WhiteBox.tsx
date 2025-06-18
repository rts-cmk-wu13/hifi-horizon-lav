type WhiteBoxProps = React.HTMLAttributes<HTMLDivElement>;

export default function WhiteBox({ children, className, ...rest }: WhiteBoxProps) {
  return (
    <div
      className={`bg-hifi-white shadow-hifi-wbox px-10 py-6 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}