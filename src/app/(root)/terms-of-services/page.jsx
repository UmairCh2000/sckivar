'use client';
import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const term_of_services_data = [
  {
    title: 'Service Agreement',
    paragraphs: [
      `Sckivar offers this website and the services provided on it to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here. By using this website and the services offered by Sckivar, you agree to be bound by these terms and conditions.`
    ]
  },
  {
    title: 'Use of Website and Services',
    paragraphs: [
      `You may use this website and the services offered by Sckivar for lawful purposes only. You agree not to use this website or the services offered by Sckivar for any illegal or unauthorized purpose. You also agree not to violate any laws in your jurisdiction, including but not limited to copyright laws.`,
      `You agree not to transmit any worms or viruses or any code of a destructive nature through this website or the services offered by Sckivar. Any breach or violation of these terms and conditions will result in the immediate termination of your use of this website and the services offered by Sckivar.`,
    ]
  },
  {
    title: 'Intellectual Property',
    paragraphs: [
      `The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Sckivar and is protected by international copyright laws. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of this website or the services offered by Sckivar without the express written permission of Sckivar.`
    ]
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      `Sckivar will not be liable for any damages or losses suffered by you as a result of using this website or the services offered by Sckivar, including but not limited to indirect, incidental, special, punitive, or consequential damages.`
    ]
  },
  {
    title: 'Privacy Policy',
    paragraphs: [
      `Sckivar is committed to protecting the privacy of its users. Please refer to our privacy policy for information on how we collect, use, and disclose personal information.`
    ]
  },
  {
    title: 'Privacy Policy',
    paragraphs: [
      `Sckivar is committed to protecting the privacy of its users. Please refer to our privacy policy for information on how we collect, use, and disclose personal information.`
    ]
  },
  {
    title: 'Refund Policy',
    paragraphs: [
      `Sckivar offers refunds in certain circumstances as outlined in our refund policy. Please refer to our refund policy for more information.`
    ]
  },
  {
    title: 'Governing Law and Jurisdiction',
    paragraphs: [
      `These terms and conditions shall be governed and construed in accordance with the laws of the United States of America and any disputes shall be subject to the exclusive jurisdiction of the courts of the United States of America.`
    ]
  },
  {
    title: 'Contact Us',
    paragraphs: [
      `If you have any questions or concerns regarding these terms and conditions, please contact us at operations@sckivar.com or by mail at 5826 New Territory Blvd, Sugar Land, TX 77479, +1 832 500 8872.`
    ]
  },
  {
    title: 'Disclaimer',
    paragraphs: [
      `Sckivar makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.`
    ]
  },



]

const TermOfServices = () => {
  return (
    <div
      className='w-full block pt-56 pb-20'
      style={{
        background:
          'url(/assets/images/noiseGif.gif)',
      }}
    >
      <div className='block w-full max-w-6xl mx-auto px-4'>
      

        <h2 className='text-white uppercase text-5xl fontBlack mb-9'>
        Terms Of Services
        </h2>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-4 md:text-md md:leading-[34px] tracking-wide md:mb-9'>
            {`Welcome to Sckivar's website. By using this website and the services
          offered by Sckivar, you agree to be bound by the following terms and
          conditions. If you do not agree to these terms and conditions, please
          do not use this website or the services offered by Sckivar.`}
          </p>
        </Fade>



        <div className='space-y-12'>


          {term_of_services_data.map((elem, elem_index) => {
            const { title, paragraphs } = elem

            return <div className='space-y-4' key={elem_index}>
              <Fade delay={animation.delay} duration={animation.duration} bottom>
                <h5 className='text-white text-lg md:text-2xl fontBlack uppercase'>
                  {title}
                </h5>
              </Fade>
              <div className='space-y-3'>
                {
                  paragraphs.map((para, para_index) => {
                    return <Fade key={para_index} delay={animation.delay} duration={animation.duration} bottom>
                      <p className='text-white text-sm md:text-md md:leading-[28px] tracking-wide'>
                        {para}
                      </p>
                    </Fade>
                  })
                }
              </div>

            </div>


          })}

        </div>










        {/* <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Service Agreement
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            Sckivar offers this website and the services provided on it to you,
            the user, conditioned upon your acceptance of all terms, conditions,
            policies, and notices stated here. By using this website and the
            services offered by Sckivar, you agree to be bound by these terms
            and conditions.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Use of Website and Services
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            You may use this website and the services offered by Sckivar for
            lawful purposes only. You agree not to use this website or the
            services offered by Sckivar for any illegal or unauthorized purpose.
            You also agree not to violate any laws in your jurisdiction,
            including but not limited to copyright laws.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            You agree not to transmit any worms or viruses or any code of a
            destructive nature through this website or the services offered by
            Sckivar. Any breach or violation of these terms and conditions will
            result in the immediate termination of your use of this website and
            the services offered by Sckivar.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Intellectual Property
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            The content on this website, including but not limited to text,
            graphics, logos, images, and software, is the property of Sckivar
            and is protected by international copyright laws. You agree not to
            reproduce, duplicate, copy, sell, resell or exploit any portion of
            this website or the services offered by Sckivar without the express
            written permission of Sckivar.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Limitation of Liability
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            Sckivar will not be liable for any damages or losses suffered by you
            as a result of using this website or the services offered by
            Sckivar, including but not limited to indirect, incidental, special,
            punitive, or consequential damages.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Privacy Policy
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            Sckivar is committed to protecting the privacy of its users. Please
            refer to our privacy policy for information on how we collect, use,
            and disclose personal information.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Refund Policy
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            Sckivar offers refunds in certain circumstances as outlined in our
            refund policy. Please refer to our refund policy for more
            information.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Governing Law and Jurisdiction
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            These terms and conditions shall be governed and construed in
            accordance with the laws of the United States of America and any
            disputes shall be subject to the exclusive jurisdiction of the
            courts of the United States of America.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Contact Us
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            If you have any questions or concerns regarding these terms and
            conditions, please contact us at operations@sckivar.com or by mail
            at 5826 New Territory Blvd, Sugar Land, TX 77479,{' '}
            <a
              href='tel:+1 832 500 8872'
              target='_blank'
              rel='noopener noreferrer'
            >
              +1 832 500 8872
            </a>
            .
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
            Disclaimer
          </h5>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            Sckivar makes no representations or warranties of any kind, express
            or implied, about the completeness, accuracy, reliability,
            suitability or availability with respect to the website or the
            information, products, services, or related graphics contained on
            the website for any purpose. Any reliance you place on such
            information is therefore strictly at your own risk.
          </p>
        </Fade> */}
      </div>
    </div>
  );
};

export default TermOfServices;
