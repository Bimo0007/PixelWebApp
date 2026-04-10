export interface SpecCard { label: string; value: string; orange?: boolean }
export interface DownloadItem { title: string; meta: string; metaColor: string; href: string }
export interface FeatureCard { iconName: string; label: string; desc: string }
export interface DesignSection { label: string; heading: string; body: string; dark: boolean }
export interface StatItem { value: string; unit?: string; label: string }
export interface AccessoryItem { src: string; label: string }

export interface ProductDetailConfig {
  id: string
  name: string
  category: string
  tagline: string
  badges: string[]
  image: string
  secondaryImage?: string
  designIntro: string
  designSections: DesignSection[]
  displayStats?: StatItem[]
  displayHeading?: string
  displayBody?: string
  performanceHeading?: string
  performanceStats?: { topLabel: string; bigValue: string; bigUnit: string; subLabel?: string; subValue?: string }[]
  featureHeading: string
  features: FeatureCard[]
  lifestyleImages?: string[]
  lifestyleLabel?: string
  accessories?: AccessoryItem[]
  showOS?: boolean
  specCards: SpecCard[]
  downloads?: DownloadItem[]
}

export const productDetails: Record<string, ProductDetailConfig> = {
  cpad: {
    id: 'cpad',
    name: 'CPad',
    category: 'Smart Commercial Pad',
    tagline: 'Seamless payment and service, in One PAD.',
    badges: ['NFC', 'Android 11', '4G', 'Wi-Fi', 'Bluetooth', 'Modular'],
    image: '/assets/cpad/1 Front view.png',
    designIntro: 'CPad PAY unifies payment, service, and smart business management into a single sleek device — purpose-built for the modern retail counter.',
    designSections: [
      {
        label: 'Design',
        heading: 'All-in-One Design.',
        body: 'A beautifully balanced form factor that consolidates payment, display, and connectivity into one streamlined unit — reducing counter clutter and elevating the customer experience.',
        dark: false,
      },
      {
        label: 'Accessories',
        heading: 'Modular Accessories.',
        body: 'Magnetic snap-on accessories let you tailor the CPad to your business scenario in seconds. From barcode scanners to printers, the ecosystem grows with your needs.',
        dark: true,
      },
    ],
    displayHeading: 'Crystal-clear\ncommerce display.',
    displayBody: 'A vibrant 10.1" FHD touchscreen with 400 nits of brightness delivers sharp, readable visuals in any lighting condition — from dimly lit restaurants to sun-drenched retail floors.',
    displayStats: [
      { value: '10.1"', label: 'FHD Touch' },
      { value: '1920×1080', label: 'Resolution' },
      { value: '400 nits', label: 'Brightness' },
    ],
    performanceHeading: 'Octa-core power for seamless commerce.',
    performanceStats: [
      { topLabel: 'Octa-Core CPU', bigValue: '2.0', bigUnit: 'GHz', subLabel: 'RAM + Storage', subValue: '4GB + 64GB' },
    ],
    featureHeading: 'Everything your business needs, built in.',
    features: [
      { iconName: 'CreditCard', label: 'All-in-One Payment (NFC)', desc: 'Accept NFC, MSR, IC card, and QR code payments from a single integrated device.' },
      { iconName: 'Layers', label: 'Modular Design', desc: 'Magnetic accessories allow flexible configurations to suit any counter or service scenario.' },
      { iconName: 'Smartphone', label: 'Smart OS', desc: 'Android 11 powers a rich ecosystem of business applications, ready out of the box.' },
      { iconName: 'Battery', label: '5000mAh Battery', desc: 'Long-lasting 5000mAh battery keeps your device running through the full business day.' },
      { iconName: 'Wifi', label: '4G / Wi-Fi Connectivity', desc: 'Stay always connected via 4G LTE or dual-band Wi-Fi for uninterrupted service.' },
      { iconName: 'Scan', label: 'Barcode Scanner', desc: 'Integrated barcode scanning accelerates checkout and inventory management.' },
    ],
    lifestyleImages: ['/images/cpad.jpg', '/images/p3-family.jpg', '/images/experience-bg.jpg'],
    lifestyleLabel: 'CPad in Action',
    showOS: false,
    specCards: [
      { label: 'Display', value: '10.1" FHD Touch' },
      { label: 'OS', value: 'Android 11', orange: true },
      { label: 'CPU', value: 'Octa-Core 2.0GHz' },
      { label: 'RAM', value: '4GB' },
      { label: 'Storage', value: '64GB' },
      { label: 'Payment', value: 'NFC / MSR / IC / QR', orange: true },
      { label: 'Battery', value: '5000mAh' },
      { label: 'Connectivity', value: '4G / Wi-Fi / BT 5.0', orange: true },
    ],
    downloads: [
      { title: 'Product Images', meta: 'ZIP (25 MB)', metaColor: 'text-orange-500', href: '#' },
      { title: 'Product Datasheet', meta: 'PDF (1.8 MB)', metaColor: 'text-blue-500', href: '#' },
    ],
  },

  'flex-3': {
    id: 'flex-3',
    name: 'FLEX 3',
    category: 'Interactive Display',
    tagline: 'Various Sizes, Unlimited Possibilities.',
    badges: ['18.5" / 22" / 27"', 'Android 11', 'Wi-Fi', 'FHD'],
    image: '/assets/flex/1-Front view.png',
    designIntro: 'FLEX 3 brings responsive touch and stunning HD clarity to retail, F&B, healthcare, and beyond — available in three perfectly proportioned sizes.',
    designSections: [
      {
        label: 'Display',
        heading: 'Ultra-narrow bezel.',
        body: 'A 16mm ultra-narrow bezel maximises screen real estate while the slim 17mm profile integrates seamlessly into any environment — from busy counters to elegant self-service kiosks.',
        dark: false,
      },
      {
        label: 'Profile',
        heading: 'Slim 17mm profile.',
        body: 'Engineered to be wall-mounted, counter-standing, or integrated into a kiosk, the FLEX 3\'s 17mm depth disappears into your space while the display takes centre stage.',
        dark: true,
      },
    ],
    displayHeading: 'Full-HD clarity,\nbrilliant touch response.',
    displayBody: 'Every FLEX 3 ships with a 1920×1080 FHD panel and 400 nits brightness, ensuring vivid colours and legible text even in high-ambient-light environments.',
    displayStats: [
      { value: '1920×1080', label: 'FHD Resolution' },
      { value: '400 nits', label: 'Brightness' },
      { value: '16mm', label: 'Bezel Width' },
    ],
    performanceHeading: 'Qualcomm Octa-Core — built for fluid interaction.',
    performanceStats: [
      { topLabel: 'Qualcomm Octa-Core', bigValue: '2.7', bigUnit: 'GHz', subLabel: 'RAM + Storage', subValue: '8GB + 256GB' },
    ],
    featureHeading: 'Designed for every high-traffic touchpoint.',
    features: [
      { iconName: 'Monitor', label: 'Bezel-less Display', desc: 'Ultra-narrow 16mm bezel and slim 17mm profile deliver a sleek, immersive viewing experience.' },
      { iconName: 'Zap', label: 'FHD Resolution', desc: '1920×1080 FHD with 400 nits brightness and anti-fingerprint coating for crystal-clear content.' },
      { iconName: 'CheckCircle', label: '10-Point Multi-touch', desc: 'Responsive 10-point capacitive touch handles the fastest, most demanding interactions effortlessly.' },
      { iconName: 'Cpu', label: 'Powerful 8-Core CPU', desc: 'Qualcomm Octa-Core processor at 2.7GHz drives smooth menus, animations, and app performance.' },
      { iconName: 'Shield', label: 'Anti-fingerprint Coating', desc: 'Durable oleophobic coating keeps the display looking clean and professional during customer use.' },
      { iconName: 'Layers', label: 'Three Size Options', desc: 'Choose 18.5", 22", or 27" to perfectly match your counter space, kiosk bay, or wall installation.' },
    ],
    lifestyleImages: ['/images/display-hero.jpg', '/images/experience-bg.jpg', '/images/p3-family.jpg'],
    lifestyleLabel: 'FLEX 3 in the Wild',
    showOS: false,
    specCards: [
      { label: 'Sizes', value: '18.5" / 22" / 27"' },
      { label: 'Resolution', value: '1920×1080 FHD' },
      { label: 'Brightness', value: '400 nits' },
      { label: 'CPU', value: 'Qualcomm Octa-Core 2.7GHz' },
      { label: 'RAM', value: '8GB' },
      { label: 'Storage', value: '256GB' },
      { label: 'Touch', value: '10-point Multi-touch', orange: true },
      { label: 'OS', value: 'Android 11', orange: true },
      { label: 'Bezel', value: '16mm Ultra-narrow' },
    ],
    downloads: [
      { title: 'Product Images', meta: 'ZIP (22 MB)', metaColor: 'text-orange-500', href: '#' },
      { title: 'Product Datasheet', meta: 'PDF (1.4 MB)', metaColor: 'text-blue-500', href: '#' },
    ],
  },

  l3: {
    id: 'l3',
    name: 'L3',
    category: 'Smart Mobile Terminal',
    tagline: 'Efficiency unleashed from start to sale.',
    badges: ['RFID', 'Barcode', 'IP65', '12h Battery', 'Android 11'],
    image: '/assets/L3/1-Front view.png',
    secondaryImage: '/Slide/L3.png',
    designIntro: 'The L3 is a rugged handheld computer combining RFID, barcode scanning, and contactless card reading — purpose-built to accelerate operations in retail, logistics, and warehousing.',
    designSections: [
      {
        label: 'Build',
        heading: 'Rugged and reliable.',
        body: 'IP65 rated and drop-tested, the L3 endures the harshest warehouse and field environments without compromise — so your team can work confidently, whatever the conditions.',
        dark: false,
      },
      {
        label: 'Battery',
        heading: 'All-day power.',
        body: 'A high-capacity battery delivers 12+ hours of continuous operation, ensuring your team stays productive from the first scan of the morning to the last delivery of the day.',
        dark: true,
      },
    ],
    displayHeading: 'Clear and responsive\nin any environment.',
    displayBody: 'The 4.0" HD capacitive touchscreen provides sharp, readable visuals in bright warehouse lighting and outdoor conditions, with glove-friendly touch sensitivity.',
    displayStats: [
      { value: '4.0"', label: 'HD Touch' },
      { value: '800×480', label: 'Resolution' },
      { value: '12h+', label: 'Battery Life' },
    ],
    performanceHeading: 'Octa-Core processing for non-stop data capture.',
    performanceStats: [
      { topLabel: 'Octa-Core CPU', bigValue: '1.8', bigUnit: 'GHz', subLabel: 'RAM + Storage', subValue: '3GB + 32GB' },
    ],
    featureHeading: 'Every tool you need to move faster.',
    features: [
      { iconName: 'Scan', label: 'RFID & Barcode (Dual-mode)', desc: 'Simultaneously capture RFID tags and 1D/2D barcodes to maximise throughput in complex workflows.' },
      { iconName: 'Shield', label: 'IP65 Rugged Build', desc: 'Fully dust-sealed and water-jet resistant — built for demanding warehouse, field, and retail environments.' },
      { iconName: 'Battery', label: '12h+ Battery', desc: 'Power through full double-shifts without a charge, reducing downtime and keeping staff productive.' },
      { iconName: 'Smartphone', label: 'Android Platform', desc: 'Android 11 provides a familiar interface and access to a wide range of enterprise business apps.' },
      { iconName: 'Zap', label: 'USB-C Charging', desc: 'Universal USB-C charging means fast top-ups using any standard cable or multi-bay charging cradle.' },
      { iconName: 'Wifi', label: '4G Connectivity', desc: 'Integrated 4G LTE, Wi-Fi, Bluetooth, and GPS keep the L3 connected across large sites and outdoors.' },
    ],
    lifestyleImages: ['/images/mobile-hero.jpg', '/images/p3-family.jpg', '/images/experience-bg.jpg'],
    lifestyleLabel: 'L3 at Work',
    showOS: true,
    specCards: [
      { label: 'Display', value: '4.0" HD Touch' },
      { label: 'OS', value: 'Android 11', orange: true },
      { label: 'CPU', value: 'Octa-Core 1.8GHz' },
      { label: 'RAM', value: '3GB' },
      { label: 'Storage', value: '32GB' },
      { label: 'Scanner', value: 'RFID + 1D/2D Barcode', orange: true },
      { label: 'Battery', value: '12h+ Usage Life' },
      { label: 'IP Rating', value: 'IP65', orange: true },
      { label: 'Connectivity', value: '4G / Wi-Fi / BT / GPS' },
    ],
    downloads: [
      { title: 'Product Images', meta: 'ZIP (18 MB)', metaColor: 'text-orange-500', href: '#' },
      { title: 'Product Datasheet', meta: 'PDF (1.1 MB)', metaColor: 'text-blue-500', href: '#' },
    ],
  },

  'd3-pro': {
    id: 'd3-pro',
    name: 'D3 Pro',
    category: 'Desktop Terminal',
    tagline: 'Professional-grade performance for every counter.',
    badges: ['Android 11', 'Touch', 'Wi-Fi', 'Compact'],
    image: '/assets/D3/Frontview .png',
    secondaryImage: '/assets/D3/D3 PRO with UI.png',
    designIntro: 'The D3 Pro is a powerful Android desktop terminal engineered for the demands of high-volume retail, F&B, and hospitality operations — compact enough for any counter.',
    designSections: [
      {
        label: 'Form Factor',
        heading: 'Compact and powerful.',
        body: 'A sleek, minimal footprint means the D3 Pro fits comfortably on the most crowded counter while delivering desktop-class processing power and a full 15.6" touch experience.',
        dark: false,
      },
      {
        label: 'Counter Ready',
        heading: 'Built for the counter.',
        body: 'VESA-compatible mounting, rich I/O ports, and a cable-management design make the D3 Pro easy to install, configure, and integrate with your existing POS peripherals.',
        dark: true,
      },
    ],
    displayHeading: 'Full-HD touch,\nbuilt for business.',
    displayBody: 'The 15.6" FHD capacitive multi-touch display delivers rich, accurate touch response, making every interaction — from menu browsing to payment entry — smooth and reliable.',
    displayStats: [
      { value: '15.6"', label: 'FHD Touch' },
      { value: '1920×1080', label: 'Resolution' },
      { value: 'Capacitive', label: 'Multi-touch' },
    ],
    performanceHeading: 'Desktop-class performance on Android.',
    performanceStats: [
      { topLabel: 'Octa-Core CPU', bigValue: '2.0', bigUnit: 'GHz', subLabel: 'RAM + Storage', subValue: '4GB + 64GB' },
    ],
    featureHeading: 'Power and flexibility for any counter scenario.',
    features: [
      { iconName: 'Smartphone', label: 'Android 11 Platform', desc: 'Runs the full Android ecosystem with seamless app installation and enterprise management support.' },
      { iconName: 'Monitor', label: 'Capacitive Multi-touch', desc: '10-point capacitive touch delivers precise, glitch-free interaction on the full 15.6" display.' },
      { iconName: 'Package', label: 'Compact Footprint', desc: 'Engineered for minimal counter space usage without sacrificing connectivity or performance.' },
      { iconName: 'Wifi', label: '4G Connectivity', desc: 'Built-in 4G LTE and Wi-Fi ensure constant, reliable connectivity for cloud POS and remote management.' },
      { iconName: 'Settings', label: 'Rich I/O Ports', desc: 'USB ×3, Ethernet, RS232, and cash drawer interface provide full peripheral connectivity.' },
      { iconName: 'Layers', label: 'Easy Wall / Stand Mount', desc: 'VESA-compatible design supports both wall mounting and desktop stand configurations.' },
    ],
    lifestyleImages: ['/images/desktop-hero.jpg', '/images/experience-bg.jpg', '/images/p3-family.jpg'],
    lifestyleLabel: 'D3 Pro in Business',
    showOS: false,
    specCards: [
      { label: 'Display', value: '15.6" FHD Touch' },
      { label: 'OS', value: 'Android 11', orange: true },
      { label: 'CPU', value: 'Octa-Core 2.0GHz' },
      { label: 'RAM', value: '4GB' },
      { label: 'Storage', value: '64GB' },
      { label: 'Touch', value: 'Capacitive Multi-touch', orange: true },
      { label: 'Connectivity', value: '4G / Wi-Fi / BT' },
      { label: 'I/O', value: 'USB×3, Ethernet, RS232', orange: true },
      { label: 'Mount', value: 'VESA Compatible' },
    ],
    downloads: [
      { title: 'Product Images', meta: 'ZIP (28 MB)', metaColor: 'text-orange-500', href: '#' },
      { title: 'Product Datasheet', meta: 'PDF (1.6 MB)', metaColor: 'text-blue-500', href: '#' },
    ],
  },

  t3: {
    id: 't3',
    name: 'T3 Family',
    category: 'All-in-One Touch Terminal',
    tagline: 'Touch-first design for the modern checkout.',
    badges: ['15.6" FHD', 'Dual Screen', 'Android 11', 'Wi-Fi'],
    image: '/assets/T3/Frontview.png',
    designIntro: 'The T3 Family is a premium all-in-one touch terminal with an integrated customer-facing display — delivering a seamless, professional dual-screen checkout experience.',
    designSections: [
      {
        label: 'Interaction',
        heading: 'Dual-screen checkout.',
        body: 'A built-in customer-facing display transforms every transaction into a transparent, professional experience — showing order totals, promotions, and payment confirmations in real time.',
        dark: false,
      },
      {
        label: 'Design',
        heading: 'All-in-one elegance.',
        body: 'The T3 Family consolidates display, computing, and connectivity into a single refined unit — minimising cabling, simplifying installation, and projecting a premium brand image.',
        dark: true,
      },
    ],
    displayHeading: 'Brilliant IPS display,\nbuilt to impress.',
    displayBody: 'The 15.6" FHD IPS panel with 400 nits brightness renders crisp menus, vibrant product imagery, and sharp payment interfaces in any retail or F&B environment.',
    displayStats: [
      { value: '15.6"', label: 'FHD IPS' },
      { value: '1920×1080', label: 'Resolution' },
      { value: '400 nits', label: 'Brightness' },
    ],
    performanceHeading: 'Octa-Core performance for uninterrupted service.',
    performanceStats: [
      { topLabel: 'Octa-Core CPU', bigValue: '2.0', bigUnit: 'GHz', subLabel: 'RAM + Storage', subValue: '4GB + 64GB' },
    ],
    featureHeading: 'Premium features for the modern checkout counter.',
    features: [
      { iconName: 'Monitor', label: '15.6" Full-HD Display', desc: 'A stunning 1920×1080 IPS panel with 400 nits brightness for vivid, reliable visuals all day long.' },
      { iconName: 'Layers', label: 'Dual-Screen Ready', desc: 'Integrated customer-facing display shows order summaries, promotions, and payment status live.' },
      { iconName: 'Package', label: 'All-in-One Design', desc: 'Display, computing, and I/O integrated into a single sleek unit that sits perfectly on any counter.' },
      { iconName: 'Smartphone', label: 'Android 11', desc: 'Familiar, open Android platform supports a wide range of POS, loyalty, and business apps.' },
      { iconName: 'Settings', label: 'Multiple I/O', desc: 'USB ×4, Ethernet, cash drawer port, and serial interface support all standard POS peripherals.' },
      { iconName: 'Zap', label: 'Compact Counter Footprint', desc: 'Intelligently engineered to maximise display size while minimising the counter space consumed.' },
    ],
    lifestyleImages: ['/images/desktop-hero.jpg', '/images/p3-family.jpg', '/images/experience-bg.jpg'],
    lifestyleLabel: 'T3 Family at the Counter',
    showOS: false,
    specCards: [
      { label: 'Display', value: '15.6" FHD IPS' },
      { label: 'Customer Display', value: 'Built-in', orange: true },
      { label: 'OS', value: 'Android 11', orange: true },
      { label: 'CPU', value: 'Octa-Core 2.0GHz' },
      { label: 'RAM', value: '4GB' },
      { label: 'Storage', value: '64GB' },
      { label: 'Touch', value: '10-point Capacitive', orange: true },
      { label: 'Connectivity', value: 'Wi-Fi / BT / Ethernet' },
      { label: 'I/O', value: 'USB×4, Cash Drawer Port', orange: true },
    ],
    downloads: [
      { title: 'Product Images', meta: 'ZIP (30 MB)', metaColor: 'text-orange-500', href: '#' },
      { title: 'Product Datasheet', meta: 'PDF (1.9 MB)', metaColor: 'text-blue-500', href: '#' },
    ],
  },

  'printer': {
    id: 'printer',
    name: '80MM Printer',
    category: 'Receipt Printer',
    tagline: 'Fast, reliable printing for every transaction.',
    badges: ['80mm', '250mm/s', 'USB', 'Ethernet', 'BT'],
    image: '/assets/Printer/Printer.png',
    designIntro: 'Our 80mm thermal receipt printer delivers high-speed, consistent printing across USB, Ethernet, and Bluetooth interfaces — compatible with virtually any POS setup.',
    designSections: [
      {
        label: 'Speed',
        heading: 'High-speed printing.',
        body: 'At 250mm/s, our 80mm thermal printer processes receipts in a fraction of a second — keeping queues moving, customers happy, and your operations running at full speed.',
        dark: false,
      },
      {
        label: 'Compatibility',
        heading: 'Universal compatibility.',
        body: 'USB, Ethernet, and Bluetooth interfaces ensure the printer integrates seamlessly with Android, Windows, and iOS POS systems without additional drivers or configuration.',
        dark: true,
      },
    ],
    featureHeading: 'Purpose-built for high-volume POS environments.',
    features: [
      { iconName: 'Printer', label: '80mm Thermal', desc: 'Wide 80mm thermal print head delivers full-width receipts with sharp, fade-resistant text and graphics.' },
      { iconName: 'Zap', label: '250mm/s Print Speed', desc: 'Industry-leading 250mm/s speed ensures every customer gets their receipt instantly, even at peak times.' },
      { iconName: 'Settings', label: 'Auto-cutter', desc: 'Integrated auto-cutter provides clean, precise cuts on every receipt for a professional presentation.' },
      { iconName: 'Wifi', label: 'Multiple Interfaces (USB/ETH/BT)', desc: 'Connect via USB, Ethernet, or Bluetooth to any modern POS terminal, tablet, or smartphone.' },
      { iconName: 'Tag', label: 'Receipt & Label', desc: 'Supports both receipt and label printing modes for versatile use across retail and logistics workflows.' },
      { iconName: 'Package', label: 'Easy Paper Load', desc: 'Drop-in paper loading design allows fast roll changes, minimising downtime at the busiest checkouts.' },
    ],
    lifestyleImages: ['/images/accessories-hero.jpg', '/images/experience-bg.jpg', '/images/p3-family.jpg'],
    lifestyleLabel: 'Printer in Use',
    showOS: false,
    specCards: [
      { label: 'Print Width', value: '80mm' },
      { label: 'Speed', value: '250mm/s', orange: true },
      { label: 'Interface', value: 'USB / Ethernet / Bluetooth', orange: true },
      { label: 'Paper Roll', value: 'Max 83mm diameter' },
      { label: 'Auto-cutter', value: 'Yes', orange: true },
      { label: 'OS Compatibility', value: 'Android / Windows / iOS' },
    ],
    downloads: [
      { title: 'Product Images', meta: 'ZIP (12 MB)', metaColor: 'text-orange-500', href: '#' },
      { title: 'Product Datasheet', meta: 'PDF (0.9 MB)', metaColor: 'text-blue-500', href: '#' },
    ],
  },

  'cash-drawer': {
    id: 'cash-drawer',
    name: 'Max Cash Drawer',
    category: 'POS Cash Drawer',
    tagline: 'Secure, reliable cash management for busy counters.',
    badges: ['5-Bill', '8-Coin', 'RJ11', 'Steel'],
    image: '/assets/Drawer/Drawer.png',
    designIntro: 'Built from heavy-duty steel with a reliable auto-open mechanism, the Max Cash Drawer delivers the security and durability essential for high-volume cash-handling environments.',
    designSections: [
      {
        label: 'Durability',
        heading: 'Built to last.',
        body: 'Heavy-gauge steel construction and a double-lock keyed mechanism provide the physical security and long-term durability demanded by busy retail, F&B, and hospitality operations.',
        dark: false,
      },
      {
        label: 'Integration',
        heading: 'Easy integration.',
        body: 'Standard RJ11 and USB interfaces mean the Max Cash Drawer connects instantly to virtually any receipt printer or POS system — no adapters, no complexity.',
        dark: true,
      },
    ],
    featureHeading: 'Secure, organised cash management.',
    features: [
      { iconName: 'HardDrive', label: '5-Bill Compartments', desc: 'Five generously sized bill compartments accommodate all common denomination formats.' },
      { iconName: 'Package', label: '8-Coin Compartments', desc: 'Eight removable coin compartments keep change organised and easily accessible at the counter.' },
      { iconName: 'Settings', label: 'RJ11 Printer Interface', desc: 'Standard RJ11 interface triggers automatic opening from any compatible receipt printer.' },
      { iconName: 'Shield', label: 'Heavy-Duty Steel', desc: 'Robust steel body resists physical wear and unauthorised access in the most demanding environments.' },
      { iconName: 'Zap', label: 'Auto-open Mechanism', desc: 'Smooth, reliable electromechanical auto-open mechanism responds instantly to trigger signals.' },
      { iconName: 'Lock', label: 'Keyed Lock', desc: 'Double-lock keyed security prevents unauthorised access and is standard on all configurations.' },
    ],
    lifestyleImages: ['/images/accessories-hero.jpg', '/images/experience-bg.jpg', '/images/p3-family.jpg'],
    lifestyleLabel: 'Cash Drawer in Action',
    showOS: false,
    specCards: [
      { label: 'Compartments', value: '5 Bill + 8 Coin' },
      { label: 'Interface', value: 'RJ11 / USB', orange: true },
      { label: 'Material', value: 'Heavy-duty steel' },
      { label: 'Lock', value: 'Double-lock with key', orange: true },
      { label: 'Dimensions', value: '410×415×100mm' },
    ],
    downloads: [
      { title: 'Product Images', meta: 'ZIP (8 MB)', metaColor: 'text-orange-500', href: '#' },
      { title: 'Product Datasheet', meta: 'PDF (0.6 MB)', metaColor: 'text-blue-500', href: '#' },
    ],
  },

  '2D Handheld Scanner': {
    id: '2D Handheld Scanner',
    name: '2D Handheld Scanner',
    category: '2D Handheld Scanner',
    tagline: 'Fast, accurate scanning for any barcode.',
    badges: ['1D/2D', 'USB', 'Wireless', 'IP42'],
    image: '/assets/Scanner/download.png',
    designIntro: 'The 2D Handheld Scanner delivers lightning-fast 1D and 2D barcode reading across USB wired and wireless modes — a true plug-and-play solution for any checkout or warehouse.',
    designSections: [
      {
        label: 'Ergonomics',
        heading: 'Ergonomic grip.',
        body: 'Carefully sculpted for extended use, the handheld scanner\'s ergonomic grip reduces fatigue during long shifts, letting your team scan accurately and comfortably for hours.',
        dark: false,
      },
      {
        label: 'Compatibility',
        heading: 'Wide compatibility.',
        body: 'Plug-and-play USB connection and wireless mode ensure the scanner works instantly with Android, Windows, and iOS systems — no drivers, no configuration required.',
        dark: true,
      },
    ],
    featureHeading: 'Scanning precision for any workflow.',
    features: [
      { iconName: 'Scan', label: '1D & 2D Barcodes', desc: 'Reads all major 1D and 2D barcode formats including QR codes, Data Matrix, and PDF417.' },
      { iconName: 'Settings', label: 'USB Wired', desc: 'Simple USB wired connection with plug-and-play compatibility across all major operating systems.' },
      { iconName: 'Wifi', label: 'Wireless Option', desc: 'Optional wireless mode enables freedom of movement for mobile scanning and large area coverage.' },
      { iconName: 'Shield', label: 'IP42 Dust/Splash Resistant', desc: 'IP42 rating provides reliable protection against dust ingress and light water splashing.' },
      { iconName: 'Camera', label: 'Wide Angle Scan', desc: '±60° wide scan angle reduces the need for precise aiming, speeding up every scanning interaction.' },
      { iconName: 'Zap', label: 'Plug & Play', desc: 'Instant recognition with no driver installation needed on Android, Windows, and iOS platforms.' },
    ],
    lifestyleImages: ['/images/accessories-hero.jpg', '/images/experience-bg.jpg', '/images/p3-family.jpg'],
    lifestyleLabel: 'Scanner in the Field',
    showOS: false,
    specCards: [
      { label: 'Scan Type', value: '1D + 2D', orange: true },
      { label: 'Interface', value: 'USB / Wireless', orange: true },
      { label: 'IP Rating', value: 'IP42' },
      { label: 'Scan Angle', value: '±60°' },
      { label: 'Resolution', value: '640×480' },
      { label: 'OS Compatibility', value: 'Android / Windows / iOS' },
    ],
    downloads: [
      { title: 'Product Images', meta: 'ZIP (10 MB)', metaColor: 'text-orange-500', href: '#' },
      { title: 'Product Datasheet', meta: 'PDF (0.7 MB)', metaColor: 'text-blue-500', href: '#' },
    ],
  },
}
