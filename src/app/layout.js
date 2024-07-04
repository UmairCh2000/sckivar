import Footer from '@/partials/footer/Footer';
import Header from '@/partials/header/Header';
import '../styles/styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
    <head>
<meta name="msvalidate.01" content="43980900C326CB920B9D23B677B3B6DB" />
</head>
      <body className='poition-relative'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


export default RootLayout
