const projects = [
  {
    id: 1,
    title: "Leaf Doctor",
    description: "AI-powered plant diagnosis platform where users upload a plant image to detect diseases, view symptoms, and get treatment suggestions using an AI API.",
    tags: ["React", "TypeScript", "AI API"],
    image_url: "leaf-doc.png",
    demo_url: "https://leaf-doctor-front.vercel.app//",
    github_url: "",
    featured: true
  },
  {
    id: 2,
    title: "Reflecto",
    description: "Backend system for a Saudi-based car detailing company, handling bookings, OTP authentication, loyalty points, and BNPL payment integration.",
    tags: ["Node.js", "Express", "MySQL", "JWT"],
    image_url: "reflecto.png",
    demo_url: "https://reflecto.com.sa/",
    github_url: "",
    featured: true
  },
  {
    id: 3,
    title: "EnglishTaxo",
    description: "Full-stack educational platform for an English institute, managing student records, course content, and progress tracking with a secure dashboard system.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    image_url: "englishtaxo.png",
    demo_url: "https://englishtaxo.com/",
    github_url: "",
    featured: true
  },
  {
    id: 4,
    title: "Islamic Platform",
    description: "Comprehensive Islamic web platform featuring the full Quran with reading, audio recitation, and verse-by-verse tafsir, along with hadith, duas, prayer times, quizzes, tasbeeh, and Islamic rulings.",
    tags: ["React", "APIs", "JavaScript"],
    image_url: "eslamic.png",
    demo_url: "https://eslamic-jade.vercel.app/",
    github_url: "https://github.com/YoussefAbbas12/eslamic.git",
    featured: true
  },
  {
    id: 5,
    title: "Ramadan Challenge",
    description: "A Ramadan-focused website that provides daily challenges throughout the month and allows users to track their daily prayers and spiritual progress.",
    tags: ["React", "JavaScript"],
    image_url: "ramadan-site.png",
    demo_url: "https://ramadan-site-six.vercel.app/",
    github_url: "https://github.com/YoussefAbbas12/ramadan-site.git",
    featured: true
  },
  {
    id: 6,
    title: "Masertak",
    description: "Official website for an organization that trains and guides students to apply for international scholarships and educational opportunities.",
    tags: ["React", "JavaScript"],
    image_url: "132.png",
    demo_url: "https://masertak.vercel.app/",
    github_url: "https://github.com/YoussefAbbas12/masertak.git",
    featured: false
  },
  {
    id: 7,
    title: "Evolve Nova",
    description: "Modern company website designed for a training organization that provides courses and professional development programs.",
    tags: ["React", "JavaScript"],
    image_url: "evolvo.png",
    demo_url: "https://evolve-nova.vercel.app/",
    github_url: "https://github.com/YoussefAbbas12/Evolve-Nova.git",
    featured: false
  },
  {
    id: 8,
    title: "MsarWeb",
    description: "Corporate portfolio website designed to showcase the services, projects, and identity of a software development company.",
    tags: ["HTML", "CSS", "JavaScript"],
    image_url: "msarweb.png",
    demo_url: "https://msar-web.vercel.app/",
    github_url: "https://github.com/YoussefAbbas12/MsarWeb.git",
    featured: false
  },
  {
    id: 9,
    title: "Weather App",
    description: "Simple weather application that allows users to check the current weather conditions for cities around the world.",
    tags: ["JavaScript", "Weather API", "HTML", "CSS"],
    image_url: "weather.png",
    demo_url: "https://youssefabbas12.github.io/weather-app/",
    github_url: "https://github.com/YoussefAbbas12/weather-app.git",
    featured: false
  }
];

const formattedProgrammingProjects = projects.map(p => ({
    type: 'image',
    src: `projects/${p.image_url}`,
    title: p.title,
    description: p.description,
    tags: p.tags,
    demo_url: p.demo_url,
    github_url: p.github_url
}));

