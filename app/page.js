// pages/index.js
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Navbar */}
      <nav className="bg-green-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-xl font-bold">Animal Rescue</a>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Adopt</a></li>
            <li><a href="#" className="text-white">Donate</a></li>
            <li><a href="#" className="text-white">Volunteer</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800">Help Animals Find a Loving Home</h1>
          <p className="mt-4 text-gray-600">Join us in making a difference. Adopt, donate, or volunteer to help animals in need.</p>
          <div className="mt-8">
            <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500">Adopt Now</a>
            <a href="#" className="px-6 py-3 ml-4 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/100" alt="Adopt Icon" className="mx-auto"/>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">Adopt a Pet</h3>
            <p className="mt-2 text-gray-600">Find your new best friend by adopting one of our rescue animals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/100" alt="Donate Icon" className="mx-auto"/>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">Make a Donation</h3>
            <p className="mt-2 text-gray-600">Your donations help us provide food, shelter, and medical care to rescued animals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/100" alt="Volunteer Icon" className="mx-auto"/>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">Volunteer With Us</h3>
            <p className="mt-2 text-gray-600">Join our team and help care for animals until they find their forever homes.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 p-4 text-white text-center">
        <p>&copy; 2024 Animal Rescue. All rights reserved.</p>
      </footer>
    </div>
  );
}
