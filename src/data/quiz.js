const steps = [
  {
    id: 'customerType',
    question: 'คุณเป็นลูกค้าประเภทไหน?',
    subtitle: 'เพื่อให้เราแนะนำสินค้าได้ตรงจุดที่สุด',
    options: [
      { value: 'manufacturer', label: 'โรงงานผลิตชิ้นส่วน', icon: '🏭', desc: 'ใช้เครื่องจักร CNC ในการผลิต' },
      { value: 'toolshop', label: 'ร้านรับงานตัดเฉือน', icon: '⚙️', desc: 'รับงาน jobbing / subcontract' },
      { value: 'distributor', label: 'ตัวแทนจำหน่าย / ร้านขายเครื่องมือ', icon: '🏪', desc: 'ต้องการสินค้าเพื่อจำหน่ายต่อ' },
      { value: 'engineer', label: 'วิศวกร / ช่างเทคนิค', icon: '👷', desc: 'ต้องการคำปรึกษาเฉพาะทาง' },
    ],
  },
  {
    id: 'productType',
    question: 'ต้องการเครื่องมือประเภทใด?',
    subtitle: 'เลือกได้มากกว่า 1 ประเภท',
    multi: true,
    options: [
      { value: 'milling', label: 'เครื่องมือกัด (Milling)', icon: '⚙️', desc: 'End Mill, Face Mill, Ball Nose' },
      { value: 'turning', label: 'เครื่องมือกลึง (Turning)', icon: '🔧', desc: 'Turning Insert, Boring Bar' },
      { value: 'drilling', label: 'เครื่องมือเจาะ (Drilling)', icon: '🔩', desc: 'Carbide Drill, Deep Hole Drill' },
      { value: 'threading', label: 'เครื่องมือเกลียว (Threading)', icon: '🔑', desc: 'Thread Insert, Tap, Thread Mill' },
      { value: 'grooving', label: 'เครื่องมือเซาะร่อง (Grooving)', icon: '✂️', desc: 'Grooving Insert, Parting' },
      { value: 'special', label: 'เครื่องมือพิเศษ / Angle Head', icon: '🛠️', desc: 'BuzzEdge, AH Series' },
    ],
  },
  {
    id: 'material',
    question: 'วัสดุงานที่ต้องการตัดเฉือนคืออะไร?',
    subtitle: 'เพื่อแนะนำ Grade และ Coating ที่เหมาะสม',
    multi: true,
    options: [
      { value: 'steel', label: 'เหล็กกล้า (Steel)', icon: '🔩', desc: 'Carbon steel, Alloy steel' },
      { value: 'stainless', label: 'สแตนเลส (Stainless)', icon: '✨', desc: 'SUS304, SUS316, Duplex' },
      { value: 'cast_iron', label: 'เหล็กหล่อ (Cast Iron)', icon: '⬛', desc: 'Gray iron, Ductile iron' },
      { value: 'aluminum', label: 'อลูมิเนียม (Aluminum)', icon: '🥈', desc: 'Al alloy, Die casting' },
      { value: 'titanium', label: 'ไทเทเนียม / Superalloy', icon: '🚀', desc: 'Ti, Inconel, Hastelloy' },
      { value: 'hardened', label: 'เหล็กชุบแข็ง (Hardened Steel)', icon: '💎', desc: 'HRC 45-65' },
    ],
  },
];

const productMap = {
  milling: 'เครื่องมือกัด (GM, GAL, GBA Series)',
  turning: 'เครื่องมือกลึง (GNT, GIT, HIT Series)',
  drilling: 'เครื่องมือเจาะ (GD, GDD Series)',
  threading: 'เครื่องมือเกลียว (GTT, GTM, GTP Series)',
  grooving: 'เครื่องมือเซาะร่อง (GGI, GGE Series)',
  special: 'เครื่องมือพิเศษ (AH, BuzzEdge Series)',
};

const customerLabel = {
  manufacturer: 'โรงงานผลิตชิ้นส่วน',
  toolshop: 'ร้านรับงานตัดเฉือน',
  distributor: 'ตัวแทนจำหน่าย',
  engineer: 'วิศวกร / ช่างเทคนิค',
};

export { steps, productMap, customerLabel };