const initialSiteData = {
    fields: [
        {
            img: 'images/programming.webp',
            title: 'البرمجة وتطوير الويب',
            desc: 'تعلم لغات البرمجة وبناء المواقع والتطبيقات أونلاين مع تطبيق عملي ومشاريع معتمدة تؤهلك لسوق العمل.'
        },
        {
            img: 'images/design.webp',
            title: 'الإبداع البصري والجرافيك',
            desc: 'احترف أدوات التصميم والجرافيك والـ Branding وصمم بورتفوليو قوي ومؤثر تحت إشراف خبراء المجال.'
        },
        {
            img: 'images/markting.webp',
            title: 'التسويق الرقمي والنمو',
            desc: 'تعلم فن التسويق، الإعلانات الممولة، وإدارة الحملات الرقمية للوصول لعملاء حقيقيين وتحقيق نتائج استثنائية.'
        },
        {
            img: 'images/skills.webp',
            title: 'تطوير الذات والقيادة',
            desc: 'امتلك مهارات التواصل الفعال، القيادة، والذكاء المهني لتكون دائماً الخيار الأول في أي فريق عمل.'
        },
        {
            img: 'images/ai.png',
            title: 'الذكاء الاصطناعي AI',
            desc: 'استكشف أحدث أدوات وتطبيقات الذكاء الاصطناعي وكيفية تسخيرها لمضاعفة إنتاجيتك وبناء حلول مبتكرة.'
        },
        {
            img: 'images/languages.png',
            title: 'تعلم اللغات الحية',
            desc: 'طور مهاراتك اللغوية وتحدث بثقة مع العالم من خلال مناهج تفاعلية حديثة وتطبيق مباشر أونلاين.'
        }
    ],
    teamProjects: [
        { type: 'video', src: 'videos/orange.mp4' },
        { type: 'video', src: 'videos/mango.mp4' },
        { type: 'video', src: 'videos/map.mp4' },
        { type: 'video', src: 'videos/coutch.mp4' },
        { type: 'video', src: 'videos/cola.mp4' },
        { type: 'video', src: 'videos/foot-ball.mp4' },
        { type: 'video', src: 'videos/runner.mp4' },
        { type: 'video', src: 'videos/ships.mp4' },
        { type: 'video', src: 'videos/sting.mp4' },
        { type: 'video', src: 'videos/gemini.mp4' },
        { type: 'image', src: 'videos/co1.jpeg' },
        { type: 'image', src: 'videos/co2.jpeg' },
        { type: 'image', src: 'videos/full-charge1.jpeg' },
        { type: 'image', src: 'videos/full-charge2.jpeg' },
        { type: 'image', src: 'videos/full-charge3.jpeg' },
        { type: 'image', src: 'videos/full-charge4.jpeg' },
        { type: 'image', src: 'videos/full-charge5.jpeg' },
        { type: 'image', src: 'videos/low-charge.jpeg' },
        { type: 'image', src: 'videos/mirror.jpeg' },
        { type: 'image', src: 'videos/mirror2.jpeg' },
        { type: 'image', src: 'videos/shadow1.jpeg' },
        { type: 'image', src: 'videos/shadow2.jpeg' },
        { type: 'image', src: 'videos/shadow3.jpeg' },
        { type: 'image', src: 'videos/shadow4.jpeg' },
        { type: 'image', src: 'videos/shadow5.jpeg' },
        { type: 'image', src: 'videos/shadow6.jpeg' },
        { type: 'image', src: 'videos/shadow7.jpeg' },
        { type: 'image', src: 'videos/shadow8.jpeg' }
    ],
    designProjects: [
        { type: 'image', src: 'videos/design/design1.jpeg' },
        { type: 'image', src: 'videos/design/design2.jpeg' },
        { type: 'image', src: 'videos/design/design3.jpeg' },
        { type: 'image', src: 'videos/design/design4.jpeg' },
        { type: 'image', src: 'videos/design/design6.jpeg' },
        { type: 'image', src: 'videos/design/design7.jpeg' },
        { type: 'image', src: 'videos/design/design8.jpeg' },
        { type: 'image', src: 'videos/design/design9.jpeg' },
        { type: 'image', src: 'videos/design/design10.jpeg' },
        { type: 'image', src: 'videos/design/design11.jpeg' },
        { type: 'image', src: 'videos/design/design12.jpeg' },
        { type: 'image', src: 'videos/design/design13.jpeg' },
        { type: 'image', src: 'videos/design/design14.jpeg' }
    ],
    programmingProjects: [
        ...formattedProgrammingProjects,
        { type: 'video', src: 'videos/programming/web1.mp4' },
        { type: 'video', src: 'videos/programming/web2.mp4' },
        { type: 'video', src: 'videos/programming/web3.mp4' },
        { type: 'video', src: 'videos/programming/web4.mp4' }
    ],
    faqs: [
        {
            q: 'ما هي شركة PlanB للحلول التعليمية؟',
            a: 'شركة PlanB هي منصة تعليمية رائدة تقدم برامج وكورسات أونلاين تفاعلية تهدف لتطوير المهارات العملية وتأهيل الشباب والطلاب للالتحاق بسوق العمل واحتراف أحدث المجالات التكنولوجية والإبداعية.'
        },
        {
            q: 'هل تحصل في نهاية الكورس على شهادة معتمدة؟',
            a: 'نعم، تمنح شركة PlanB شهادات معتمدة رسمياً لجميع الطلاب الذين يتمون المسار التعليمي ويقدمون المشاريع التطبيقية المطلوبة بنجاح.'
        },
        {
            q: 'كيف تدار المحاضرات أونلاين وهل توجد متابعة؟',
            a: 'تدرس الكورسات أونلاين من خلال المنصة التعليمية الرقمية مع وجود جلسات متابعة وتواصل مباشر مع المحاضرين لمراجعة التطبيقات، تصحيح الأخطاء، والإجابة على أي تساؤلات أولاً بأول.'
        },
        {
            q: 'ما هي المجالات المتاحة حالياً على المنصة؟',
            a: 'نوفر مسارات شاملة في البرمجة وتطوير الويب، الجرافيك والتصميم، التسويق الرقمي، الذكاء الاصطناعي (AI)، تعلم اللغات، وتطوير الذات والمهارات الشخصية.'
        },
        {
            q: 'هل الكورسات مناسبة للمبتدئين بدون خبرة سابقة؟',
            a: 'نعم تماماً! تبدأ مساراتنا التدريبية من المستويات التأسيسية خطوة بخطوة وتتدرج بك حتى المستوى الاحترافي والتطبيقي المتقدم.'
        },
        {
            q: 'كيف يمكنني الاشتراك والتسجيل في الكورس؟',
            a: 'قم بتعبئة استمارة الانضمام المتاحة أسفل الموقع وااختيار المجال الذي ترغب بالانضمام إليه، وسيقوم فريق المستشارين التعليميين بالتواصل معك فوراً لتأكيد حجزك ومساعدتك.'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Check Registration Gate State
    const gateModal = document.getElementById('registration-gate-modal');
    const gateForm = document.getElementById('gate-contact-form');
    const isRegistered = localStorage.getItem('planb_registered');

    if (isRegistered === 'true') {
        document.body.classList.remove('site-locked');
        if (gateModal) {
            gateModal.classList.remove('active');
            gateModal.style.display = 'none';
        }
    } else {
        document.body.classList.add('site-locked');
        if (gateModal) gateModal.classList.add('active');
    }

    if (gateForm) {
        gateForm.addEventListener('submit', function(e) {
            localStorage.setItem('planb_registered', 'true');
            if (gateModal) {
                gateModal.style.opacity = '0';
                setTimeout(() => {
                    gateModal.classList.remove('active');
                    gateModal.style.display = 'none';
                    document.body.classList.remove('site-locked');
                    if (typeof AOS !== 'undefined') {
                        AOS.refresh();
                    }
                }, 400);
            }
        });
    }

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 900,
            once: true,
            offset: 80,
            easing: 'ease-out-cubic'
        });
    }

    let siteData = initialSiteData;
    let visibleAIProjectsCount = 6;
    let visibleDesignProjectsCount = 6;
    let visibleProgrammingProjectsCount = 6;

    function loadData() {
        siteData = initialSiteData;
        visibleAIProjectsCount = 6;
        visibleDesignProjectsCount = 6;
        visibleProgrammingProjectsCount = 6;
        renderData();
    }

    function renderData() {
        // Render Fields
        const fieldsContainer = document.querySelector('.fields-grid');
        if (fieldsContainer && siteData.fields) {
            fieldsContainer.innerHTML = siteData.fields.map((f, i) => `
                <div class="field-card" data-aos="fade-up" data-aos-delay="${100 + (i * 50)}">
                    <img src="${f.img}" alt="${f.title}">
                    <h3>${f.title}</h3>
                    <p>${f.desc}</p>
                </div>
            `).join('');
        }

        renderProjectSection('ai-projects-grid', siteData.teamProjects, visibleAIProjectsCount);
        renderProjectSection('design-projects-grid', siteData.designProjects, visibleDesignProjectsCount);
        renderProjectSection('programming-projects-grid', siteData.programmingProjects, visibleProgrammingProjectsCount);

        updateLoadMoreButton('load-more-ai-projects', siteData.teamProjects, visibleAIProjectsCount);
        updateLoadMoreButton('load-more-design-projects', siteData.designProjects, visibleDesignProjectsCount);
        updateLoadMoreButton('load-more-programming-projects', siteData.programmingProjects, visibleProgrammingProjectsCount);

        // Render FAQs
        const faqContainer = document.querySelector('.faq-container');
        if (faqContainer && siteData.faqs) {
            faqContainer.innerHTML = siteData.faqs.map((faq, i) => `
                <div class="faq-item" data-aos="fade-up" data-aos-delay="${80 + (i * 80)}">
                    <div class="faq-header">
                        <h4>${faq.q}</h4>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div class="faq-content">
                        <p>${faq.a}</p>
                    </div>
                </div>
            `).join('');
            
            attachFAQLogic();
        }

        attachTeamProjectsLogic();
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function renderProjectSection(containerId, projectsList, visibleCount) {
        const container = document.getElementById(containerId);
        const visible = projectsList ? projectsList.slice(0, visibleCount) : [];
        if (!container) return;

        container.innerHTML = visible.map((project, i) => `
            <div class="team-project-card" data-aos="fade-up" data-aos-delay="${60 + (i * 60)}">
                ${project.type === 'video' ? `
                    <video controls preload="metadata" playsinline>
                        <source src="${project.src}" type="video/mp4">
                        المتصفح لا يدعم عرض الفيديو.
                    </video>
                ` : `
                    <img src="${project.src}" alt="${project.title || 'مشروع الطلاب'}">
                `}
                ${project.title ? `
                    <div class="project-card-overlay">
                        <div class="project-overlay-content">
                            <h3>${project.title}</h3>
                            <p>${project.description || ''}</p>
                            ${project.tags && project.tags.length ? `
                                <div class="project-tags">
                                    ${project.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
                                </div>
                            ` : ''}
                            <div class="project-links">
                                ${project.demo_url ? `<a href="${project.demo_url}" target="_blank" rel="noopener" class="project-link-btn demo-btn"><i class="fa-solid fa-arrow-up-right-from-square"></i> معاينة المباشرة</a>` : ''}
                                ${project.github_url ? `<a href="${project.github_url}" target="_blank" rel="noopener" class="project-link-btn github-btn"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}
                            </div>
                        </div>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    function updateLoadMoreButton(buttonId, projectsList, visibleCount) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        if (projectsList && projectsList.length > visibleCount) {
            button.style.display = 'inline-flex';
            button.textContent = 'عرض المزيد من المشاريع';
        } else {
            button.style.display = 'none';
        }
    }

    function attachTeamProjectsLogic() {
        const aiButton = document.getElementById('load-more-ai-projects');
        const designButton = document.getElementById('load-more-design-projects');
        const programmingButton = document.getElementById('load-more-programming-projects');

        if (aiButton) {
            aiButton.addEventListener('click', () => {
                visibleAIProjectsCount = siteData.teamProjects.length;
                renderData();
            });
        }

        if (designButton) {
            designButton.addEventListener('click', () => {
                visibleDesignProjectsCount = siteData.designProjects.length;
                renderData();
            });
        }

        if (programmingButton) {
            programmingButton.addEventListener('click', () => {
                visibleProgrammingProjectsCount = siteData.programmingProjects.length;
                renderData();
            });
        }
    }

    function attachFAQLogic() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-header');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    const icon = faq.querySelector('i');
                    if (icon) icon.className = 'fa-solid fa-plus';
                });
                if (!isActive) {
                    item.classList.add('active');
                    const icon = item.querySelector('i');
                    if (icon) icon.className = 'fa-solid fa-minus';
                }
            });
        });
    }

    // Input animations
    const inputs = document.querySelectorAll('.contact-form input, .contact-form select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-2px)';
        });
        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0)';
        });
    });

    loadData();
});
