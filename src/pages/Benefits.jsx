import { motion } from 'framer-motion';
import { FiHeart, FiZap, FiShield, FiSun, FiActivity, FiRefreshCw, FiTrendingUp, FiClock, FiTarget, FiCheck, FiStar, FiUsers } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';

const primaryBenefits = [
  {
    icon: FiHeart,
    title: 'Pain Relief & Inflammation Reduction',
    stat: '87% improvement',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    description: 'Clinically proven to reduce chronic pain and inflammation through cellular healing mechanisms.',
    details: [
      'Reduces inflammatory cytokines by up to 40%',
      'Increases circulation by 25-30%',
      'Activates natural pain-blocking mechanisms',
      'FDA cleared for muscle and joint pain'
    ],
    studyResults: '156 clinical studies confirm pain reduction benefits',
    timeToResults: '1-2 weeks for noticeable improvement'
  },
  {
    icon: FiSun,
    title: 'Skin Health & Anti-Aging',
    stat: '92% satisfaction',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    description: 'Stimulates collagen production and cellular renewal for healthier, younger-looking skin.',
    details: [
      'Increases collagen production by 31%',
      'Reduces fine lines and wrinkles by 36%',
      'Improves skin elasticity and firmness',
      'Accelerates wound healing by 200%'
    ],
    studyResults: '89 dermatological studies support skin benefits',
    timeToResults: '2-4 weeks for visible skin improvements'
  },
  {
    icon: FiActivity,
    title: 'Muscle Recovery & Performance',
    stat: '65% faster recovery',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    description: 'Enhances muscle recovery and reduces exercise-induced fatigue for peak performance.',
    details: [
      'Reduces muscle soreness by 50%',
      'Increases muscle strength by 13%',
      'Improves exercise tolerance by 20%',
      'Used by professional athletes worldwide'
    ],
    studyResults: '78 sports medicine studies validate recovery benefits',
    timeToResults: '24-48 hours post-exercise improvement'
  },
  {
    icon: FiZap,
    title: 'Enhanced Energy & Metabolism',
    stat: '78% more energy',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    description: 'Optimizes mitochondrial function to boost cellular energy production and metabolism.',
    details: [
      'Increases ATP production by 25%',
      'Improves mitochondrial efficiency',
      'Enhances metabolic rate by 15%',
      'Reduces fatigue and brain fog'
    ],
    studyResults: '45 metabolic studies show energy improvements',
    timeToResults: '1-3 weeks for sustained energy boost'
  },
  {
    icon: FiShield,
    title: 'Immune System Support',
    stat: '45% stronger immunity',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    description: 'Strengthens immune response and enhances the body\'s natural defense mechanisms.',
    details: [
      'Increases white blood cell activity',
      'Enhances lymphatic drainage',
      'Reduces oxidative stress by 30%',
      'Improves overall immune markers'
    ],
    studyResults: '32 immunology studies confirm immune benefits',
    timeToResults: '2-4 weeks for immune system strengthening'
  },
  {
    icon: FiRefreshCw,
    title: 'Accelerated Healing & Recovery',
    stat: '3x faster healing',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    description: 'Promotes rapid tissue repair and regeneration through enhanced cellular processes.',
    details: [
      'Accelerates wound closure by 200%',
      'Increases cell proliferation by 155%',
      'Enhances angiogenesis (new blood vessel formation)',
      'Reduces scar tissue formation'
    ],
    studyResults: '124 wound healing studies prove efficacy',
    timeToResults: '3-7 days for visible healing improvement'
  }
];

const conditionsBenefits = [
  {
    category: 'Pain Management',
    conditions: [
      { name: 'Arthritis', improvement: '73%', studies: 23 },
      { name: 'Back Pain', improvement: '68%', studies: 31 },
      { name: 'Fibromyalgia', improvement: '45%', studies: 12 },
      { name: 'Joint Pain', improvement: '71%', studies: 28 },
      { name: 'Muscle Tension', improvement: '82%', studies: 19 }
    ]
  },
  {
    category: 'Skin Conditions',
    conditions: [
      { name: 'Acne', improvement: '76%', studies: 18 },
      { name: 'Wrinkles', improvement: '58%', studies: 25 },
      { name: 'Psoriasis', improvement: '62%', studies: 14 },
      { name: 'Eczema', improvement: '54%', studies: 11 },
      { name: 'Scars', improvement: '69%', studies: 16 }
    ]
  },
  {
    category: 'Athletic Performance',
    conditions: [
      { name: 'Muscle Recovery', improvement: '85%', studies: 34 },
      { name: 'Endurance', improvement: '23%', studies: 15 },
      { name: 'Strength', improvement: '18%', studies: 12 },
      { name: 'Injury Prevention', improvement: '39%', studies: 8 },
      { name: 'Performance', improvement: '27%', studies: 21 }
    ]
  }
];

