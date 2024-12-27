import React, { useEffect } from 'react';
import '../styles/Brands.css';
import BrandBanner from '../components/BrandBanner';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SmallCardSlide from '../components/SmallCardSlide';
import SmallCard from '../components/smallCard';

// Import Images
import Superlight from '../images/superlight.png';
import GProKeyboard from '../images/gprokeyboard.png';
import GProHeadset from '../images/gproheadset.png';

// Product Data with Price, Review, and Colors
const logitechProducts = [
  {
    title: 'Logitech Superlight X',
    description: 'Wireless gaming mouse with ultra-lightweight design.',
    image: Superlight,
    price: 149.99,
    review: 4.8,
    colorVariants: ['Black', 'White', 'Red'],
  },
  {
    title: 'Logitech G Pro Keyboard',
    description: 'Pro-grade mechanical gaming keyboard.',
    image: GProKeyboard,
    price: 199.99,
    review: 4.6,
    colorVariants: ['Black', 'Silver'],
  },
  {
    title: 'Logitech G915 TKL',
    description: 'Wireless RGB mechanical gaming keyboard.',
    image: GProHeadset,
    price: 249.99,
    review: 4.9,
    colorVariants: ['Black', 'White'],
  },
];


const logitechKeyboards = [
  {
    title: 'Logitech PRO X TKL RAPID',
    description: 'Tenkeyless Wired Gaming Keyboard with Analog Switches.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png?v=1',
    price: 229.99,
    review: 4.8,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G515 TKL',
    description: 'Wired Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g515-tkl-wired/gallery/g515-wired-keyboard-black-gallery-1-us.png?v=1',
    price: 139.99,
    salePrice: 119.99,
    review: 4.6,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G915 X LIGHTSPEED',
    description: 'Wireless Gaming Keyboard with LIGHTSPEED technology.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g915-x-lightspeed-wireless/gallery/g915-x-wireless-mechanical-gaming-keyboard-gallery-1-us.png?v=1',
    price: 299.99,
    salePrice: 269.99,
    review: 4.9,
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'Logitech G915 X LIGHTSPEED TKL',
    description: 'Tenkeyless Wireless Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g915-x-lightspeed-tkl/gallery/g915-x-tkl-wireless-keyboard-gallery-1-us.png?v=1',
    price: 269.99,
    salePrice: 249.99,
    review: 4.8,
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'Logitech G915 X',
    description: 'Wired Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g915-x-wired/gallery/g915-x-mechanical-gaming-keyboard-carbon-gallery-1-us.png?v=1',
    price: 249.99,
    salePrice: 219.99,
    review: 4.7,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G515 LIGHTSPEED TKL',
    description: 'Wireless Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g515-lightspeed-tkl/gallery/g515-keyboard-black-gallery-1-us.png?v=1',
    price: 189.99,
    salePrice: 179.99,
    review: 4.8,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G915 TKL',
    description: 'Tenkeyless LIGHTSPEED Wireless RGB Mechanical Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g915-tkl/g915-tkl-gallery-1-carbon.png?v=1',
    price: 319.99,
    salePrice: 199.99,
    review: 4.9,
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'Logitech PRO X 60',
    description: 'LIGHTSPEED Wireless Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x60-wireless-keyboard/gallery/pro-x-60-keyboard-black-gallery-1-us.png?v=1',
    price: 249.99,
    salePrice: 199.99,
    review: 4.8,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech PRO X TKL',
    description: 'LIGHTSPEED Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl/gallery-1-pro-x-tkl-magenta-lightspeed-gaming-keyboard.png?v=1',
    price: 239.99,
    salePrice: 219.99,
    review: 4.8,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G815',
    description: 'LIGHTSYNC RGB Mechanical Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/g815-harpy-corded/g815-gallery-1-nb.png?v=1',
    price: 279.99,
    salePrice: 179.99,
    review: 4.7,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech PRO X Keyboard',
    description: 'Pro Series Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png?v=1',
    price: 199.99,
    review: 4.5,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G715',
    description: 'Wireless Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/keyboards/g715-wireless-keyboard/gallery/g715-gallery-1.png?v=1',
    price: 279.99,
    salePrice: 199.99,
    review: 4.8,
    colorVariants: ['White'],
  },
  {
    title: 'Logitech G413 SE',
    description: 'Mechanical Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g413-se/g413-se-gallery-1-new.png?v=1',
    price: 99.99,
    salePrice: 79.99,
    review: 4.5,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G915',
    description: 'LIGHTSPEED Wireless RGB Mechanical Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g915/g915-gallery/us-g915-wireless-gallery-topdown.png?v=1',
    price: 349.99,
    salePrice: 219.99,
    review: 4.9,
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'Logitech G512 Carbon',
    description: 'LIGHTSYNC RGB Mechanical Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/flying-v-mx-g512/g513-backlit-mechanical-gaming-keyboard.png?v=1',
    price: 129.99,
    review: 4.6,
    colorVariants: ['Carbon'],
  },
  {
    title: 'Logitech PRO Keyboard',
    description: 'Tenkeyless Mechanical Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-clicky-gallery-1.png?v=1',
    price: 149.99,
    salePrice: 109.99,
    review: 4.7,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G713',
    description: 'Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/keyboards/g713-keyboard/gallery/g713-gallery-1.png?v=1',
    price: 229.99,
    salePrice: 189.99,
    review: 4.6,
    colorVariants: ['White'],
  },
  {
    title: 'Logitech G413 TKL SE',
    description: 'Tenkeyless Mechanical Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g413-se-tkl/g413-se-tkl-gallery-1-new.png?v=1',
    price: 89.99,
    salePrice: 69.99,
    review: 4.5,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G213 Prodigy',
    description: 'RGB Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/g213-finch/g213-gallery-1-nb.png?v=1',
    price: 79.99,
    salePrice: 49.99,
    review: 4.4,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G513 Prodigy',
    description: 'LIGHTSYNC RGB Mechanical Gaming Keyboard with Palmrest.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g513/g513-carbon-gallery-1.png?v=1',
    price: 199.99,
    review: 4.4,
    colorVariants: ['Black'],
  },
  {
    title: 'Logitech G613',
    description: 'Wireless Mechanical Gaming Keyboard.',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g613/g613-gallery-1.png?v=1',
    price: 159.99,
    review: 4.5,
    colorVariants: ['Black'],
  },
];


