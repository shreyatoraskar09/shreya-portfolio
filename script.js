/* ==========================================================================
   SHREYA TORASKAR - PORTFOLIO INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Project Detailed Data Store (For Dynamic Modals)
    // ----------------------------------------------------------------------
    const projectData = {
        gurbannext: {
            title: "GUrbanNext — Housing Society Management System",
            category: "Enterprise Web & API Solution",
            tech: ["C#", "ASP.NET Core Web API", "Entity Framework Core", "Angular", "SQL Server"],
            summary: "GUrbanNext is an enterprise-grade digital management platform engineered to automate and streamline daily operations for housing societies, gated communities, and residential complexes.",
            architecture: "Built using a 3-Tier Layered Architecture with Angular as a Single Page Application frontend connecting seamlessly via RESTful ASP.NET Core Web APIs to SQL Server with EF Core object-relational mapping.",
            keyFeatures: [
                "Dedicated Role-Based Modules: Custom dashboards for Admin, Society Secretary, Security Guards, Account Managers, and Resident Members.",
                "Resident & Flat Management: Digitized wing creation, flat inventory, owner/tenant profiles, vendor contracts, and parking slot assignment.",
                "Financial & Billing Engine: Automated maintenance fee calculation, online bank transaction tracking, expense logging, and worker salary processing.",
                "Visitor & Gatekeeper Security: Real-time visitor log entry, employee/maid attendance tracking, and gate pass verification with strict access policies.",
                "Worker Task Assignment: Enables Secretaries to assign operational tickets to maintenance staff and monitor resolution milestones.",
                "Security & RBAC: Enforces role-based permissions to guarantee data privacy across different society roles."
            ]
        },
        gnticketcore: {
            title: "GNTicketCore — Web Ticket Management System",
            category: "Support & SLA System",
            tech: ["C#", "ASP.NET MVC", "ADO.NET", "JavaScript", "AJAX", "Bootstrap", "SQL Server"],
            summary: "GNTicketCore is a high-volume support ticket tracking and customer service management application designed to manage ticket creation, agent assignment, SLA compliance, and escalation workflow.",
            architecture: "Engineered on ASP.NET MVC architecture using ADO.NET for fast, optimized SQL Server queries, combined with asynchronous AJAX partial updates for zero-reload ticket commenting and status toggles.",
            keyFeatures: [
                "Multi-Tier Workflows: Dedicated operational panels for System Admins, Team Leaders, Support Agents, and Customers.",
                "Complete Lifecycle Control: Seamless flow covering ticket creation, priority setting (Low/Medium/Critical), agent routing, escalation, and resolution closing.",
                "SLA & Overdue Alerting: Automated deadline tracking and visual alert triggers for tickets approaching or exceeding SLA thresholds.",
                "AJAX Real-Time Console: Live updates for ticket status changes, internal notes, customer comments, and filter criteria without full page reloads.",
                "Customer Feedback & Ratings: Post-resolution feedback survey system measuring agent performance metrics and CSAT satisfaction scores.",
                "Secure Transactions: Enforced SQL parameterization and session security policies to protect ticket audit trails."
            ]
        },
        gdispatchhub: {
            title: "GDispatchHub — Courier Management System",
            category: "Desktop Logistics Software",
            tech: ["C#", "WinForms", "ADO.NET", "SQL Server", "Stored Procedures"],
            summary: "GDispatchHub is an end-to-end desktop courier & logistics operational software built to handle high-frequency parcel bookings, delivery partner assignments, branch transfers, and Cash on Delivery (COD) reconciliations.",
            architecture: "Designed with C# WinForms frontend connected via ADO.NET DataReaders and DataAdapters directly to an optimized Microsoft SQL Server backend utilizing custom Stored Procedures and Indexing.",
            keyFeatures: [
                "Modular Desktop Console: Specialized modules for Customers, Commercial Accounts, System Admins, Logistics Branches, and Delivery Executives.",
                "Parcel Booking & Tracking: Complete receipt generation, sender/receiver details logging, package weight & rate calculation, and status tracking.",
                "Branch & Delivery Partner Assignment: Direct dispatching of parcels to local pickup partners and delivery boys with real-time status updates.",
                "Return & COD Management: Automated return parcel processing, failed delivery logs, and Cash on Delivery (COD) amount transfers across branches.",
                "Database Performance Tuning: Highly optimized SQL queries, stored procedures, and triggers ensuring fast search and booking throughput.",
                "Account Billing: Customer registration, corporate client account credit tracking, and detailed transaction statements."
            ]
        }
    };

    // ----------------------------------------------------------------------
    // 2. Typewriter Effect in Hero Section
    // ----------------------------------------------------------------------
    const typewriterElement = document.getElementById('typewriterText');
    const roles = [
        "Full-Stack Web Applications",
        "ASP.NET Core & Web APIs",
        "C# 3-Tier Architectures",
        "SQL Server & Stored Procedures",
        "Angular Single Page Apps"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function typeEffect() {
        if (!typewriterElement) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }

        setTimeout(typeEffect, typingDelay);
    }

    typeEffect();

    // ----------------------------------------------------------------------
    // 3. Navbar Scroll & Mobile Menu Toggle
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Nav Link Highlighting
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });

        // Back to Top Button Visibility
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (backToTopBtn) {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
    }

    // Back to top click action
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----------------------------------------------------------------------
    // 4. Light/Dark Theme Switcher
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);
            updateThemeIcon(newTheme);
            showToast(`Switched to ${newTheme.toUpperCase()} mode`, 'info');
        });
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'light') {
            themeIcon.className = 'fa-solid fa-sun';
            themeIcon.style.color = '#f59e0b';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            themeIcon.style.color = '#60a5fa';
        }
    }

    // ----------------------------------------------------------------------
    // 5. Skills Category Filter & Live Search
    // ----------------------------------------------------------------------
    const skillFilters = document.getElementById('skillFilters');
    const skillSearchInput = document.getElementById('skillSearchInput');
    const skillCards = document.querySelectorAll('.skill-card');

    if (skillFilters) {
        skillFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                skillFilters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                filterSkills();
            }
        });
    }

    if (skillSearchInput) {
        skillSearchInput.addEventListener('input', filterSkills);
    }

    function filterSkills() {
        const activeFilterBtn = skillFilters ? skillFilters.querySelector('.filter-btn.active') : null;
        const filterValue = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
        const searchValue = skillSearchInput ? skillSearchInput.value.toLowerCase().trim() : '';

        skillCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const textContent = card.textContent.toLowerCase();

            const matchesFilter = (filterValue === 'all' || category === filterValue);
            const matchesSearch = (searchValue === '' || textContent.includes(searchValue));

            if (matchesFilter && matchesSearch) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.4s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // ----------------------------------------------------------------------
    // 6. Projects Showcase Category Filter
    // ----------------------------------------------------------------------
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-project-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-project-category');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 7. Dynamic Project Details Modal
    // ----------------------------------------------------------------------
    const projectModal = document.getElementById('projectModal');
    const projectModalTitle = document.getElementById('projectModalTitle');
    const projectModalBody = document.getElementById('projectModalBody');
    const closeProjectModalBtns = [
        document.getElementById('closeProjectModal'),
        document.getElementById('closeProjectModalBottom')
    ];

    document.querySelectorAll('.view-project-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const data = projectData[projectId];

            if (data && projectModal) {
                projectModalTitle.innerHTML = `<i class="fa-solid fa-code-branch"></i> ${data.title}`;
                
                projectModalBody.innerHTML = `
                    <div class="project-modal-details">
                        <span class="badge badge-primary mb-3">${data.category}</span>
                        <p class="modal-summary"><strong>Overview:</strong> ${data.summary}</p>
                        
                        <div class="modal-section mt-3">
                            <h4><i class="fa-solid fa-sitemap"></i> Architecture & Engineering</h4>
                            <p>${data.architecture}</p>
                        </div>

                        <div class="modal-section mt-3">
                            <h4><i class="fa-solid fa-list-check"></i> Key Features & Operational Modules</h4>
                            <ul class="responsibilities-list">
                                ${data.keyFeatures.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="modal-section mt-3">
                            <h4><i class="fa-solid fa-microchip"></i> Technology Stack</h4>
                            <div class="tech-tags">
                                ${data.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;

                projectModal.classList.add('active');
            }
        });
    });

    closeProjectModalBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                if (projectModal) projectModal.classList.remove('active');
            });
        }
    });

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.classList.remove('active');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 8. Resume Preview Modal
    // ----------------------------------------------------------------------
    const resumeModal = document.getElementById('resumeModal');
    const openResumeBtns = [
        document.getElementById('openResumeBtn'),
        document.getElementById('heroResumeBtn')
    ];
    const closeResumeBtns = [
        document.getElementById('closeResumeModal'),
        document.getElementById('closeResumeModalBottom')
    ];
    const printResumeBtn = document.getElementById('printResumeBtn');

    openResumeBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                if (resumeModal) resumeModal.classList.add('active');
            });
        }
    });

    closeResumeBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                if (resumeModal) resumeModal.classList.remove('active');
            });
        }
    });

    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                resumeModal.classList.remove('active');
            }
        });
    }

    if (printResumeBtn) {
        printResumeBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // ----------------------------------------------------------------------
    // 9. Contact Form Validation & Submission
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('senderName').value.trim();
            const email = document.getElementById('senderEmail').value.trim();
            const message = document.getElementById('senderMessage').value.trim();

            if (!name || !email || !message) {
                showToast('Please fill in all required fields.', 'error');
                return;
            }

            // Simulate form dispatch feedback
            const submitBtn = document.getElementById('submitMsgBtn');
            const originalBtnContent = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Sent!';
                submitBtn.style.background = 'var(--accent-emerald)';
                showToast(`Thank you ${name}! Your message has been recorded. Shreya will contact you shortly.`, 'success');

                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1200);
        });
    }

    // ----------------------------------------------------------------------
    // 10. Copy to Clipboard Functionality
    // ----------------------------------------------------------------------
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
                }).catch(() => {
                    showToast('Failed to copy. Please copy manually.', 'error');
                });
            }
        });
    });

    // ----------------------------------------------------------------------
    // 11. Mouse Glow Spotlight Movement
    // ----------------------------------------------------------------------
    const mouseSpotlight = document.getElementById('mouseSpotlight');
    if (mouseSpotlight) {
        window.addEventListener('mousemove', (e) => {
            mouseSpotlight.style.left = `${e.clientX}px`;
            mouseSpotlight.style.top = `${e.clientY}px`;
        });
    }

    // ----------------------------------------------------------------------
    // 12. Toast Notification Helper
    // ----------------------------------------------------------------------
    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const iconClass = type === 'success' 
            ? 'fa-solid fa-circle-check' 
            : type === 'error' 
                ? 'fa-solid fa-circle-exclamation' 
                : 'fa-solid fa-circle-info';

        toast.innerHTML = `
            <i class="${iconClass}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
});
