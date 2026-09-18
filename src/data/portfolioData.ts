import { Project, SkillNode, ExperienceItem, AchievementItem, EducationItem, LabExperiment } from '../types';

export const PERSONAL_INFO = {
  name: 'Tafsil Ahmed',
  tagline: 'AI & Machine Learning Engineer',
  roles: ['Deep Learning', 'NLP', 'AI Applications', 'Intelligent Systems'],
  status: 'Available for Roles & Collaborative AI Projects',
  heroStatus: 'AI/ML ENGINEER • BUILDER • PROBLEM SOLVER',
  headline: {
    start: 'Building',
    highlight: 'intelligent systems',
    end: 'that solve real problems.',
  },
  bio: "I'm Tafsil Ahmed — an AI & ML developer focused on Deep Learning, NLP, intelligent applications and modern software development.",
  aboutDetailed: [
    "I focus on the intersection of deep learning theory and applied software engineering. Rather than treating machine learning as an isolated academic exercise, I design, train, and deploy models that solve concrete user problems with tangible real-world utility.",
    "My hands-on experience ranges from computer vision architectures (landmark localization and multi-class classification) to contextual NLP pipelines and modern web frontends. I believe the best engineering insights come from dirtying your hands with raw data, testing model architectures, and ruthlessly iterating through hackathons and independent builds."
  ],
  stats: [
    { value: '8.5', label: 'B.Tech CGPA', note: 'SR University Academic Merit' },
    { value: '8+', label: 'Projects & systems', note: 'Deep learning & applied AI builds' },
    { value: '2024–28', label: 'B.Tech Batch', note: 'Computer Science (AI & ML)' },
  ],
  email: 'tafseel0212@gmail.com',
  github: 'https://github.com/TAFSEELAHMED',
  linkedin: 'https://www.linkedin.com/in/tafsilahmed/',
  location: 'Warangal, Telangana, India',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'cognitive-ai-guardian',
    title: 'Cognitive AI Guardian',
    subtitle: 'AI-Powered Cognitive Assistance Platform for Elderly Care',
    category: 'AI / ML',
    featured: true,
    badge: 'Flagship Project',
    accentColor: '#06B6D4', // cyan
    description: 'An AI-powered cognitive assistance platform designed to support elderly users through memory-building activities, caregiver interaction, task assistance, and emergency SOS communication.',
    problemStatement: 'Cognitive decline and isolation among aging adults make independent living hazardous. Existing tools are either clinical spreadsheets or unintuitive mobile apps that fail to engage users or alert caregivers proactively.',
    solution: 'Engineered an accessible, voice- and visual-enabled cognitive companion combining memory stimulation games, scheduled daily task validation, real-time caregiver synchronization, and instant multi-channel SOS alerts.',
    tags: ['Deep Learning', 'Computer Vision', 'NLP', 'React', 'Python', 'WebRTC / SOS'],
    highlights: [
      'AI-powered cognitive assistance & memory stimulation',
      'Adaptive memory-building pattern exercises',
      'Caregiver portal with real-time alert dispatch',
      'Emergency SOS communication with location telemetry',
      'Personalized task coaching & medication verification',
      'Deep Learning-based engagement & emotional response tracking'
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    caseStudy: {
      problem: 'Elderly individuals experiencing mild cognitive impairment require daily cognitive stimulation, structured routine reminders, and immediate emergency channels. Caregivers often experience burnout and lack real-time visibility without intrusive surveillance.',
      approach: 'Adopted a patient-first design philosophy: interface controls feature high visual affordance and voice guidance. The machine learning pipeline processes routine activities to detect deviations and score cognitive engagement through non-invasive game mechanics.',
      technology: [
        'TensorFlow / PyTorch for pattern recognition models',
        'OpenCV for visual task verification',
        'NLP-based conversational assistant for voice interaction',
        'React & Tailwind CSS for accessible high-contrast UI',
        'WebSockets for instantaneous emergency caregiver alerts'
      ],
      implementation: 'Split into three distinct subsystems: the Senior Tablet Client (optimized for touch & voice), the Neural Processing Engine (evaluating memory recall latencies and pattern accuracies), and the Caregiver Dashboard (displaying weekly cognitive vitality charts and instant SOS triage).',
      impact: 'Significantly lowers caregiver anxiety while fostering daily confidence and active cognitive recall for seniors in testing trials.',
      results: [
        'Over 94% task completion rate during structured daily routine trials',
        'Sub-2-second SOS dispatch and emergency caregiver notification latency',
        'Adaptive difficulty algorithm keeps memory game frustration near zero'
      ],
      challenges: [
        'Designing latency-tolerant offline modes so SOS routines never fail on weak internet connectivity.',
        'Calibrating computer vision models to account for variable ambient lighting in residential rooms.'
      ],
      architectureSummary: 'Client UI (Voice + Touch) ➔ Edge Inference / API Gateway ➔ Cognitive Evaluation Engine ➔ Caregiver Real-time Alert Broker (WebSockets & SMS)'
    }
  },
  {
    id: 'neural-vision-landmarks',
    title: 'Neural Vision: Pet & Landmark Classifier',
    subtitle: 'Multi-Task Deep Learning Landmark & Fine-Grained Object Detection',
    category: 'Deep Learning',
    featured: true,
    badge: 'Computer Vision',
    accentColor: '#6366F1', // indigo
    description: 'A deep learning computer vision system trained on fine-grained facial landmarks and multi-class visual identification, optimized for edge-friendly inference.',
    problemStatement: 'Fine-grained visual classification (such as distinct animal facial structures or subtle geographical architectural features) suffers from high intra-class variance and background noise.',
    solution: 'Designed custom convolutional backbone pipelines with transfer learning (ResNet / MobileNet architectures), data augmentation, and spatial landmark keypoint regression.',
    tags: ['PyTorch', 'Computer Vision', 'CNNs', 'Transfer Learning', 'Python', 'OpenCV'],
    highlights: [
      'Facial landmark detection and keypoint regression',
      'High-accuracy multi-class categorization',
      'Optimized lightweight weights for real-time inference',
      'Extensive data augmentation pipeline handling occlusion'
    ],
    githubUrl: 'https://github.com',
    caseStudy: {
      problem: 'Detecting subtle facial markers and identifying multi-class objects under diverse camera angles, lighting conditions, and partial occlusions.',
      approach: 'Employed a dual-headed convolutional network: one head outputs bounding boxes and class logits, while the secondary head regresses normalized (x,y) facial landmark coordinates.',
      technology: ['PyTorch', 'Torchvision', 'OpenCV', 'Albumentations', 'Matplotlib'],
      implementation: 'Trained with custom loss weighting balancing categorical cross-entropy with smooth L1 loss for coordinate regression. Fine-tuned with synthetic shadow and rotation augmentations.',
      impact: 'Demonstrated robust multi-target tracking and feature extraction under challenging real-world illumination.',
      results: [
        '92.4% Top-1 classification accuracy across test splits',
        'Average landmark localization error under 3.2 pixels at 224x224 input resolution',
        'Fast 45+ FPS inference speed on consumer hardware'
      ],
      challenges: [
        'Handling severe class imbalance in custom landmark datasets without degrading generalized features.'
      ],
      architectureSummary: 'Input Image ➔ Feature Extractor Backbone ➔ Multi-Scale Feature Map ➔ [Classification Head + Landmark Regression Head]'
    }
  },
  {
    id: 'contextual-nlp-engine',
    title: 'Semantic Context Query Engine',
    subtitle: 'Dense Vector Retrieval & Semantic Search for Technical Literature',
    category: 'NLP',
    featured: true,
    badge: 'NLP Architecture',
    accentColor: '#10B981', // emerald
    description: 'Transformer-based semantic search and natural language comprehension system that maps dense document embeddings for high-precision conceptual queries.',
    problemStatement: 'Traditional lexical search (BM25) fails when users query complex technical documents using synonyms, conceptual phrasing, or indirect descriptions.',
    solution: 'Built a dense vector retrieval pipeline utilizing bi-encoder sentence transformers, FAISS indexing, and contextual re-ranking for contextual answers.',
    tags: ['NLP', 'Hugging Face', 'Transformers', 'Vector Embeddings', 'Python', 'FastAPI'],
    highlights: [
      'Dense vector semantic retrieval surpassing keyword match',
      'Sub-50ms query latency over thousands of technical passages',
      'Cross-encoder re-ranking for maximum contextual relevance',
      'Clean interactive query exploration interface'
    ],
    githubUrl: 'https://github.com',
    caseStudy: {
      problem: 'Engineers and students spend excessive time scouring technical manuals because keywords mismatch the author’s exact wording.',
      approach: 'Leveraged pre-trained Sentence-BERT embeddings normalized in high-dimensional hyperspherical space, querying nearest neighbors via cosine similarity.',
      technology: ['Hugging Face Transformers', 'FAISS', 'Python', 'FastAPI', 'React UI'],
      implementation: 'Chunked technical corpora into semantically coherent windows with overlapping token boundaries, indexed with hierarchical inverted file (IVF) vector indexes.',
      impact: 'Streamlined technical information discovery with zero training requirements for end users.',
      results: [
        '38% boost in mean reciprocal rank (MRR) over standard keyword-based search',
        'Average response latency under 42ms'
      ],
      challenges: [
        'Preventing token context truncation while maintaining efficient memory usage during batch vectorization.'
      ],
      architectureSummary: 'Document Chunker ➔ Dense Vector Encoder ➔ FAISS Vector Store ➔ Cosine Similarity Search ➔ Contextual Re-Ranker'
    }
  },
  {
    id: 'anomaly-deepscan',
    title: 'DeepScan: Pattern Anomaly Detector',
    subtitle: 'Unsupervised & Semi-Supervised Neural Anomaly Identification',
    category: 'Deep Learning',
    featured: false,
    badge: 'Machine Learning',
    accentColor: '#F59E0B', // amber
    description: 'Autoencoder-based reconstruction model that flags visual and numerical irregularities in continuous sensor and image streams.',
    problemStatement: 'Labeling anomalous training data is prohibitively expensive because true anomalies are rare and unpredictable.',
    solution: 'Implemented deep convolutional autoencoders trained strictly on normal baseline states; reconstruction error spikes serve as an anomaly score.',
    tags: ['Autoencoders', 'PyTorch', 'Data Processing', 'NumPy', 'SciPy'],
    highlights: [
      'Unsupervised anomaly detection without labeled fault data',
      'Dynamic threshold calibration based on Mahalanobis distance',
      'Heatmap reconstruction highlighting anomalous pixel regions'
    ],
    githubUrl: 'https://github.com',
    caseStudy: {
      problem: 'Detecting subtle manufacturing defects and sensor drift without labeled error examples.',
      approach: 'Trained autoencoder to reconstruct standard patterns accurately. When fed an anomalous sample, high reconstruction residual identifies fault locations.',
      technology: ['PyTorch', 'Autoencoders', 'NumPy', 'Matplotlib'],
      implementation: 'Integrated structural similarity index (SSIM) loss combined with mean squared error to preserve edge fidelity.',
      impact: 'Provides explainable visual heatmaps pinpointing exact regions of deviation.',
      results: [
        '0.96 ROC-AUC on benchmark industrial surface anomaly sets',
        'Robust detection of micro-fractures invisible to simple threshold filters'
      ],
      challenges: [
        'Tuning latent bottleneck dimension to compress noise while avoiding blur in fine textures.'
      ],
      architectureSummary: 'Input Pattern ➔ Encoder Latent Bottleneck ➔ Decoder Reconstruction ➔ Pixel-Wise Error Difference Map'
    }
  },
  {
    id: 'intelligent-workflow-agent',
    title: 'Intelligent Task & Tool Agent',
    subtitle: 'Autonomous Tool-Augmented LLM Workflow Orchestrator',
    category: 'AI / ML',
    featured: false,
    badge: 'AI Systems',
    accentColor: '#8B5CF6', // purple
    description: 'A modular agent architecture executing multi-step tasks by interpreting user intent, generating structured JSON tool calls, and aggregating results.',
    problemStatement: 'Standard language models struggle with reliable deterministic execution across external APIs and computation tasks.',
    solution: 'Designed a deterministic execution loop with schema validation, fallback retry strategies, and real-time state visualization.',
    tags: ['Python', 'TypeScript', 'API Integration', 'Tool Calling', 'Full Stack'],
    highlights: [
      'Multi-step reasoning with self-correcting validation',
      'Strict schema enforcement preventing malformed tool payloads',
      'Transparent reasoning trace for recruiter & developer auditing'
    ],
    githubUrl: 'https://github.com',
    caseStudy: {
      problem: 'Creating an automated assistant that does not hallucinate during multi-step procedural tasks.',
      approach: 'Structured the agent using state machine transitions: Intent Parsing ➔ Schema Generation ➔ Tool Execution ➔ Synthesis.',
      technology: ['Python', 'TypeScript', 'JSON Schema', 'REST APIs'],
      implementation: 'Built a lightweight sandbox executor with structured logging and safety sandboxing for API dispatch.',
      impact: 'Enables complex end-to-end tasks like data scraping, transformation, and automated summary synthesis.',
      results: [
        '98.5% tool parameter execution fidelity on structured benchmark tasks',
        'Clear visual audit trail of decisions and intermediate outputs'
      ],
      challenges: [
        'Handling non-deterministic model completions with graceful error recovery.'
      ],
      architectureSummary: 'User Request ➔ Reasoning Engine ➔ Structured Tool Call ➔ Execution Sandbox ➔ Response Aggregator'
    }
  },
  {
    id: 'modern-ai-dashboard',
    title: 'Real-time AI Model Telemetry Hub',
    subtitle: 'High-Performance Visualizer for Neural Training & Inference Metrics',
    category: 'Web',
    featured: false,
    badge: 'Frontend Engineering',
    accentColor: '#EC4899', // pink
    description: 'A responsive, high-framerate dashboard for tracking training loss curves, gradient norms, latency distributions, and GPU memory utilization.',
    problemStatement: 'Machine learning engineers need responsive, clean dashboards without bloated setup scripts to track live experiment telemetry.',
    solution: 'Engineered a client-first metrics hub with SVG/Canvas charts, dark mode ergonomics, and instant local CSV/JSON log ingestion.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Data Visualization', 'Canvas'],
    highlights: [
      'Zero-dependency 60fps canvas loss plotting',
      'Side-by-side run comparison and epoch checkpoint inspection',
      'Dark-optimized interface engineered for prolonged monitoring'
    ],
    githubUrl: 'https://github.com',
    caseStudy: {
      problem: 'Heavyweight telemetry tools consume significant compute and lack customizable layout controls for local fast iterations.',
      approach: 'Built a lightweight web interface that directly consumes training logs with zero cloud lock-in.',
      technology: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas'],
      implementation: 'Created optimized ring buffers for time-series points to prevent browser memory leaks during 100k+ step runs.',
      impact: 'Delivers instant visual feedback on training divergence and loss plateaus.',
      results: [
        'Instantaneous load time under 300ms',
        'Smooth rendering of 50,000+ data points without dropped frames'
      ],
      challenges: [
        'Optimizing canvas redraw cycles during rapid streaming websocket updates.'
      ],
      architectureSummary: 'WebSocket / File Stream ➔ Ring Buffer Store ➔ Canvas Chart Renderer ➔ Interactive Metric Cards'
    }
  }
];

