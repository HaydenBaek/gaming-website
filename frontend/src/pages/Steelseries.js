import React, { useEffect } from 'react';
import '../styles/Steelseries.css';
import BrandBanner from '../components/BrandBanner';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SmallCardSlide from '../components/SmallCardSlide';
import SmallCard from '../components/smallCard';


// Product Data with Price, Review, and Colors
const steelseriesProducts = [
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

const steelseriesKeyboards = [
    {
      title: 'Apex Pro Gen 3',
      description: 'OmniPoint 3.0 Adjustable HyperMagnetic Switches, Rapid Trigger, Protection Mode, Rapid Tap, GG QuickSet game presets',
      price: 329.99,
      review: 4.8,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/64663/e11038d7336b494a97e009478e059f9d.png.350x280_q100_crop-fit_optimize.png',
    },
    {
      title: 'Apex Pro TKL Gen 3',
      description: 'OmniPoint 3.0 Adjustable HyperMagnetic Switches, Rapid Trigger, Protection Mode & Rapid Tap, GG QuickSet Game Presets',
      price: 299.99,
      review: 4.7,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/64744/93beb101d51a42f8bbb2d56beb6f0830.png.350x280_q100_crop-fit_optimize.png',
    },
    {
      title: 'Apex Pro TKL Wireless Gen 3',
      description: 'OmniPoint 3.0 Adjustable HyperMagnetic Switches, Rapid Trigger, Protection Mode, Rapid Tap, GG QuickSet game presets',
      price: 369.99,
      review: 4.9,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/64874/cd5acd1c0d304bebbd34c0247cdbd68e.png.350x280_q100_crop-fit_optimize.png',
    },
    {
      title: 'Apex Pro Mini Wireless',
      description: 'OmniPoint 2.0 Adjustable HyperMagnetic Switches, Rapid Trigger, Full Adjustability',
      price: 224.99,
      review: 4.6,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/6a/7f/6a7f4e59-e124-430c-9523-e835141f1911/apex_pro_mini_wl_img_buy_01.png__500x400_crop-scale_optimize_subsampling-2.png',
    },
    {
      title: 'Apex 7',
      description: 'Durable mechanical switches, OLED Smart Display, Aircraft grade aluminum frame',
      price: 149.99,
      review: 4.5,
      colorVariants: ['black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/26/df/26df0c3b-c866-447b-8d36-22841b770e55/buyimg_apex7_001-v2.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg',
    },
    {
      title: 'Apex 9 TKL',
      description: 'OptiPoint Optical Switches, Fadeproof PBT Keycaps, Aircraft Grade Aluminum Top Plate',
      price: 179.99,
      review: 4.7,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/ce/b5/ceb5909c-9e13-4400-8f9d-1edf6507c245/imgbuy_apex_9_tkl_01.png__500x400_crop-scale_optimize_subsampling-2.png',
    },
    {
      title: 'Apex 3',
      description: 'IP32 water resistant, Whisper quiet gaming switches, Dedicated multimedia controls',
      price: 59.99,
      review: 4.4,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/6e/1f/6e1ffb13-ca94-44ce-843a-1f424bd97d84/buyimg_apex3_001.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg',
    },
    {
      title: 'Apex 3 TKL',
      description: 'Whisper quiet gaming switches, Multimedia controls, IP32 water resistant',
      price: 49.99,
      review: 4.3,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/e8/1b/e81bfae8-a362-4940-bb49-a17545c5a2da/buyimg_apex3_tkl_001.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg',
    },
    {
      title: 'Apex Pro TKL Wireless (2023)',
      description: 'OmniPoint 2.0 Adjustable HyperMagnetic Switches, OLED Smart Display, Rapid Trigger',
      price: 299.99,
      review: 4.8,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/a0/dd/a0dd9d60-1e32-438d-bfa5-5f45220a7def/apex_pro_tkl_wl_black_imgbuy_1.png__500x400_crop-scale_optimize_subsampling-2.png',
    }
  ];
  

  const steelseriesMouse = [
    {
      title: 'Aerox 3 Custom',
      description: 'Fully customizable gaming mouse, Ultra lightweight mouse design, AquaBarrier™ for 360° protection',
      price: 79.99,
      review: 4.6,
      colorVariants: ['white', 'Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/f8/95/f895b996-86e6-47b0-8c2d-71d88e6b2fc8/d_aerox3_black_white_pdp_crosssale.jpg__1320x1320_q100_crop-scale_optimize_subsampling-2.jpg',
    },
    {
      title: 'Aerox 9 Wireless: World of Warcraft Edition',
      description: 'Limited Edition World of Warcraft Anniversary design, Ultra-lightweight 99g MMO/MOBA mouse, 180-hour battery life and fast charging',
      price: 199.99,
      review: 4.7,
      colorVariants: ['Gold'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/47/69/4769a569-20fc-491f-ac2f-632815402465/aerox_9_wl_wow_img_buy_01.png__500x400_crop-scale_optimize_subsampling-2.png',
    },
    {
      title: 'Aerox 3 Wireless FaZe Clan Edition',
      description: 'Limited FaZe Clan design, 3-zone RGB, 68g ultra-lightweight with AquaBarrier™',
      price: 149.99,
      review: 4.5,
      colorVariants: ['Black-Red'],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/62609/8649c13beb5b499eb5223a4eb65f1fb9.png.350x280_q100_crop-fit_optimize.png',
    },
    {
      title: 'Aerox 3 2022 Edition',
      description: 'Dazzling 3-zone RGB design, Ultra lightweight 59g gaming mouse, AquaBarrier™ for 360° protection',
      price: 59.99,
      review: 4.6,
      colorVariants: ['Snow', 'Onyx'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/67/40/67402217-2a02-4bcf-adab-f3b721fb6b94/aerox_3_black_img_buy_01.png__500x400_crop-scale_optimize_subsampling-2.png',
    },
    {
      title: 'Rival 5',
      description: 'Multi-genre gaming mouse, 9 programmable buttons, 85g competitive lightweight and extra durable',
      price: 55.99,
      review: 4.8,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/75/0f/750fa268-8f7e-45de-9c28-92a420934a33/imgbuy_rival5_001.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg',
    },
    {
      title: 'Rival 3 Wireless',
      description: 'Lag-free wireless plus Bluetooth, 400+ hour battery life, Guaranteed 60 million clicks',
      price: 48.99,
      review: 4.4,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/7b/e1/7be12866-e693-406d-a6e6-8f0b4bf0ae35/buyimg_rival3wl_001.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg',
    },
    {
      title: 'Prime Mini Wireless',
      description: 'Prestige OM™ optical magnetic switches, 100+ hour battery life, Ultra-low latency pro-grade wireless',
      price: 118.99,
      review: 4.7,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/11/64/11647905-794d-42e4-a8e1-261844b589bd/buyimg_prime_mini_wl_001.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg',
    },
    {
      title: 'Prime+',
      description: 'Prestige OM™ optical magnetic switches, TrueMove Pro+ sensor, OLED with full customization',
      price: 69.99,
      review: 4.5,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/09/df/09df3c9a-e202-458d-9972-777767810a73/buyimg_prime__001.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg',
    },
    {
      title: 'Aerox 5 Wireless',
      description: 'Ultra lightweight 74g 9-button design, 180-hour battery life, AquaBarrier™ for 360° protection',
      price: 149.99,
      review: 4.9,
      colorVariants: ['Black'],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/96/65/96654d31-c3e4-4813-bc6b-495489d2c5f7/aerox_5_wl_black_img_buy_01.png__500x400_crop-scale_optimize_subsampling-2.png',
    }
  ];
  



  const steelseriesHeadsets = [
    {
      title: "Arctis GameBuds™ for PlayStation US",
      description: "Active Noise Cancellation + 360° Spatial Audio. High-Speed 2.4GHz Wireless + Bluetooth 5.3. 100+ game audio presets with Mobile Companion App.",
      price: 219.99,
      review: 4.0,  // Added a default review value
      colorVariants: ["Black", "White"],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61706/6616fd67726f46a59917d4b9f371b252.png.350x280_q100_crop-fit_optimize.png'
    },
    {
      title: "Arctis Nova 5 Wireless",
      description: "100+ Game Audio Presets with Companion App. 60-hour battery life. Quick-Switch Wireless.",
      price: 149.99,
      review: 4.2,
      colorVariants: ["Black", "White"],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61671/fe2619064c5844fe95a1ade9021179fe.png.350x280_q100_crop-fit_optimize.png'
    },
    {
      title: "Arctis Nova 4 Wireless",
      description: "2.4GHz Wireless. 36 HR Battery with Fast Charge. Multi-platform via USB-C.",
      price: 159.99,
      review: 4.1,
      colorVariants: ["Black"],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61636/d75d3e6609cb44bb98d1ad9227bd6747.png.350x280_q100_crop-fit_optimize.png'
    },
    {
      title: "Arctis Nova 5X Wireless",
      description: "100+ Xbox audio presets with Companion App. 60-hour battery life. Quick-Switch Wireless.",
      price: 149.99,
      review: 4.3,
      colorVariants: ["Black", "White"],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61677/b6c3b352978f4a72b6012e68fdb0ba33.png.350x280_q100_crop-fit_optimize.png'
    },
    {
      title: "Arctis Nova 7: World of Warcraft Edition",
      description: "Limited Edition World of Warcraft Anniversary design. Simultaneous Wireless — Mix 2.4GHz & Bluetooth audio. Multi-platform USB-C dongle for PC, Console, & Mobile.",
      price: 269.99,
      review: 4.5,
      colorVariants: ["Black"],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61557/bd18e7a93dc74a9faab10a1bac00c530.png.350x280_q100_crop-fit_optimize.png'
    },
    {
      title: "Arctis Nova 7 Dragon Edition",
      description: "Limited Edition Year of the Dragon design. Simultaneous Wireless - Mix 2.4GHz & Bluetooth audio. Multi-platform USB-C dongle for PC, Console, & Mobile.",
      price: 269.99,
      review: 4.4,
      colorVariants: ["Black"],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61558/bd18e7a93dc74a9faab10a1bac00c530.png.350x280_q100_crop-fit_optimize.png'
    },
    {
      title: "Arctis Nova 7 FaZe Clan Edition",
      description: "Limited Edition FaZe Clan design. Simultaneous Wireless - Mix 2.4GHz & Bluetooth audio. Multi-platform USB-C dongle for PC, Console, & Mobile.",
      price: 259.99,
      review: 4.3,
      colorVariants: ["Black"],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/e6/92/e692de28-213b-42f8-aaef-80708878eab7/arctis_nova_7_wow_img_buy_01.png__500x400_crop-scale_optimize_subsampling-2.png'
    },
    {
      title: "Arctis Pro Wireless",
      description: "Dual Wireless: 2.4G lossless + Bluetooth. Hi-res capable speaker drivers. Swappable dual-battery system.",
      price: 299.99,
      review: 4.7,
      colorVariants: ["Black", "White"],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/45/2f/452f18cf-5a29-4399-af5a-edbc2a46d87c/arctis_pro_wl_black_livingroom_wide_4k_001.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg'
    },
    {
      title: "Arctis Nova Pro Wireless for Playstation & PC",
      description: "Dual USB supports PlayStation, PC, Mac, Switch, VR, & more. Active Noise Cancellation with Transparency mode. Infinity Power System for unlimited gameplay.",
      price: 399.99,
      review: 4.8,
      colorVariants: ["Black", "White"],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61522/f0c57165394f40fabd13b1d4cbcea56c.png.350x280_q100_crop-fit_optimize.png'
    },
    {
      title: "Arctis Nova Pro Wireless for Xbox & PC",
      description: "Dual USB supports Xbox, PC, Mac, PlayStation, Switch, VR, & more. Active Noise Cancellation with Transparency mode. Infinity Power System for unlimited gameplay.",
      price: 399.99,
      review: 4.8,
      colorVariants: ["Black", "White"],
      image: 'https://media.steelseriescdn.com/thumbs/catalog/items/61525/c8125f1fe6c04259b14b7e698173fc49.png.350x280_q100_crop-fit_optimize.png'
    },
    {
      title: "Arctis Pro + GameDAC",
      description: "High Fidelity digital to analog converter. Audiophile grade sound. Premium Hi-Res speakers.",
      price: 199.99,
      review: 4.6,
      colorVariants: ["Black", "White"],
      image: 'https://media.steelseriescdn.com/thumbs/filer_public/59/60/5960fc13-bb3a-4d93-872a-b97866f83fae/buyimg__arctisprogamedac_black_001.jpg__500x400_q100_crop-scale_optimize_subsampling-2.jpg'
    }
  ];
  



function SteelSeries() {
    useEffect(() => {
      window.scrollTo(0, 0);  // Scroll to top on load
    }, []);
  
    return (
      <div className="steelseries-page" style={{backgroundColor: 'black', textAlign: 'center', marginTop: '30px' }}>  
        
        <div className="steelseriesFirst">
          <BrandBanner
            title="SteelSeries"
            description="We’re All Gamers."
            glowColorStart="#ff5200"
            glowColorEnd="#ff5200"
            buttonText="Explore SteelSeries"
            buttonColor="#ff5200"
            link="https://steelseries.com/"
          />
        </div>
  
        <div className="steelseriesSecond">
          <Box sx={{ textAlign: 'center', padding: '100px 20px' }}>
            <Typography variant="h2" className="explore-text" sx={{ marginBottom: '30px' }}>
              Explore Gaming Gears
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '50px', color: 'grey' }}>
              Discover cutting-edge peripherals designed for gamers by Steelseries.
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
              {steelseriesProducts.map((product, index) => (
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
  
        <div className="steelseriesThird">
          <div sx={{backgroundColor: '#111827'}}>
            <Box sx={{ textAlign: 'center'}}>
              <Typography variant="h2" className="steelseriesKeyboard" sx={{paddingTop: '15%'}}>
                <b>Keyboard</b>
              </Typography>
            </Box>
          </div>
          <div>
            <Box>
              <SmallCardSlide products={steelseriesKeyboards} />
            </Box>
          </div>
        </div>
  
        <div className="steelseriesFourth">
          <div className="steelseriesMouse" sx={{backgroundColor: '#04A5E5'}}>
            <Box sx={{ textAlign: 'center'}}>
              <Typography variant="h2" className="black-text" sx={{paddingTop: '15%'}}>
                <b>Mouse</b>
              </Typography>
            </Box>
          </div>
          <div >
            <Box>
              <SmallCardSlide products={steelseriesMouse} />
            </Box>
          </div>
        </div>
  
        <div className="steelseriesFifth">
          <div className="steelseriesHeadset" sx={{backgroundColor: '#111827'}}>
            <Box sx={{ textAlign: 'center'}}>
              <Typography variant="h2" className="blue-text" sx={{paddingTop: '1%'}}>
                <b>Headset</b>
              </Typography>
            </Box>
          </div>
          <div>
            <Box>
              <SmallCardSlide products={steelseriesHeadsets} />
            </Box>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default SteelSeries;
  