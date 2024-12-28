import React, { useEffect } from 'react';
import '../styles/Razer.css';
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
    title: 'Razer Viper V3 Pro',
    description: 'Ultra-lightweight Wireless Symmetrical Esports Gaming Mouse.',
    price: 159,
    review: 4.9,
    colorVariants: ['Black','white'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/9fd641835510958a2951b1e004bedec3/500x500-razer-viper-v3-pro.webp',
  },
  {
    title: 'Razer Huntsman V3 Pro',
    description: 'Analog Optical Esports Keyboard.',
    price: 399,
    review: 4.9,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/5330432bc718cd8deb4f652df8f2fbd3/razer-huntsman-v3-pro-500x500.webp',
  },
  {
    title: 'Razer Barracuda Pro',
    description: 'Wireless Multi-Platform Gaming Headset with Hybrid ANC.',
    price: 249,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/eacc83c0643ed2da8c9e98968f8aa215/headset-landingpg-500x500-barracudapro.jpg',
  },
];

const razerKeyboards = [
  {
    title: 'Razer Huntsman V3 Pro',
    description: 'Analog Optical Esports Keyboard.',
    price: 399,
    review: 4.9,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/5330432bc718cd8deb4f652df8f2fbd3/razer-huntsman-v3-pro-500x500.webp',
  },
  {
    title: 'Razer Huntsman V3 Pro Tenkeyless',
    description: 'Tenkeyless Analog Optical Esports Keyboard.',
    price: 349,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/5330432bc718cd8deb4f652df8f2fbd3/razer-huntsman-v3-pro-tkl-500x500.webp',
  },
  {
    title: 'Razer Huntsman V3 Pro Mini',
    description: '60% Analog Optical Esports Keyboard.',
    price: 329,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/5330432bc718cd8deb4f652df8f2fbd3/razer-huntsman-v3-pro-mini-500x500.webp',
  },
  {
    title: 'Razer Huntsman Mini',
    description: '60% Gaming Keyboard with Razer™ Optical Switch.',
    price: 139,
    review: 4.6,
    colorVariants: ['Black', 'Mercury'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/5330432bc718cd8deb4f652df8f2fbd3/razer-huntsman-mini-500x500.webp',
  },
  {
    title: 'Razer BlackWidow V4 Pro 75%',
    description: 'Wireless Hot-swappable Gaming Keyboard.',
    price: 249,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/0e4bddef60314a55842d31fc0c11397b/razer-blackwidow-v4-pro-75-500x500.webp',
  },
  {
    title: 'Razer BlackWidow V4 Pro',
    description: 'Mechanical Gaming Keyboard with Razer Chroma RGB.',
    price: 229,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/21c7f663fd0f53f5fdda9ba662c8858c/razer-blackwidow-v4.webp',
  },
  {
    title: 'Razer BlackWidow V4 75%',
    description: 'Hot-swappable Mechanical Gaming Keyboard.',
    price: 219,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/0e4bddef60314a55842d31fc0c11397b/razer-blakwidow-v4-75-500x500.webp',
  },
  {
    title: 'Razer BlackWidow V4',
    description: 'Mechanical Gaming Keyboard with Razer Chroma RGB.',
    price: 209,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/21c7f663fd0f53f5fdda9ba662c8858c/razer-blackwidow-v4_category_500x500.webp',
  },
  {
    title: 'Razer BlackWidow V4 X',
    description: 'Mechanical Gaming Keyboard with Razer Chroma RGB.',
    price: 189,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/21c7f663fd0f53f5fdda9ba662c8858c/razer-blackwidow-v4-x_category_500x500.webp',
  },
  {
    title: 'Razer BlackWidow V3 Tenkeyless',
    description: 'Compact Mechanical Keyboard with Razer Chroma RGB.',
    price: 129,
    review: 4.4,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/9d40721c726f4372eae0d54504be7b54/razer-blackwidow-v3-tenkeyless_500x500.webp',
  },
  {
    title: 'Razer DeathStalker V2 Pro',
    description: 'Wireless Low-Profile Optical Gaming Keyboard with Razer Chroma™ RGB.',
    price: 249,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/d0c96c73ab30a35e1f3119f56596b0f4/deathstalker-v2-pro-4-500x500.webp',
  },
  {
    title: 'Razer DeathStalker V2 Pro Tenkeyless',
    description: 'Wireless Low-Profile Tenkeyless Optical Gaming Keyboard with Razer Chroma™ RGB.',
    price: 229,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/d0c96c73ab30a35e1f3119f56596b0f4/deathstalker-v2-pro-tkl-4-500x500.webp',
  },
  {
    title: 'Razer DeathStalker V2',
    description: 'Low-Profile Optical Gaming Keyboard with Razer Chroma™ RGB.',
    price: 199,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/a54bdf79abdfc0d42a0fff19047725a3/deathstalker-v2_500x500.webp',
  },
  {
    title: 'Razer Ornata V3',
    description: 'Low-profile Mecha-membrane RGB Keyboard.',
    price: 99,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/af826d2feba4d6574c40c9287941d567/ornata-v3-500x500.webp',
  },
  {
    title: 'Razer Ornata V3 Tenkeyless',
    description: 'Low-profile Tenkeyless Mecha-membrane Keyboard with Razer Chroma™ RGB.',
    price: 89,
    review: 4.4,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/de6ce7e06c41bccba06d1b161be52490/ornata-v3-tenkeyless-500x500.webp',
  },
  {
    title: 'Razer Taratarus Pro',
    description: 'Specialized gaming keypads with 32 fully programmable keys that are engineered to perfectly fit your hand for ultimate control.',
    price: 109.99,
    review: 4.5,
    colorVariants: ['Black', "White"],
    image: 'https://assets3.razerzone.com/mzdQoExY8lBf_r6rmoSfWj8q40Y=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh62%2Fh9c%2F9081145884702%2FTartaturs-Pro-Black-500x500.png'
  }
];


const razerMouse = [
  {
    title: 'Razer Viper V3 Pro',
    description: 'Ultra-lightweight Wireless Symmetrical Esports Gaming Mouse.',
    price: 159,
    review: 4.9,
    colorVariants: ['Black','white'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/9fd641835510958a2951b1e004bedec3/500x500-razer-viper-v3-pro.webp',
  },
  {
    title: 'Razer DeathAdder V3 Pro',
    description: 'Ultra-lightweight Wireless Ergonomic Esports Mouse.',
    price: 149,
    review: 4.8,
    colorVariants: ['Black','white'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/9fd641835510958a2951b1e004bedec3/500x500-razer-deathadder-v3-pro.webp',
  },
  {
    title: 'Razer Viper Mini Signature Edition',
    description: 'Ultra-High-End Wireless Gaming Mouse.',
    price: 279,
    review: 4.9,
    colorVariants: ['white'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/9fd641835510958a2951b1e004bedec3/razer-viper-mini-special-edition-500x500.webp',
  },
  {
    title: 'Razer Cobra Pro',
    description: 'Customizable Wireless Gaming Mouse with Razer Chroma™ RGB.',
    price: 129,
    review: 4.7,
    colorVariants: ['Black', 'white'],
    image: 'https://assets3.razerzone.com/lLDWCiKBI1aYsdrwOqCXPoU923M=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhd2%2Fh36%2F9592669503518%2F230629-cobra-pro-1500x1000-1.jpg',
  },
  {
    title: 'Razer Basilisk V3 Pro 35K',
    description: 'Fully Customizable Wireless Ergonomic Gaming Mouse.',
    price: 159,
    review: 4.8,
    colorVariants: ['Black', 'white'],
    image: 'https://assets3.razerzone.com/laksrfEC1Edzex-9zPaKaKp0QLE=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh23%2Fhee%2F9821719920670%2F241001-basilisk-v3-pro-35k-1500x1000-2.jpg',
  },
  {
    title: 'Razer Naga V2 Pro',
    description: 'MMO Wireless Gaming Mouse with HyperScroll Pro Wheel.',
    price: 179,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/c174e90e94ab3f247fa562eaecc282b4/500x500-razer-naga-v2-pro.webp',
  },
  {
    title: 'Razer Naga Left-Handed Edition',
    description: 'Ergonomic MMO Gaming Mouse for Left‑Handed Users.',
    price: 149,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/c174e90e94ab3f247fa562eaecc282b4/500x500-razer-naga-left-handed.webp',
  },
  {
    title: 'Razer Orochi V2',
    description: 'Mobile Wireless Gaming Mouse with up to 950 Hours of Battery Life.',
    price: 69,
    review: 4.5,
    colorVariants: ['Black', 'White'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/c174e90e94ab3f247fa562eaecc282b4/500x500-razer-orochi-v2.webp',
  }
];


const razerHeadsets = [
  {
    title: 'Razer Barracuda Pro',
    description: 'Wireless Multi-Platform Gaming Headset with Hybrid ANC.',
    price: 249,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/eacc83c0643ed2da8c9e98968f8aa215/headset-landingpg-500x500-barracudapro.jpg',
  },
  {
    title: 'Razer Barracuda',
    description: 'Wireless Multi-Platform Gaming and Mobile Headset.',
    price: 169,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/eacc83c0643ed2da8c9e98968f8aa215/headset-landingpg-500x500-barracuda.jpg',
  },
  {
    title: 'Razer Barracuda X Chroma',
    description: 'Wireless Multi-Platform Gaming Headset.',
    price: 149,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/eacc83c0643ed2da8c9e98968f8aa215/headset-landingpg-500x500-barracuda-x-chroma.webp',
  },
  {
    title: 'Razer Barracuda X',
    description: 'Wireless Multi-platform Gaming and Mobile Headset.',
    price: 129,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/eacc83c0643ed2da8c9e98968f8aa215/headset-landingpg-500x500-barracudax.jpg',
  },
  {
    title: 'Razer Kraken V4 Pro',
    description: 'Wireless Gaming Headset with Control Hub.',
    price: 249,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/725e74dcdcd6b8abcba3d5eca5d31809/razer-kraken-v4-pro-500x500.webp',
  },
  {
    title: 'Razer Kraken V4',
    description: 'Wireless Gaming Headset.',
    price: 199,
    review: 4.7,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/725e74dcdcd6b8abcba3d5eca5d31809/razer-kraken-v4-500x500.webp',
  },
  {
    title: 'Razer Kraken V4 X',
    description: 'Wired Gaming Headset.',
    price: 149,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/725e74dcdcd6b8abcba3d5eca5d31809/razer-kraken-v4-x-500x500.webp',
  },
  {
    title: 'Razer BlackShark V2 Pro',
    description: 'The definitive esports gaming headset. Unleashed.',
    price: 199,
    review: 4.9,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2pro2023.jpg',
  },
  {
    title: 'Razer BlackShark V2 Hyperspeed',
    description: 'Wireless Ultra-Lightweight Esports Headset.',
    price: 179,
    review: 4.8,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/500x500-blackshark-v2-hyperspeed.webp',
  },
  {
    title: 'Razer BlackShark V2 X USB',
    description: 'Wired esports headset with noise-cancelling mic.',
    price: 99,
    review: 4.6,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/blackshark-v2-x-usb-500x500-category.jpg',
  },
  {
    title: 'Razer BlackShark V2 X',
    description: 'Multi-platform wired esports headset.',
    price: 79,
    review: 4.5,
    colorVariants: ['Black'],
    image: 'https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2x.jpg',
  }
];


function Razer() {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on load
  }, []);

  return (
    <div className="razer-page" style={{backgroundColor: 'black', textAlign: 'center', marginTop: '30px' }}>  
      
      <div className="razerFirst">
        <BrandBanner
          title="Razer"
          description="For Gamers. By Gamers."
          glowColorStart="#66B933"
          glowColorEnd="#66B933"
          buttonText="Explore Razer"
          buttonColor="#66B933"
          link="https://www.logitechg.com/en-ca"
        />
      </div>

      <div className="razerSecond">
        <Box sx={{ textAlign: 'center', padding: '100px 20px' }}>
          <Typography variant="h2" className="green-text" sx={{ marginBottom: '30px' }}>
            Explore Gaming Gears
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '50px', color: 'grey' }}>
            Discover cutting-edge peripherals designed for gamers by Logitech.
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

      <div className="razerThird">

      <div  sx={{backgroundColor: '#111827'}}>
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="razerKeyboard" sx={{paddingTop: '15%'}}>
            <b>Keyboard</b>
          </Typography>
        </Box>
      </div>
      <div>
        <Box>
          <SmallCardSlide products={razerKeyboards} />
        </Box>
      </div>


      </div>

      <div className="razerFourth">
      <div className="razerMouse" sx={{backgroundColor: '#04A5E5'}}>
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="black-text" sx={{paddingTop: '15%'}}>
            <b>Mouse</b>
          </Typography>
        </Box>
      </div>
      <div >
        <Box>
          <SmallCardSlide products={razerMouse} />
        </Box>
      </div>

      </div>

      <div className="razerFifth">
      <div className="razerHeadset" sx={{backgroundColor: '#111827'}}>
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant="h2" className="blue-text" sx={{paddingTop: '1%'}}>
            <b>Headset</b>
          </Typography>
        </Box>
      </div>
      <div>
        <Box>
          <SmallCardSlide products={razerHeadsets} />
        </Box>
      </div>
    </div>


      </div>
      


  );
}

export default Razer;