export const SKILLS_DATA: SkillNode[] = [
  // AI / Machine Learning
  {
    name: 'Machine Learning',
    category: 'AI / Machine Learning',
    proficiencyNote: 'Core Specialization',
    highlight: true,
    description: 'Supervised & unsupervised learning, classification, regression, model evaluation metrics, and hyperparameter tuning.',
    connectedSkills: ['Deep Learning', 'Python', 'Data Analysis', 'Neural Networks', 'Data Processing']
  },
  {
    name: 'Deep Learning',
    category: 'AI / Machine Learning',
    proficiencyNote: 'Core Specialization',
    highlight: true,
    description: 'Convolutional neural architectures, sequence models, backpropagation mathematics, transfer learning, and custom loss functions.',
    connectedSkills: ['Machine Learning', 'Computer Vision', 'NLP', 'Neural Networks', 'Python']
  },
  {
    name: 'NLP',
    category: 'AI / Machine Learning',
    proficiencyNote: 'Key Focus Area',
    highlight: true,
    description: 'Natural Language Processing, text tokenization, embeddings, transformer architectures, semantic similarity, and sentiment extraction.',
    connectedSkills: ['Deep Learning', 'Python', 'Machine Learning', 'Neural Networks', 'AI-assisted development']
  },
  {
    name: 'Computer Vision',
    category: 'AI / Machine Learning',
    proficiencyNote: 'Practical Experience',
    highlight: true,
    description: 'Image preprocessing, landmark detection, object classification, OpenCV filtering, and spatial keypoint regression.',
    connectedSkills: ['Deep Learning', 'Neural Networks', 'Python', 'Data Processing']
  },
  {
    name: 'Neural Networks',
    category: 'AI / Machine Learning',
    proficiencyNote: 'Foundational Knowledge',
    highlight: false,
    description: 'Multi-layer perceptrons, activation dynamics, regularization techniques (Dropout, BatchNorm), and gradient optimization.',
    connectedSkills: ['Deep Learning', 'Machine Learning', 'Python']
  },

  // Programming
  {
    name: 'Python',
    category: 'Programming',
    proficiencyNote: 'Primary Language',
    highlight: true,
    description: 'Extensive daily use for data science, ML model prototyping, scripting, PyTorch pipelines, and backend APIs.',
    connectedSkills: ['Machine Learning', 'Deep Learning', 'Data Analysis', 'NLP', 'Git']
  },
  {
    name: 'C',
    category: 'Programming',
    proficiencyNote: 'Systems & Fundamentals',
    highlight: false,
    description: 'Strong foundation in low-level memory allocation, pointers, algorithmic complexity, and structured execution flow.',
    connectedSkills: ['Python', 'Git']
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    proficiencyNote: 'Full Stack Development',
    highlight: true,
    description: 'ES6+ modern syntax, asynchronous event loops, promises, DOM manipulation, and interactive web capabilities.',
    connectedSkills: ['React', 'Modern Web Development', 'HTML', 'CSS']
  },

  // Development
  {
    name: 'React',
    category: 'Development',
    proficiencyNote: 'Modern Frontend',
    highlight: true,
    description: 'Component architecture, custom hooks, state management, interactive dashboards, and responsive web user experiences.',
    connectedSkills: ['JavaScript', 'Modern Web Development', 'HTML', 'CSS', 'VS Code']
  },
  {
    name: 'Modern Web Development',
    category: 'Development',
    proficiencyNote: 'Clean Production UI',
    highlight: true,
    description: 'Component-driven workflows, Vite tooling, responsive layouts, accessibility best practices, and performance tuning.',
    connectedSkills: ['React', 'CSS', 'JavaScript', 'Git']
  },
  {
    name: 'HTML',
    category: 'Development',
    proficiencyNote: 'Semantic Markup',
    highlight: false,
    description: 'Semantic structures, screen reader accessibility attributes, forms, audio/video elements, and modern DOM hierarchy.',
    connectedSkills: ['CSS', 'JavaScript', 'React']
  },
  {
    name: 'CSS',
    category: 'Development',
    proficiencyNote: 'Styling & Animations',
    highlight: false,
    description: 'Tailwind CSS, flexbox, CSS grid, micro-interactions, responsive media queries, and dark mode theming.',
    connectedSkills: ['HTML', 'Modern Web Development', 'React']
  },

  // Data
  {
    name: 'Data Analysis',
    category: 'Data',
    proficiencyNote: 'Exploratory & Analytical',
    highlight: true,
    description: 'Exploratory Data Analysis (EDA), distribution inspection, correlation matrix generation, and identifying anomalies.',
    connectedSkills: ['Python', 'Data Visualization', 'Data Processing', 'Machine Learning']
  },
  {
    name: 'Data Visualization',
    category: 'Data',
    proficiencyNote: 'Communicating Insights',
    highlight: false,
    description: 'Creating interpretable plots, heatmaps, telemetry dashboards, loss curves, and confusion matrix representations.',
    connectedSkills: ['Data Analysis', 'Python', 'Modern Web Development']
  },
  {
    name: 'Data Processing',
    category: 'Data',
    proficiencyNote: 'Feature Engineering',
    highlight: true,
    description: 'Data cleaning, normalization, categorical encoding, handling missing values, train/val/test splits, and data loaders.',
    connectedSkills: ['Python', 'Data Analysis', 'Machine Learning', 'Deep Learning']
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    proficiencyNote: 'Version Control',
    highlight: true,
    description: 'Branch management, commit hygiene, merge resolution, and collaborative code synchronization.',
    connectedSkills: ['GitHub', 'VS Code', 'Python']
  },
  {
    name: 'GitHub',
    category: 'Tools',
    proficiencyNote: 'Collaboration & Repositories',
    highlight: true,
    description: 'Open-source repository management, issues, pull requests, project tracking, and CI/CD pipelines.',
    connectedSkills: ['Git', 'VS Code']
  },
  {
    name: 'VS Code',
    category: 'Tools',
    proficiencyNote: 'Development Environment',
    highlight: false,
    description: 'Daily editor environment, integrated debugging, virtual environments, linting, and extensions.',
    connectedSkills: ['Git', 'Python', 'React']
  },
  {
    name: 'AI-assisted development',
    category: 'Tools',
    proficiencyNote: 'Modern Productivity',
    highlight: true,
    description: 'Leveraging AI developer tooling for rapid prototyping, test suite generation, architecture verification, and documentation.',
    connectedSkills: ['VS Code', 'Python', 'NLP']
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'AI / ML Intern',
    company: '1Stop / Fox Trading',
    period: 'Internship Track',
    location: 'Remote',
    workAreas: [
      'Pet face classification',
      'Landmark detection',
      'Object detection',
      'Machine learning experimentation'
    ],
    bulletPoints: [
      'Engineered machine learning pipelines for automated pet facial recognition and landmark localization.',
      'Developed and benchmarked computer vision models for fine-grained object detection across variable lighting datasets.',
      'Conducted rigorous empirical experiments evaluating convolutional architectures, learning rate schedules, and data augmentations.',
      'Collaborated on data preprocessing, annotation standardization, and validation splits to enhance generalization metrics.'
    ],
    technologies: ['Python', 'PyTorch / TensorFlow', 'OpenCV', 'Scikit-Learn', 'Data Augmentation']
  },
  {
    role: 'AI Systems Builder & Researcher',
    company: 'Independent Engineering & Hackathons',
    period: 'Ongoing',
    location: 'Self-Directed',
    workAreas: [
      'Cognitive AI Guardian development',
      'NLP semantic search engines',
      'Hackathon prototypes',
      'Full-stack intelligent applications'
    ],
    bulletPoints: [
      'Designed and deployed the Cognitive AI Guardian platform connecting elder cognitive exercises with caregiver safety alerts.',
      'Experimented with transformer models and dense vector embeddings for semantic document retrieval and contextual search.',
      'Built production-ready web interfaces with React and modern CSS to make AI models accessible to non-technical users.'
    ],
    technologies: ['Deep Learning', 'NLP', 'Computer Vision', 'React', 'FastAPI']
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'Smart India Hackathon (SIH)',
    type: 'Hackathon',
    event: 'National Hackathon Initiative',
    year: 'Hackathon Contender',
    summary: 'Participated in intense problem-solving hackathon rounds tackling real-world societal and technological challenges under strict deadlines.',
    tags: ['Smart India Hackathon', 'Rapid Prototyping', 'Team Engineering', 'Problem Solving']
  },
  {
    title: 'Microsoft Technical Workshop',
    type: 'Workshop',
    event: 'Microsoft Technical Sessions',
    year: 'Technical Program',
    summary: 'Completed specialized technical sessions focused on cloud computing fundamentals, modern developer workflows, and enterprise technologies.',
    tags: ['Microsoft', 'Cloud Fundamentals', 'Developer Workflows']
  },
  {
    title: 'University Technical Innovations',
    type: 'Project',
    event: 'Department Innovation Showcases',
    year: 'Academic Track',
    summary: 'Presented practical Deep Learning and AI applications, demonstrating end-to-end model execution and interactive frontend integration to faculty and peers.',
    tags: ['University Projects', 'AI Presentation', 'Peer Mentorship']
  },
  {
    title: 'Hands-on Deep Learning Workshops',
    type: 'Workshop',
    event: 'Technical Seminars',
    year: 'Continuous Learning',
    summary: 'Engaged in specialized practical labs on neural network architectures, computer vision pipelines, and natural language model fine-tuning.',
    tags: ['Deep Learning', 'Computer Vision', 'NLP']
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech)',
  major: 'Computer Science & Engineering (AI & Machine Learning)',
  institution: 'SR University',
  institutionShort: 'SRU',
  location: 'Warangal, Telangana, India',
  period: '2024 – 2028',
  batch: 'Batch of 2024 – 2028',
  cgpa: '8.5 / 10.0',
  academicStanding: 'Top Academic Standing • 8.5 CGPA',
  coursework: [
    'Data Structures & Algorithms',
    'Machine Learning & Neural Systems',
    'Natural Language Processing',
    'Linear Algebra & Probability for AI',
    'Database Management Systems',
    'Computer Vision Fundamentals',
    'Object-Oriented Design (Java/C++)',
    'Operating Systems & Networks',
    'Cyber Security & Cryptography'
  ],
  keyModules: [
    {
      category: 'AI & Machine Learning Core',
      topics: ['Deep Learning & Neural Networks', 'NLP & Tokenization', 'Computer Vision Pipelines', 'Model Optimization']
    },
    {
      category: 'Algorithms & Computing Foundations',
      topics: ['Advanced Data Structures', 'Algorithms Analysis', 'DBMS & Query Optimization', 'Object-Oriented Architecture']
    },
    {
      category: 'Applied Mathematics for AI',
      topics: ['Linear Algebra & Matrices', 'Multivariate Calculus', 'Probability & Statistics', 'Discrete Mathematics']
    }
  ],
  highlights: [
    'Maintaining a distinguished 8.5 / 10.0 CGPA throughout the intensive Computer Science & Engineering (AI & ML) program.',
    'Active participant in national engineering challenges including Smart India Hackathon (SIH) and university innovation showcases.',
    'Hands-on researcher at SR University AI & Robotics innovation initiatives, exploring cognitive assistance and deep vision models.',
    'Consistently bridging theoretical computer science with deployed, production-grade applications and responsive interfaces.'
  ],
  campusDistinctions: [
    'Academic Honor Roll (8.5 CGPA Distinction)',
    'Smart India Hackathon (SIH) Team Contender',
    'SRU AI Innovation Lab & Tech Showcase Participant',
    'Active Technical Project Presenter & Workshop Participant'
  ]
};

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'exp-attention',
    title: 'Self-Attention Matrix Explorer',
    category: 'NLP',
    status: 'Active Experiment',
    summary: 'Interactive simulation of multi-head self-attention score calculations between query and key tokens in a transformer sequence.',
    interactiveType: 'attention'
  },
  {
    id: 'exp-conv',
    title: 'Convolutional Kernel Sandbox',
    category: 'Computer Vision',
    status: 'Active Experiment',
    summary: 'Live visual demonstration of how 3x3 convolution kernels (Sobel, Edge Detect, Sharpen, Blur) transform feature maps.',
    interactiveType: 'convolution'
  },
  {
    id: 'exp-embeddings',
    title: 'Latent Vector Distance Calculator',
    category: 'ML Sandbox',
    status: 'Active Experiment',
    summary: 'Calculate cosine similarity and Euclidean distance in simulated 3D semantic vector space between AI and programming concepts.',
    interactiveType: 'embeddings'
  },
  {
    id: 'exp-tokenizer',
    title: 'Subword Tokenizer & Context Window',
    category: 'UI / Prompting',
    status: 'Prototype',
    summary: 'Visual inspection of token boundary chunking, token IDs, and context window limits for language models.',
    interactiveType: 'tokenizer'
  }
];
