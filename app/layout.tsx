import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "optional",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
})
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400"],
  display: "optional",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
})

export const metadata: Metadata = {
  title: 'Protocolo Filtro Dopamina — Jonathan',
  description: 'Seu cérebro busca dopamina o tempo todo. A questão é de onde ele está buscando. 30 dias para mudar isso.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* Preconnect para recursos críticos de terceiros */}
        <link rel="preconnect" href="https://scripts.converteai.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.converteai.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://stape.filtrodedopamina.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://stape.filtrodedopamina.com/bbuajsfwx.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','1v=ERNbND4sWClAOyo%2FXjI4RA5KVF1bRxEMRREPHx4TGgYdEwkDCwwcDBlZBRwH');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <Script
          id="rastreio-utms"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  const url=new URL(window.location.href);
  const params=new URLSearchParams(url.search);
  const rawPath=window.location.pathname.replace(/^\\/|\\/$/g,"")||"v01";

  let ssVal;
  try{ssVal=sessionStorage.getItem('variante_slug')}catch(e){}
  const varianteSlug=params.get('variante_slug')||rawPath||ssVal||"v01";

  try{sessionStorage.setItem('variante_slug',varianteSlug)}catch(e){}

  window.dataLayer=window.dataLayer||[];
  window.dataLayer.push({event:'variante_loaded',variante_slug:varianteSlug});

  let parametros=["utm_source"];
  for(const[key] of params){if(!parametros.includes(key)){parametros.push(key);}}
  const urlParamsCapt=new URLSearchParams(window.location.search);
  const urlParamsCaptReferrer=new URLSearchParams(document.referrer.split('?')[1]||'');
  let utms={};
  parametros.forEach(el=>{
    if(el==="utm_source"){utms[el]=urlParamsCapt.get(el)??(document.referrer?(urlParamsCaptReferrer.get(el)??new URL(document.referrer).hostname):"direto");}
    else{utms[el]=urlParamsCapt.get(el)??(urlParamsCaptReferrer.get(el)??"")}
  });
  let scks=Object.values(utms).filter(value=>value!=="");
  let currentSckValues=[];
  if(urlParamsCapt.get('sck')){currentSckValues=urlParamsCapt.get('sck').split('|');}
  scks=scks.filter(value=>!currentSckValues.includes(value));

  const updateLinks=(el,elURL)=>{
    const elSearchParams=new URLSearchParams(elURL.search);
    for(let key in utms){if(utms[key]&&!elSearchParams.has(key)){elSearchParams.append(key,utms[key]);}}
    if(!elSearchParams.has('sck')&&scks.length>0){elSearchParams.append('sck',scks.join('|'));}
    elSearchParams.set('variante_slug',varianteSlug);
    return elURL.origin+elURL.pathname+"?"+elSearchParams.toString();
  };

  const processNode=(root)=>{
    root.querySelectorAll('a:not([data-utm-done])').forEach(el=>{
      try{
        const elURL=new URL(el.href);
        if(!elURL.hash){
          el.href=updateLinks(el,elURL);
          el.dataset.utmDone="1";
          if(el.href.indexOf('checkout.')!==-1){
            el.addEventListener('click',()=>{
              window.dataLayer=window.dataLayer||[];
              window.dataLayer.push({event:'initiate_checkout',variante_slug:varianteSlug,checkout_url:el.href});
            });
          }
        }
      }catch(e){}
    });
    root.querySelectorAll('iframe:not([data-utm-done])').forEach(iframe=>{
      try{
        let actualSrc=iframe.hasAttribute('data-src')?iframe.getAttribute('data-src'):iframe.src;
        if(actualSrc){
          const iframeURL=new URL(actualSrc);
          const updated=updateLinks(iframe,iframeURL);
          if(iframe.hasAttribute('data-src')){iframe.setAttribute('data-src',updated);}else{iframe.src=updated;}
          iframe.dataset.utmDone="1";
        }
      }catch(e){}
    });
  };

  const scheduleProcess=(root)=>{
    if('requestIdleCallback' in window){requestIdleCallback(()=>processNode(root),{timeout:200});}
    else{setTimeout(()=>processNode(root),50);}
  };

  scheduleProcess(document);

  let pending=null;
  const observer=new MutationObserver(()=>{
    if(pending)clearTimeout(pending);
    pending=setTimeout(()=>{pending=null;processNode(document);},150);
  });
  observer.observe(document.body,{childList:true,subtree:true});
})();`,
          }}
        />
      </body>
    </html>
  )
}
