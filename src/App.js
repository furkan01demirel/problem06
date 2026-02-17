// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin.
// Örneğin "Create" butonuna yeşil arka plan, "Update" butonuna turuncu arka plan, ve "Delete" butonuna kırmızı arka plan ekleyin.
// public klasöründe bulunan preview.png görselini inceleyin. Tasarımın beklenen halini göreceksiniz.
// Tailwind CSS kullanarak butonların hover durumunda farklı efektler eklemek için hangi class'ları kullanabilirsiniz?
export default function ButtonVariants() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <div className="flex gap-4">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Create
        </button>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
          Update
        </button>

        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
          Delete
        </button>
      </div>

      <button className="bg-blue-400 text-white px-20 py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
        Testing Tailwind
      </button>
    </div>
  );
}
