interface Price {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyShortForm?: string;
}

export default function Price({
  amount,
  className,
  currencyCode = "฿",
  currencyShortForm = "THB",
}: Price & React.ComponentProps<"p">) {
  return (
    <p suppressHydrationWarning={true} className={`${className} flex gap-1`}>
      <span className="ml-1 inline">{`${currencyCode}`}</span>
      {amount}
      <span>{`${currencyShortForm}`}</span>
    </p>
  );
}
