const stats = [
  { value: "50,000+", label: "Visas Processed" },
  { value: "98%", label: "Success Rate" },
  { value: "20+", label: "Countries Covered" },
  { value: "Since 2016", label: "Trusted Experience" },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-100 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
