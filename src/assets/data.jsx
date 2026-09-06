import { DollarSign } from "lucide-react";

export const BUDGET_OPTIONS = [
  {
    id: "Budget",
    label: "Tiết kiệm",
    icon: <DollarSign className="w-4 h-4" />,
  },
  {
    id: "Moderate",
    label: "Tiêu chuẩn",
    icon: (
      <div className="flex">
        <DollarSign className="w-4 h-4" />
        <DollarSign className="w-4 h-4" />
      </div>
    ),
  },
  {
    id: "Luxury",
    label: "Cao cấp",
    icon: (
      <div className="flex">
        <DollarSign className="w-4 h-4" />
        <DollarSign className="w-4 h-4" />
        <DollarSign className="w-4 h-4" />
      </div>
    ),
  },
];

export const TRAVELER_OPTIONS = [
  {
    id: "Solo",
    title: "Đi một mình",
    icon: "🧗",
    desc: "Khám phá theo tốc độ của riêng bạn",
  },
  { id: "Couple", title: "Cặp đôi", icon: "👩‍❤️‍👨", desc: "Kỳ nghỉ lãng mạn" },
  {
    id: "Family",
    title: "Gia đình",
    icon: "👨‍👩‍👧‍👦",
    desc: "Hoạt động phù hợp cho trẻ nhỏ",
  },
  {
    id: "Friends",
    title: "Nhóm bạn",
    icon: "🥳",
    desc: "Dành cho nhóm thích trải nghiệm",
  },
];
