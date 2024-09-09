interface IconLabelProps {
  icon: React.ReactNode;
  children: string;
}

export const IconLabel = ({ icon, children }: IconLabelProps) => {
  return (
    <div className="flex gap-2">
      {icon}
      <p className="whitespace-nowrap">{children}</p>
    </div>
  );
};