const logitechMouse = [
  {
    title: 'PRO X SUPERLIGHT 2 DEX',
    description: 'LIGHTSPEED Wireless Gaming Mouse',
    price: 219.99,
    review: 4.9,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2-dex/gallery/pro-x-superlight-2-dex-black-gallery-1.png?v=1',
    colorVariants: ['Black', 'White', 'Magenta'],
  },
  {
    title: 'PRO 2 LIGHTSPEED',
    description: 'Ambidextrous Wireless Gaming Mouse',
    price: 179.99,
    discountPrice: 159.99,
    review: 4.7,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-2-lightspeed/gallery/pro2-lightspeed-black-new-gallery1.png?v=1',
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'G309 LIGHTSPEED - Kamisato Ayaka Edition',
    description: 'Wireless Gaming Mouse - Special Edition',
    price: 99.99,
    review: 4.6,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g309-ayaka-se-mouse/gallery/g309-lightspeed-gallery-1.png?v=1',
    colorVariants: ['Blue', 'White'],
  },
  {
    title: 'PRO X SUPERLIGHT 2',
    description: 'LIGHTSPEED Wireless Gaming Mouse',
    price: 219.99,
    discountPrice: 189.99,
    review: 4.8,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight-2/gallery-5-pro-x-superlight-2-gaming-mouse-black.png?v=1',
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'Logitech G303 Shroud Edition',
    description: 'Wireless Gaming Mouse',
    price: 169.99,
    discountPrice: 99.99,
    review: 4.5,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/shroud-g303/shroud-g303-gallery-1.png?v=1',
    colorVariants: ['Black'],
  },
  {
    title: 'G502 X PLUS GAMING MOUSE',
    description: 'Wireless Gaming Mouse',
    price: 219.99,
    discountPrice: 179.99,
    review: 4.8,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-1-black.png?v=1',
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'G502 X LIGHTSPEED WIRELESS GAMING MOUSE',
    description: 'Wireless Gaming Mouse',
    price: 199.99,
    discountPrice: 149.99,
    review: 4.7,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502x-lightspeed/gallery/g502x-lightspeed-gallery-1-white.png?v=1',
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'PRO Wireless Gaming Mouse',
    description: 'Wireless Gaming Mouse',
    price: 149.99,
    discountPrice: 79.99,
    review: 4.6,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png?v=1',
    colorVariants: ['Black', 'White', 'Pink'],
  },
  {
    title: 'G502 X Gaming Mouse',
    description: 'Wired Gaming Mouse',
    price: 99.99,
    discountPrice: 69.99,
    review: 4.7,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-1-white.png?v=1',
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'G705 Wireless Gaming Mouse',
    description: 'Wireless Gaming Mouse',
    price: 99.99,
    discountPrice: 89.99,
    review: 4.6,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/mouse/g705-wireless-mouse/gallery/g705-gallery-3.png?v=1',
    colorVariants: ['White'],
  },
  {
    title: 'G502 LIGHTSPEED',
    description: 'Wireless Gaming Mouse',
    price: 149.99,
    discountPrice: 109.99,
    review: 4.7,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1',
    colorVariants: ['Black'],
  },
  {
    title: 'G305 LIGHTSPEED',
    description: 'Wireless Gaming Mouse',
    price: 69.99,
    discountPrice: 49.99,
    review: 4.6,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g305/g305-gallery-1.png?v=1',
    colorVariants: ['Black', 'White', 'Purple'],
  },
  {
    title: 'G502 HERO',
    description: 'High Performance Gaming Mouse',
    price: 99.99,
    discountPrice: 49.99,
    review: 4.7,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-2-nb.png?v=1',
    colorVariants: ['Black'],
  },
  {
    title: 'G903',
    description: 'Wireless Gaming Mouse with HERO Sensor',
    price: 179.99,
    discountPrice: 119.99,
    review: 4.7,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g903/g903-gallery-1.png?v=1',
    colorVariants: ['Black'],
  },
  {
    title: 'G703',
    description: 'Wireless Gaming Mouse with HERO Sensor',
    price: 129.99,
    discountPrice: 79.99,
    review: 4.6,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g703/g703-gallery-1.png?v=1',
    colorVariants: ['Black', 'White'],
  },
  {
    title: 'G203 LIGHTSYNC',
    description: 'Gaming Mouse with RGB Lighting',
    price: 49.99,
    discountPrice: 27.99,
    review: 4.5,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/refreshed-g203/g203-blue-gallery-2.png?v=1',
    colorVariants: ['Black', 'White', 'Blue'],
  },
  {
    title: 'G403 HERO',
    description: 'Gaming Mouse with HERO Sensor',
    price: 79.99,
    discountPrice: 49.99,
    review: 4.6,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/non-braid/g403/g403-wired-gallery-1-nb.png?v=1',
    colorVariants: ['Black'],
  },
  {
    title: 'G502 X PLUS Millennium Falcon™ Edition',
    description: 'Gaming Mouse - Special Edition',
    price: 219.99,
    review: 4.9,
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/star-wars-collection/g502-x-plus-millenium-falcon/gallery/g502-x-plus-mf-mouse-gallery-4.png?v=1',
    colorVariants: ['White', 'Black'],
  },
];


