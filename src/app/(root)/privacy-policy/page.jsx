'use client';
import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const privacy_policy_data = [
  {
    title: 'WHAT KIND OF PERSONAL INFORMATION WE COLLECT AND WHY?',
    paragraphs: [
      `When you visit our website, we automatically collect certain information about your device, including your web browser, IP address, time zone, and the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the web pages or products that you view, the websites or search terms that referred you to the Site, and how you interact with the Site. This information is referred to as “Device Information”.`,

      `We use the Device Information to improve our Site, to understand how our customers use the Site, and to send marketing communications. We also use it to screen for potential risk and fraud.`,

      `When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. This information is referred to as “Order Information”. We use this information to fulfill orders, provide customer service, and send marketing communications.`
    ]
  },
  {
    title: 'HOW WE USE & DISCLOSE/ SHARE YOUR PERSONAL INFORMATION?',
    paragraphs: [
      `We use the Order Information and Device Information to provide and market our services to you, to enhance and develop our relationship with you, and to comply with certain laws and regulations. This may involve sharing your personal information with third parties such as Shopify or Google Analytics for the purpose of providing and marketing our services to you.`,


      `We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.`
    ]
  },
  {
    title: 'YOUR RIGHTS & CHOICES',
    paragraphs: [
      `You have the right to access, correct, update or request deletion of your personal information. If you would like to exercise these rights, please contact us at operations@sckivar.com.`
    ]
  },
  {
    title: 'CHANGES TO THIS PRIVACY POLICY',
    paragraphs: [
      `We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.`
    ]
  },
  {
    title: 'CONTACT US',
    paragraphs: [
      `For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at operations@sckivar.com or by mail using the details provided below:`,
      `Sckivar LLC`,
      `5826 New Territory Blvd`,
      `Sugar Land, TX 77479`,
      `+1 832 500 8872`
    ]
  },


]

const PrivacyPolicy = () => {
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
          Privacy POLICY
        </h2>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-4 md:text-md md:leading-[34px] tracking-wide md:mb-9'>
            {`At Sckivar, we take the protection of our customers' personal
          information very seriously. This Privacy Policy explains what personal
          information we collect, why we collect it, how we use it and how we
          share it.`}
          </p>
        </Fade>

        <div className='space-y-12'>


          {privacy_policy_data.map((elem, elem_index) => {
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

          {/* <div>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h5 className='text-white text-lg mb-3 md:text-2xl md:my-8 fontBlack uppercase'>
                WHAT KIND OF PERSONAL INFORMATION WE COLLECT AND WHY?
              </h5>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
                When you visit our website, we automatically collect certain
                information about your device, including your web browser, IP
                address, time zone, and the cookies that are installed on your
                device. Additionally, as you browse the Site, we collect information
                about the web pages or products that you view, the websites or
                search terms that referred you to the Site, and how you interact
                with the Site. This information is referred to as “Device
                Information”.
              </p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
                We use the Device Information to improve our Site, to understand how
                our customers use the Site, and to send marketing communications. We
                also use it to screen for potential risk and fraud.
              </p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
                When you make a purchase or attempt to make a purchase through the
                Site, we collect certain information from you, including your name,
                billing address, shipping address, payment information, email
                address, and phone number. This information is referred to as “Order
                Information”. We use this information to fulfill orders, provide
                customer service, and send marketing communications.
              </p>
            </Fade>
          </div>


          <div>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
                HOW WE USE & DISCLOSE/ SHARE YOUR PERSONAL INFORMATION?
              </h5>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
                We use the Order Information and Device Information to provide and
                market our services to you, to enhance and develop our relationship
                with you, and to comply with certain laws and regulations. This may
                involve sharing your personal information with third parties such as
                Shopify or Google Analytics for the purpose of providing and
                marketing our services to you.
              </p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
                We may also share your Personal Information to comply with
                applicable laws and regulations, to respond to a subpoena, search
                warrant or other lawful request for information we receive, or to
                otherwise protect our rights.
              </p>
            </Fade>
          </div>


          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
              YOUR RIGHTS & CHOICES
            </h5>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
              You have the right to access, correct, update or request deletion of
              your personal information. If you would like to exercise these
              rights, please contact us at{' '}
              <a
                href='mailto:operations@sckivar.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                operations@sckivar.com
              </a>
              .
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
              CHANGES TO THIS PRIVACY POLICY
            </h5>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons.
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h5 className='text-white text-lg mb-3 md:text-3xl md:my-8 fontBlack uppercase'>
              CONTACT US
            </h5>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please contact
              us by e-mail at operations@sckivar.com or by mail using the details
              provided below:
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
              Sckivar LLC
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
              5826 New Territory Blvd
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-white text-sm mb-3 md:text-md md:leading-[34px] tracking-wide md:mb-5'>
              Sugar Land, TX 77479
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <a
              href='tel:+1 832 500 8872'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5 hover:text-white'
            >
              +1 832 500 8872
            </a>
          </Fade> */}
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
