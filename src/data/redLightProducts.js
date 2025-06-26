export const redLightProducts = {
  'rlt-panel-pro': {
    id: 'rlt-panel-pro',
    name: 'RedGlow Pro Panel',
    price: 299.99,
    description: 'Professional-grade LED panel featuring dual wavelengths (660nm and 850nm) for comprehensive red light therapy treatment. Perfect for full-body sessions.',
    images: [
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878438225-PRO-PLUS-S-Shape-PDP-2000x2000px.jpg',
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750877976452-istockphoto-1340944146-612x612.jpg',
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750877981601-Red-Light-Therapy%20%281%29.jpg'
    ],
    stock: 15,
    rating: 4.9,
    reviewCount: 287,
    category: 'panels',
    specifications: {
      wavelengths: '660nm (Red) + 850nm (Near-Infrared)',
      powerOutput: '100W',
      ledCount: '200 LEDs',
      treatmentArea: '12" x 8"',
      timer: '1-30 minutes',
      warranty: '3 years'
    },
    benefits: [
      'Pain relief and inflammation reduction',
      'Improved circulation and healing',
      'Collagen production stimulation',
      'Muscle recovery acceleration',
      'Skin health improvement'
    ],
    features: [
      'Dual wavelength technology',
      'Built-in timer function',
      'FDA cleared device',
      'Zero EMF emission',
      'Flicker-free operation',
      'Easy wall mounting'
    ],
    usage: [
      'Position 6-12 inches from treatment area',
      'Use for 10-20 minutes per session',
      'Recommended 3-5 times per week',
      'Protect eyes during treatment'
    ],
    material: 'Medical-grade aluminum',
    size: '12" x 8" x 3"',
    care: [
      'Clean with dry microfiber cloth',
      'Store in cool, dry place',
      'Avoid water exposure',
      'Handle with care'
    ],
    sustainability: [
      'Energy efficient LED technology',
      'Long-lasting 50,000+ hour lifespan',
      'Recyclable aluminum construction',
      'Minimal packaging materials'
    ]
  },
  'rlt-handheld-max': {
    id: 'rlt-handheld-max',
    name: 'RedGlow Handheld Max',
    price: 149.99,
    description: 'Portable handheld device perfect for targeted red light therapy. Ideal for spot treatments and on-the-go wellness.',
    images: [
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878442341-5005LD_navy_5__89730.jpg',
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750877989331-34dee6_004592980f83470596bce18da8adee70~mv2.webp',
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878430657-istockphoto-1549367921-612x612.jpg'
    ],
    stock: 23,
    rating: 4.8,
    reviewCount: 412,
    category: 'handheld',
    specifications: {
      wavelengths: '660nm (Red) + 850nm (Near-Infrared)',
      powerOutput: '30W',
      ledCount: '60 LEDs',
      treatmentArea: '4" x 3"',
      battery: 'Rechargeable Li-ion',
      weight: '1.2 lbs'
    },
    benefits: [
      'Targeted pain relief',
      'Wound healing acceleration',
      'Skin rejuvenation',
      'Reduced inflammation',
      'Improved muscle recovery'
    ],
    features: [
      'Portable design',
      'Rechargeable battery',
      'Multiple intensity levels',
      'Auto shut-off timer',
      'Ergonomic handle',
      'Travel case included'
    ],
    usage: [
      'Hold 1-3 inches from skin',
      'Treat for 5-15 minutes per area',
      'Use daily for best results',
      'Charge for 2-3 hours'
    ],
    material: 'Medical-grade plastic',
    size: '6" x 4" x 2"',
    care: [
      'Wipe clean with damp cloth',
      'Charge regularly',
      'Store in protective case',
      'Keep away from extreme temperatures'
    ],
    sustainability: [
      'Rechargeable battery reduces waste',
      'Durable construction for longevity',
      'Minimal packaging',
      'Energy-efficient operation'
    ]
  },
  'rlt-mini-spot': {
    id: 'rlt-mini-spot',
    name: 'RedGlow Mini Spot',
    price: 79.99,
    description: 'Compact and affordable red light therapy device for precise treatment of small areas. Perfect for beginners.',
    images: [
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878426850-360_F_1043256953_r55mxvtTZuyIUFSFzH3oE2TIVquTVbyB.jpg',
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878430657-istockphoto-1549367921-612x612.jpg',
      'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750877989331-34dee6_004592980f83470596bce18da8adee70~mv2.webp'
    ],
    stock: 31,
    rating: 4.7,
    reviewCount: 156,
    category: 'handheld',
    specifications: {
      wavelengths: '660nm (Red)',
      powerOutput: '15W',
      ledCount: '30 LEDs',
      treatmentArea: '2" x 2"',
      powerSource: 'USB-C',
      weight: '0.5 lbs'
    },
    benefits: [
      'Acne treatment',
      'Minor wound healing',
      'Facial skin improvement',
      'Spot pain relief',
      'Scar reduction'
    ],
    features: [
      'Ultra-compact design',
      'USB-C powered',
      'One-button operation',
      'LED indicator',
      'Travel friendly',
      'Affordable price'
    ],
    usage: [
      'Place directly on skin',
      'Treat for 5-10 minutes',
      'Use 2-3 times daily',
      'Perfect for facial treatments'
    ],
    material: 'ABS plastic',
    size: '3" x 2" x 1"',
    care: [
      'Clean with alcohol wipe',
      'Store in dry place',
      'Use provided USB cable',
      'Handle gently'
    ],
    sustainability: [
      'USB-powered reduces battery waste',
      'Compact size minimizes materials',
      'Long LED lifespan',
      'Recyclable plastic construction'
    ]
  }
};

export const getRedLightProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(redLightProducts[id] || null);
    }, 500);
  });
};