const logitechHeadsets = [
  {
    title: 'ASTRO A50 (Gen 5)',
    description: 'LIGHTSPEED Wireless Gaming Headset + Base Station with PLAYSYNC AUDIO',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/a50-gen-5/astro-a50-x-gen-5-black-gallery-1.png?v=1',
    price: 399.99,
    review: 4.7,
    colorVariants: ['Black'],
  },
  {
    title: 'ASTRO A50 X',
    description: 'LIGHTSPEED Wireless Gaming Headset + Base Station',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-black-gallery-1.png?v=1',
    price: 469.99,
    review: 4.8,
    colorVariants: ['Black'],
  },
  {
    title: 'PRO X 2 LIGHTSPEED',
    description: 'LIGHTSPEED Wireless Gaming Headset',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
    price: 279.99,
    review: 4.9,
    colorVariants: ['Black'],
  },
  {
    title: 'G733',
    description: 'LIGHTSPEED Wireless RGB Gaming Headset',
    image: 'https://resource.astrogaming.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/astro/en/products/a50-headset-with-base-station-gen4/a50-gallery-xbox-01.png?v=1',
    price: 149.99,
    review: 4.5,
    colorVariants: ['Black', 'White', 'Blue', 'Lilac'],
  },
  {
    title: 'Astro A30 Wireless',
    description: 'LIGHTSPEED Wireless Gaming Headset for Xbox, PlayStation, PC/MAC and Mobile*',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-black-gallery-1.png?v=1',
    price: 229.99,
    review: 4.6,
    colorVariants: ['White', 'Black'],
  },
  {
    title: 'PRO X SE',
    description: 'Wired Gaming Headset',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-se-wired-gaming-headset/gallery/pro-x-se-key-gallery-1.png?v=1',
    price: 99.99,
    review: 4.4,
    colorVariants: ['Black'],
  },
  {
    title: 'G735',
    description: 'Wireless Gaming Headset',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/audio/g735-wireless-headset/gallery/g735-gallery-1.png?v=1',
    price: 199.99,
    review: 4.7,
    colorVariants: ['White'],
  },
  {
    title: 'PRO X WIRELESS',
    description: 'LIGHTSPEED Gaming Headset',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-wireless/pro-wireless-headset-gallery-1.png?v=1',
    price: 179.99,
    review: 4.8,
    colorVariants: ['Black'],
  },
  {
    title: 'ASTRO A40 TR',
    description: 'Wired Gaming Headset for Xbox, PlayStation, and PC/MAC*',
    image: 'https://resource.astrogaming.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/astro/en/products/a40-tr-gen4/a40-gen4-gallery-xbox-01-refresh.png?v=1',
    price: 139.99,
    review: 4.6,
    colorVariants: ['Black'],
  },
  {
    title: 'G435',
    description: 'LIGHTSPEED Wireless Gaming Headset',
    image: 'https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g435/swatches/g435-gaming-headset-gallery-2-1-black.png?v=1',
    price: 59.99,
    review: 4.3,
    colorVariants: ['Black & Neon Yellow', 'Off-White & Lilac', 'Blue & Raspberry'],
  },
];




