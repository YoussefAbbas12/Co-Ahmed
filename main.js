const initialSiteData = {
    fields: [
        {
            img: 'images/programming.webp',
            title: 'عالم البرمجة',
            desc: 'اللغة التي تحكم العالم. ابدأ رحلتك البرمجية واصنع مستقبلك الخاص.'
        },
        {
            img: 'images/design.webp',
            title: 'الإبداع البصري',
            desc: 'حول خيالك إلى حقيقة بصرية مطلوبة في كبرى وكالات الإعلان والشركات.'
        },
        {
            img: 'images/markting.webp',
            title: 'التسويق الذكي',
            desc: 'تعلم فن البيع والتأثير في العصر الرقمي وضاعف فرص نجاح أي مشروع.'
        },
        {
            img: 'images/skills.webp',
            title: 'تطوير الذات',
            desc: 'امتلك أدوات النجاح الشخصي والقيادي لتكون الرقم الصعب في أي فريق عمل.'
        },
        {
            img: 'images/ai.png',
            title: 'الذكاء الاصطناعي',
            desc: 'اكتشف أساسيات الذكاء الاصطناعي وتعلم كيفية استخدام أحدث الأدوات والتقنيات لزيادة إنتاجيتك وبناء حلول مبتكرة.'
        },
        {
            img: 'images/languages.png',
            title: 'تعلم اللغات',
            desc: 'طور مهاراتك اللغوية وتواصل بثقة مع العالم من خلال تعلم لغات جديدة بأساليب عملية وحديثة.'
        }
    ],
    teamProjects: [
        { type: 'video', src: 'videos/runner.mp4' },
        { type: 'video', src: 'videos/orange.mp4' },
        { type: 'video', src: 'videos/mango.mp4' },
        { type: 'video', src: 'videos/map.mp4' },
        { type: 'video', src: 'videos/coutch.mp4' },
        { type: 'image', src: 'videos/full-charge1.jpeg' },
        { type: 'image', src: 'videos/full-charge2.jpeg' },
        { type: 'image', src: 'videos/full-charge3.jpeg' },
        { type: 'image', src: 'videos/full-charge5.jpeg' },
        { type: 'image', src: 'videos/low-charge.jpeg' },
        { type: 'image', src: 'videos/mirror.jpeg' },
        { type: 'image', src: 'videos/mirror2.jpeg' }
    ],
    faqs: [
        {
            q: 'ما هو Event Break out؟',
            a: 'هو إيفنت تعليمي عملي مخصص للشباب، هدفه تعريفهم بأساسيات الذكاء الاصطناعي (AI) وطرق استخدامه بشكل صحيح وفعال في الدراسة والعمل، مع تدريب عملي على أشهر الأدوات والتقنيات الحديثة لمواكبة متطلبات سوق العمل.'
        },
        {
            q: 'الإيفنت مناسب لمين؟',
            a: 'الإيفنت مناسب للطلبة، الخريجين، اللي لسه بيبدأ، اللي محتار يدخل أنهي مجال، وأي شاب عايز مصدر دخل أو يغيّر مساره المهني.'
        },
        {
            q: 'هل لازم أكون عندي خبرة سابقة؟',
            a: 'لا. المحتوى معمول للمبتدئين تمامًا، ومفيد كمان للي عنده معرفة بسيطة وعايز يبدأ بشكل صحيح.'
        },
        {
            q: 'هنتكلم عن إيه في اليوم؟',
            a: 'هنغطي أهم المجالات المطلوبة في سوق العمل: التصميم (Graphic Design)، البرمجة (Programming)، التسويق الرقمي (Digital Marketing)، الذكاء الاصطناعي (Artificial Intelligence)، تعلم اللغات (Languages)، والمهارات الشخصية (Soft Skills)، مع التركيز على التطبيقات العملية وكيفية الاستفادة من كل مجال في تطوير المهارات وخلق فرص مهنية مستقبلية.'
        },
        {
            q: 'هل المحتوى نظري ولا عملي؟',
            a: 'المحتوى مبني على التجربة والواقع العملي،والمشاريع التجريبيه مش كلام نظري، والهدف إنك تخرج فاهم تبدأ منين، تختار إيه، وتكمل إزاي.'
        },
        {
            q: 'الإيفنت أونلاين ولا أوفلاين؟',
            a: 'الإيفنت أوفلاين بحضور مباشر في محافظة الدقهلية يوم 9 فبراير 2026.'
        },
        {
            q: 'هل الدخول متاح بدون تذكرة؟',
            a: 'لا. الدخول متاح من خلال تذكرة مدفوعة فقط لضمان الجدية وجودة التجربة.'
        },
        {
            q: 'إزاي أحجز مكاني؟',
            a: 'سجل بياناتك في الفورم المخصص للحجز وفريق التنظيم هيتواصل معاك لتأكيد الحجز.'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    let siteData = initialSiteData;

    function loadData() {
        siteData = initialSiteData;
        renderData();
    }

    function renderData() {
        // Render Fields
        const fieldsContainer = document.querySelector('.fields-grid');
        if (fieldsContainer && siteData.fields) {
            fieldsContainer.innerHTML = siteData.fields.map((f, i) => `
                <div class="field-card" data-aos="fade-up" data-aos-delay="${150 + (i * 50)}">
                    <img src="${f.img}" alt="${f.title}">
                    <h3>${f.title}</h3>
                    <p>${f.desc}</p>
                </div>
            `).join('');
        }

        // Render Team Projects
        const projectsContainer = document.querySelector('.team-projects-grid');
        if (projectsContainer && siteData.teamProjects) {
            projectsContainer.innerHTML = siteData.teamProjects.map((project, i) => `
                <div class="team-project-card" data-aos="fade-up" data-aos-delay="${100 + (i * 80)}">
                    ${project.type === 'video' ? `
                        <video controls preload="metadata" playsinline>
                            <source src="${project.src}" type="video/mp4">
                            المتصفح لا يدعم عرض الفيديو.
                        </video>
                    ` : `
                        <img src="${project.src}" alt="مشروع الفريق">
                    `}
                </div>
            `).join('');
        }

        // Render FAQs
        const faqContainer = document.querySelector('.faq-container');
        if (faqContainer && siteData.faqs) {
            faqContainer.innerHTML = siteData.faqs.map((faq, i) => `
                <div class="faq-item" data-aos="fade-up" data-aos-delay="${100 + (i * 100)}">
                    <div class="faq-header">
                        <h4>${faq.q}</h4>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div class="faq-content">
                        <p>${faq.a}</p>
                    </div>
                </div>
            `).join('');
            
            // Re-attach FAQ logic after render
            attachFAQLogic();
        }
        
        // Re-initialize AOS for new elements
        AOS.refresh();
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

    // Premium Form Feedback
    const inputs = document.querySelectorAll('.contact-form input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
            input.style.transition = '0.3s';
        });
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
        });
    });

    loadData();
});
