import "./CountCards.css";

interface CountCardsProps {
  title: string;
  count: number;
  flexx?: boolean;
}

export default function CountCards({ title, count, flexx }: CountCardsProps) {
  return (
    <div
      className="count-card"
      style={{
        flex: flexx ? "1" : undefined,
      }}
    >
      <p className="count-card-title">{title}</p>
      <h1 className="count-card-count">{count}k</h1>
    </div>
  );
}
