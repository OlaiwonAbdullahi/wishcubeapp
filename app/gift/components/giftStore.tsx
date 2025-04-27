"use client";
import { useState } from "react";
import { BsBagHeart, BsBalloonHeart } from "react-icons/bs";
import { CiPizza } from "react-icons/ci";
import { GiChocolateBar, GiGlobeRing } from "react-icons/gi";
import { IoDiamondOutline, IoRoseOutline } from "react-icons/io5";
import { LuBoxes, LuSticker } from "react-icons/lu";
import { MdOutlineCelebration } from "react-icons/md";
import { PiFlowerLotusThin } from "react-icons/pi";

const giftCategories = [
  {
    id: "fun",
    title: (
      <span>
        <PiFlowerLotusThin className="inline mr-1" /> Fun & Casual
      </span>
    ),
    priceRange: "$1 - $5",
    gifts: [
      {
        id: 1,
        name: "Party Balloon",
        icon: <BsBalloonHeart className=" size-10 text-[#8c52ff]" />,
        price: 2,
      },
      {
        id: 2,
        name: "Cute Sticker Pack",
        icon: <LuSticker className=" size-10 text-[#8c52ff]" />,
        price: 3,
      },
    ],
  },
  {
    id: "thoughtful",

    title: (
      <span>
        <MdOutlineCelebration className="inline mr-1" /> Thoughtful
      </span>
    ),
    priceRange: "$5 - $15",
    gifts: [
      {
        id: 3,
        name: "Rose Animation",
        icon: <IoRoseOutline className=" size-10 text-[#8c52ff]" />,
        price: 7,
      },
      {
        id: 4,
        name: "Custom Chocolate Box",
        icon: <GiChocolateBar className=" size-10 text-[#8c52ff]" />,
        price: 12,
      },
    ],
  },
  {
    id: "premium",
    title: (
      <span>
        <IoDiamondOutline className="inline mr-1" /> Premium
      </span>
    ),
    priceRange: "$15 - $50",
    gifts: [
      {
        id: 5,
        name: "Virtual Jewelry Box",
        icon: <GiGlobeRing className=" size-10 text-[#8c52ff]" />,
        price: 25,
      },
      {
        id: 6,
        name: "Luxury Bag Surprise",
        icon: <BsBagHeart className=" size-10 text-[#8c52ff]" />,
        price: 40,
      },
    ],
  },
  {
    id: "branded",
    title: (
      <span>
        <LuBoxes className="inline mr-1" /> Branded
      </span>
    ),
    priceRange: "Varies",
    gifts: [
      {
        id: 7,
        name: "Mystery Box",
        icon: <LuBoxes className=" size-10 text-[#8c52ff]" />,
        price: 30,
      },
      {
        id: 8,
        name: "Starbucks Treat",
        icon: <CiPizza className=" size-10 text-[#8c52ff]" />,
        price: 10,
      },
    ],
  },
];

export default function GiftStore() {
  const [activeTab, setActiveTab] = useState("fun");
  const [selectedGift, setSelectedGift] = useState(null);

  const handleGiftSend = (gift) => {
    setSelectedGift(gift);
    alert(`🎁 You selected to send: ${gift.name} for $${gift.price}`);
  };

  return (
    <div className="min-h-screen p-8  flex flex-col mx-auto bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm  shadow-xl  rounded-2xl md:max-w-10/12 w-full space-y-6">
      <h1 className="text-xl font-bold text-left text-black mb-6">
        Gifting Marketplace
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {giftCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-full border-none cursor-pointer ${
              activeTab === cat.id
                ? "bg-[#8c52ff] text-white"
                : "bg-[#e6ddf7] text-[#8c52ff]"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] ju">
        {giftCategories
          .find((cat) => cat.id === activeTab)
          ?.gifts.map((gift) => (
            <div
              key={gift.id}
              className="bg-purple-50 rounded-xl p-4 shadow text-center flex flex-col justify-center items-center  gap-1"
            >
              <div className="">{gift.icon}</div>
              <h3 className="text-[#8c52ff] font-semibold mt-2 text-lg">
                {gift.name}
              </h3>
              <div className=" flex items-end gap-3.5">
                <p className="text-[#8c52ff] text-sm  bg-violet-200 p-2 py-1.5 rounded-lg">
                  ${gift.price}
                </p>
                <button
                  onClick={() => handleGiftSend(gift)}
                  className="mt-2 bg-[#8c52ff] text-white rounded-lg px-4 py-1 cursor-pointer"
                >
                  Send Gift
                </button>
              </div>
            </div>
          ))}
      </div>

      {selectedGift && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-purple-200 px-6 py-4 rounded-xl shadow text-[#8c52ff]">
          ✅ You selected: <strong>{selectedGift.name}</strong> for $
          {selectedGift.price}
        </div>
      )}
    </div>
  );
}