function Logitech() {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on load
  }, []);

  return (
    <div className="logitech-page" style={{backgroundColor: 'black', textAlign: 'center', marginTop: '60px' }}>  
      
      {/* Section 1 - Banner */}
      <div className="logitechFirst">
        <BrandBanner
          title="Logitech"
          description="Precision gaming peripherals with cutting-edge technology."
          glowColorStart="#04A5E5"
          glowColorEnd="#00A3E0"
          buttonText="Explore Logitech"
          buttonColor="#04A5E5"
          link="https://www.logitechg.com/en-ca"
        />
      </div>

      {/* Section 2 - Text & Cards */}
      <div className="logitechSecond">
        <Box sx={{ textAlign: 'center', padding: '100px 20px' }}>
          <Typography variant="h2" className="blue-text" sx={{ marginBottom: '30px' }}>
            Explore Gaming Gears
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '50px', color: 'grey' }}>
            Discover cutting-edge peripherals designed for gamers by Logitech.
          </Typography>
          
          <Typography variant="h3" className="blue-text2" sx={{ marginBottom: '40px' }}>
            Popular Products
          </Typography>

          {/* Product Cards Section */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '50px',
            }}
          >
            {logitechProducts.map((product, index) => (
              <SmallCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                review={product.review}
                colorVariants={product.colorVariants}
              />
            ))}
          </Box>
        </Box>
      </div>



      {/* Section 3 - Keyboards Slider */}
      <div className="logitechKeyboard" sx={{backgroundColor: '#111827'}}>
      <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="blue-text" sx={{paddingTop: '15%'}}>
            <b>Keyboard</b>
          </Typography>
        </Box>

      </div>
      <div className="logitechThird">
        <Box>
          <SmallCardSlide products={logitechKeyboards} />
        </Box>
      </div>
      

      <div className="logitechMouse" sx={{backgroundColor: '#04A5E5'}}>
      <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="black-text" sx={{paddingTop: '15%'}}>
            <b>Mouse</b>
          </Typography>
        </Box>

      </div>
      <div className="logitechFourth">
        <Box>
          <SmallCardSlide products={logitechMouse} />
        </Box>
      </div>
      
      <div className="logitechHeadset" sx={{backgroundColor: '#111827'}}>
      <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="blue-text" sx={{paddingTop: '15%'}}>
            <b>Headset</b>
          </Typography>
        </Box>

      </div>
      <div className="logitechThird">
        <Box>
          <SmallCardSlide products={logitechHeadsets} />
        </Box>
      </div>
      
    </div>
  );
}

export default Logitech;
