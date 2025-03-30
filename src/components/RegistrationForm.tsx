import { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [profession, setProfession] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      graduationYear,
      profession,
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz9v40wD81VPvTk-2d60BIDxn3UR6cwpPdIAVAszgNBEMz-LJFzkPDP-XobfghMY1Z6LA/exec', {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        }});

      if (response.ok) {
        alert('Pendaftaran berhasil!');
        setName('');
        setEmail('');
        setGraduationYear('');
        setProfession('');
      } else {
        alert('Terjadi kesalahan, coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan, coba lagi.');
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-900">
        Daftar Sekarang
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm md:text-base"
            placeholder="Masukkan nama lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm md:text-base"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Angkatan/Tahun Lulus
          </label>
          <select
            className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm md:text-base"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            required
          >
            <option value="">Pilih Tahun Lulus</option>
            {Array.from(
              { length: 30 },
              (_, i) => new Date().getFullYear() - i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Profesi/Pekerjaan Saat Ini
          </label>
          <input
            type="text"
            className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-sm md:text-base"
            placeholder="Masukkan profesi/pekerjaan"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 rounded-md mt-4 text-sm md:text-base"
        >
          Daftar
        </button>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Dengan mendaftar, Anda menyetujui kebijakan privasi kami.
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
