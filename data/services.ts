export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  symptoms: string[];
  treatments: string[];
  keyFacts: { label: string; value: string }[];
  image?: string;
}

export const services: Service[] = [
  {
    slug: "diabetes-management",
    title: "Diabetes Management",
    shortDescription: "Comprehensive care for Type 1, Type 2 & gestational diabetes with personalized treatment plans.",
    fullDescription: "Diabetes is one of the most prevalent chronic conditions affecting millions globally. Dr. Sahu provides comprehensive diabetes care — from initial diagnosis through advanced glycemic management, complication screening, and lifestyle counseling. Whether you have Type 1, Type 2, or gestational diabetes, we create personalized treatment plans tailored to your unique needs.",
    icon: "activity",
    color: "#3B82F6",
    image: "/images/specializations/diabetes-management.jpg",
    symptoms: ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Fatigue", "Blurred vision", "Slow healing wounds", "Numbness in hands/feet"],
    treatments: ["Blood sugar monitoring & HbA1c management", "Oral hypoglycemic agents", "Insulin therapy & optimization", "Dietary counseling & meal planning", "Diabetic complication screening", "Continuous glucose monitoring setup"],
    keyFacts: [
      { label: "Prevalence", value: "537M worldwide" },
      { label: "Type 2 share", value: "90-95%" },
      { label: "Preventable", value: "Type 2 prevention possible" },
    ],
  },
  {
    slug: "thyroid-disorders",
    title: "Thyroid Disorders",
    shortDescription: "Expert diagnosis and management of hypothyroidism, hyperthyroidism, goiter, and thyroid nodules.",
    fullDescription: "The thyroid gland plays a critical role in regulating your body's metabolism, energy, and overall well-being. Dr. Sahu specializes in the full spectrum of thyroid disorders, providing accurate diagnosis through advanced thyroid function testing, ultrasound, and when necessary, thyroid biopsies.",
    icon: "zap",
    color: "#8B5CF6",
    image: "/images/specializations/thyroid-disorders.jpg",
    symptoms: ["Weight changes", "Fatigue or excessive energy", "Hair loss", "Feeling too hot or cold", "Heart palpitations", "Neck swelling", "Mood changes"],
    treatments: ["Thyroid function panel & antibody testing", "Thyroid ultrasound evaluation", "Levothyroxine therapy for hypothyroidism", "Anti-thyroid medication for hyperthyroidism", "Radioiodine therapy coordination", "Long-term thyroid cancer follow-up"],
    keyFacts: [
      { label: "Prevalence in India", value: "42 million" },
      { label: "Women affected", value: "5x more than men" },
      { label: "Treatable", value: "Highly manageable" },
    ],
  },
  {
    slug: "pcod-pcos",
    title: "PCOS / PCOD",
    shortDescription: "Specialized hormonal therapy for polycystic ovarian syndrome, menstrual irregularities, and fertility support.",
    fullDescription: "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. It can cause irregular periods, excess androgens, and polycystic ovaries. Dr. Sahu's approach addresses the underlying hormonal imbalances and metabolic dysfunction that drive PCOS.",
    icon: "heart",
    color: "#EC4899",
    image: "/images/specializations/pcod-pcos.jpg",
    symptoms: ["Irregular periods", "Excess hair growth (hirsutism)", "Acne", "Weight gain", "Hair thinning", "Difficulty getting pregnant", "Mood swings"],
    treatments: ["Hormonal evaluation & androgen profiling", "Metformin & insulin sensitizers", "Oral contraceptive therapy", "Anti-androgen medications", "Ovulation induction for fertility", "Lifestyle & dietary modification programs"],
    keyFacts: [
      { label: "Affects", value: "1 in 10 women" },
      { label: "Age group", value: "15-44 years" },
      { label: "Metabolic link", value: "High diabetes risk" },
    ],
  },
  {
    slug: "obesity-management",
    title: "Obesity Management",
    shortDescription: "Medical weight management combining nutrition, medications, and behavioral strategies for lasting results.",
    fullDescription: "Obesity is not a lifestyle choice — it is a complex metabolic condition with genetic, hormonal, and environmental components. Dr. Sahu provides evidence-based medical management of obesity, addressing the root hormonal causes and developing sustainable weight management strategies.",
    icon: "trending-down",
    color: "#10B981",
    image: "/images/specializations/obesity-management.jpg",
    symptoms: ["BMI over 30", "Breathlessness on exertion", "Joint pain", "Sleep apnea", "High blood pressure", "Fatty liver", "Metabolic syndrome"],
    treatments: ["Comprehensive metabolic evaluation", "Hormonal imbalance correction", "Medical anti-obesity pharmacotherapy", "Structured caloric deficit planning", "Behavioral and psychological support", "Bariatric surgery consultation if needed"],
    keyFacts: [
      { label: "Global adults", value: "39% overweight" },
      { label: "Comorbidities", value: "200+ linked conditions" },
      { label: "Treatment success", value: "Highly effective medically" },
    ],
  },
  {
    slug: "growth-disorders",
    title: "Growth Disorders",
    shortDescription: "Pediatric and adult growth hormone evaluation, deficiency treatment, and height optimization.",
    fullDescription: "Growth disorders in children and adolescents require specialized endocrinological evaluation. Dr. Sahu assesses growth hormone deficiency, short stature, delayed puberty, and other growth abnormalities with precision testing and compassionate care.",
    icon: "bar-chart-2",
    color: "#F59E0B",
    image: "/images/specializations/growth-disorders.jpg",
    symptoms: ["Short stature for age", "Slow growth rate", "Delayed puberty", "Delayed bone development", "Low muscle mass", "Fatigue in children", "Poor school performance"],
    treatments: ["Growth hormone stimulation testing", "Bone age X-ray evaluation", "Growth hormone replacement therapy", "Puberty induction treatment", "Nutritional optimization", "Regular growth monitoring & adjustment"],
    keyFacts: [
      { label: "GH Deficiency", value: "1 in 4000 children" },
      { label: "Treatable early", value: "Before growth plates close" },
      { label: "Treatment window", value: "Best before puberty" },
    ],
  },
  {
    slug: "metabolism-disorders",
    title: "Metabolism Disorders",
    shortDescription: "Diagnosis and treatment of lipid disorders, metabolic syndrome, adrenal issues, and pituitary conditions.",
    fullDescription: "The endocrine system regulates virtually every metabolic process in the body. Dr. Sahu manages a wide range of metabolic disorders including dyslipidemia, metabolic syndrome, adrenal disorders, pituitary tumors, and calcium metabolism abnormalities.",
    icon: "cpu",
    color: "#06B6D4",
    image: "/images/specializations/metabolism-disorders.jpg",
    symptoms: ["Unexplained weight changes", "Persistent fatigue", "High cholesterol", "Bone pain", "Blood pressure changes", "Mood disturbances", "Abnormal blood tests"],
    treatments: ["Complete hormonal profiling", "Lipid management & statin therapy", "Adrenal function evaluation", "Pituitary MRI & hormone assessment", "Calcium & vitamin D management", "Metabolic syndrome reversal programs"],
    keyFacts: [
      { label: "Metabolic syndrome", value: "25% of adults globally" },
      { label: "Adrenal disorders", value: "Often undiagnosed" },
      { label: "Key", value: "Early detection critical" },
    ],
  },
];
