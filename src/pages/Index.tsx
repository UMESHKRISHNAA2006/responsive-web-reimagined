
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Main content with responsive padding */}
      <main className="pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="space-y-6 md:space-y-8 lg:space-y-10">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our amazing services and solutions designed to help you succeed
              in today's digital world.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
