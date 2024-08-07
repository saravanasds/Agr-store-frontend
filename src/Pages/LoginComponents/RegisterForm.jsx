import React, { useState } from 'react';

// Data for constituencies based on districts
const data = {
  "Ariyalur": [
    "Ariyalur", "Kundavai", "Udayarpalayam", "Tirumanur", 
    "Sendurai", "Jayankondam", "Andimadam", "Kattur", "Mangalamedu", "Vallam"
  ],
  "Chennai": [
    "Adyar", "Anna Nagar", "Kodambakkam", "T. Nagar", "Mylapore", 
    "Royapettah", "Nungambakkam", "Chetpet", "Pallavaram", "Velachery"
  ],
  "Coimbatore": [
    "Coimbatore North", "Coimbatore South", "Kovai", "Peelamedu", 
    "Ganapathy", "R.S. Puram", "Singanallur", "Gopalapuram", "Vadavalli", "Sitra"
  ],
  "Cuddalore": [
    "Cuddalore", "Chidambaram", "Kattumannarkoil", "Neyveli", 
    "Panruti", "Nallur", "Kurinjipadi", "Virudhachalam", "Bhuvanagiri", "Mettur"
  ],
  "Dharmapuri": [
    "Dharmapuri", "Palacode", "Harur", "Pappireddipatty", 
    "Pennagaram", "Nallampalli", "Hosur", "Vaniyambadi", "Bargur", "Kuppam"
  ],
  "Erode": [
    "Erode East", "Erode West", "Bhavani", "Gobichettipalayam", 
    "Perundurai", "Sathyamangalam", "Nambiyur", "Bargur", "Kangeyam", "Kangeyam"
  ],
  "Kancheepuram": [
    "Kancheepuram", "Chengalpattu", "Tambaram", "Pallavaram", 
    "Vandalur", "Uthiramerur", "Padappai", "Singarapettai", "Nemmeli", "Thirukalukundram"
  ],
  "Kanyakumari": [
    "Kanyakumari", "Nagercoil", "Padmanabhapuram", "Suchindram", 
    "Kottar", "Thuckalay", "Marthandam", "Vadasery", "Kalkulam", "Mandalai"
  ],
  "Krishnagiri": [
    "Krishnagiri", "Hosur", "Denkanikottai", "Kaveripattinam", 
    "Uthangarai", "Natrampalli", "Bargur", "Rayakottai", "Kuppam", "Vepanapalli"
  ],
  "Madurai": [
    "Anna Nagar", "Koodal Nagar", "Mogappair", "Madurai East", 
    "Madurai West", "Melur", "Thiruparankundram", "Othakadai", "K.K. Nagar", "Vadipatti"
  ],
  "Nagapattinam": [
    "Nagapattinam", "Thiruvarur", "Muthupet", "Nannilam", 
    "Kilvelur", "Vedaranyam", "Sirkali", "Kuthalam", "Needamangalam", "Tiruvarur"
  ],
  "Namakkal": [
    "Namakkal", "Rasipuram", "Paramathi", "Tiruchengode", 
    "Kongu Nadu", "Sendamangalam", "Vasudevanallur", "Vellode", "Pallapatti", "Mallasamudram"
  ],
  "Perambalur": [
    "Perambalur", "Veppur", "Kunnam", "Ariyalur", 
    "Kundavai", "Sendurai", "Andimadam", "Tirumanur", "Vallam", "Udayarpalayam"
  ],
  "Salem": [
    "Salem North", "Salem South", "Salem West", "Salem East", 
    "Omalur", "Attur", "Mettur", "Namakkal", "Rasipuram", "Kallakurichi"
  ],
  "Tiruchirappalli": [
    "Tiruchirappalli East", "Tiruchirappalli West", "Srirangam", 
    "Lalgudi", "Thuraiyur", "Perambalur", "Musiri", "K.K. Nagar", "Manapparai", "Vaiyampatti"
  ],
  "Tirunelveli": [
    "Tirunelveli", "Nanguneri", "Tenkasi", "Vikramasingapuram", 
    "Sankarankovil", "Ambasamudram", "Cheranmahadevi", "Panchalankurichi", "Pottalpudur", "Kadayam"
  ],
  "Thoothukudi": [
    "Thoothukudi", "Sankarankovil", "Valliyur", "Tiruchendur", 
    "Tuticorin South", "Tuticorin North", "Nagercoil", "Kanyakumari", "Colachel", "Suchindram"
  ],
  "Tiruppur": [
    "Tiruppur", "Avinashi", "Kangeyam", "Somanur", 
    "Uthukuli", "Palladam", "Sulur", "Tiruppur North", "Tiruppur South", "Kangeyam"
  ]
};




function RegisterForm() {

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [constituencies, setConstituencies] = useState([]);

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setConstituencies(district ? data[district] : []);
  };

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-xl font-bold leading-tight tracking-tight py-4 text-gray-900 md:text-2xl dark:text-white">
        Create an account
      </h1>
      <div className="w-full max-w-[90%]">
        <form className="space-y-4 md:space-y-6" action="#">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
            </div>
            <div>
              <label htmlFor="fatherName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Name</label>
              <input type="text" name="fatherName" id="fatherName" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Father's Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
              <input type="tel" name="mobile" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number" required />
            </div>
            <div>
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
              <input type="date" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="aadhar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhar Number</label>
              <input type="text" name="aadhar" id="aadhar" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Aadhar Number" required />
            </div>
            <div>
        <label htmlFor="district" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select District</label>
        <select
          id="district"
          name="district"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedDistrict}
          onChange={handleDistrictChange}
          required
        >
          <option value="" selected disabled hidden>Select District</option>
          {Object.keys(data).map(district => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="constituency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Constituency</label>
        <select
          id="constituency"
          name="constituency"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled={!selectedDistrict}
          required
        >
          <option value="">Select Constituency</option>
          {constituencies.map(constituency => (
            <option key={constituency} value={constituency}>{constituency}</option>
          ))}
        </select>
      </div>
            <div>
              <label htmlFor="referenceNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reference Number</label>
              <input type="text" name="referenceNumber" id="referenceNumber" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Reference Number" required />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
              <textarea id="address" name="address" rows="3" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required></textarea>
            </div>
            
          </div>
          <div className="flex justify-center">
  <button
    type="submit"
    className="lg:max-w-[70%] w-full mx-auto text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
  >
    Register
  </button>
</div>


        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
