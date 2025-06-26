import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiGlobe, FiAward, FiTrendingUp, FiShield, FiZap, FiTarget, FiClock, FiStar, FiCheck, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Medical researcher with 15 years of experience in photobiomodulation therapy and cellular healing mechanisms.',
    credentials: ['MD, Harvard Medical School', 'PhD in Biomedical Engineering', '50+ Published Research Papers'],
    specialties: ['Photobiomodulation', 'Pain Management', 'Cellular Biology']
  },
  {
    name: 'Michael Chen',
    role: 'Head of Engineering',
    image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Passionate engineer creating innovative red light therapy devices with cutting-edge LED technology and precision manufacturing.',
    credentials: ['MS Electrical Engineering, MIT', '12+ Years Medical Device Design', 'FDA Regulatory Expert'],
    specialties: ['LED Technology', 'Medical Devices', 'Product Innovation']
  },
  {
    name: 'Dr. Emma Williams',
    role: 'Clinical Director',
    image: 'https://images.pexels.com/photos/7755240/pexels-photo-7755240.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Expert in therapeutic applications with extensive clinical experience in red light therapy treatments and patient outcomes.',
    credentials: ['PhD Biomedical Engineering, Stanford', 'Licensed Physical Therapist', '8+ Years Clinical Research'],
    specialties: ['Clinical Applications', 'Treatment Protocols', 'Patient Care']
  }
];

const stats = [
  { 
    label: 'Devices Delivered Worldwide', 
    value: '50,000+',
    icon: FiTrendingUp,
    description: 'Professional-grade devices shipped globally'
  },
  { 
    label: 'Happy Customers', 
    value: '12,500+',
    icon: FiUsers,
    description: 'Satisfied customers experiencing real results'
  },
  { 
    label: 'Clinical Studies Referenced', 
    value: '1,000+',
    icon: FiStar,
    description: 'Peer-reviewed research supporting our technology'
  },
  { 
    label: 'Countries Served', 
    value: '45+',
    icon: FiGlobe,
    description: 'International reach with local support'
  }
];

const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Dr. Sarah Johnson establishes Red Glow Ltd with a mission to make red light therapy accessible to everyone',
    icon: FiZap
  },
  {
    year: '2019',
    title: 'First FDA Clearance',
    description: 'Our inaugural device receives FDA clearance for pain relief and muscle recovery applications',
    icon: FiShield
  },
  {
    year: '2020',
    title: '10,000 Devices Milestone',
    description: 'Reached our first major milestone of 10,000 devices delivered to customers worldwide',
    icon: FiTarget
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Expanded operations to serve customers in over 30 countries with local distribution partners',
    icon: FiGlobe
  },
  {
    year: '2022',
    title: 'Research Partnership',
    description: 'Partnered with leading medical institutions for clinical trials and product development',
    icon: FiStar
  },
  {
    year: '2023',
    title: 'Innovation Awards',
    description: 'Received multiple industry awards for innovation in medical device technology and design',
    icon: FiAward
  },
  {
    year: '2024',
    title: '50,000 Devices & Beyond',
    description: 'Celebrating 50,000+ devices delivered and launching next-generation therapy solutions',
    icon: FiTrendingUp
  }
];

const values = [
  {
    icon: FiHeart,
    title: 'Quality First',
    description: 'We meticulously design, test, and validate every device to ensure the highest quality and safety standards.',
    details: [
      'Rigorous 47-point quality control process',
      'Medical-grade components and materials',
      'Comprehensive safety testing protocols',
      '3-year warranty on all devices'
    ]
  },
  {
    icon: FiGlobe,
    title: 'Science-Based Innovation',
    description: 'All our products are grounded in peer-reviewed scientific research and clinical evidence.',
    details: [
      'Collaboration with leading research institutions',
      'Evidence-based treatment protocols',
      'Continuous product improvement based on studies',
      'Transparent sharing of research data'
    ]
  },
  {
    icon: FiUsers,
    title: 'Customer-Centric Care',
    description: 'Building lasting relationships through exceptional service, education, and ongoing support.',
    details: [
      '24/7 customer support availability',
      'Comprehensive education resources',
      'Personalized treatment guidance',
      '30-day satisfaction guarantee'
    ]
  }
];

