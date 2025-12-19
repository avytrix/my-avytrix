document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isActive = mainNav.classList.toggle('active');
            menuToggle.textContent = isActive ? '✕' : '☰'; // ✕ = X
            menuToggle.style.fontSize = isActive ? '1.5rem' : '2rem';
            menuToggle.style.marginTop = isActive ? '-15px' : '-30px';
        });
    }

    // --- Mobile Sub-menu Toggle ---
    const navItemsWithChildren = document.querySelectorAll('.main-nav .menu-item-has-children');
    navItemsWithChildren.forEach(item => {
        // Add a click listener to the parent link
        item.querySelector('a').addEventListener('click', function(e) {
            // Only prevent default on mobile view where sub-menu is toggled by click
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });

    // --- Owl Carousel for Technologies ---
    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 5
                },
                600: {
                    items: 5
                },
                1000: {
                    items: 8
                }
            }
        });
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other active items
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // --- Theme Switcher ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const docHtml = document.documentElement;

    // Set initial theme from localStorage or system preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    docHtml.setAttribute('data-theme', currentTheme);
    if(themeSwitcher) themeSwitcher.value = currentTheme;


    if(themeSwitcher){
      themeSwitcher.addEventListener('change', (e) => {
          const selectedTheme = e.target.value;
          docHtml.setAttribute('data-theme', selectedTheme);
          localStorage.setItem('theme', selectedTheme);
      });
    }

    // Inside the document.addEventListener('DOMContentLoaded', function() { ... });

        // --- Cookie Consent Banner Logic ---
        const consentBanner = document.getElementById('cookie-consent-banner');
        const consentAcceptBtn = document.getElementById('cookie-consent-accept');

        // Check if consent has already been given
        const hasConsented = localStorage.getItem('viliha_cookie_consent');

        if (!hasConsented && consentBanner) {
            // If no consent, show the banner
            setTimeout(() => {
                consentBanner.classList.add('show');
            }, 500); // Small delay to let the page load
        }

        if (consentAcceptBtn) {
            consentAcceptBtn.addEventListener('click', () => {
                // When user clicks accept, hide the banner and save the choice
                consentBanner.classList.remove('show');
                localStorage.setItem('viliha_cookie_consent', 'true');
            });
        }




        // Add this inside document.addEventListener('DOMContentLoaded', function() { ... });

// --- Logic for Service Detail Page Tabs ---
const serviceDetailPage = document.getElementById('new-tech-page');
if (serviceDetailPage) {
    // Main Tabs Logic
    const tabNavItems = serviceDetailPage.querySelectorAll('.tab-nav-item');
    const tabContentPanels = serviceDetailPage.querySelectorAll('.tab-content-panel');

    tabNavItems.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.target;
            const targetPanel = document.querySelector(targetId);

            // Deactivate all tabs and panels
            tabNavItems.forEach(t => t.classList.remove('active'));
            //tabContentPanels.forEach(p => p.classList.remove('active'));

            // Activate the clicked tab and its corresponding panel
            tab.classList.add('active');
            if (targetPanel) {
                targetPanel.classList.add('active');
                targetPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Nested Interactive Lists Logic
    const interactiveListContainers = serviceDetailPage.querySelectorAll('.interactive-list-container');
    interactiveListContainers.forEach(container => {
        const listButtons = container.querySelectorAll('.interactive-list-button');
        const contentItems = container.querySelectorAll('.interactive-content-item');

        listButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.target;
                const targetContent = container.querySelector(targetId);

                // Deactivate all buttons and content within this specific container
                listButtons.forEach(b => b.classList.remove('active'));
                contentItems.forEach(c => c.classList.remove('active'));

                // Activate the clicked button and its content
                button.classList.add('active');
                if (targetContent) {
                    targetContent.classList.add('active');
                    //targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                
            });
        });
    });


    const techstackListContainers = serviceDetailPage.querySelectorAll('.tech-stack-list-container');
    techstackListContainers.forEach(container => {
        const listButtons = container.querySelectorAll('.tech-stack-list-button');
        const contentItems = container.querySelectorAll('.tech-stack-content-item');

        listButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.target;
                const targetContent = container.querySelector(targetId);

                // Deactivate all buttons and content within this specific container
                listButtons.forEach(b => b.classList.remove('active'));
                contentItems.forEach(c => c.classList.remove('active'));

                // Activate the clicked button and its content
                button.classList.add('active');
                if (targetContent) {
                    targetContent.classList.add('active');
                    //targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                
            });
        });
    });

}

