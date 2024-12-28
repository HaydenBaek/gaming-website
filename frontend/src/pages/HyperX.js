import React, { useEffect } from 'react';
import '../styles/HyperX.css';
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
const hyperXProducts = [
  {
    title: 'HyperX Pulsefire Haste - Gaming Mouse - Naruto (Black-Orange)',
    description: 'Ultra-lightweight Gaming Mouse.',
    price: 79.99,
    review: 4.7,
    colorVariants: ['Black-Orange'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_haste_naruto_orange_1_main_1512x.jpg?v=1702674996',
  },
  {
    title: 'HyperX Alloy Origins Core',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Red - Linear)',
    price: 75.97,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_alloy_origins_core_us_1_top_down_renamed_0_1512x.jpg?v=1677079143',
  },
  {
    title: 'HyperX Cloud MIX 2 - Gaming Headset (Black)',
    description: 'Premium Wireless Gaming Headset.',
    price: 219.99,
    review: 3.0,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_mix_2_7p5j2aa_main_1_1512x.jpg?v=1726088342',
  },
];

const hyperXKeyboards = [
  {
    title: 'HyperX Alloy Origins Core',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Red - Linear)',
    price: 75.97,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_alloy_origins_core_us_1_top_down_renamed_0_1512x.jpg?v=1677079143',
  },
  {
    title: 'HyperX Alloy Origins',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Red - Linear)',
    price: 154.99,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_alloy_origins_us_1_top_down_1512x.jpg?v=1677100623',
  },
  {
    title: 'HyperX Alloy Origins Core',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Aqua - Tactile)',
    price: 79.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_alloy_origins_core_us_1_top_down_renamed_0_1512x.jpg?v=1677079143',
  },
  {
    title: 'HyperX Alloy Origins Core',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Blue - Clicky)',
    price: 79.99,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_alloy_origins_core_us_1_top_down_renamed_0_1512x.jpg?v=1677079143.com/alloy-origins-core-blue.jpg',
  },
  {
    title: 'HyperX Alloy Core RGB',
    description: 'Gaming Keyboard (Black / English (US) / Membrane)',
    price: 49.47,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_alloy_core_rgb_us_1_main_1512x.jpg?v=1682404916.com/alloy-core-rgb.jpg',
  },
  {
    title: 'HyperX Alloy Origins 60',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Aqua - Tactile)',
    price: 94.97,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_alloy_origins_60_us_1_top_down_renamed_6_1512x.jpg?v=1723155047.com/alloy-origins-60-aqua.jpg',
  },
  {
    title: 'HyperX Alloy Origins 60',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Red – Linear)',
    price: 89.98,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_alloy_origins_60_us_1_top_down_renamed_6_1512x.jpg?v=1723155047.com/alloy-origins-60-red.jpg',
  },
  {
    title: 'HyperX Alloy Origins 65',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Red - Linear)',
    price: 98.97,
    review: 5.0,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_alloy_origins_65_english_us_1_top_down_1512x.jpg?v=1679730114.com/alloy-origins-65-red.jpg',
  },
  {
    title: 'HyperX Alloy Origins',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Blue - Clicky)',
    price: 124.99,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_alloy_origins_us_1_top_down_1512x.jpg?v=1677100623.hyperx.com/alloy-origins-blue.jpg',
  },
  {
    title: 'HyperX Alloy Rise 75',
    description: 'Gaming Keyboard (Black / English (US) / HyperX Red - Linear)',
    price: 169.99,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_alloy_rise_75_us_7g7a4aa_23aba_main_1_1512x.jpg?v=1712084225.com/cdn/shop/products/hyperx_alloy_origins_pbt_english_us_aqua_5_special_1512x.jpg?v=1680707084.hyperx.com/alloy-rise-75.jpg',
  },
  {
    title: 'HyperX Alloy Origins Core PBT HX Aqua',
    description: 'Mechanical Gaming Keyboard (Black / English (US) / HyperX Aqua - Tactile)',
    price: 149.99,
    review: 4.3,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_alloy_origins_core_pbt_english_us_red_1_main_1512x.jpg?v=1680707075.com/alloy-origins-core-pbt-aqua.jpg',
  },
  {
    title: 'HyperX Alloy Rise 75 Wireless',
    description: 'Gaming Keyboard (Black / English (US) / HyperX Red - Linear)',
    price: 329.99,
    review: 0,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_alloy_rise_75_wireless_us_91y91aa_23aba_main_1_1512x.jpg?v=1728071631.com/alloy-rise-75-wireless.jpg',
  }
];