const certifications = [
  {
    name: 'FDA Cleared',
    description: 'Class II Medical Device clearance for pain relief and wound healing',
    year: '2019'
  },
  {
    name: 'ISO 13485',
    description: 'Quality management systems for medical devices',
    year: '2020'
  },
  {
    name: 'CE Marking',
    description: 'European Conformity certification for medical devices',
    year: '2020'
  },
  {
    name: 'FCC Approved',
    description: 'Electromagnetic compatibility and safety standards',
    year: '2019'
  }
];

const partnerships = [
  {
    name: 'Mayo Clinic',
    type: 'Research Partnership',
    description: 'Collaborative research on red light therapy applications in pain management'
  },
  {
    name: 'Stanford Medicine',
    type: 'Clinical Trials',
    description: 'Joint clinical studies on photobiomodulation effects in tissue healing'
  },
  {
    name: 'Harvard Medical School',
    type: 'Technology Development',
    description: 'Advanced research in cellular mechanisms of light therapy'
  },
  {
    name: 'Johns Hopkins',
    type: 'Sports Medicine Research',
    description: 'Studies on athletic performance and recovery enhancement'
  }
];

export default function About() {
  const breadcrumbItems = [
    { name: 'About', path: '/about' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center" 
           style={{
             backgroundImage: "url('https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750877989331-34dee6_004592980f83470596bce18da8adee70~mv2.webp')"
           }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-900/60">
          <div className="h-full max-w-7xl mx-auto px-4 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white max-w-3xl"
            >
              <h1 className="text-6xl font-bold mb-6">Pioneering the Future of Red Light Therapy</h1>
              <p className="text-2xl mb-8 leading-relaxed">
                Since 2018, we've been dedicated to making scientifically-proven red light therapy 
                accessible to everyone, transforming lives through innovative technology and compassionate care.
              </p>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Our Story
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Meet Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Mission Statement */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-2xl border border-red-200">
              <p className="text-2xl text-gray-800 leading-relaxed mb-6">
                "To democratize access to scientifically-proven red light therapy, empowering individuals 
                worldwide to achieve optimal health through innovative, safe, and effective photobiomodulation technology."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <FiHeart className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg">Health First</h3>
                  <p className="text-gray-600">Your wellbeing is our priority</p>
                </div>
                <div>
                  <FiStar className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg">Science-Backed</h3>
                  <p className="text-gray-600">Evidence-based solutions</p>
                </div>
                <div>
                  <FiUsers className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg">Accessible</h3>
                  <p className="text-gray-600">Technology for everyone</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Company Stats */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six years of dedication to advancing red light therapy technology and improving lives worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="p-4 bg-red-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-10 h-10 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Timeline */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader - key milestones in our mission to advance red light therapy
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-red-100 rounded-full">
                          <milestone.icon className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-2xl font-bold text-red-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class experts in medicine, engineering, and clinical research driving innovation in red light therapy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-80 bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Credentials</h4>
                      <ul className="space-y-1">
                        {member.credentials.map((credential, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <FiCheck className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 text-sm">{credential}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <span key={i} className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do, from product development to customer service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="p-4 bg-red-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 mb-6">{value.description}</p>
                
                <div className="text-left">
                  <ul className="space-y-2">
                    {value.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <FiCheck className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications & Partnerships */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Certifications & Compliance</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                        <p className="text-gray-600">{cert.description}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Research Partnerships */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Research Partnerships</h2>
              <div className="space-y-4">
                {partnerships.map((partnership, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{partnership.name}</h3>
                        <p className="text-gray-600 mb-2">{partnership.description}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                        {partnership.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Looking Ahead: Our Vision for 2030</h2>
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto">
              By 2030, we envision a world where red light therapy is as common as taking vitamins - 
              accessible, trusted, and integrated into daily wellness routines worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-red-200">Devices Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-red-200">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-red-200">Clinical Partnerships</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-xl shadow-lg p-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're a healthcare professional, researcher, or someone seeking better health, 
            we invite you to be part of the red light therapy revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
              <span>Explore Our Products</span>
              <FiArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}