// Exact CV Modal Details
                function openModal(id) {
            const modal = document.getElementById('project-modal');
            const content = document.getElementById('modal-content');
                    const isEnglish = window.currentLanguage === 'en';
                    const data = isEnglish && window.projectDetailsEn
                        ? window.projectDetailsEn[id]
                        : window.projectDetails[id];

                    if (data) {
                        window.activeProjectId = id;
                        content.innerHTML = `
                    <span class="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-1">${data.period}</span>
                    <h3 class="text-2xl font-bold text-slate-900 mb-3">${data.title}</h3>
                    <p class="text-slate-600 text-sm leading-relaxed mb-5">${data.description}</p>
                    <h4 class="font-bold text-slate-800 text-sm mb-3">${isEnglish ? 'Project Highlights:' : 'Détails des Réalisations :'}</h4>
                    <ul class="space-y-3 mb-6">
                        ${data.highlights.map(item => `<li class="flex items-start gap-2 text-sm text-slate-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" style="width:1em;height:1em;display:inline-block;vertical-align:-0.125em" class="text-orange-500 mt-1"><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg> <span>${item}</span></li>`).join('')}
                    </ul>
                    <button onclick="closeModal()" class="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-orange-500 transition-colors">${isEnglish ? 'Close' : 'Fermer'}</button>
                `;
                modal.classList.remove('hidden');
            }
        }

        function closeModal() {
            document.getElementById('project-modal').classList.add('hidden');
            window.activeProjectId = null;
        }

        window.refreshProjectModal = () => {
            if (window.activeProjectId) openModal(window.activeProjectId);
        };

        // Project Filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-orange-500', 'text-white');
                    b.classList.add('bg-white', 'text-slate-700');
                });
                btn.classList.remove('bg-white', 'text-slate-700');
                btn.classList.add('bg-orange-500', 'text-white');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Mobile Nav Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

        // Header email shortcut
        const emailPopover = document.getElementById('email-popover');
        const emailPopoverTriggers = document.querySelectorAll('.email-popover-trigger');
        let activeEmailPopoverTrigger = null;

        function positionEmailPopover(trigger) {
            const container = emailPopover.parentElement;
            const containerBounds = container.getBoundingClientRect();
            const triggerBounds = trigger.getBoundingClientRect();
            const popoverWidth = emailPopover.offsetWidth;
            const originLeft = containerBounds.left + container.clientLeft;
            const triggerCenter = triggerBounds.left + triggerBounds.width / 2;
            const viewportGutter = 16;
            const viewportWidth = document.documentElement.clientWidth;
            const minLeft = viewportGutter - originLeft;
            const maxLeft = viewportWidth - viewportGutter - originLeft - popoverWidth;
            const left = Math.max(minLeft, Math.min(maxLeft, triggerCenter - originLeft - popoverWidth / 2));
            const arrowLeft = Math.max(8, Math.min(popoverWidth - 20, triggerCenter - originLeft - left - 6));

            emailPopover.style.left = `${left}px`;
            emailPopover.style.right = 'auto';
            emailPopover.style.setProperty('--email-popover-arrow-left', `${arrowLeft}px`);
        }

        function setEmailPopoverOpen(isOpen, trigger = activeEmailPopoverTrigger) {
            emailPopover.classList.toggle('hidden', !isOpen);
            if (isOpen && trigger) {
                activeEmailPopoverTrigger = trigger;
                positionEmailPopover(trigger);
            } else if (!isOpen) {
                activeEmailPopoverTrigger = null;
            }
            emailPopoverTriggers.forEach(trigger => {
                trigger.setAttribute('aria-expanded', String(isOpen));
            });
        }

        emailPopoverTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                setEmailPopoverOpen(emailPopover.classList.contains('hidden'), trigger);
            });
        });

        window.addEventListener('resize', () => {
            if (activeEmailPopoverTrigger && !emailPopover.classList.contains('hidden')) {
                positionEmailPopover(activeEmailPopoverTrigger);
            }
        });

        document.addEventListener('click', event => {
            if (!emailPopover.contains(event.target) &&
                !Array.from(emailPopoverTriggers).some(trigger => trigger.contains(event.target))) {
                setEmailPopoverOpen(false);
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                setEmailPopoverOpen(false);
                if (cvPreviewModal.open) {
                    event.preventDefault();
                    closeCVPreview();
                }
            }
        }, true);

        const cvPreviewModal = document.getElementById('cv-preview-modal');
        const cvPreviewFrame = document.getElementById('cv-preview-frame');
        const cvPreviewOpen = document.getElementById('cv-preview-open');
        const cvPreviewDownload = document.getElementById('cv-preview-download');
        const cvDownloadTrigger = document.getElementById('cv-download-trigger');
        const cvDocuments = {
            fr: {
                url: 'assets/cv.pdf',
                filename: 'CV_Najmeddine_Gharbi_FR.pdf',
                title: 'Aperçu du CV en français'
            },
            en: {
                url: 'assets/cv-en.pdf',
                filename: 'CV_Najmeddine_Gharbi_EN.pdf',
                title: 'English CV preview'
            }
        };

        function setCVPreviewLanguage(language) {
            const documentDetails = cvDocuments[language];
            if (!documentDetails) {
                console.error(`Unsupported CV language: ${language}`);
                return;
            }

            cvPreviewFrame.src = `${documentDetails.url}#view=FitH`;
            cvPreviewFrame.title = documentDetails.title;
            cvPreviewOpen.href = documentDetails.url;
            cvPreviewDownload.href = documentDetails.url;
            cvPreviewDownload.download = documentDetails.filename;

            document.querySelectorAll('[data-cv-language]').forEach(button => {
                const isActive = button.dataset.cvLanguage === language;
                button.setAttribute('aria-pressed', String(isActive));
            });
        }

        function openCVPreview() {
            setCVPreviewLanguage(window.currentLanguage === 'en' ? 'en' : 'fr');
            cvPreviewModal.showModal();
            cvDownloadTrigger.setAttribute('aria-expanded', 'true');
            document.getElementById('cv-preview-close').focus();
        }

        function closeCVPreview() {
            if (!cvPreviewModal.open) return;
            cvPreviewModal.close();
            cvDownloadTrigger.setAttribute('aria-expanded', 'false');
            cvPreviewFrame.src = 'about:blank';
        }

        cvPreviewModal.addEventListener('close', () => {
            cvDownloadTrigger.setAttribute('aria-expanded', 'false');
            cvPreviewFrame.src = 'about:blank';
        });

        cvPreviewModal.addEventListener('click', event => {
            if (event.target === cvPreviewModal) closeCVPreview();
        });

        document.querySelectorAll('[data-cv-language]').forEach(button => {
            button.addEventListener('click', () => setCVPreviewLanguage(button.dataset.cvLanguage));
        });

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const revealSelectors = [
            '#hero .hero-availability',
            '#hero .hero-name',
            '#hero .hero-tagline',
            '#hero .hero-portrait-column',
            'section[id]:not(#hero) .text-center.max-w-3xl',
            '#about .space-y-6.text-slate-600',
            '#about .grid > div',
            '#projects .project-card',
            '#skills .grid > div',
            '#timeline .max-w-4xl > .group',
            '#engagement .grid > div',
            '#contact .contact-details',
            '#contact .contact-form-column'
        ];
        const revealTargets = [...new Set(
            revealSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector)))
        )];

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            revealTargets.forEach(target => target.classList.add('is-revealed'));
        } else {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

            revealTargets.forEach((target, index) => {
                target.classList.add('reveal-on-scroll');
                target.style.setProperty('--reveal-delay', `${(index % 4) * 80}ms`);
                revealObserver.observe(target);
            });
        }

        const scrollProgress = document.createElement('div');
        scrollProgress.className = 'scroll-progress';
        scrollProgress.setAttribute('aria-hidden', 'true');
        document.body.appendChild(scrollProgress);

        const backToTop = document.createElement('button');
        backToTop.type = 'button';
        backToTop.className = 'back-to-top';
        backToTop.setAttribute('aria-label', 'Retour en haut / Back to top');
        backToTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5m-7 7 7-7 7 7"/></svg>';
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
        document.body.appendChild(backToTop);

        const header = document.querySelector('header.glass-header');
        const nav = header.querySelector('nav');
        const navItems = Array.from(nav.querySelectorAll('a[href^="#"]'))
            .filter(link => link.getAttribute('href') !== '#contact')
            .map(link => ({
                link,
                section: document.getElementById(link.getAttribute('href').slice(1))
            }))
            .filter(item => item.section);
        const parallaxItems = Array.from(document.querySelectorAll('.construction-bg-icon'));
        const scrollNavLinkIntoView = link => {
            window.setTimeout(() => {
                if (!link.classList.contains('is-current') || nav.scrollWidth <= nav.clientWidth) {
                    return;
                }
                const navBounds = nav.getBoundingClientRect();
                const linkBounds = link.getBoundingClientRect();
                const targetScroll = nav.scrollLeft + linkBounds.left + linkBounds.width / 2 -
                    navBounds.left - nav.clientWidth / 2;
                nav.scrollTo({
                    left: Math.max(0, Math.min(nav.scrollWidth - nav.clientWidth, targetScroll)),
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }, 240);
        };
        let scrollUpdateScheduled = false;
        const updateScrollEffects = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
            scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
            backToTop.classList.toggle('is-visible', window.scrollY > 420);
            if (!prefersReducedMotion) {
                parallaxItems.forEach(item => {
                    const speed = Number.parseFloat(item.dataset.parallaxSpeed);
                    const offset = Math.max(-64, Math.min(64, window.scrollY * speed));
                    item.style.setProperty('--parallax-offset', `${offset}px`);
                });
            }
            const isScrolled = window.scrollY > 80;
            const wasScrolled = header.classList.contains('is-scrolled');
            header.classList.toggle('is-scrolled', isScrolled);
            if (isScrolled && !wasScrolled) {
                mobileMenu.classList.add('hidden');
                setEmailPopoverOpen(false);
            }
            const activePoint = window.innerHeight * 0.3;
            let currentNavItem = null;
            navItems.forEach(item => {
                if (item.section.getBoundingClientRect().top <= activePoint) {
                    currentNavItem = item;
                }
            });
            navItems.forEach(({ link }) => {
                const isCurrent = isScrolled && currentNavItem && currentNavItem.link === link;
                const wasCurrent = link.classList.contains('is-current');
                link.classList.toggle('is-current', Boolean(isCurrent));
                if (isCurrent) {
                    link.setAttribute('aria-current', 'location');
                    if (!wasCurrent) {
                        scrollNavLinkIntoView(link);
                    }
                } else {
                    link.removeAttribute('aria-current');
                }
            });
            scrollUpdateScheduled = false;
        };

        window.addEventListener('scroll', () => {
            if (!scrollUpdateScheduled) {
                scrollUpdateScheduled = true;
                window.requestAnimationFrame(updateScrollEffects);
            }
        }, { passive: true });
        updateScrollEffects();

        const aboutGallery = document.getElementById('about-gallery');
        if (aboutGallery) {
            const gallerySlides = Array.from(aboutGallery.querySelectorAll('[data-gallery-slide]'));
            const galleryDots = Array.from(aboutGallery.querySelectorAll('[data-gallery-dot]'));
            const previousButton = aboutGallery.querySelector('[data-gallery-previous]');
            const nextButton = aboutGallery.querySelector('[data-gallery-next]');
            let currentSlide = 0;
            let autoAdvanceTimer;
            let isPointerOverGallery = false;

            const showGallerySlide = index => {
                currentSlide = (index + gallerySlides.length) % gallerySlides.length;
                gallerySlides.forEach((slide, slideIndex) => {
                    const isActive = slideIndex === currentSlide;
                    slide.classList.toggle('is-active', isActive);
                    slide.setAttribute('aria-hidden', String(!isActive));
                });
                galleryDots.forEach((dot, dotIndex) => {
                    dot.setAttribute('aria-pressed', String(dotIndex === currentSlide));
                });
            };

            const stopGalleryTimer = () => {
                window.clearInterval(autoAdvanceTimer);
            };

            const startGalleryTimer = () => {
                stopGalleryTimer();
                if (gallerySlides.length > 1 && !document.hidden && !isPointerOverGallery) {
                    autoAdvanceTimer = window.setInterval(() => {
                        showGallerySlide(currentSlide + 1);
                    }, 5000);
                }
            };

            if (gallerySlides.length > 1) {
                previousButton.addEventListener('click', () => {
                    showGallerySlide(currentSlide - 1);
                    startGalleryTimer();
                });
                nextButton.addEventListener('click', () => {
                    showGallerySlide(currentSlide + 1);
                    startGalleryTimer();
                });
                galleryDots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        showGallerySlide(index);
                        startGalleryTimer();
                    });
                });
                aboutGallery.addEventListener('mouseenter', () => {
                    isPointerOverGallery = true;
                    stopGalleryTimer();
                });
                aboutGallery.addEventListener('mouseleave', () => {
                    isPointerOverGallery = false;
                    startGalleryTimer();
                });
                document.addEventListener('visibilitychange', startGalleryTimer);
                startGalleryTimer();
            }
        }
