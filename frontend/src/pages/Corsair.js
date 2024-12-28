import React, { useEffect } from 'react';
import '../styles/Corsair.css';
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
const razerProducts = [
  {
    title: 'NIGHTSABRE WIRELESS RGB Gaming Mouse',
    description: 'Wireless RGB gaming mouse with tunable FPS/MOBA settings.',
    price: 219.99,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/CH-931B011/NIGHTSABRE_WIRELESS_Artboard01_AB.webp',
  },
  {
    title: 'K70 PRO TKL High-Performance Hall Effect Gaming Keyboard',
    description: 'TKL gaming keyboard with Rapid Trigger.',
    price: 269.99,
    review: 4.8,
    colorVariants: ['Black', 'White'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/K70-PRO-TKL-APAC/Gallery/CH-911951G-NA/K70_PRO_TKL_PBT_BLACK_RENDER_01.webp',
  },
  {
    title: 'CORSAIR HS55 & HS65 series Headsets',
    description: 'High-quality audio and comfort from the HS55 & HS65 series.',
    price: 69.99,
    review: 4.7,
    colorVariants: ['Black', 'White'],
    image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/pages/Headsets-lp/series-hs55-hs65.png',
  },
];

const corsairKeyboards = [
  {
    title: 'K70 PRO TKL High-Performance Hall Effect Gaming Keyboard',
    description: 'TKL gaming keyboard with Rapid Trigger.',
    price: 269.99,
    review: 4.8,
    colorVariants: ['Black', 'White'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/K70-PRO-TKL-APAC/Gallery/CH-911951G-NA/K70_PRO_TKL_PBT_BLACK_RENDER_01.webp',
  },
  {
    title: 'K65 PLUS WIRELESS 75% RGB Mechanical Gaming Keyboard – COD BLACK OPS 6 EDITION',
    description: 'Wireless mechanical keyboard, Call of Duty edition.',
    price: 249.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/COD/Gallery/CH-91D471E-NA/CH-91D471E-NA_10.webp',
  },
  {
    title: 'K70 CORE TKL RGB Mechanical Gaming Keyboard',
    description: 'Compact TKL RGB mechanical keyboard.',
    price: 149.99,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/base-k70-core-tkl-config/gallery/CH-911911E-NA/K70_CORE_TKL_01.webp',
  },
  {
    title: 'K65 PLUS WIRELESS TACTILE 75% RGB Mechanical Gaming Keyboard',
    description: 'Wireless tactile RGB mechanical keyboard.',
    price: 249.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/k65-plus-wireless-tactile/CH-91D441F/NA/CH-91D441F-NA_01.webp',
  },
  {
    title: 'K70 CORE RGB Mechanical Gaming Keyboard — Carbon Gray',
    description: 'Carbon Gray mechanical keyboard with RGB.',
    price: 169.99,
    review: 4.7,
    colorVariants: ['Gray'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/k70-core/Gallery/CH-9109B1E/NA/K70_CORE_CRBN_GRY_01.webp',
  },
  {
    title: 'K55 CORE RGB Gaming Keyboard — Black',
    description: 'Budget-friendly RGB gaming keyboard.',
    price: 69.99,
    review: 4.4,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/base-k55-rgb-pro-xt-config/Gallery/K55_RGB_PRO_XT_01.webp',
  },
  {
    title: 'K70 CORE SE RGB Mechanical Keyboard with Palm Rest — White',
    description: 'White edition with palm rest.',
    price: 169.99,
    review: 4.8,
    colorVariants: ['White'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/k70-core/Gallery/CH-9109E1E-NA/K70_CORE_SE_DKCHERRY_01.webp',
  },
  {
    title: 'K70 MAX RGB Magnetic-Mechanical Gaming Keyboard',
    description: 'Adjustable MGX switches.',
    price: 249.99,
    review: 4.9,
    colorVariants: ['Steel Grey'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/k70-core/Gallery/CH-910981E/CH-910981E_01.webp',
  },
  {
    title: 'K65 PRO MINI RGB 65% Optical-Mechanical Gaming Keyboard',
    description: 'Compact 65% optical-mechanical keyboard.',
    price: 119.99,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/k70-max/CH-910961G-NA/CH-910961G_01.webp',
  },
  {
    title: 'K100 AIR WIRELESS RGB Ultra-Thin Mechanical Keyboard',
    description: 'Ultra-thin CHERRY MX Low Profile switches.',
    price: 289.99,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-91A401A/Gallery/K65_PRO_Mini_PBT_01.webp',
  },
  {
    title: 'K70 PRO RGB Optical-Mechanical Gaming Keyboard',
    description: 'PBT double-shot keycaps, CHERRY MX switches.',
    price: 209.99,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-911901A-NA/Gallery/CH-911901A-NA_01.webp',
  },
  {
    title: 'K60 PRO TKL RGB Tenkeyless Gaming Keyboard',
    description: 'Tenkeyless with CORSAIR OPX switches.',
    price: 149.99,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-911D01A-NA/Gallery/CH-911D01A-NA_01.webp',
  },
  {
    title: 'K70 PRO MINI WIRELESS 60% Mechanical CHERRY MX Speed',
    description: 'Wireless 60% keyboard with MX Speed switches.',
    price: 174.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-9189014-NA/Gallery/K70_PRO_MINI_WIRELESS_PBT_01.webp',
  },
  {
    title: 'K65 RGB MINI 60% Mechanical Gaming Keyboard',
    description: 'CHERRY MX Speed and RGB.',
    price: 159.99,
    review: 4.7,
    colorVariants: ['Black', 'White'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-9194114-NA/Gallery/K65_RGB_MINI_WHITE_01.webp',
  },
  {
    title: 'K100 RGB Optical-Mechanical Gaming Keyboard - Midnight Gold',
    description: 'Premium optical-mechanical keyboard.',
    price: 349.99,
    review: 4.9,
    colorVariants: ['Gold'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-912A014-NA/Gallery/K100_RGB_01.webp',
  },
  {
    title: 'K55 RGB PRO XT Gaming Keyboard',
    description: 'PRO XT version of the K55.',
    price: 109.99,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-9226765-NA/Gallery/K55_RGB_PRO_01.webp',
  },
  {
    title: 'K55 RGB PRO Gaming Keyboard',
    description: 'Budget-friendly RGB keyboard.',
    price: 69.99,
    review: 4.4,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-9226765-NA/Gallery/K55_RGB_PRO_01.webp',
  },
  {
    title: 'K60 RGB PRO SE Mechanical Gaming Keyboard',
    description: 'Full-size CHERRY MV switches.',
    price: 149.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/base-k60-rgb-pro-se-config/Gallery/K60_RGB_PRO_SE_01.webp',
  },
  {
    title: 'K57 RGB WIRELESS Gaming Keyboard',
    description: 'Wireless RGB gaming keyboard.',
    price: 154.99,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Keyboards/CH-925C015-NA/Gallery/K57_RGB_WIRELESS_NA_01.webp',
  },
];



const corsairMouse = [
  {
    title: 'NIGHTSABRE WIRELESS RGB Gaming Mouse',
    description: 'Wireless RGB gaming mouse with tunable FPS/MOBA settings.',
    price: 219.99,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/CH-931B011/NIGHTSABRE_WIRELESS_Artboard01_AB.webp',
  },
  {
    title: 'DARKSTAR WIRELESS RGB MMO Gaming Mouse',
    description: 'Wireless MMO gaming mouse with programmable buttons.',
    price: 174.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/CH-931A011/DARKSTAR_WIRELESS_01.webp',
  },
  {
    title: 'M65 RGB ULTRA WIRELESS Tunable FPS Gaming Mouse',
    description: 'Wireless FPS gaming mouse with tunable weight and precision.',
    price: 144.99,
    review: 4.6,
    colorVariants: ['Black', 'White'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-m65-rgb-ultra-wireless-2-config/Gallery/M65_RGB_ULTRA_WIRELESS_BLK_01.webp',
  },

  {
    title: 'SABRE RGB PRO CHAMPION SERIES Ultra-Light FPS/MOBA Gaming Mouse',
    description: 'Ultra-lightweight gaming mouse designed for FPS/MOBA.',
    price: 89.99,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-sabre-rgb-pro-champion/Gallery/CH-9303111_01.webp',
  },
  {
    title: 'SCIMITAR RGB ELITE Optical MOBA/MMO Gaming Mouse',
    description: 'Optical MMO gaming mouse with 12 programmable side buttons.',
    price: 94.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/CH-9304211-NA/Gallery/Scimitar_ELITE_BLK_01.webp',
  },
  {
    title: 'M75 WIRELESS Lightweight RGB Gaming Mouse – CALL OF DUTY® BLACK OPS 6 EDITION',
    description: 'Call of Duty edition wireless lightweight RGB mouse.',
    price: 189.99,
    review: 4.9,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/COD/Gallery/CH-931D11D-NA/CH-931D11D-NA_01.webp',
  },
  {
    title: 'DARK CORE RGB PRO Wireless Gaming Mouse',
    description: 'Wireless gaming mouse with high precision and RGB lighting.',
    price: 124.99,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/CH-9315411-NA/Gallery/DARK_CORE_RGB_PRO_01.webp',
  },
  {
    title: 'KATAR ELITE WIRELESS Gaming Mouse',
    description: 'Wireless ultra-light gaming mouse for precision gaming.',
    price: 89.99,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-katar-elite-wireless-config/Gallery/KATAR_ELITE_WIRELESS_01.webp',
  },
  {
    title: 'M55 WIRELESS Gaming Mouse',
    description: 'Wireless gaming mouse with versatile grip design.',
    price: 64.99,
    review: 4.4,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-m55-wireless-config/gallery/black/M55_WIRELESS_BLK_01.webp',
  },
  {
    title: 'M55 Lightweight Gaming Mouse',
    description: 'Ultra-lightweight gaming mouse with high durability.',
    price: 49.99,
    review: 4.3,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-m55-wired-config/gallery/black/M55_WIRED_BLK_01.webp',
  },
  {
    title: 'M75 WIRELESS Lightweight RGB Gaming Mouse, Black',
    description: 'Wireless RGB mouse with lightweight design.',
    price: 119.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-m75-wireless-config/gallery/black/M75_WIRELESS_BLACK_01.webp',
  },
  {
    title: 'M75 Lightweight RGB Gaming Mouse',
    description: 'Lightweight RGB gaming mouse for fast-paced gaming.',
    price: 69.99,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-m75-wired-config/black/gallery/M75_BLACK_01.webp',
  },
  {
    title: 'M75 AIR WIRELESS Ultra-Lightweight Gaming Mouse — White',
    description: 'Ultra-light wireless mouse for extreme portability.',
    price: 149.99,
    review: 4.8,
    colorVariants: ['White', 'Gray', 'Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/m75-air-wireless/CH-931D101-NA/M75_AIR_WHITE_01.webp',
  },
  {
    title: 'M75 AIR Wireless Launch Edition Bundle',
    description: 'Launch edition bundle of the M75 AIR wireless mouse.',
    price: 269.99,
    review: 4.9,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/CH-931DA03/M75_AIR_WIRELESS_LE_01.webp',
  },
  {
    title: 'SCIMITAR ELITE WIRELESS MMO Gaming Mouse',
    description: 'Elite wireless MMO mouse with customizable side keys.',
    price: 124.99,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/scimitar-elite-wireless/SCIMITAR_ELITE_WIRELESS_01.webp',
  },
  {
    title: 'KATAR PRO XT Ultra-Light Gaming Mouse',
    description: 'Ultra-light gaming mouse with advanced optical sensor.',
    price: 44.99,
    review: 4.2,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-katar-pro-xt-config/Gallery/KATAR_PRO_XT_01.webp',
  },
  {
    title: 'KATAR PRO Ultra-Light Gaming Mouse',
    description: 'Pro-level ultra-light gaming mouse.',
    price: 34.99,
    review: 4.1,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-katar-pro-config/Gallery/KATAR_PRO_WIRED_01.webp',
  },
  {
    title: 'KATAR PRO Wireless Gaming Mouse',
    description: 'Wireless version of the KATAR PRO gaming mouse.',
    price: 69.99,
    review: 4.4,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/base-katar-pro-wireless-config/Gallery/KATAR_PRO_WIRELESS_01.webp',
  },
  {
    title: 'DARK CORE RGB PRO SE Wireless Gaming Mouse',
    description: 'Wireless gaming mouse with Qi wireless charging support.',
    price: 124.99,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/CH-9315511-NA/Gallery/DARK_CORE_RGB_PRO_SE_01.webp',
  }
];



const corsairHeadsets = [
  {
    title: 'CORSAIR HS55 & HS65 series Headsets',
    description: 'High-quality audio and comfort from the HS55 & HS65 series.',
    price: 69.99,
    review: 4.7,
    colorVariants: ['Black', 'White'],
    image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/pages/Headsets-lp/series-hs55-hs65.png',
  },
  {
    title: 'VOID series Headsets',
    description: 'Immersive sound and wireless freedom with VOID series.',
    price: 109.99,
    review: 4.6,
    colorVariants: ['Black', 'White', 'Red'],
    image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/pages/Headsets-lp/series-void.png',
  },
  {
    title: 'HS80 series Headsets',
    description: 'Premium build and superior sound quality from the HS80 series.',
    price: 134.99,
    review: 4.8,
    colorVariants: ['Black', 'White'],
    image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/pages/Headsets-lp/series-hs80.png',
  },
  {
    title: 'VIRTUOSO series Headsets',
    description: 'Flagship headset series delivering high-fidelity audio.',
    price: 209.99,
    review: 4.9,
    colorVariants: ['Black', 'White', 'Gunmetal'],
    image: 'https://assets.corsair.com/image/upload/f_auto,q_auto/pages/Headsets-lp/series-virtuoso.png',
  }
];


function Corsair() {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on load
  }, []);

  return (
    <div className="corsair-page" style={{backgroundColor: 'black', textAlign: 'center', marginTop: '30px' }}>  
      
      <div className="corsairFirst">
        <BrandBanner
          title="Corsair"
          description="PLAY TO YOUR LEVEL"
          glowColorStart="#FFD700"
          glowColorEnd="#FFD700"
          buttonText="Explore Corsair"
          buttonColor="#FFD700"
          link="https://www.corsair.com/ca/en?srsltid=AfmBOopNV9_uf_jFOcBWjVNrorr2l_riuDzu42GB-1Nd7Lqg7t4goPqd"
        />
      </div>

      <div className="corsairSecond">
        <Box sx={{ textAlign: 'center', padding: '100px 20px' }}>
          <Typography variant="h2" className="green-text" sx={{ marginBottom: '30px' }}>
            Explore Gaming Gears
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '50px', color: 'grey' }}>
            Discover cutting-edge peripherals designed for gamers by Corsair.
          </Typography>
          
          <Typography variant="h3" className="blue-text2" sx={{ marginBottom: '40px' }}>
            Popular Products
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '50px',
            }}
          >
            {razerProducts.map((product, index) => (
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

      <div className="corsairThird">

      <div  sx={{backgroundColor: '#111827'}}>
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="corsairKeyboard" sx={{paddingTop: '15%'}}>
            <b>Keyboard</b>
          </Typography>
        </Box>
      </div>
      <div>
        <Box>
          <SmallCardSlide products={corsairKeyboards} />
        </Box>
      </div>


      </div>

      <div className="corsairFourth">
      <div className="corsairMouse" sx={{backgroundColor: '#04A5E5'}}>
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="black-text" sx={{paddingTop: '15%'}}>
            <b>Mouse</b>
          </Typography>
        </Box>
      </div>
      <div >
        <Box>
          <SmallCardSlide products={corsairMouse} />
        </Box>
      </div>

      </div>

      <div className="corsairFifth">
      <div className="corsairHeadset" sx={{backgroundColor: '#111827'}}>
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="yellow-text" sx={{paddingTop: '1%'}}>
            <b>Headset</b>
          </Typography>
        </Box>
      </div>
      <div>
        <Box>
          <SmallCardSlide products={corsairHeadsets} />
        </Box>
      </div>
    </div>


      </div>
      


  );
}

export default Corsair;

