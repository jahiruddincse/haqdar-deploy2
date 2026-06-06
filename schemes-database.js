/* Government Schemes – Documents Required Reference (30 schemes) */
function _doc(id, name, howToGet) {
    return {
        id,
        name,
        name_hi: name,
        name_as: name,
        status: "present",
        how_to_get: howToGet || "Obtain from the relevant government office, Gram Panchayat, or Common Service Centre (CSC)."
    };
}

const SCHEMES_DATABASE = [
    {
        name: "PMAY-G (PM Awaas Yojana – Gramin)",
        name_hi: "प्रधानमंत्री आवास योजना - ग्रामीण (PMAY-G)",
        name_as: "প্ৰধানমন্ত্ৰী আৱাস যোজনা - গ্ৰামীণ (PMAY-G)",
        category: "Housing",
        benefit: "Rs. 1.20–1.30 Lakh assistance for rural house construction",
        website: "https://pmayg.nic.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "UIDAI enrolment centre or mAadhaar app."),
            _doc("secc", "SECC Inclusion", "Verify SECC-2011 list at Gram Panchayat or Block office."),
            _doc("bank", "Bank Passbook", "Open or link Aadhaar-seeded account at any bank branch."),
            _doc("caste", "Caste/Disability Certificate (if applicable)", "Revenue office or RTPS portal for caste; Medical Board for disability.")
        ]
    },
    {
        name: "PMAY-U (PM Awaas Yojana – Urban)",
        name_hi: "प्रधानमंत्री आवास योजना - शहरी (PMAY-U)",
        name_as: "প্ৰধানমন্ত্ৰী আৱাস যোজনা - চহৰীয়া (PMAY-U)",
        category: "Housing",
        benefit: "Central assistance up to Rs. 2.67 Lakh for urban housing",
        website: "https://pmaymis.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "UIDAI enrolment centre."),
            _doc("income", "Income Proof", "Tehsildar or revenue authority."),
            _doc("property", "Property Documents", "Sub-registrar office or land records portal."),
            _doc("caste", "Caste Certificate", "Revenue Department or state RTPS portal.")
        ]
    },
    {
        name: "MGNREGS",
        name_hi: "मनरेगा (MGNREGS)",
        name_as: "মনৰেগা (MGNREGS)",
        category: "Employment",
        benefit: "100 days guaranteed wage employment per year",
        website: "https://nrega.nic.in",
        documents: [
            _doc("job_card", "Job Card", "Apply at Gram Panchayat or Block office."),
            _doc("aadhaar", "Aadhaar", "UIDAI enrolment centre."),
            _doc("bank", "Bank/Post Office Account", "Link Aadhaar at bank or post office for wage transfer.")
        ]
    },
    {
        name: "PM Mudra Yojana",
        name_hi: "प्रधानमंत्री मुद्रा योजना",
        name_as: "প্ৰধানমন্ত্ৰী মুদ্ৰা যোজনা",
        category: "Business",
        benefit: "Collateral-free loans up to Rs. 10–20 Lakh",
        website: "https://mudra.org.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "UIDAI enrolment centre."),
            _doc("pan", "PAN", "Apply at incometax.gov.in or NSDL/UTI."),
            _doc("business_plan", "Business Plan", "Prepare at bank branch or with MSME/DIC support."),
            _doc("bank_statements", "Bank Statements", "Request last 6 months from your bank branch.")
        ]
    },
    {
        name: "PM-KISAN",
        name_hi: "पीएम-किसान",
        name_as: "পি.এম-কৃষক",
        category: "Agriculture",
        benefit: "Rs. 6,000/year in 3 installments",
        website: "https://pmkisan.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Mandatory for farmer registration."),
            _doc("land_records", "Land Records", "State land record portal (Bhulekh) or Tehsil office."),
            _doc("bank", "Bank Account", "Aadhaar-linked savings account.")
        ]
    },
    {
        name: "PMFBY (PM Fasal Bima Yojana)",
        name_hi: "प्रधानमंत्री फसल बीमा योजना",
        name_as: "প্ৰধানমন্ত্ৰী ফচল বীমা যোজনা",
        category: "Agriculture",
        benefit: "Crop insurance cover against natural calamities",
        website: "https://pmfby.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Farmer identity verification."),
            _doc("land_records", "Land Records", "Revenue/Tehsil office or state portal."),
            _doc("bank", "Bank Account", "For premium subsidy and claim payout."),
            _doc("sowing_cert", "Sowing Certificate", "Local agriculture officer or Lekhpal.")
        ]
    },
    {
        name: "Ayushman Bharat PMJAY",
        name_hi: "आयुष्मान भारत (PMJAY)",
        name_as: "আয়ুষ্মান ভাৰত (PMJAY)",
        category: "Health",
        benefit: "Cashless health cover up to Rs. 5 Lakh/family/year",
        website: "https://pmjay.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Mandatory for beneficiary e-KYC."),
            _doc("eligibility", "Eligibility Proof", "SECC data or state eligibility letter."),
            _doc("ration", "Ration Card", "Fair Price Shop or Food & Civil Supplies office.")
        ]
    },
    {
        name: "PMMVY (Pradhan Mantri Matru Vandana Yojana)",
        name_hi: "प्रधानमंत्री मातृ वंदना योजना",
        name_as: "প্ৰধানমন্ত্ৰী মাতৃ বন্দনা যোজনা",
        category: "Maternal Health",
        benefit: "Rs. 5,000 maternity benefit in instalments",
        website: "https://pmmvy.nic.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "UIDAI enrolment centre."),
            _doc("mcp", "MCP Card", "ANM/ASHA worker or primary health centre."),
            _doc("bank", "Bank Account", "Aadhaar-linked account for DBT.")
        ]
    },
    {
        name: "Pre-Matric Scholarship",
        name_hi: "प्री-मैट्रिक छात्रवृत्ति",
        name_as: "প্ৰি-মেট্ৰিক জলপানী",
        category: "Education",
        benefit: "Scholarship for SC/ST/OBC students (Class 1–10)",
        website: "https://scholarships.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "NSP portal e-KYC."),
            _doc("caste", "Caste Certificate", "Revenue office or RTPS portal."),
            _doc("income", "Income Certificate", "Tehsildar or competent authority."),
            _doc("bank", "Bank Account", "Student's Aadhaar-linked account."),
            _doc("marksheet", "Marksheet", "School administration office.")
        ]
    },
    {
        name: "Post-Matric Scholarship",
        name_hi: "पोस्ट-मैट्रिक छात्रवृत्ति",
        name_as: "পোষ্ট-মেট্ৰিক জলপানী",
        category: "Education",
        benefit: "Scholarship for higher education (Class 11+)",
        website: "https://scholarships.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "NSP portal e-KYC."),
            _doc("caste", "Caste Certificate", "Revenue office or RTPS portal."),
            _doc("income", "Income Certificate", "Tehsildar or competent authority."),
            _doc("fee_receipt", "Fee Receipt", "College accounts/administration office."),
            _doc("bank", "Bank Account", "Student's Aadhaar-linked account.")
        ]
    },
    {
        name: "NFSA/PDS (Ration Card)",
        name_hi: "राष्ट्रीय खाद्य सुरक्षा अधिनियम / राशन कार्ड",
        name_as: "ৰাষ্ট্ৰীয় খাদ্য সুৰক্ষা আইন / ৰেচন কাৰ্ড",
        category: "Food Security",
        benefit: "Subsidised food grains under NFSA",
        website: "https://dfpd.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "All family members' Aadhaar required."),
            _doc("residence", "Residence Proof", "Electricity bill, voter ID, or domicile certificate."),
            _doc("family", "Family Details", "Self-declaration form at Fair Price Shop or FCS office.")
        ]
    },
    {
        name: "PM Ujjwala Yojana",
        name_hi: "प्रधानमंत्री उज्ज्वला योजना",
        name_as: "প্ৰধানমন্ত্ৰী উজ্জ্বলা যোজনা",
        category: "Energy",
        benefit: "Free LPG connection to eligible households",
        website: "https://pmuy.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "UIDAI enrolment centre."),
            _doc("ration", "Ration Card", "Fair Price Shop or FCS office."),
            _doc("bpl", "Deprivation/BPL Proof", "SECC list or BPL certificate from Panchayat."),
            _doc("bank", "Bank Account", "Aadhaar-linked account.")
        ]
    },
    {
        name: "PM Jan Dhan Yojana",
        name_hi: "प्रधानमंत्री जन धन योजना",
        name_as: "প্ৰধানমন্ত্ৰী জন ধন যোজনা",
        category: "Banking",
        benefit: "Zero-balance bank account with RuPay debit card",
        website: "https://pmjdy.gov.in",
        documents: [
            _doc("aadhaar_ekyc", "Aadhaar/eKYC or Valid OVD", "Any bank branch with Aadhaar or voter ID/PAN/driving licence.")
        ]
    },
    {
        name: "PMJJBY (PM Jeevan Jyoti Bima)",
        name_hi: "प्रधानमंत्री जीवन ज्योति बीमा योजना",
        name_as: "প্ৰধানমন্ত্ৰী জীৱন জ্যোতি বীমা যোজনা",
        category: "Insurance",
        benefit: "Rs. 2 Lakh life insurance for Rs. 436/year",
        website: "https://jansuraksha.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Bank branch enrolment."),
            _doc("bank", "Bank Account", "Active savings account (age 18–50).")
        ]
    },
    {
        name: "PMSBY (PM Suraksha Bima Yojana)",
        name_hi: "प्रधानमंत्री सुरक्षा बीमा योजना",
        name_as: "প্ৰধানমন্ত্ৰী সুৰক্ষা বীমা যোজনা",
        category: "Insurance",
        benefit: "Rs. 2 Lakh accident cover for Rs. 20/year",
        website: "https://jansuraksha.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Bank branch enrolment."),
            _doc("bank", "Bank Account", "Active savings account (age 18–70).")
        ]
    },
    {
        name: "APY (Atal Pension Yojana)",
        name_hi: "अटल पेंशन योजना",
        name_as: "অটল পেঞ্চন যোজনা",
        category: "Pension",
        benefit: "Guaranteed pension Rs. 1,000–5,000/month after age 60",
        website: "https://npscra.nsdl.co.in/apy.php",
        documents: [
            _doc("aadhaar", "Aadhaar", "Bank branch registration."),
            _doc("bank", "Bank Account", "For auto-debit of premium."),
            _doc("mobile", "Mobile Number", "Linked to bank account for SMS alerts.")
        ]
    },
    {
        name: "PM Vishwakarma",
        name_hi: "प्रधानमंत्री विश्वकर्मा योजना",
        name_as: "প্ৰধানমন্ত্ৰী বিশ্বকৰ্মা যোজনা",
        category: "Artisan",
        benefit: "Skill training + toolkit incentive + collateral-free credit",
        website: "https://pmvishwakarma.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Online portal or CSC registration."),
            _doc("craft_proof", "Craft Proof", "Certificate from guild/trade body or self-declaration with local verification."),
            _doc("bank", "Bank Account", "Aadhaar-linked account for incentive transfer.")
        ]
    },
    {
        name: "SVAMITVA",
        name_hi: "स्वामित्व योजना",
        name_as: "স্বামিত্ব যোজনা",
        category: "Land",
        benefit: "Property card for rural residential land",
        website: "https://svamitva.nic.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Property owner identity proof."),
            _doc("occupancy", "Proof of Land Occupancy", "Gram Panchayat verification during drone survey.")
        ]
    },
    {
        name: "PM Surya Ghar",
        name_hi: "पीएम सूर्य घर योजना",
        name_as: "পি.এম সূৰ্য ঘৰ যোজনা",
        category: "Solar Energy",
        benefit: "Rooftop solar subsidy up to Rs. 78,000",
        website: "https://pmsuryaghar.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Portal registration."),
            _doc("elec_consumer", "Electricity Consumer Number", "Recent electricity bill from DISCOM."),
            _doc("bank", "Bank Account", "For subsidy disbursement."),
            _doc("property", "Property Proof", "Property tax receipt or ownership deed.")
        ]
    },
    {
        name: "EMRS Scholarship",
        name_hi: "ईमार्स छात्रवृत्ति",
        name_as: "EMRS জলপানী",
        category: "Education",
        benefit: "Residential schooling for ST children with stipend",
        website: "https://tribal.nic.in",
        documents: [
            _doc("st_cert", "ST Certificate", "Revenue office or RTPS portal."),
            _doc("age_proof", "Age Proof", "Birth certificate or school records."),
            _doc("class5", "Class 5 Pass Certificate", "Previous school administration."),
            _doc("aadhaar", "Aadhaar", "UIDAI enrolment centre."),
            _doc("domicile", "Domicile", "State revenue authority.")
        ]
    },
    {
        name: "NEC Merit Scholarship",
        name_hi: "एनईसी मेरिट छात्रवृत्ति",
        name_as: "NEC মেৰিট জলপানী",
        category: "Education",
        benefit: "Rs. 740–1,550/month for NE students",
        website: "https://scholarships.gov.in",
        documents: [
            _doc("domicile", "NE Domicile", "State revenue authority."),
            _doc("marksheet", "Marksheet", "School/college board."),
            _doc("income", "Income Certificate", "Competent revenue authority."),
            _doc("aadhaar", "Aadhaar", "NSP e-KYC."),
            _doc("bank", "Bank Account", "Student's Aadhaar-linked account.")
        ]
    },
    {
        name: "Ishan Uday Scholarship",
        name_hi: "ईशान उदय छात्रवृत्ति",
        name_as: "ঈশান উদয় জলপানী",
        category: "Education",
        benefit: "Rs. 5,400–7,800/month for NE UG students",
        website: "https://scholarships.gov.in",
        documents: [
            _doc("class12", "Class XII Proof", "School board marksheet/certificate."),
            _doc("ug_admission", "UG Admission Proof", "College admission letter."),
            _doc("income", "Income Certificate", "Family income <= Rs. 4.5 Lakh/year."),
            _doc("aadhaar", "Aadhaar", "NSP e-KYC."),
            _doc("bank", "Bank Account", "Student's Aadhaar-linked account.")
        ]
    },
    {
        name: "Orunodoi Assam",
        name_hi: "अरुणोदय असम",
        name_as: "অৰুণোদই অসম",
        category: "Welfare",
        benefit: "Rs. 1,250/month DBT to eligible women",
        website: "https://cm.assam.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Mandatory for beneficiary ID."),
            _doc("ration", "Ration Card", "Assam NFSA ration card."),
            _doc("bank", "Bank Account", "Aadhaar-linked account."),
            _doc("income", "Income Proof", "Sewa Setu portal or Circle Office."),
            _doc("domicile", "Domicile", "Assam domicile certificate.")
        ]
    },
    {
        name: "Lakhpati Baideo",
        name_hi: "लखपति बैदेव (असम)",
        name_as: "লখপতি বাইদেউ (অসম)",
        category: "Women",
        benefit: "SHG entrepreneurship grant to reach Rs. 1 Lakh/year income",
        website: "https://aajeevika.gov.in",
        documents: [
            _doc("shg", "SHG Membership", "Block Livelihood Mission (ASRLM) coordinator."),
            _doc("aadhaar", "Aadhaar", "Identity proof."),
            _doc("bank", "Bank Account", "SHG or individual Aadhaar-linked account.")
        ]
    },
    {
        name: "SVAYEM Assam",
        name_hi: "स्वयं असम",
        name_as: "স্বয়ং অসম (SVAYEM)",
        category: "Business",
        benefit: "Seed capital for youth entrepreneurs in Assam",
        website: "https://industries.assam.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Online application portal."),
            _doc("age_proof", "Age Proof", "Birth certificate or school certificate."),
            _doc("business_plan", "Business Plan", "DIC/MSME support centre or bank."),
            _doc("bank", "Bank Account", "Aadhaar-linked account.")
        ]
    },
    {
        name: "CMSM Meghalaya",
        name_hi: "सीएमएसएम मेघालय",
        name_as: "CMSM মেঘালয়",
        category: "Education",
        benefit: "Chief Minister's scholarship for Meghalaya students",
        website: "https://megeducation.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Scholarship portal registration."),
            _doc("domicile", "Domicile Certificate", "Meghalaya revenue authority."),
            _doc("marksheet", "Marksheet", "School/college board."),
            _doc("income", "Income Certificate", "Competent authority."),
            _doc("bank", "Bank Account", "Student's Aadhaar-linked account.")
        ]
    },
    {
        name: "Manipur Scholarship",
        name_hi: "मणिपुर छात्रवृत्ति",
        name_as: "মণিপুৰ জলপানী",
        category: "Education",
        benefit: "State scholarship for Manipur students",
        website: "https://manipur.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "State scholarship portal."),
            _doc("domicile", "Domicile", "Manipur revenue authority."),
            _doc("marksheet", "Marksheet", "School/college board."),
            _doc("income", "Income Certificate", "Competent authority."),
            _doc("bank", "Bank Account", "Student's Aadhaar-linked account.")
        ]
    },
    {
        name: "Nagaland Scholarship",
        name_hi: "नागालैंड छात्रवृत्ति",
        name_as: "নাগালেণ্ড জলপানী",
        category: "Education",
        benefit: "State scholarship for Nagaland students",
        website: "https://nagaland.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "State scholarship portal."),
            _doc("st_caste", "ST/Caste Certificate", "Revenue office or tribe council."),
            _doc("income", "Income Certificate", "Competent authority."),
            _doc("marksheet", "Marksheet", "School/college board."),
            _doc("bank", "Bank Account", "Student's Aadhaar-linked account.")
        ]
    },
    {
        name: "Mizoram Scholarship",
        name_hi: "मिजोरम छात्रवृत्ति",
        name_as: "মিজোৰাম জলপানী",
        category: "Education",
        benefit: "State scholarship for Mizoram students",
        website: "https://mizoram.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "State scholarship portal."),
            _doc("caste", "Caste Certificate", "Revenue office."),
            _doc("income", "Income Certificate", "Competent authority."),
            _doc("school_cert", "School Certificate", "School administration office."),
            _doc("bank", "Bank Account", "Student's Aadhaar-linked account.")
        ]
    },
    {
        name: "CMAAY Arunachal",
        name_hi: "सीएमआरएएफ अरुणाचल (CMAAY)",
        name_as: "CMAAY অৰুণাচল",
        category: "Health",
        benefit: "Chief Minister's health assurance for Arunachal Pradesh",
        website: "https://arunachal.gov.in",
        documents: [
            _doc("aadhaar", "Aadhaar", "Health scheme enrolment centre."),
            _doc("domicile", "Domicile Certificate", "Arunachal revenue authority."),
            _doc("family", "Family Details", "Ration card or family ID from local administration."),
            _doc("bank", "Bank Account", "Aadhaar-linked account.")
        ]
    }
];
