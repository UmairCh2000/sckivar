'use client';
import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const RefundPolicy = () => {
  return (
    <div
      className='w-full block pt-56 pb-20'
      style={{
        background:
          'url(/assets/images/noiseGif.gif)',
      }}
    >
      <div className='block w-full max-w-6xl mx-auto px-4'>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h2 className='text-white uppercase text-scH1 fontBlack mb-10'>
            REFUND POLICY
          </h2>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            {`At Sckivar, we understand that sometimes things don't go as planned.
          That's why we offer refunds to our customers under certain
          circumstances.`}
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            Refunds will only be provided if we are unable to fulfill the
            services as described in our product/service specifications or if we
            are unable to fix any inferiority in the deliverable.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            Refunds will be issued to the merchant or payment gateway used at
            the time of charge. For example, an order funded via Credit Card
            will be issued a Refund to the account for the Card that was used to
            fund the order. An order funded via PayPal will be issued a Refund
            to the original PayPal account. If the PayPal account is closed, the
            Customer should contact Sckivar for assistance.
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            {`Please note that refunds will not be granted if the service was
          provided/delivered, and our service delivery depends on the team's
          bandwidth and could exceed the mentioned delivery dates without
          notice. Additionally, the refund will not exceed the original price
          paid. Also, delays due to external factors beyond our control will not
          be eligible for refunds.`}
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className='text-white text-sm mb-3 md:text-lg md:leading-[34px] tracking-wide md:mb-5'>
            If you have any questions or concerns about our refund policy,
            please contact us and we will be happy to assist you.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default RefundPolicy;