const contactPage = document.getElementById('premium-contact-page');
if (contactPage) {
    const wrapper = contactPage.querySelector('.custom-select-wrapper');
    if (wrapper) {
      const trigger = wrapper.querySelector('.custom-select-trigger');
      const triggerText = trigger.querySelector('span');
      const options = wrapper.querySelectorAll('.custom-option');
      const hiddenInput = wrapper.querySelector('#service_interest_input');

      trigger.addEventListener('click', () => wrapper.classList.toggle('open'));
      options.forEach(option => {
          option.addEventListener('click', () => {
              const selectedValue = option.getAttribute('data-value');
              triggerText.textContent = selectedValue;
              hiddenInput.value = selectedValue;
              wrapper.classList.remove('open');
          });
      });
      window.addEventListener('click', (e) => {
          if (!wrapper.contains(e.target)) wrapper.classList.remove('open');
      });
    }

    // --- Advanced Form Validation and Submission Logic ---
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('.btn-submit');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const companyInput = form.querySelector('#company');
    const messageInput = form.querySelector('#message');
    const honeypotInput = form.querySelector('#website_url');
    const timestampInput = form.querySelector('#form_timestamp');

    // Set form load timestamp for bot detection
    const formLoadTime = Date.now();
    if (timestampInput) {
        timestampInput.value = formLoadTime;
    }

    // ============================================
    // RATE LIMITING CONFIGURATION
    // ============================================

    // Rate limit for form submissions: 3 per day
    const SUBMISSION_RATE_KEY = 'viliha_form_submissions';
    const SUBMISSION_RATE_MAX = 3;
    const SUBMISSION_RATE_WINDOW = 86400000; // 24 hours in milliseconds

    // Rate limit for API calls (email domain validation): 1 per day
    const API_RATE_KEY = 'viliha_api_calls';
    const API_RATE_MAX = 1;
    const API_RATE_WINDOW = 86400000; // 24 hours in milliseconds

    // Check rate limit helper function
    const checkRateLimitGeneric = (key, max, window) => {
        const entries = JSON.parse(localStorage.getItem(key) || '[]');
        const now = Date.now();
        const recentEntries = entries.filter(time => now - time < window);
        localStorage.setItem(key, JSON.stringify(recentEntries));
        return recentEntries.length < max;
    };

    // Record rate limit entry helper function
    const recordRateLimitEntry = (key) => {
        const entries = JSON.parse(localStorage.getItem(key) || '[]');
        entries.push(Date.now());
        localStorage.setItem(key, JSON.stringify(entries));
    };

    // Check submission rate limit (3 emails per day)
    const checkSubmissionRateLimit = () => {
        return checkRateLimitGeneric(SUBMISSION_RATE_KEY, SUBMISSION_RATE_MAX, SUBMISSION_RATE_WINDOW);
    };

    // Check API rate limit (1 API call per day for domain validation)
    const checkApiRateLimit = () => {
        return checkRateLimitGeneric(API_RATE_KEY, API_RATE_MAX, API_RATE_WINDOW);
    };

    // Input sanitization function
    const sanitizeInput = (str) => {
        if (!str) return '';
        return str
            .replace(/[<>]/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .trim();
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    // Check for disposable/temporary email domains
    const isDisposableEmail = (email) => {
        const disposableDomains = [
            'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
            'temp-mail.org', '10minutemail.com', 'fakeinbox.com', 'trashmail.com',
            'yopmail.com', 'getnada.com', 'mohmal.com', 'dispostable.com',
            'mailnesia.com', 'tempr.email', 'discard.email', 'throwawaymail.com'
        ];
        const domain = email.split('@')[1]?.toLowerCase();
        return disposableDomains.some(d => domain?.includes(d));
    };

    // Validate email domain structure (basic local check)
    const isValidEmailDomain = (email) => {
        const domain = email.split('@')[1]?.toLowerCase();
        if (!domain) return false;

        const domainParts = domain.split('.');
        if (domainParts.length < 2) return false;

        const tld = domainParts[domainParts.length - 1];
        if (tld.length < 2) return false;

        // Block gibberish TLDs (common valid TLDs whitelist)
        const validTLDs = [
            'com', 'org', 'net', 'edu', 'gov', 'mil', 'int', 'io', 'co', 'ai', 'app',
            'dev', 'tech', 'info', 'biz', 'name', 'pro', 'mobi', 'tel', 'asia', 'eu',
            'de', 'uk', 'fr', 'it', 'es', 'nl', 'be', 'at', 'ch', 'pl', 'ru', 'cn',
            'jp', 'kr', 'in', 'au', 'nz', 'ca', 'us', 'mx', 'br', 'ar', 'za', 'ae',
            'sg', 'hk', 'tw', 'th', 'my', 'id', 'ph', 'vn', 'pk', 'bd', 'ng', 'eg',
            'tr', 'il', 'sa', 'qa', 'kw', 'se', 'no', 'dk', 'fi', 'ie', 'pt', 'gr',
            'cz', 'hu', 'ro', 'bg', 'hr', 'sk', 'si', 'rs', 'ua', 'by', 'kz', 'cloud',
            'online', 'store', 'shop', 'site', 'website', 'blog', 'agency', 'digital',
            'media', 'design', 'studio', 'solutions', 'services', 'consulting', 'group',
            'company', 'business', 'marketing', 'software', 'systems', 'network', 'xyz'
        ];

        if (!validTLDs.includes(tld)) return false;

        const domainName = domainParts.slice(0, -1).join('.');
        if (domainName.length < 2) return false;

        // Check for keyboard mashing patterns (too many consonants in a row)
        const consonantPattern = /[bcdfghjklmnpqrstvwxyz]{5,}/i;
        if (consonantPattern.test(domainName)) return false;

        // Check for repeated characters (aaaa, xxxx)
        const repeatedPattern = /(.)\1{3,}/;
        if (repeatedPattern.test(domainName)) return false;

        return true;
    };

    // Verify email reputation using Abstract API (Email Reputation API)
    // Rate limited to 1 call per day
    const verifyEmailReputation = async (email) => {
        // Skip verification for known trusted domains (no API call needed)
        const trustedDomains = [
            'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
            'icloud.com', 'me.com', 'mac.com', 'aol.com', 'msn.com', 'protonmail.com',
            'proton.me', 'zoho.com', 'mail.com', 'gmx.com', 'gmx.net', 'yandex.com',
            'fastmail.com', 'tutanota.com', 'hey.com', 'pm.me'
        ];
        const domain = email.split('@')[1]?.toLowerCase();
        if (trustedDomains.includes(domain)) {
            return { valid: true, reason: 'trusted_domain', apiCalled: false };
        }

        // Check API rate limit (1 call per day)
        if (!checkApiRateLimit()) {
            console.log('API rate limit reached (1/day). Skipping domain verification.');
            return { valid: true, reason: 'api_rate_limited', apiCalled: false };
        }

        try {
            // Get API config from Hugo
            const config = window.VILIHA_CONFIG || {};
            const apiKey = config.abstractApiKey || '';
            const apiUrl = config.abstractApiUrl || 'https://emailreputation.abstractapi.com/v1/';

            if (!apiKey) {
                console.log('Email verification API not configured');
                return { valid: true, reason: 'api_not_configured', apiCalled: false };
            }

            // Make API call to Email Reputation API
            const response = await fetch(`${apiUrl}?api_key=${apiKey}&email=${encodeURIComponent(email)}`);

            if (!response.ok) {
                console.log('Email verification API error:', response.status);
                return { valid: true, reason: 'api_error', apiCalled: false };
            }

            // Record API call for rate limiting
            recordRateLimitEntry(API_RATE_KEY);

            const data = await response.json();
            console.log('Email Reputation API response:', data);

            // Check email reputation score and flags
            // Email Reputation API returns: email, score, and breach data

            // If score is very low (high spam risk), reject
            if (data.score !== undefined && data.score < 0.3) {
                return { valid: false, reason: 'Email has low reputation score. Please use a different email.', apiCalled: true };
            }

            // Check if email is from a suspicious domain
            if (data.details) {
                if (data.details.is_disposable === true) {
                    return { valid: false, reason: 'Disposable email addresses are not allowed.', apiCalled: true };
                }
                if (data.details.is_valid === false) {
                    return { valid: false, reason: 'Invalid email address.', apiCalled: true };
                }
                if (data.details.is_spam_trap === true) {
                    return { valid: false, reason: 'This email cannot be used.', apiCalled: true };
                }
            }

            return { valid: true, reason: 'verified', apiCalled: true };
        } catch (error) {
            console.log('Email verification failed:', error);
            return { valid: true, reason: 'verification_failed', apiCalled: false };
        }
    };

    const toggleError = (input, show) => {
        const formGroup = input.parentElement;
        formGroup.classList.toggle('error', show);
    };

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // ============================================
        // SECURITY CHECKS
        // ============================================

        // 1. Honeypot check - if filled, it's a bot
        if (honeypotInput && honeypotInput.value !== '') {
            console.log('Bot detected via honeypot');
            showSuccessModal(); // Fake success to confuse bots
            return;
        }

        // 2. Timestamp check - form filled too fast (under 3 seconds = likely bot)
        const timeTaken = Date.now() - formLoadTime;
        if (timeTaken < 3000) {
            console.log('Bot detected - form submitted too quickly');
            showSuccessModal(); // Fake success
            return;
        }

        // 3. Submission rate limit check (3 emails per day)
        if (!checkSubmissionRateLimit()) {
            alert('You have reached the maximum number of submissions for today (3). Please try again tomorrow.');
            return;
        }

        // 4. reCAPTCHA validation
        if (window.grecaptcha) {
            const recaptchaResponse = grecaptcha.getResponse();
            if (!recaptchaResponse || recaptchaResponse.length === 0) {
                alert('Please complete the reCAPTCHA verification.');
                return;
            }
        }

        // ============================================
        // INPUT VALIDATION (All fields required)
        // ============================================
        let isValid = true;

        // Sanitize all inputs
        nameInput.value = sanitizeInput(nameInput.value);
        emailInput.value = sanitizeInput(emailInput.value);
        companyInput.value = sanitizeInput(companyInput.value);
        messageInput.value = sanitizeInput(messageInput.value);

        // Validate Name (required, max 20 chars)
        if (nameInput.value.trim() === '' || nameInput.value.length > 20) {
            toggleError(nameInput, true);
            isValid = false;
        } else {
            toggleError(nameInput, false);
        }

        // Validate Email (required, valid format, valid domain structure)
        if (!validateEmail(emailInput.value) || emailInput.value.length > 254) {
            toggleError(emailInput, true);
            isValid = false;
        } else if (!isValidEmailDomain(emailInput.value)) {
            toggleError(emailInput, true);
            alert('Please enter a valid email domain.');
            isValid = false;
        } else if (isDisposableEmail(emailInput.value)) {
            toggleError(emailInput, true);
            alert('Please use a valid business email address.');
            isValid = false;
        } else {
            toggleError(emailInput, false);
        }

        // Validate Company (required, max 20 chars)
        if (companyInput.value.trim() === '' || companyInput.value.length > 20) {
            toggleError(companyInput, true);
            isValid = false;
        } else {
            toggleError(companyInput, false);
        }

        // Validate Message (required, max 500 chars)
        if (messageInput.value.trim() === '' || messageInput.value.length > 500) {
            toggleError(messageInput, true);
            isValid = false;
        } else {
            toggleError(messageInput, false);
        }

        if (!isValid) return;

        // ============================================
        // EMAIL DOMAIN VERIFICATION (API - 1 call/day)
        // ============================================
        submitButton.classList.add('sending');
        submitButton.disabled = true;

        const emailVerification = await verifyEmailReputation(emailInput.value);
        if (!emailVerification.valid) {
            toggleError(emailInput, true);
            alert(emailVerification.reason);
            submitButton.classList.remove('sending');
            submitButton.disabled = false;
            return;
        }

        // ============================================
        // SUBMIT FORM
        // ============================================

        // Record this submission for rate limiting (3/day)
        recordRateLimitEntry(SUBMISSION_RATE_KEY);

        const formData = new FormData(form);

        formData.append('service_id', 'service_l8b23vd');
        formData.append('template_id', 'template_u5v3z1a');
        formData.append('user_id', 'vB13cSMPfCxIjEKME');

        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).done(function() {
            showSuccessModal();
            if (window.grecaptcha) {
                grecaptcha.reset();
            }
            submitButton.classList.remove('sending');
            submitButton.disabled = false;
            // Clear form
            form.reset();
        }).fail(function(error) {
            alert('Sorry, something went wrong. Your message was not sent.');
            submitButton.classList.remove('sending');
            submitButton.disabled = false;
        });

    });

    // Close modal logic
    if(closeModalBtn) {
      closeModalBtn.addEventListener('click', () => successModal.classList.remove('show'));
    }
    if(successModal) {
      successModal.addEventListener('click', (e) => {
        if (e.target === successModal) successModal.classList.remove('show');
      });
    }
}

const techstackListContainers = document.querySelectorAll('.tech-stack-list-container');
if(techstackListContainers){
    techstackListContainers.forEach(container => {
        const listButtons = container.querySelectorAll('.tech-stack-list-button');
        const contentItems = container.querySelectorAll('.tech-stack-content-item');
        listButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.target;
                const targetContent = container.querySelector(targetId);

                // Deactivate all buttons and content within this specific container
                listButtons.forEach(b => b.classList.remove('active'));
                contentItems.forEach(c => c.classList.remove('active'));
                button.classList.add('active');
                if (targetContent) {
                    targetContent.classList.add('active');
                }
                
            });
        });
    });
}

});

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('show')
    setTimeout(() => {
      modal.classList.remove('show')
    }, 10000);
}


