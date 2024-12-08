import React from "react";

const Homepage = () => {
  // Mock Data
  const usersCount = 10682;
  const productsCount = 16;
  const soldItemsCount = 38391;

  const products = [
    { id: 1, name: "เก้าอี้สำนักงาน", price: 150, remaining: 5 },
    { id: 2, name: "โต๊ะพับอเนกประสงค์", price: 200, remaining: 8 },
    { id: 3, name: "พัดลมตั้งพื้น", price: 120, remaining: 10 },
    { id: 4, name: "เตาไมโครเวฟ", price: 300, remaining: 3 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          ยินดีต้อนรับสู่ RentEase
        </h1>
        <p className="text-gray-700 text-lg">
          ผู้ใช้งานทั้งหมด:{" "}
          <span className="font-bold text-green-600">{usersCount} คน</span> |{" "}
          สินค้าทั้งหมด:{" "}
          <span className="font-bold text-green-600">{productsCount} ชิ้น</span>{" "}
          | ขายแล้ว:{" "}
          <span className="font-bold text-green-600">{soldItemsCount} ชิ้น</span>
        </p>
      </section>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          สินค้าแนะนำ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-green-600 font-semibold text-lg mb-1">
                {product.price} บาท/วัน
              </p>
              <p className="text-gray-500 text-sm">
                เหลือ: {product.remaining} ชิ้น
              </p>
              <button className="mt-4 w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition-all">
                เช่าสินค้า
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
