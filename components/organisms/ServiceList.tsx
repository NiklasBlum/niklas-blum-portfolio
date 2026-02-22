import CheckListItem from "../molecules/CheckListItem";

interface ServiceListProps {
  services: Array<{
    title: string;
    description: string;
  }>;
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <ul className="space-y-3">
      {services.map((service, idx) => (
        <CheckListItem
          key={idx}
          title={service.title}
          description={service.description}
        />
      ))}
    </ul>
  );
}
