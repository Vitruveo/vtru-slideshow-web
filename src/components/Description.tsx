interface DescriptionProps {
  description: string;
}

export function Description({ description }: DescriptionProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="max-w-full text-center">{description}</h2>
    </div>
  );
}
