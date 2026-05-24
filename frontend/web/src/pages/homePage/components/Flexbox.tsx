function Flexbox() {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);
  const getColor = (num: number) =>
    num % 2 === 0 ? 'bg-success-dark' : 'bg-info-light';

  return (
    <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 grid-flow-dense">
      {items.map((num) => (
        <div key={num} className={`flex-item min-h-50 ${getColor(num)}`}>
          {num}
        </div>
      ))}
    </section>
  );
}

export default Flexbox;
