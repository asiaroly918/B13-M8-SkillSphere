async function getCategories() {
  const res = await fetch("http://localhost:3000/categories.json");
  return res.json();
}

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6">📚 Categories</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-4 border rounded text-center hover:bg-gray-100"
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
}