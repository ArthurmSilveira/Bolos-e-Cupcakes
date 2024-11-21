import React from 'react';
import { User, Package, MapPin, Heart } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="inline-block p-3 bg-pink-100 rounded-full mb-4">
                  <User className="h-8 w-8 text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              <nav className="mt-8 space-y-2">
                <a
                  href="#orders"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                >
                  <Package className="inline-block h-5 w-5 mr-2" />
                  Orders
                </a>
                <a
                  href="#addresses"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                >
                  <MapPin className="inline-block h-5 w-5 mr-2" />
                  Addresses
                </a>
                <a
                  href="#wishlist"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                >
                  <Heart className="inline-block h-5 w-5 mr-2" />
                  Wishlist
                </a>
              </nav>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {/* Sample order */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Order #12345</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Delivered
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=100"
                      alt="Cupcake"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">Vanilla Dream Cupcake</h3>
                      <p className="text-gray-600">Quantity: 2</p>
                    </div>
                    <div className="ml-auto">
                      <p className="font-semibold text-gray-900">$7.98</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;