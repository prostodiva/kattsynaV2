function Card() {
  return (
    <div className="flex-col p-6 dark:bg-gray-800 rounded-2xl border-2 border-white text-center justify-between">
      <h1 className="prose dark:prose-invert">CARD</h1>
      <div className="mb-4 text-xl text-left mt-4">
        <h3>smth</h3>
        <p>texttexttextetxte</p>
      </div>
      <button className="block px-4 py-2 bg-blue-400">Button</button>
    </div>
  );
}

export default Card;
