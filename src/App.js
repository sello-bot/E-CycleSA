import React, { useState } from 'react';
import { Calendar, Trash2, Shield, BookOpen, MapPin, Phone, Mail, Menu, X, ChevronRight, CheckCircle, Package, Users, Leaf } from 'lucide-react';

const RecycleSA = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    itemType: '',
    quantity: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [recyclerFormData, setRecyclerFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    certifications: '',
    yearsInBusiness: '',
    serviceAreas: '',
    equipment: '',
    insurance: '',
    website: '',
    description: ''
  });
  const [recyclerSubmitted, setRecyclerSubmitted] = useState(false);

  const educationPosts = [
    {
      id: 1,
      image: '📱',
      title: 'The Hidden Danger in Your Drawer',
      quote: '"Every year, 50 million tonnes of e-waste are generated globally, and only 20% is recycled properly."',
      description: 'That old phone in your drawer contains toxic materials like lead and mercury. When improperly disposed of, these toxins leach into soil and water, harming communities and wildlife.',
      fact: '🌍 Did you know? One mobile phone can contaminate 600,000 litres of water if not recycled properly.'
    },
    {
      id: 2,
      image: '💻',
      title: 'Your Data Lives On',
      quote: '"Data deletion doesn\'t mean data destruction. Your personal information can be recovered from discarded devices."',
      description: 'Simply deleting files or factory resetting your device isn\'t enough. Professional data destruction is essential to protect your identity, banking details, and personal photos.',
      fact: '🔒 70% of data breaches involve improperly disposed electronic devices.'
    },
    {
      id: 3,
      image: '🌱',
      title: 'E-Waste Contains Treasure',
      quote: '"Your old electronics contain gold, silver, and rare earth metals worth billions."',
      description: 'One tonne of circuit boards contains 40-800 times more gold than one tonne of gold ore. Recycling electronics recovers these valuable materials and reduces mining impact.',
      fact: '💎 South Africa loses R2 billion annually by not recycling e-waste properly.'
    },
    {
      id: 4,
      image: '⚡',
      title: 'Energy Savings Are Massive',
      quote: '"Recycling one million laptops saves the energy equivalent to the electricity used by 3,657 South African homes in a year."',
      description: 'Manufacturing new electronics from recycled materials uses 95% less energy than creating them from raw materials. Every device you recycle makes a difference.',
      fact: '🔋 Recycling aluminum from electronics uses 95% less energy than producing new aluminum.'
    },
    {
      id: 5,
      image: '🏭',
      title: 'E-Waste is Growing Fast',
      quote: '"South Africa generates over 350,000 tonnes of e-waste annually, making us Africa\'s second-largest producer."',
      description: 'With rapid technology adoption, e-waste is the fastest-growing waste stream globally. Without proper recycling infrastructure, we\'re creating environmental time bombs.',
      fact: '📈 E-waste is growing 3 times faster than any other waste type in South Africa.'
    },
    {
      id: 6,
      image: '👶',
      title: 'Children Are Most Vulnerable',
      quote: '"Children exposed to e-waste toxins experience learning disabilities, respiratory issues, and developmental delays."',
      description: 'Informal recycling exposes workers and nearby communities, especially children, to dangerous substances. Certified recycling protects our future generations.',
      fact: '⚠️ Lead from old batteries can cause permanent brain damage in children.'
    },
    {
      id: 7,
      image: '♻️',
      title: 'Circular Economy Benefits All',
      quote: '"For every 1 million cell phones recycled, we recover 35,000 lbs of copper, 772 lbs of silver, 75 lbs of gold, and 33 lbs of palladium."',
      description: 'E-waste recycling creates jobs, reduces environmental impact, and provides materials for new products. It\'s a win-win-win for economy, environment, and society.',
      fact: '💼 The e-waste recycling industry could create 5,000 new jobs in South Africa by 2030.'
    },
    {
      id: 8,
      image: '🌊',
      title: 'Ocean Pollution Connection',
      quote: '"Microplastics from electronic waste are now found in 90% of ocean water samples."',
      description: 'Plastics from discarded electronics break down into microplastics that enter our oceans, food chain, and eventually our bodies. Proper recycling stops this cycle.',
      fact: '🐟 By 2050, there could be more plastic than fish in our oceans (by weight).'
    },
    {
      id: 9,
      image: '🔧',
      title: 'Right to Repair Matters',
      quote: '"Extending the life of electronics by just one year can reduce CO2 emissions by millions of tonnes."',
      description: 'Before recycling, consider repair. Many devices can be fixed or upgraded. When repair isn\'t possible, responsible recycling ensures materials get a second life.',
      fact: '🛠️ Repairing one laptop instead of buying new saves 316 kg of CO2 emissions.'
    },
    {
      id: 10,
      image: '🏆',
      title: 'Your Impact Adds Up',
      quote: '"Small actions, multiplied by millions of people, can transform the world." - Howard Zinn',
      description: 'Every device you recycle contributes to a cleaner South Africa. Join thousands who\'ve already made the choice to recycle responsibly with E-CycleSA.',
      fact: '🎯 Together, we\'ve recycled 50,000+ devices and saved 125 tonnes of CO2. You can be next!'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecyclerInputChange = (e) => {
    setRecyclerFormData({ ...recyclerFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.address && formData.itemType && formData.quantity && formData.date) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          itemType: '',
          quantity: '',
          date: '',
          message: ''
        });
      }, 3000);
    }
  };

  const handleRecyclerSubmit = () => {
    if (recyclerFormData.companyName && recyclerFormData.email && recyclerFormData.phone) {
      setRecyclerSubmitted(true);
      setTimeout(() => {
        setRecyclerSubmitted(false);
        setRecyclerFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          province: '',
          certifications: '',
          yearsInBusiness: '',
          serviceAreas: '',
          equipment: '',
          insurance: '',
          website: '',
          description: ''
        });
      }, 3000);
    }
  };

  const NavBar = () => (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Trash2 className="h-8 w-8 text-yellow-400" />
            <span className="ml-2 text-2xl font-bold">E-Cycle<span className="text-yellow-400">SA</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'services', 'schedule', 'education', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize transition-colors ${
                  activeTab === tab ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`}
              >
                {tab}
              </button>
            ))}
            <button
              onClick={() => setActiveTab('partners')}
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Become a Partner
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-400">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'services', 'schedule', 'education', 'about'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 capitalize ${
                  activeTab === tab ? 'text-yellow-400' : 'hover:text-yellow-400'
                }`}
              >
                {tab}
              </button>
            ))}
            <button
              onClick={() => {
                setActiveTab('partners');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 bg-yellow-400 text-black rounded font-semibold"
            >
              Become a Partner
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  const Home = () => (
    <div>
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Responsible E-Waste <span className="text-yellow-400">Recycling</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join South Africa's leading electronics recycling platform. Protect the environment while ensuring your data stays secure.
          </p>
          <button
            onClick={() => setActiveTab('schedule')}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center"
          >
            Schedule Pickup <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-400">
            <Package className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Easy Collection</h3>
            <p className="text-gray-600">Schedule convenient pickups or drop-offs for all your electronic waste.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-400">
            <Shield className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Secure Data Destruction</h3>
            <p className="text-gray-600">Certified data destruction ensures your sensitive information stays protected.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-400">
            <Leaf className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Environmental Impact</h3>
            <p className="text-gray-600">Reduce environmental harm through certified recycling processes.</p>
          </div>
        </div>

        <div className="mt-16 bg-black text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose <span className="text-yellow-400">E-CycleSA?</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Certified recycling partners across South Africa',
              'Free pickup for bulk items',
              'Track your recycling impact',
              'Secure data wiping certificates',
              'Support local sustainability initiatives',
              'Corporate recycling programs available'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Education = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">E-Waste <span className="text-yellow-400">Education</span></h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Learn about the environmental impact of e-waste and why responsible recycling matters for South Africa's future.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-black to-gray-800 p-8 text-center">
              <div className="text-7xl mb-4">{post.image}</div>
              <h3 className="text-xl font-bold text-white">{post.title}</h3>
            </div>
            
            <div className="p-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 italic">
                <p className="text-sm text-gray-800">{post.quote}</p>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {post.description}
              </p>
              
              <div className="bg-black text-white p-4 rounded-lg">
                <p className="text-sm font-semibold">{post.fact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Now that you understand the impact, take action today. Schedule your e-waste pickup and join thousands of South Africans making responsible choices.
        </p>
        <button
          onClick={() => setActiveTab('schedule')}
          className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center text-lg"
        >
          Schedule Your Pickup <ChevronRight className="ml-2 h-6 w-6" />
        </button>
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Quick E-Waste Facts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
            <div>
              <h4 className="font-semibold mb-1">What is E-Waste?</h4>
              <p className="text-sm text-gray-700">Any electronic device with a plug, battery, or circuit board that's no longer wanted.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
            <div>
              <h4 className="font-semibold mb-1">Why Not the Bin?</h4>
              <p className="text-sm text-gray-700">Electronics contain toxic materials that contaminate soil and water in landfills.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
            <div>
              <h4 className="font-semibold mb-1">What Gets Recycled?</h4>
              <p className="text-sm text-gray-700">Metals, plastics, glass, and rare materials are recovered and reused in manufacturing.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
            <div>
              <h4 className="font-semibold mb-1">How Often Should I Recycle?</h4>
              <p className="text-sm text-gray-700">Schedule pickups annually or whenever you upgrade devices. Don't let e-waste accumulate!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Want to learn more or share these facts?</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            Download Info Pack
          </button>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Share on Social Media
          </button>
        </div>
      </div>
    </div>
  );

  const Partners = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Become a <span className="text-yellow-400">Partner Recycler</span></h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Join South Africa's leading electronics recycling network. Access a growing customer base, streamline your operations, and grow your business with E-CycleSA.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-yellow-400 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Partner Benefits</h3>
          <div className="space-y-4">
            {[
              'Access to verified customer requests',
              'Competitive commission rates (15-20%)',
              'Free marketing and visibility',
              'Dedicated partner dashboard',
              'Training and support resources',
              'Priority placement in search results',
              'Bulk collection opportunities',
              'Networking with industry leaders'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Requirements</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                Certifications
              </h4>
              <ul className="ml-7 space-y-1 text-gray-700">
                <li>• E-waste recycling certification</li>
                <li>• ISO 14001 (Environmental Management)</li>
                <li>• R2 or e-Stewards certification (preferred)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                Insurance & Compliance
              </h4>
              <ul className="ml-7 space-y-1 text-gray-700">
                <li>• Public liability insurance (R5M+)</li>
                <li>• POPIA compliance for data handling</li>
                <li>• Valid business registration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Package className="h-5 w-5 text-yellow-400 mr-2" />
                Operations
              </h4>
              <ul className="ml-7 space-y-1 text-gray-700">
                <li>• Licensed collection vehicles</li>
                <li>• Secure processing facility</li>
                <li>• Data destruction capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">Onboarding Process</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
            <h4 className="font-semibold mb-2">Apply</h4>
            <p className="text-sm text-gray-300">Submit your application with required documentation</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
            <h4 className="font-semibold mb-2">Verification</h4>
            <p className="text-sm text-gray-300">Our team reviews credentials and conducts site visits</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
            <h4 className="font-semibold mb-2">Training</h4>
            <p className="text-sm text-gray-300">Complete platform training and sign partnership agreement</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
            <h4 className="font-semibold mb-2">Go Live</h4>
            <p className="text-sm text-gray-300">Start receiving requests and growing your business</p>
          </div>
        </div>
      </div>

      {recyclerSubmitted ? (
        <div className="bg-yellow-400 text-black p-8 rounded-lg text-center max-w-3xl mx-auto">
          <CheckCircle className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
          <p className="mb-4">Thank you for your interest in becoming an E-CycleSA partner. Our team will review your application and contact you within 3-5 business days.</p>
          <p className="text-sm">Application ID: ESA-{Math.floor(Math.random() * 10000)}</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Partner Application Form</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={recyclerFormData.companyName}
                onChange={handleRecyclerInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact Person *</label>
              <input
                type="text"
                name="contactPerson"
                value={recyclerFormData.contactPerson}
                onChange={handleRecyclerInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={recyclerFormData.email}
                onChange={handleRecyclerInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={recyclerFormData.phone}
                onChange={handleRecyclerInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Physical Address *</label>
            <input
              type="text"
              name="address"
              value={recyclerFormData.address}
              onChange={handleRecyclerInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">City *</label>
              <input
                type="text"
                name="city"
                value={recyclerFormData.city}
                onChange={handleRecyclerInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Province *</label>
              <select
                name="province"
                value={recyclerFormData.province}
                onChange={handleRecyclerInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="">Select province</option>
                <option value="Gauteng">Gauteng</option>
                <option value="Western Cape">Western Cape</option>
                <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Free State">Free State</option>
                <option value="Limpopo">Limpopo</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="North West">North West</option>
                <option value="Northern Cape">Northern Cape</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Years in Business *</label>
              <input
                type="number"
                name="yearsInBusiness"
                value={recyclerFormData.yearsInBusiness}
                onChange={handleRecyclerInputChange}
                required
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Website</label>
              <input
                type="url"
                name="website"
                value={recyclerFormData.website}
                onChange={handleRecyclerInputChange}
                placeholder="https://"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Certifications (comma-separated) *</label>
            <input
              type="text"
              name="certifications"
              value={recyclerFormData.certifications}
              onChange={handleRecyclerInputChange}
              required
              placeholder="e.g., ISO 14001, R2, e-Stewards"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Service Areas (cities/regions) *</label>
            <input
              type="text"
              name="serviceAreas"
              value={recyclerFormData.serviceAreas}
              onChange={handleRecyclerInputChange}
              required
              placeholder="e.g., Johannesburg, Pretoria, Midrand"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Equipment & Facilities *</label>
            <textarea
              name="equipment"
              value={recyclerFormData.equipment}
              onChange={handleRecyclerInputChange}
              required
              rows="3"
              placeholder="Describe your collection vehicles, processing equipment, and facility capabilities"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Insurance Details *</label>
            <input
              type="text"
              name="insurance"
              value={recyclerFormData.insurance}
              onChange={handleRecyclerInputChange}
              required
              placeholder="Provider and coverage amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Company Description</label>
            <textarea
              name="description"
              value={recyclerFormData.description}
              onChange={handleRecyclerInputChange}
              rows="4"
              placeholder="Tell us about your company, experience, and what makes you a great partner..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" required />
              <p className="text-sm text-gray-700">
                I confirm that all information provided is accurate and that our company meets the requirements for partnership with E-CycleSA. I agree to the terms and conditions of the partner agreement.
              </p>
            </div>
          </div>

          <button
            onClick={handleRecyclerSubmit}
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Submit Application
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Questions? Contact our partner team at <span className="text-yellow-600 font-medium">skgole6@gmail.com</span> or call <span className="text-yellow-600 font-medium">067 726 7091</span>
            </p>
          </div>
        </div>
      )}

      <div className="mt-12 bg-gradient-to-r from-black to-gray-900 text-white rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">Partner Success Stories</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-3">
                GR
              </div>
              <div>
                <h4 className="font-bold">Green Recyclers</h4>
                <p className="text-sm text-gray-400">Cape Town</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 italic">"E-CycleSA has increased our monthly collections by 300%. The platform is easy to use and the support team is excellent."</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-3">
                ES
              </div>
              <div>
                <h4 className="font-bold">EcoSafe Solutions</h4>
                <p className="text-sm text-gray-400">Johannesburg</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 italic">"Being an E-CycleSA partner has opened doors to corporate clients we couldn't reach before. Highly recommended!"</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-3">
                TR
              </div>
              <div>
                <h4 className="font-bold">TechRecycle</h4>
                <p className="text-sm text-gray-400">Durban</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 italic">"The commission structure is fair and the steady stream of requests has helped us grow our team by 40%."</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Services = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our <span className="text-yellow-400">Services</span></h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-400">
          <Calendar className="h-10 w-10 text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Collection Services</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Scheduled home pickups</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Drop-off locations nationwide</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Corporate bulk collection</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Event recycling drives</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-400">
          <Shield className="h-10 w-10 text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Data Security</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> DoD-certified data wiping</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Physical hard drive destruction</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Certificate of destruction</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> GDPR compliant processes</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-400">
          <BookOpen className="h-10 w-10 text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Education & Awareness</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Free recycling workshops</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> School programs</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Corporate training</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Online resources & guides</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-400">
          <Users className="h-10 w-10 text-yellow-400 mb-4" />
          <h3 className="text-2xl font-bold mb-4">Corporate Solutions</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> IT asset disposal</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Compliance reporting</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Volume discounts</li>
            <li className="flex items-center"><ChevronRight className="h-5 w-5 text-yellow-400 mr-2" /> Dedicated account manager</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-400 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">What We Accept</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {[
            'Computers & Laptops',
            'Mobile Phones & Tablets',
            'Monitors & TVs',
            'Printers & Scanners',
            'Cables & Accessories',
            'Batteries',
            'Gaming Consoles',
            'Networking Equipment'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Schedule = () => (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Schedule <span className="text-yellow-400">Pickup</span></h2>
      <p className="text-center text-gray-600 mb-8">Fill out the form below and we'll contact you to confirm your e-waste collection.</p>
      
      {submitted ? (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <CheckCircle className="h-20 w-20 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">Request Submitted Successfully!</h3>
            <p className="text-gray-600 mb-4">Reference Number: <span className="font-bold text-black">ESA-{Math.floor(Math.random() * 100000)}</span></p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <h4 className="font-bold text-lg mb-3">What Happens Next?</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                <div>
                  <h5 className="font-semibold mb-1">Request Processing (5-10 mins)</h5>
                  <p className="text-sm text-gray-700">Our system analyzes your request and matches you with certified recyclers in your area.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                <div>
                  <h5 className="font-semibold mb-1">Recycler Assignment (Within 2 hours)</h5>
                  <p className="text-sm text-gray-700">We'll assign the best available recycler based on location, ratings, and availability. You'll receive an email and SMS notification.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                <div>
                  <h5 className="font-semibold mb-1">Confirmation Call (Within 4 hours)</h5>
                  <p className="text-sm text-gray-700">The assigned recycler will contact you to confirm pickup details, time, and address.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                <div>
                  <h5 className="font-semibold mb-1">Collection Day</h5>
                  <p className="text-sm text-gray-700">The recycler arrives at your scheduled time. They'll provide a receipt and optional data destruction certificate.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">5</div>
                <div>
                  <h5 className="font-semibold mb-1">Completion & Feedback (Same day)</h5>
                  <p className="text-sm text-gray-700">After collection, you'll receive a final report showing your environmental impact. Please rate your experience!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white rounded-lg p-6 mb-6">
            <h4 className="font-bold text-lg mb-3 text-yellow-400">Important Information</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>All recyclers are certified and insured by E-CycleSA</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>Free data destruction for all hard drives and storage devices</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>No payment required at pickup - we bill through the platform</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>You can track your request status via email or SMS</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Need to Make Changes?</h5>
              <p className="text-sm text-gray-600 mb-3">Contact us within 1 hour of submission to modify your request.</p>
              <button className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                Call Support: 067 726 7091
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Questions?</h5>
              <p className="text-sm text-gray-600 mb-3">Our support team is available Mon-Fri, 8AM-5PM.</p>
              <button className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                Email: skgole6@gmail.com
              </button>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setActiveTab('home')}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Item Type *</label>
              <select
                name="itemType"
                value={formData.itemType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="">Select type</option>
                <option value="computers">Computers/Laptops</option>
                <option value="phones">Mobile Phones</option>
                <option value="monitors">Monitors/TVs</option>
                <option value="printers">Printers</option>
                <option value="other">Other Electronics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Quantity *</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                required
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Additional Information</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Any special requirements or notes..."
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Submit Request
          </button>
        </div>
      )}
    </div>
  );

  const About = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">About <span className="text-yellow-400">E-CycleSA</span></h2>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            E-CycleSA is dedicated to creating a sustainable future for South Africa by making e-waste recycling accessible, secure, and environmentally responsible. We partner with certified recyclers to ensure every electronic device is processed according to international standards.
          </p>
          <p className="text-gray-700 mb-6">
            Our platform bridges the gap between individuals, businesses, and certified recycling facilities, making it easier than ever to dispose of electronic waste responsibly while protecting your data and the environment.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h4 className="font-bold mb-2">Founded by</h4>
            <p className="text-lg font-semibold">Sello Kgole</p>
            <p className="text-sm text-gray-600 mt-2">Environmental Technology Entrepreneur</p>
            <p className="text-sm text-gray-600">Passionate about sustainable solutions for South Africa</p>
          </div>
        </div>
        <div className="bg-black text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">Our Impact</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Devices Recycled</span>
              <span className="text-2xl font-bold text-yellow-400">50,000+</span>
            </div>
            <div className="flex items-center justify-between">
              <span>CO2 Saved (tonnes)</span>
              <span className="text-2xl font-bold text-yellow-400">125+</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Partner Facilities</span>
              <span className="text-2xl font-bold text-yellow-400">35</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Cities Covered</span>
              <span className="text-2xl font-bold text-yellow-400">12</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-gray-600">06 Kiaat Street, Akasia<br />Mokopane, 0600<br />South Africa</p>
          </div>
          <div>
            <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <h4 className="font-semibold mb-2">Phone</h4>
            <p className="text-gray-600">067 726 7091<br />Mon-Fri: 8AM-5PM</p>
          </div>
          <div>
            <Mail className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <h4 className="font-semibold mb-2">Email</h4>
            <p className="text-gray-600">skgole6@gmail.com<br />General Inquiries</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {activeTab === 'home' && <Home />}
      {activeTab === 'services' && <Services />}
      {activeTab === 'schedule' && <Schedule />}
      {activeTab === 'education' && <Education />}
      {activeTab === 'partners' && <Partners />}
      {activeTab === 'about' && <About />}

      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Trash2 className="h-6 w-6 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">E-Cycle<span className="text-yellow-400">SA</span></span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">&copy; 2025 E-CycleSA. All rights reserved.</p>
              <p className="text-sm text-gray-400">Founded by Sello Kgole | Making South Africa greener, one device at a time.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecycleSA;
