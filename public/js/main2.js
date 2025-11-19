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
        const consentBanner = document.getElementById('cookie-consent-banner');
        const consentAcceptBtn = document.getElementById('cookie-consent-accept');
        const consentCloseBtn = document.getElementById('cookie-consent-decline');
        const hasConsented = localStorage.getItem('viliha_cookie_consent');

        if (!hasConsented && consentBanner) {
            setTimeout(() => {
                consentBanner.classList.add('show');
            }, 500); 
        }

        if (consentAcceptBtn || consentCloseBtn) {
            consentAcceptBtn.addEventListener('click', () => {
                consentBanner.classList.remove('show');
                localStorage.setItem('viliha_cookie_consent', 'true');
            });
            consentCloseBtn.addEventListener('click', () => {
                consentBanner.classList.remove('show');
                localStorage.setItem('viliha_cookie_consent', 'true');
            });
        }
const serviceDetailPage = document.getElementById('new-tech-page');
if (serviceDetailPage) {
    const tabNavItems = serviceDetailPage.querySelectorAll('.tab-nav-item');
    const tabContentPanels = serviceDetailPage.querySelectorAll('.tab-content-panel');

    tabNavItems.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.target;
            const targetPanel = document.querySelector(targetId);

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

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const toggleError = (input, show) => {
        const formGroup = input.parentElement;
        formGroup.classList.toggle('error', show);
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop default form submission

        // --- Validation ---
        let isValid = true;
        if (nameInput.value.trim() === '' && nameInput.value.length >25) {
            toggleError(nameInput, true);
            isValid = false;
        } else {
            toggleError(nameInput, false);
        }

        if (!validateEmail(emailInput.value)) {
            toggleError(emailInput, true);
            isValid = false;
        } else {
            toggleError(emailInput, false);
        }

        if (messageInput.value.trim() === ''&& messageInput.value.length >250) {
            toggleError(messageInput, true);
            isValid = false;
        } else {
            toggleError(messageInput, false);
        }
        
        if (!isValid) return; 
        submitButton.classList.add('sending');
        submitButton.disabled = true;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const data_new = {
            service_id: 'service_l8b23vd',
            template_id: 'template_6uq3gfq',
            user_id: 'vB13cSMPfCxIjEKME',
            template_params: {
                'name': nameInput.value.trim(),
                'email':emailInput.value,
                'company':companyInput.value,
                'message':messageInput.value,
            }
        };
		formData.append('service_id', 'service_l8b23vd');
        formData.append('user_id', 'vB13cSMPfCxIjEKME');
		
		// Queue actions using jQuery
		const queueObj = $({});

		queueObj.queue('sendQueue', function(next) {
			sendToCustomer(formData, 'template_u5v3z1a');
			next();
		}).queue('sendQueue', function(next) {
			sendToViliha(formData, 'template_6uq3gfq');
			next();
		}).queue('sendQueue', function(next) {
			clearForm();
			next();
		});

		queueObj.dequeue('sendQueue');
	

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
	
	
	function sendToCustomer(formData, templateId){
				formData.append('template_id', templateId);
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
					//sendToViliha(formData,'template_6uq3gfq');
				}).fail(function(error) {
					alert('Sorry, something went wrong. Your message was not sent.');
				});
			
		}
		
		function sendToViliha(formData, templateId){
				formData.set('template_id', templateId);	
				formData.append('dateTime',GermanTimeZone());
				$.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
					type: 'POST',
					data: formData,
					contentType: false, 
					processData: false 
				});
			
		}
		
		function clearForm(){
			nameInput.value='';
			emailInput.value="";
			companyInput.value="";
			messageInput.value="";
		}
		
		function GermanTimeZone(){
			const options = {
			  timeZone: 'Europe/Berlin',
			  day: '2-digit',
			  month: 'long',
			  year: 'numeric',
			  hour: '2-digit',
			  minute: '2-digit',
			  second: '2-digit',
			  hour12: false
			};

			const dateTimeInGerman = new Intl.DateTimeFormat('de-DE', options).format(new Date());
			const formattedDateTime = dateTimeInGerman
			  .replace(',', '')           // Remove the comma
			  .replace(/\./g, '')         // Remove dots
			  .replace(/(\d{2}) (\w+) (\d{4}) (\d{2}):(\d{2}):(\d{2})/, '$1-$2-$3 $4:$5:$6');
			return formattedDateTime;
						
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
