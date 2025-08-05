export const TypesPill = ({ typeName }: { typeName: string }) => {
  return (
    <span
      className={`${typeName} inline-block w-[90px] mx-2 px-4 py-1 rounded-2xl text-center uppercase text-sm font-[500]`}
      key={typeName}
    >
      {typeName}
    </span>
  );
};
