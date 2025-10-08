import { Calculator, Landmark, Wallet } from 'lucide-react';

export const toolsData = [
  {
    id: 'compound-interest',
    title: {
      en: 'Compound Interest Calculator',
      ne: 'चक्रवृद्धि ब्याज क्याल्कुलेटर',
    },
    shortDescription: {
      en: 'See how your savings can grow over time with the power of compounding.',
      ne: 'चक्रवृद्धिको शक्तिले समयसँगै तपाईंको बचत कसरी बढ्न सक्छ हेर्नुहोस्।',
    },
    longDescription: {
      en: 'Calculate the future value of your investment by providing the initial principal, annual interest rate, and the number of years. This tool helps you visualize the long-term growth of your savings.',
      ne: 'प्रारम्भिक लगानी, वार्षिक ब्याज दर, र वर्षहरूको संख्या प्रदान गरेर तपाईंको लगानीको भविष्यको मूल्य गणना गर्नुहोस्। यो उपकरणले तपाईंलाई आफ्नो बचतको दीर्घकालीन वृद्धि कल्पना गर्न मद्दत गर्दछ।',
    },
    icon: Calculator,
  },
  {
    id: 'emi-calculator',
    title: {
      en: 'Loan/EMI Calculator',
      ne: 'ऋण/ईएमआई क्याल्कुलेटर',
    },
    shortDescription: {
      en: 'Calculate your Equated Monthly Installment (EMI) for loans.',
      ne: 'ऋणको लागि तपाईंको समान मासिक किस्ता (ईएमआई) गणना गर्नुहोस्।',
    },
    longDescription: {
      en: 'Determine your monthly loan payments by entering the loan amount, interest rate, and loan tenure. This is essential for planning your finances when taking out a loan for a car, home, or personal use.',
      ne: 'ऋण रकम, ब्याज दर, र ऋण अवधि प्रविष्ट गरेर आफ्नो मासिक ऋण भुक्तानी निर्धारण गर्नुहोस्। कार, घर, वा व्यक्तिगत प्रयोगको लागि ऋण लिँदा आफ्नो वित्त योजनाको लागि यो आवश्यक छ।',
    },
    icon: Landmark,
  },
  {
    id: 'budget-planner',
    title: {
      en: 'Simple Budgeting Tool',
      ne: 'सरल बजेट उपकरण',
    },
    shortDescription: {
      en: 'Plan your monthly budget to manage your income and expenses effectively.',
      ne: 'आफ्नो आय र खर्च प्रभावकारी रूपमा व्यवस्थापन गर्न आफ्नो मासिक बजेट योजना गर्नुहोस्।',
    },
    longDescription: {
      en: 'A simple tool to help you track your monthly income sources and categorize your expenses. Visualizing where your money goes is the first step towards better financial health and achieving your savings goals.',
      ne: 'तपाईंको मासिक आय स्रोतहरू ट्र्याक गर्न र तपाईंको खर्चहरू वर्गीकरण गर्न मद्दत गर्ने एक सरल उपकरण। तपाईंको पैसा कहाँ जान्छ भनेर कल्पना गर्नु राम्रो वित्तीय स्वास्थ्य र तपाईंको बचत लक्ष्यहरू प्राप्त गर्ने पहिलो चरण हो।',
    },
    icon: Wallet,
  },
];