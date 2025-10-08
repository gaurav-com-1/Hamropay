export type GlossaryTerm = {
  id: number;
  term: {
    en: string;
    ne: string;
  };
  definition: {
    en: string;
    ne: string;
  };
};

// This new list combines your original data with the new, much larger list.
export const glossaryData: GlossaryTerm[] = [
  {
    id: 1,
    term: {
      en: 'KYC (Know Your Customer)',
      ne: 'KYC (आफ्नो ग्राहक चिन्नुहोस्)',
    },
    definition: {
      en: 'A mandatory process for financial institutions to verify the identity of their customers. This helps prevent fraud, money laundering, and other illegal activities. For digital wallets, this usually involves submitting a photo of your citizenship or passport.',
      ne: 'वित्तीय संस्थाहरूले आफ्ना ग्राहकहरूको पहिचान प्रमाणित गर्न अनिवार्य प्रक्रिया। यसले जालसाजी, मनी लान्ड्रिङ, र अन्य अवैध गतिविधिहरू रोक्न मद्दत गर्दछ। डिजिटल वालेटहरूको लागि, यसमा सामान्यतया तपाईंको नागरिकता वा राहदानीको फोटो पेश गर्नु समावेश छ।',
    },
  },
  {
    id: 2,
    term: {
      en: 'OTP (One-Time Password)',
      ne: 'OTP (एक-पटक पासवर्ड)',
    },
    definition: {
      en: 'A temporary, secure code sent to your phone or email that is valid for only one login session or transaction. It adds an extra layer of security to your accounts.',
      ne: 'तपाईंको फोन वा इमेलमा पठाइएको एक अस्थायी, सुरक्षित कोड जुन केवल एक लगइन सत्र वा लेनदेनको लागि मान्य हुन्छ। यसले तपाईंको खाताहरूमा सुरक्षाको अतिरिक्त तह थप्छ।',
    },
  },
  {
    id: 3,
    term: {
      en: 'QR Code Payment',
      ne: 'QR कोड भुक्तानी',
    },
    definition: {
      en: "A 'Quick Response' code is a type of matrix barcode. In payments, you scan a merchant's QR code with your wallet's app to make a quick and contactless payment.",
      ne: "'क्विक रेस्पोन्स' कोड एक प्रकारको म्याट्रिक्स बारकोड हो। भुक्तानीहरूमा, तपाईंले छिटो र सम्पर्करहित भुक्तानी गर्न आफ्नो वालेटको एपमार्फत व्यापारीको QR कोड स्क्यान गर्नुहुन्छ।",
    },
  },
  {
    id: 4,
    term: {
      en: 'Two-Factor Authentication (2FA)',
      ne: 'दुई-कारक प्रमाणीकरण (2FA)',
    },
    definition: {
      en: 'An extra layer of security that requires users to verify their identity using two different methods, such as a password and a code sent to their phone.',
      ne: 'एक अतिरिक्त सुरक्षा तह जसमा प्रयोगकर्ताले आफ्नो पहिचान प्रमाणित गर्न दुई फरक विधिहरू प्रयोग गर्नुपर्छ, जस्तै पासवर्ड र फोनमा पठाइएको कोड।',
    },
  },
  {
    id: 5,
    term: {
      en: 'Digital Wallet',
      ne: 'डिजिटल वालेट',
    },
    definition: {
      en: 'An electronic device or online service that allows individuals to make electronic transactions, store payment information, and sometimes hold digital identification.',
      ne: 'एक इलेक्ट्रोनिक उपकरण वा अनलाइन सेवा जसले व्यक्तिलाई इलेक्ट्रोनिक कारोबार गर्न, भुक्तानी जानकारी भण्डारण गर्न, र कहिलेकाहीं डिजिटल पहिचान राख्न अनुमति दिन्छ।',
    },
  },
  {
    id: 6,
    term: {
      en: 'Mobile Banking',
      ne: 'मोबाइल बैंकिङ',
    },
    definition: {
      en: 'A service provided by a bank that allows customers to conduct financial transactions remotely using a mobile device.',
      ne: 'बैंकले प्रदान गर्ने सेवा जसले ग्राहकहरूलाई मोबाइल उपकरण प्रयोग गरी टाढाबाट वित्तीय कारोबार गर्न अनुमति दिन्छ।',
    },
  },
  {
    id: 7,
    term: {
      en: 'NFC Payment',
      ne: 'NFC भुक्तानी',
    },
    definition: {
      en: 'Near Field Communication payment allows contactless transactions by tapping your phone or card near a compatible payment terminal.',
      ne: 'नियर फिल्ड कम्युनिकेशन भुक्तानीले तपाईंको फोन वा कार्डलाई अनुकूल भुक्तानी टर्मिनलको नजिक ट्याप गरेर सम्पर्करहित कारोबार गर्न अनुमति दिन्छ।',
    },
  },
  {
    id: 8,
    term: {
      en: 'Payment Gateway',
      ne: 'भुक्तानी गेटवे',
    },
    definition: {
      en: 'A service that processes credit card or digital payments for online and offline businesses.',
      ne: 'अनलाइन र अफलाइन व्यवसायहरूको लागि क्रेडिट कार्ड वा डिजिटल भुक्तानी प्रक्रिया गर्ने सेवा।',
    },
  },
  {
    id: 9,
    term: {
      en: 'Remittance',
      ne: 'रेमिट्यान्स',
    },
    definition: {
      en: 'Money sent from one person to another, often across countries, using banks, digital wallets, or money transfer services.',
      ne: 'बैंक, डिजिटल वालेट, वा पैसा पठाउने सेवाहरू प्रयोग गरी प्रायः देशपार पठाइने रकम।',
    },
  },
  {
    id: 10,
    term: {
      en: 'Transaction History',
      ne: 'कारोबार इतिहास',
    },
    definition: {
      en: 'A record of all financial transactions made by a user, including payments, transfers, and deposits.',
      ne: 'प्रयोगकर्ताले गरेको सबै वित्तीय कारोबारहरूको रेकर्ड, जसमा भुक्तानी, स्थानान्तरण, र जम्मा समावेश हुन्छ।',
    },
  },
  {
    id: 11,
    term: {
      en: 'Interest Rate',
      ne: 'डाटा एन्क्रिप्शन',
    },
    definition: {
      en: 'The percentage charged by a lender to a borrower for the use of money, or paid to a saver for keeping money in a bank.',
      ne: 'जानकारीलाई कोडमा परिवर्तन गर्ने प्रक्रिया ताकि अनधिकृत व्यक्तिहरूले पढ्न वा पहुँच गर्न नसकून्।',
    },
  },
  {
    id: 12,
    term: {
      en: 'Credit Score',
      ne: 'पासवर्ड म्यानेजर',
    },
    definition: {
      en: "A numerical rating that represents a person's creditworthiness, based on their past borrowing and repayment history.",
      ne: 'एक सफ्टवेयर उपकरण जसले प्रयोगकर्ताका सबै पासवर्डहरू सुरक्षित रूपमा भण्डारण र व्यवस्थापन गर्छ।',
    },
  },
  {
    id: 13,
    term: {
      en: 'Debit Card',
      ne: 'बायोमेट्रिक प्रमाणीकरण',
    },
    definition: {
      en: 'A payment card that deducts money directly from a consumer’s checking account to pay for a purchase.',
      ne: 'औंलाछाप, अनुहार पहिचान, वा अन्य जैविक विशेषताहरू प्रयोग गरेर पहिचान प्रमाणित गर्ने विधि।',
    },
  },
  {
    id: 14,
    term: {
      en: 'Credit Card',
      ne: 'फिनटेक',
    },
    definition: {
      en: 'A payment card issued by a bank that allows the cardholder to borrow funds to pay for goods and services.',
      ne: 'वित्तीय प्रविधि जसले बैंकिङ, भुक्तानी, वा लगानी जस्ता सेवाहरूलाई डिजिटल रूपमा सुधार गर्छ।',
    },
  },
  {
    id: 15,
    term: {
      en: 'Bill Payment',
      ne: 'मोबाइल टप-अप',
    },
    definition: {
      en: 'The process of paying for utilities, services, or products either online or offline.',
      ne: 'मोबाइल फोनको ब्यालेन्स डिजिटल वालेट वा बैंकबाट रिचार्ज गर्ने प्रक्रिया।',
    },
  },
  {
    id: 16,
    term: {
      en: 'Peer-to-Peer Payment',
      ne: 'भर्चुअल कार्ड',
    },
    definition: {
      en: 'A method of transferring money directly between two people using a digital wallet or app.',
      ne: 'अनलाइन खरीदका लागि प्रयोग हुने अस्थायी डिजिटल भुक्तानी कार्ड।',
    },
  },
  {
    id: 17,
    term: {
      en: 'Merchant Account',
      ne: 'क्रिप्टोकरेंसी',
    },
    definition: {
      en: 'A type of bank account that allows businesses to accept and process electronic payments.',
      ne: 'ब्लकचेन प्रविधिमा आधारित डिजिटल मुद्रा, जस्तै बिटक्वाइन वा इथेरियम।',
    },
  },
  {
    id: 18,
    term: {
      en: 'Cashback',
      ne: 'ब्लकचेन',
    },
    definition: {
      en: 'A reward where a percentage of the amount spent is returned to the buyer, often as a wallet balance or bank deposit.',
      ne: 'विकेन्द्रित, सुरक्षित, र पारदर्शी डिजिटल लेजर प्रणाली।',
    },
  },
  {
    id: 19,
    term: {
      en: 'Overdraft',
      ne: 'वित्तीय साक्षरता',
    },
    definition: {
      en: 'A situation where you withdraw more money than you have in your account, often leading to fees.',
      ne: 'वित्तीय व्यवस्थापन र सचेत निर्णय लिन आवश्यक ज्ञान र सीप।',
    },
  },
  {
    id: 20,
    term: {
      en: 'Fraud Alert',
      ne: 'स्मार्ट कन्क्ट्र्याक्ट',
    },
    definition: {
      en: "A warning placed on a user's account to prevent unauthorized or suspicious activity.",
      ne: 'ब्लकचेनमा स्वतः कार्यान्वयन हुने डिजिटल सम्झौता।',
    },
  },
  {
    id: 21,
    term: {
      en: 'Mobile Money',
      ne: 'सुरक्षा टोकन',
    },
    definition: {
      en: 'A technology that allows people to receive, store, and spend money using a mobile phone.',
      ne: 'डिजिटल सम्पत्ति जसले वास्तविक सम्पत्ति वा अधिकारको स्वामित्व प्रतिनिधित्व गर्छ।',
    },
  },
  {
    id: 22,
    term: {
      en: 'Payment Processor',
      ne: 'ई-इनभ्वाइस',
    },
    definition: {
      en: 'A company that handles transactions between merchants and customers by processing payment details.',
      ne: 'इलेक्ट्रोनिक रूपमा पठाइएको र भुक्तानी गर्न मिल्ने डिजिटल बिल।',
    },
  },
  {
    id: 23,
    term: {
      en: 'Account Number',
      ne: 'ब्यालेन्स अलर्ट',
    },
    definition: {
      en: 'A unique number assigned by a bank to identify a specific account.',
      ne: 'खाताको ब्यालेन्स निश्चित स्तर भन्दा तल जाँदा पठाइने सूचना।',
    },
  },
  {
    id: 24,
    term: {
      en: 'SWIFT Code',
      ne: 'माइक्रोपेमेंट',
    },
    definition: {
      en: 'An international bank code that identifies specific banks worldwide, used for international transfers.',
      ne: 'सानो रकमको डिजिटल भुक्तानी, प्रायः अनलाइन सेवाहरूका लागि।',
    },
  },
  {
    id: 25,
    term: {
      en: 'IBAN (International Bank Account Number)',
      ne: 'डिजिटल ऋण',
    },
    definition: {
      en: 'A standardized international numbering system to identify bank accounts across countries.',
      ne: 'पूर्ण रूपमा अनलाइन आवेदन र स्वीकृति हुने ऋण सेवा।',
    },
  },
  {
    id: 26,
    term: {
      en: 'Balance',
      ne: 'फ्रड डिटेक्सन सिस्टम',
    },
    definition: {
      en: 'The amount of money currently available in an account.',
      ne: 'शंकास्पद गतिविधि पहिचान गर्ने सफ्टवेयर प्रणाली।',
    },
  },
  {
    id: 27,
    term: {
      en: 'Deposit',
      ne: 'अटो डेबिट',
    },
    definition: {
      en: 'Placing money into a bank account.',
      ne: 'बैंक वा वालेटबाट निश्चित समयमा रकम स्वचालित रूपमा काट्ने सुविधा।',
    },
  },
  {
    id: 28,
    term: {
      en: 'Withdrawal',
      ne: 'पेमेंट प्रोसेसर',
    },
    definition: {
      en: 'Taking money out of a bank account.',
      ne: 'व्यापारी र बैंकबीचको भुक्तानी प्रक्रिया गर्ने सेवा प्रदायक।',
    },
  },
  {
    id: 29,
    term: {
      en: 'Service Charge',
      ne: 'UPI (युनिफाइड पेमेंट्स इन्टरफेस)',
    },
    definition: {
      en: 'A fee charged by a bank or service provider for using its services.',
      ne: 'मोबाइल एप मार्फत बैंक खाताहरू बीच तत्काल रकम स्थानान्तरण गर्ने प्रणाली।',
    },
  },
  {
    id: 30,
    term: {
      en: 'Security Question',
      ne: 'ई-वाणिज्य',
    },
    definition: {
      en: "A personal question used to verify a user's identity.",
      ne: 'इन्टरनेटमार्फत सामान वा सेवाको खरिद-बिक्री प्रक्रिया।',
    },
  },
  {
    id: 31,
    term: {
      en: 'PIN (Personal Identification Number)',
      ne: 'ग्राहक सहायता',
    },
    definition: {
      en: 'A numeric code used to authenticate a user for transactions.',
      ne: 'सेवा वा उत्पादनको प्रयोगका क्रममा प्रयोगकर्तालाई दिइने सहयोग र जानकारी।',
    },
  },
  {
    id: 32,
    term: {
      en: 'Cheque',
      ne: 'API (एप्लिकेशन प्रोग्रामिङ इन्टरफेस)',
    },
    definition: {
      en: "A written order directing a bank to pay a specific amount from one person's account to another.",
      ne: 'विभिन्न सफ्टवेयर अनुप्रयोगहरूलाई आपसमा संवाद गर्न दिने नियमहरूको सेट।',
    },
  },
  {
    id: 33,
    term: {
      en: 'Standing Order',
      ne: 'साइबर सुरक्षा',
    },
    definition: {
      en: 'An instruction to a bank to pay a set amount at regular intervals.',
      ne: 'अनलाइन प्रणाली, नेटवर्क, र डाटालाई ह्याक वा क्षति हुनबाट बचाउने अभ्यास।',
    },
  },
  {
    id: 34,
    term: {
      en: 'Direct Debit',
      ne: 'फिसिङ आक्रमण',
    },
    definition: {
      en: "An arrangement that allows a third party to transfer money from a customer's account on agreed dates.",
      ne: 'धोखाधडीपूर्ण इमेल वा सन्देश प्रयोग गरेर संवेदनशील जानकारी चोर्ने प्रयास।',
    },
  },
  {
    id: 35,
    term: {
      en: 'Digital Signature',
      ne: 'मालवेयर',
    },
    definition: {
      en: 'An encrypted code used to verify the authenticity and integrity of a message or document.',
      ne: 'हानिकारक सफ्टवेयर जसले कम्प्युटर वा मोबाइल प्रणालीलाई क्षति पुर्याउँछ।',
    },
  },
  {
    id: 36,
    term: {
      en: 'Blockchain',
      ne: 'स्पाइवेयर',
    },
    definition: {
      en: 'A digital ledger technology used to record transactions securely and transparently.',
      ne: 'प्रयोगकर्ताको गतिविधि गोप्य रूपमा ट्र्याक गर्ने हानिकारक सफ्टवेयर।',
    },
  },
  {
    id: 37,
    term: {
      en: 'Cryptocurrency',
      ne: 'र्यान्समवेयर',
    },
    definition: {
      en: 'A digital currency that uses cryptography for security and operates independently of a central bank.',
      ne: 'फाइलहरू एन्क्रिप्ट गरी फिर्ता गर्न फिरौती माग्ने सफ्टवेयर।',
    },
  },
  {
    id: 38,
    term: {
      en: 'Tokenization',
      ne: 'क्लाउड स्टोरेज',
    },
    definition: {
      en: 'Replacing sensitive data with unique symbols or tokens to protect it.',
      ne: 'अनलाइन सर्वरमा डाटा सुरक्षित रूपमा भण्डारण गर्ने सेवा।',
    },
  },
  {
    id: 39,
    term: {
      en: 'Chargeback',
      ne: 'फायरवाल',
    },
    definition: {
      en: 'A reversal of a payment made by a customer, usually due to disputes or fraud.',
      ne: 'नेटवर्क ट्राफिक फिल्टर गर्ने र अनधिकृत पहुँच रोक्ने सुरक्षा प्रणाली।',
    },
  },
  {
    id: 40,
    term: {
      en: 'AML (Anti-Money Laundering)',
      ne: 'VPN (भर्चुअल प्राइभेट नेटवर्क)',
    },
    definition: {
      en: 'Regulations and procedures to prevent the generation of income through illegal actions.',
      ne: 'इन्टरनेट कनेक्शनलाई एन्क्रिप्ट गरी प्रयोगकर्ताको लोकेशन र डाटा सुरक्षित गर्ने सेवा।',
    },
  },
  {
    id: 41,
    term: {
      en: 'CVC/CVV',
      ne: 'डिजिटल पहिचान',
    },
    definition: {
      en: 'The three or four-digit code on a payment card used for verification.',
      ne: 'अनलाइनमा प्रयोगकर्तालाई पहिचान गर्न प्रयोग हुने डिजिटल प्रमाणहरू।',
    },
  },
  {
    id: 42,
    term: {
      en: 'Virtual Card',
      ne: 'दुई-स्टेप भेरिफिकेशन',
    },
    definition: {
      en: 'A digital version of a payment card used for online purchases.',
      ne: 'लगइन प्रक्रियामा अतिरिक्त सुरक्षा तह थप्ने प्रमाणीकरण विधि।',
    },
  },
  {
    id: 43,
    term: {
      en: 'E-commerce',
      ne: 'पेमेन्ट लिंक',
    },
    definition: {
      en: 'The buying and selling of goods or services over the internet.',
      ne: 'ग्राहकलाई अनलाइन भुक्तानी गर्न पठाइने सुरक्षित URL।',
    },
  },
  {
    id: 44,
    term: {
      en: 'POS (Point of Sale)',
      ne: 'चालु खाता',
    },
    definition: {
      en: 'The place where a retail transaction is completed.',
      ne: 'दैनिक कारोबारका लागि प्रयोग हुने बैंक खाता।',
    },
  },
  {
    id: 45,
    term: {
      en: 'Settlement',
      ne: 'बचत खाता',
    },
    definition: {
      en: 'The process of transferring funds from the buyer’s bank to the seller’s bank.',
      ne: 'रकम बचत गर्न र ब्याज कमाउन प्रयोग हुने बैंक खाता।',
    },
  },
  {
    id: 46,
    term: {
      en: 'Escrow',
      ne: 'मनि ट्रान्सफर सेवा',
    },
    definition: {
      en: 'A financial arrangement where a third party holds funds until both parties meet the agreement terms.',
      ne: 'एक स्थानबाट अर्को स्थानमा रकम पठाउने सेवा।',
    },
  },
  {
    id: 47,
    term: {
      en: 'Over-the-Counter (OTC)',
      ne: 'अन्तर्राष्ट्रिय भुक्तानी',
    },
    definition: {
      en: 'A transaction done directly between two parties without an exchange.',
      ne: 'विभिन्न देशहरू बीचको वित्तीय कारोबार।',
    },
  },
  {
    id: 48,
    term: {
      en: 'Account Freeze',
      ne: 'चेक',
    },
    definition: {
      en: 'When a bank or financial institution temporarily restricts access to an account.',
      ne: 'लेखित भुक्तानी आदेश जसले बैंकलाई खाताबाट रकम भुक्तानी गर्न निर्देशन दिन्छ।',
    },
  },
  {
    id: 49,
    term: {
      en: 'Interest-Free Period',
      ne: 'ड्राफ्ट',
    },
    definition: {
      en: 'The time during which no interest is charged on borrowed money if paid in full.',
      ne: 'बैंकले जारी गरेको सुरक्षित भुक्तानी आदेश।',
    },
  },
  {
    id: 50,
    term: {
      en: 'Microfinance',
      ne: 'ई-टोकन',
    },
    definition: {
      en: 'Financial services provided to low-income individuals or those without access to banking.',
      ne: 'अनलाइन सेवामा प्रमाणीकरण गर्न प्रयोग हुने डिजिटल कोड।',
    },
  },
  {
    id: 51,
    term: {
      en: 'Mobile Top-Up',
      ne: 'इन्टरनेट बैंकिङ',
    },
    definition: {
      en: 'Adding credit to a mobile phone account through cash, card, or digital wallet.',
      ne: 'वेब ब्राउजर प्रयोग गरी बैंक सेवाहरू पहुँच गर्ने सुविधा।',
    },
  },
  {
    id: 52,
    term: {
      en: 'Utility Payment',
      ne: 'पेमेन्ट भेरिफिकेशन',
    },
    definition: {
      en: 'Paying for services like water, electricity, and gas through banks or wallets.',
      ne: 'भुक्तानी सफल भएको पुष्टि गर्ने प्रक्रिया।',
    },
  },
  {
    id: 53,
    term: {
      en: 'Cross-Border Payment',
      ne: 'लेजर',
    },
    definition: {
      en: 'A financial transaction where the payer and recipient are in different countries.',
      ne: 'वित्तीय कारोबारहरूको रेकर्ड राख्ने किताब वा प्रणाली।',
    },
  },
  {
    id: 54,
    term: {
      en: 'Foreign Exchange (Forex)',
      ne: 'मर्चेन्ट पोर्टल',
    },
    definition: {
      en: 'The trading of different currencies in the global market.',
      ne: 'व्यापारीले आफ्नो भुक्तानी, बिक्री, र ग्राहक जानकारी व्यवस्थापन गर्न प्रयोग गर्ने अनलाइन प्लेटफर्म।',
    },
  },
  {
    id: 55,
    term: {
      en: 'Exchange Rate',
      ne: 'रिचार्ज',
    },
    definition: {
      en: 'The value of one currency compared to another.',
      ne: 'मोबाइल, इन्टरनेट वा अन्य सेवाको ब्यालेन्स पुनः भर्ने प्रक्रिया।',
    },
  },
  {
    id: 56,
    term: {
      en: 'Biometric Authentication',
      ne: 'ई-वाउचर',
    },
    definition: {
      en: 'Verifying identity using physical traits like fingerprints or facial recognition.',
      ne: 'डिजिटल रूपमा उपलब्ध गराइने छुट कुपन।',
    },
  },
  {
    id: 57,
    term: {
      en: 'Password Manager',
      ne: 'लिमिट',
    },
    definition: {
      en: 'A tool that stores and encrypts passwords securely.',
      ne: 'खातामा गर्न सकिने अधिकतम रकम वा कारोबारको सीमा।',
    },
  },
  {
    id: 58,
    term: {
      en: 'Contactless Payment',
      ne: 'सर्ट कोड',
    },
    definition: {
      en: 'A payment method where you tap a card or phone instead of swiping or inserting it.',
      ne: 'बैंक वा वित्तीय संस्थाको पहिचानका लागि प्रयोग हुने छोटो नम्बर।',
    },
  },
  {
    id: 59,
    term: {
      en: 'Digital Loan',
      ne: 'IFSC कोड',
    },
    definition: {
      en: 'A loan that is applied for, approved, and disbursed through digital platforms.',
      ne: 'भारतीय बैंक शाखाहरूको पहिचानका लागि प्रयोग हुने अद्वितीय कोड।',
    },
  },
  {
    id: 60,
    term: {
      en: 'Over-the-Air (OTA) Update',
      ne: 'SWIFT कोड',
    },
    definition: {
      en: 'Wireless delivery of software updates to devices, including payment apps.',
      ne: 'अन्तर्राष्ट्रिय बैंक पहिचानका लागि प्रयोग हुने अद्वितीय कोड।',
    },
  },
  {
    id: 61,
    term: {
      en: 'Virtual Bank',
      ne: 'खाता संख्या',
    },
    definition: {
      en: 'A bank that operates entirely online without physical branches.',
      ne: 'ग्राहकको बैंक खाताको अद्वितीय नम्बर।',
    },
  },
  {
    id: 62,
    term: {
      en: 'Neobank',
      ne: 'ई-म्यान्डेट',
    },
    definition: {
      en: 'A digital-only bank that offers financial services via mobile and web platforms.',
      ne: 'अनलाइन भुक्तानी वा डेबिटको स्वीकृति दिने डिजिटल अनुमति।',
    },
  },
  {
    id: 63,
    term: {
      en: 'Multi-Currency Wallet',
      ne: 'डिजिटल हस्ताक्षर',
    },
    definition: {
      en: 'A wallet that can store and transact in multiple currencies.',
      ne: 'डिजिटल कागजात वा कारोबार प्रमाणित गर्न प्रयोग हुने एन्क्रिप्टेड हस्ताक्षर।',
    },
  },
  {
    id: 64,
    term: {
      en: 'Split Payment',
      ne: 'भर्चुअल बैंक',
    },
    definition: {
      en: 'Dividing a single payment among multiple payers or payment methods.',
      ne: 'पूर्ण रूपमा अनलाइन सञ्चालन हुने बैंक, जसको कुनै भौतिक शाखा हुँदैन।',
    },
  },
  {
    id: 65,
    term: {
      en: 'Recurring Payment',
      ne: 'क्यासलेस अर्थव्यवस्था',
    },
    definition: {
      en: 'An automated payment that occurs regularly, such as subscriptions.',
      ne: 'भुक्तानीका लागि नगदको सट्टा डिजिटल माध्यम प्रयोग हुने आर्थिक प्रणाली।',
    },
  },
  {
    id: 66,
    term: {
      en: 'Loyalty Program',
      ne: 'लोयल्टी प्रोग्राम',
    },
    definition: {
      en: 'A rewards system encouraging customers to return and shop again.',
      ne: 'ग्राहकहरूलाई फिर्ता आउन र फेरि किनमेल गर्न प्रोत्साहित गर्ने पुरस्कार प्रणाली।',
    },
  },
  {
    id: 67,
    term: {
      en: 'Transaction Fee',
      ne: 'लेनदेन शुल्क',
    },
    definition: {
      en: 'A small charge applied when making a payment or transfer.',
      ne: 'भुक्तानी वा स्थानान्तरण गर्दा लाग्ने सानो शुल्क।',
    },
  },
  {
    id: 68,
    term: {
      en: 'Financial Literacy',
      ne: 'वित्तीय साक्षरता',
    },
    definition: {
      en: 'The knowledge and skills needed to manage personal finances effectively.',
      ne: 'व्यक्तिगत वित्तलाई प्रभावकारी रूपमा व्यवस्थापन गर्न आवश्यक ज्ञान र सीपहरू।',
    },
  },
  {
    id: 69,
    term: {
      en: 'Secure Socket Layer (SSL)',
      ne: 'SSL (Secure Socket Layer)',
    },
    definition: {
      en: 'A security protocol for establishing encrypted links between a web server and browser.',
      ne: 'वेब सर्भर र ब्राउजर बीच ईन्क्रिप्टेड लिङ्कहरू स्थापना गर्नका लागि एक सुरक्षा प्रोटोकल।',
    },
  },
];