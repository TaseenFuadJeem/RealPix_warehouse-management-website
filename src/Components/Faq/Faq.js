import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import faq from '../../Assets/faq.png';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Slide } from 'react-reveal';

const Faq = () => {

    // Accordion.allowZeroExpanded = true;

    return (
        <div className='lg:px-32 mb-24'>
            <h1 className='text-center text-4xl font-semibold mt-28'>Frequently Asked Questions</h1>
            <div className='grid lg:grid-cols-2 gap-x-5'>
                <Slide left>
                    <div>
                        <img src={faq} alt="" />
                    </div>
                </Slide>

                <Slide right>
                    <div className='flex items-center justify-center'>
                        <div className='w-full'>
                            <Accordion allowZeroExpanded={true}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            WHAT IS YOUR SHIPPING POLICY?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            For Orders Under $98 Incl GST; The standard freight charge on all orders is $9.90 Flat Fee Australia Wide.

                                            For Orders Over $98* Incl GST; Shipping is Free! (*only to an Australian delivery address and excludes bulky items. See below for bulky items)
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            WHAT PAYMENT METHODS DO YOU ACCEPT?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            We accept pay on collection at store. We also accept PayPal, Credit/debit card (VISA & Mastercard), Bank transfer/deposit and Cheque/money order. We're always looking for new and innovative ways to help our customers, so if you'd like to pay using an alternative method, please let us know - we may be able to help.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            CREDIT CARD SECURITY
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            If you choose to pay for your order by credit card, you can be assured that we employ the latest security measures to ensure the safety of your details. We use eWAY for our online credit card processing facility and they provide the most secure encryptions for online businesses. This includes, but is not limited to: <strong>We do not store your credit card details. We will never ask you to email your credit card number to us (although we may ask for additional information to verify the details provided at order time). If your order is over $300 in value and or its your first time ordering with us; we will do additional security checks with you to ensure you are the genuine credit card owner that has been used. One our sales team members will get in touch with you to verify some information.</strong>
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            WHAT WARRANTY IS PROVIDED?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            All products are genuine, Australian-sourced products and are provided with full manufacturer''s warranty. This will vary between products, but is typically 12 months cover against manufacturing failure, in some cases like Canon, Nikon and Olympus Cameras and Lenses its 2 Years Warranty.

                                            All warranties are issued on a ''return to base'' basis. I.e. you will be responsible for the cost of returning the goods to us or the manufacturer if a claim is necessary.

                                            For more information on warranty periods and additional information available, send us an email or call us on 02 9558 3116
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Faq;