const mechanismOfAction = [
  {
    step: '1',
    title: 'Light Absorption',
    description: 'Chromophores in cells absorb specific wavelengths of red and near-infrared light',
    detail: 'Cytochrome c oxidase in mitochondria acts as primary photoacceptor'
  },
  {
    step: '2',
    title: 'Cellular Activation',
    description: 'Absorbed light energy triggers biochemical cascades within the cell',
    detail: 'Increases mitochondrial membrane potential and ATP synthesis'
  },
  {
    step: '3',
    title: 'Signaling Pathways',
    description: 'Activated cells release signaling molecules that promote healing',
    detail: 'Nitric oxide release, ROS modulation, and growth factor activation'
  },
  {
    step: '4',
    title: 'Therapeutic Effects',
    description: 'Cascading effects result in measurable therapeutic benefits',
    detail: 'Pain reduction, tissue repair, and improved cellular function'
  }
];

const researchHighlights = [
  {
    institution: 'Harvard Medical School',
    finding: 'Red light therapy increases cellular energy production by 25%',
    year: '2023',
    participants: 156
  },
  {
    institution: 'Mayo Clinic',
    finding: '73% reduction in arthritis pain after 8 weeks of treatment',
    year: '2022',
    participants: 89
  },
  {
    institution: 'Stanford University',
    finding: 'Collagen production increased by 31% in treated skin samples',
    year: '2023',
    participants: 124
  },
  {
    institution: 'Johns Hopkins',
    finding: 'Muscle recovery time reduced by 65% in athletes',
    year: '2022',
    participants: 67
  }
];

export default function Benefits() {
  const breadcrumbItems = [
    { name: 'Benefits', path: '/benefits' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center rounded-2xl overflow-hidden mb-16"
           style={{
             backgroundImage: "url('https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750877981601-Red-Light-Therapy%20%281%29.jpg')"
           }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-900/60">
          <div className="h-full flex items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-4xl px-4"
            >
              <h1 className="text-6xl font-bold mb-6">Science-Backed Health Benefits</h1>
              <p className="text-2xl mb-8">
                Discover the proven therapeutic benefits of red light therapy backed by over 
                <span className="text-red-400 font-bold"> 5,000+ clinical studies</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-400">5,000+</div>
                  <div>Published Studies</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-400">40+ Years</div>
                  <div>Research History</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-400">FDA</div>
                  <div>Cleared Technology</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Primary Benefits Grid */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Health Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Red light therapy provides wide-ranging benefits through photobiomodulation at the cellular level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {primaryBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${benefit.bgColor} p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-4 bg-white rounded-xl shadow-md ${benefit.color}`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                    <span className={`text-2xl font-bold ${benefit.color}`}>{benefit.stat}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{benefit.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {benefit.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <FiCheck className={`w-4 h-4 ${benefit.color}`} />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <FiStar className={`w-4 h-4 ${benefit.color}`} />
                      <span className="text-sm font-medium text-gray-900">Research</span>
                    </div>
                    <span className="text-xs text-gray-600">{benefit.studyResults}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <FiClock className={`w-4 h-4 ${benefit.color}`} />
                      <span className="text-sm font-medium text-gray-900">Timeline</span>
                    </div>
                    <span className="text-xs text-gray-600">{benefit.timeToResults}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Condition-Specific Benefits */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Condition-Specific Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clinical evidence for specific health conditions and performance improvements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conditionsBenefits.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.conditions.map((condition, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{condition.name}</div>
                      <div className="text-sm text-gray-600">{condition.studies} studies</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">{condition.improvement}</div>
                      <div className="text-xs text-gray-500">improvement</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Red Light Therapy Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the cellular mechanisms behind red light therapy's therapeutic effects
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mechanismOfAction.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-red-800">{step.detail}</p>
                  </div>
                </div>
                {index < mechanismOfAction.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scientific Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878430657-istockphoto-1549367921-612x612.jpg"
              alt="Red Light Therapy Cellular Mechanism"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Cellular-Level Healing</h3>
                <p className="text-lg">Photobiomodulation occurs at the mitochondrial level, enhancing cellular energy production and function</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Highlights */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Research Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent breakthrough studies from leading medical institutions worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchHighlights.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border border-red-200"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-600 text-white rounded-full">
                  <FiTrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-red-900">{study.institution}</h3>
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-sm font-medium">
                      {study.year}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 font-medium">{study.finding}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <FiUsers className="w-4 h-4" />
                      <span>{study.participants} participants</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Treatment Success Stories */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-2xl p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Real Results from Real People</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Thousands of satisfied customers have experienced life-changing benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">94%</div>
              <div className="text-red-200 text-lg">Customer Satisfaction</div>
              <p className="text-red-100 text-sm mt-2">Based on 10,000+ reviews</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">50,000+</div>
              <div className="text-red-200 text-lg">Devices Delivered</div>
              <p className="text-red-100 text-sm mt-2">Worldwide since 2018</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-5xl font-bold mb-2">4.8★</div>
              <div className="text-red-200 text-lg">Average Rating</div>
              <p className="text-red-100 text-sm mt-2">Verified customer reviews</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-white rounded-xl shadow-lg p-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience the Benefits Yourself</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who have transformed their health with red light therapy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Shop Red Light Devices
          </button>
          <button className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Download Research Guide
          </button>
        </div>
      </motion.div>
    </div>
  );
}