const hyperXMouse = [
  {
    title: 'HyperX Pulsefire Haste - Gaming Mouse - Naruto (Black-Orange)',
    description: 'Ultra-lightweight Gaming Mouse.',
    price: 79.99,
    review: 4.7,
    colorVariants: ['Black-Orange'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_haste_naruto_orange_1_main_1512x.jpg?v=1702674996',
  },
  {
    title: 'HyperX Pulsefire Haste - Gaming Mouse (Black)',
    description: 'Ultra-lightweight Gaming Mouse.',
    price: 39.97,
    review: 4.9,
    colorVariants: ['Black', 'Black-Red', 'White-Pink'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_haste_1_top_down_1512x.jpg?v=1700261055',
  },
  {
    title: 'HyperX Pulsefire Haste - Wireless Gaming Mouse (Black)',
    description: 'Ultra-lightweight Wireless Gaming Mouse.',
    price: 64.99,
    review: 4.5,
    colorVariants: ['Black', 'White-Pink'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_haste_wireless_black_1_top_down_1512x.jpg?v=1702339356',
  },
  {
    title: 'HyperX Pulsefire Core - RGB Gaming Mouse (Black)',
    description: 'RGB Gaming Mouse.',
    price: 19.99,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_core_1_main_1512x.jpg?v=1725866566',
  },
  {
    title: 'HyperX Pulsefire Haste 2 - Wireless Gaming Mouse (Black)',
    description: 'Ultra-lightweight Wireless Gaming Mouse.',
    price: 84.99,
    review: 4.1,
    colorVariants: ['Black', 'White'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_haste_2_wireless_black_main_1_1512x.jpg?v=1700261080',
  },
  {
    title: 'HyperX Pulsefire Haste - Gaming Mouse (Black-Red)',
    description: 'Ultra-lightweight Gaming Mouse.',
    price: 34.99,
    review: 4.9,
    colorVariants: ['Black', 'Black-Red', 'White-Pink'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_haste_black_red_1_top_down_1512x.jpg?v=1700261055',
  },
  {
    title: 'HyperX Pulsefire Haste - Gaming Mouse (White-Pink)',
    description: 'Ultra-lightweight Gaming Mouse.',
    price: 37.99,
    review: 4.9,
    colorVariants: ['Black', 'Black-Red', 'White-Pink'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_haste_white_pink_1_top_down_1512x.jpg?v=1700261055',
  },
  {
    title: 'HyperX Pulsefire Haste 2 - Gaming Mouse (Black)',
    description: 'Ultra-lightweight Gaming Mouse.',
    price: 52.99,
    review: 3.7,
    colorVariants: ['Black', 'White'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_pulsefire_haste_2_black_1_main_1512x.jpg?v=1680531604',
  },
  {
    title: 'HyperX Pulsefire FPS Pro - Gaming Mouse (Black)',
    description: 'FPS Gaming Mouse.',
    price: 45.00,
    review: 4.3,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_pulsefire_fps_pro_1_top_down_1512x.jpg?v=1700568407',
  },
  {
    title: 'HyperX Pulsefire Surge - Gaming Mouse (Black)',
    description: 'RGB Gaming Mouse.',
    price: 54.99,
    review: 4.3,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_pulsefire_surge_1_main_1512x.jpg?v=1677078987',
  }
];



const hyperXHeadsets = [
  {
    title: 'HyperX Cloud MIX 2 - Gaming Headset (Black)',
    description: 'Premium Wireless Gaming Headset.',
    price: 219.99,
    review: 3.0,
    colorVariants: ['Black'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_mix_2_7p5j2aa_main_1_1512x.jpg?v=1726088342',
  },
  {
    title: 'HyperX Cloud III - Gaming Headset (Black-Red)',
    description: 'High-Performance Gaming Headset.',
    price: 94.47,
    review: 4.3,
    colorVariants: ['Black', 'Black-Red'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_iii_red_66x0049_main_1_1512x.jpg?v=1731449786',
  },
  {
    title: 'HyperX Cloud III - Gaming Headset (Black)',
    description: 'High-Performance Gaming Headset.',
    price: 84.99,
    review: 4.3,
    colorVariants: ['Black', 'Black-Red'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_iii_black_66x0048_main_1_1512x.jpg?v=1731449785',
  },
  {
    title: 'HyperX Cloud III Wireless - Gaming Headset (Black)',
    description: 'Wireless Gaming Headset.',
    price: 131.99,
    review: 4.4,
    colorVariants: ['Black', 'Black-Red'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_iii_wireless_black_77z45aa_main_1_1512x.jpg?v=1703528871',
  },
  {
    title: 'HyperX Cloud III Wireless - Gaming Headset (Black-Red)',
    description: 'Wireless Gaming Headset.',
    price: 139.47,
    review: 4.4,
    colorVariants: ['Black', 'Black-Red'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_iii_wireless_red_77z46aa_main_1_1512x.jpg?v=1703528849',
  },
  {
    title: 'HyperX Cloud Alpha - Wireless Gaming Headset (Black-Red)',
    description: 'Wireless Esports Gaming Headset.',
    price: 169.99,
    review: 4.2,
    colorVariants: ['Black-Red'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hx_alpha_w_3_4_1512x.jpg?v=1727172794',
  },
  {
    title: 'HyperX Cloud II - Gaming Headset (Black-Red)',
    description: 'Legendary Wired Gaming Headset.',
    price: 84.99,
    review: 4.6,
    colorVariants: ['Black-Red'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_ii_red_1_main_1512x.jpg?v=1735285823',
  },
  {
    title: 'HyperX Cloud Alpha - Gaming Headset (Black-Red)',
    description: 'Wired Esports Gaming Headset.',
    price: 70.99,
    review: 4.1,
    colorVariants: ['Black-Red'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_alpha_blackred_1_main_1512x.jpg?v=1734341100',
  },
  {
    title: 'HyperX CloudX - Gaming Headset for Xbox (Black-Silver)',
    description: 'Officially Licensed Xbox Headset.',
    price: 42.99,
    review: 4.6,
    colorVariants: ['Black-Silver'],
    image: 'https://ca.hyperx.com/cdn/shop/products/hyperx_cloudx_1_main_1512x.jpg?v=1677079116',
  },
  {
    title: 'HyperX Cloud II Wireless - Gaming Headset (Black-Red)',
    description: 'Wireless Gaming Headset.',
    price: 70.99,
    review: 4.6,
    colorVariants: ['Black-Red'],
    image: 'https://ca.hyperx.com/cdn/shop/files/hyperx_cloud_alpha_blackred_1_main_1512x.jpg?v=1734341100',
  }
];



  function HyperX() {
    useEffect(() => {
      window.scrollTo(0, 0);  // Scroll to top on load
    }, []);
  
    return (
      <div className="hyperX-page" style={{backgroundColor: 'black', textAlign: 'center', marginTop: '30px' }}>  
        
        <div className="hyperXFirst">
          <BrandBanner
            title="HyperX"
            description="We’re All Gamers."
            glowColorStart="#B3B3B3"
            glowColorEnd="#E31837"
            buttonText="Explore HyperX"
            buttonColor="#E31837"
            link="https://www.logitechg.com/en-ca"
          />
        </div>
  
        <div className="hyperXSecond">
          <Box sx={{ textAlign: 'center', padding: '100px 20px' }}>
            <Typography variant="h2" className="explore-text" sx={{ marginBottom: '30px' }}>
              Explore Gaming Gears
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '50px', color: 'grey' }}>
              Discover cutting-edge peripherals designed for gamers by HyperX.
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
              {hyperXProducts.map((product, index) => (
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
  
        <div className="hyperXThird">
          <div sx={{backgroundColor: '#111827'}}>
            <Box sx={{ textAlign: 'center'}}>
              <Typography variant="h2" className="hyperXKeyboard" sx={{paddingTop: '15%'}}>
                <b>Keyboard</b>
              </Typography>
            </Box>
          </div>
          <div>
            <Box>
              <SmallCardSlide products={hyperXKeyboards} />
            </Box>
          </div>
        </div>
  
        <div className="hyperXFourth">
          <div className="hyperXMouse" sx={{backgroundColor: '#04A5E5'}}>
            <Box sx={{ textAlign: 'center'}}>
              <Typography variant="h2" className="black-text" sx={{paddingTop: '15%'}}>
                <b>Mouse</b>
              </Typography>
            </Box>
          </div>
          <div >
            <Box>
              <SmallCardSlide products={hyperXMouse} />
            </Box>
          </div>
        </div>
  
        <div className="hyperXFifth">
          <div className="hyperXHeadset" sx={{backgroundColor: '#111827'}}>
            <Box sx={{ textAlign: 'center'}}>
              <Typography variant="h2" className="blue-text" sx={{paddingTop: '1%'}}>
                <b>Headset</b>
              </Typography>
            </Box>
          </div>
          <div>
            <Box>
              <SmallCardSlide products={hyperXHeadsets} />
            </Box>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default HyperX;
  