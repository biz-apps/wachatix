document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      if (isVisible) {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '72px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#ffffff';
        navMenu.style.padding = '20px 24px';
        navMenu.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        navMenu.style.gap = '16px';
      }
    });
  }

  // 2. HERO INTERACTIVE SCREEN SWITCHER (Store & Orders, Campaigns, Automation Flow, Support Chat)
  const screenTabs = document.querySelectorAll('.screen-tab');
  const phoneScreenViews = document.querySelectorAll('.phone-screen-view');
  const dashViews = document.querySelectorAll('.dash-view');
  const phoneAvatar = document.getElementById('phone-avatar');
  const phoneBizTitle = document.getElementById('phone-biz-title');
  const phoneBizStatus = document.getElementById('phone-biz-status');
  const phoneInputPlaceholder = document.getElementById('phone-input-placeholder');
  const dashMenuItems = document.querySelectorAll('.dash-menu-item');

  function switchHeroScreen(screenName) {
    // 1. Update Tabs
    screenTabs.forEach((tab) => {
      if (tab.dataset.screen === screenName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // 2. Update Phone Screen
    phoneScreenViews.forEach((view) => {
      view.classList.remove('active');
    });
    const targetPhoneView = document.getElementById(`phone-screen-${screenName}`);
    if (targetPhoneView) {
      targetPhoneView.classList.add('active');
    }

    // 3. Update Dashboard Content View
    dashViews.forEach((v) => {
      v.style.display = 'none';
    });
    const targetDashView = document.getElementById(`dash-view-${screenName}`);
    if (targetDashView) {
      targetDashView.style.display = 'block';
    }

    // 4. Update Header & Sidebar depending on selected screen
    dashMenuItems.forEach((item) => item.classList.remove('active'));

    if (screenName === 'store') {
      if (phoneAvatar) {
        phoneAvatar.textContent = 'BD';
        phoneAvatar.style.background = '#0f7a66';
      }
      if (phoneBizTitle) phoneBizTitle.innerHTML = 'Bali Dining <span class="verified-badge">✓</span>';
      if (phoneBizStatus) phoneBizStatus.textContent = '🟢 Open · 9AM - 6PM';
      if (phoneInputPlaceholder) phoneInputPlaceholder.textContent = 'Type or order from catalog above...';

      const dashMenu = document.querySelector('.dash-menu-item[data-dash-menu="dashboard"]');
      if (dashMenu) dashMenu.classList.add('active');
    } else if (screenName === 'chat') {
      if (phoneAvatar) {
        phoneAvatar.textContent = 'YB';
        phoneAvatar.style.background = 'var(--primary)';
      }
      if (phoneBizTitle) phoneBizTitle.innerHTML = 'Your Business <span class="verified-badge">✓</span>';
      if (phoneBizStatus) phoneBizStatus.textContent = 'Online';
      if (phoneInputPlaceholder) phoneInputPlaceholder.textContent = 'Type a message...';

      const inboxMenu = document.querySelector('.dash-menu-item[data-dash-menu="inbox"]');
      if (inboxMenu) inboxMenu.classList.add('active');
    } else if (screenName === 'campaign') {
      if (phoneAvatar) {
        phoneAvatar.textContent = 'YB';
        phoneAvatar.style.background = '#059669';
      }
      if (phoneBizTitle) phoneBizTitle.innerHTML = 'Your Brand <span class="verified-badge">✓</span>';
      if (phoneBizStatus) phoneBizStatus.textContent = '📢 Broadcast Message';
      if (phoneInputPlaceholder) phoneInputPlaceholder.textContent = 'Reply or tap button above...';

      const campMenu = document.querySelector('.dash-menu-item[data-dash-menu="campaigns"]');
      if (campMenu) campMenu.classList.add('active');
    } else if (screenName === 'automation') {
      if (phoneAvatar) {
        phoneAvatar.textContent = '🤖';
        phoneAvatar.style.background = '#0284c7';
      }
      if (phoneBizTitle) phoneBizTitle.innerHTML = 'WaChatix Bot <span class="verified-badge" style="color:#38bdf8;">✓</span>';
      if (phoneBizStatus) phoneBizStatus.textContent = '⚡ AI Assistant • Online';
      if (phoneInputPlaceholder) phoneInputPlaceholder.textContent = 'Select a slot or ask a question...';

      const autoMenu = document.querySelector('.dash-menu-item[data-dash-menu="automation"]');
      if (autoMenu) autoMenu.classList.add('active');
    }
  }

  screenTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const screen = tab.dataset.screen;
      switchHeroScreen(screen);
    });
  });

  // 3. TAKE APP STYLE CATALOG EXPLORER BY INDUSTRY
  const catalogData = {
    food: [
      { name: 'Caesar Salad', icon: '🥗', tag: 'Appetizer', desc: 'Crisp romaine, shaved parmesan, herbed garlic croutons', price: '$12.00' },
      { name: 'Arancini Balls', icon: '🧆', tag: 'Hot Starter', desc: 'Fried risotto balls stuffed with smoked mozzarella & marinara', price: '$13.00' },
      { name: 'Grilled Salmon', icon: '🐟', tag: 'Chef Choice', desc: 'Pan-seared Norwegian fillet with lime & lemon butter sauce', price: '$36.00' },
      { name: 'Ribeye Steak', icon: '🥩', tag: 'Premium Cut', desc: 'Char-grilled 300g ribeye with rosemary & Maldon sea salt', price: '$48.00' }
    ],
    coffee: [
      { name: 'Cold Brew Reserve', icon: '☕', tag: 'Bestseller', desc: '18-hour slow steeped single-origin Ethiopian roast', price: '$6.50' },
      { name: 'Artisanal Croissant', icon: '🥐', tag: 'Fresh Baked', desc: 'Flaky pure French butter layered morning croissant', price: '$4.50' },
      { name: 'Iced Matcha Latte', icon: '🍵', tag: 'Ceremonial', desc: 'Stone-ground Uji matcha whisked with creamy oat milk', price: '$7.00' },
      { name: 'Basque Cheesecake', icon: '🍰', tag: 'Dessert', desc: 'Caramelized burnt crust with molten creamy center', price: '$8.50' }
    ],
    fashion: [
      { name: 'Oversized Linen Shirt', icon: '👔', tag: 'Trending', desc: 'Breathable 100% organic European linen, relaxed fit', price: '$45.00' },
      { name: 'Vintage Denim Jacket', icon: '🧥', tag: 'Classic', desc: 'Stone-washed durable denim with brass hardware buttons', price: '$78.00' },
      { name: 'Ribbed Cotton Tee', icon: '👕', tag: 'Everyday', desc: 'Heavyweight 240gsm combed cotton crewneck staple', price: '$28.00' },
      { name: 'Silk Bandana Scarf', icon: '🧣', tag: 'Accessory', desc: 'Hand-printed geometric pure mulberry silk neckerchief', price: '$22.00' }
    ],
    cosmetic: [
      { name: 'Glow Vit-C Serum', icon: '✨', tag: 'Top Rated', desc: '15% stabilized ethyl ascorbic acid for luminous complexion', price: '$34.00' },
      { name: 'Ceramide Moisture Cream', icon: '🧴', tag: 'Hydrating', desc: 'Triple ceramide barrier repair with multi-weight HA', price: '$29.00' },
      { name: 'Botanical Cleansing Melt', icon: '🌿', tag: 'Gentle', desc: 'Jojoba & green tea oil balm that melts sunscreen & makeup', price: '$24.00' },
      { name: 'Rose Quartz Gua Sha', icon: '🌸', tag: 'Sculpting', desc: 'Natural gemstone facial sculpting & lymphatic drainage stone', price: '$18.00' }
    ],
    services: [
      { name: 'Wash & Fold Laundry', icon: '🧺', tag: 'Per 7kg bag', desc: 'Sorted, hypoallergenic washed, dried, and crisply folded', price: '$18.00' },
      { name: 'Dry Cleaning Service', icon: '👔', tag: 'Per Suit', desc: 'Eco-solvent delicate dry clean for formal wear & coats', price: '$26.00' },
      { name: 'Garment Steaming & Press', icon: '⏱️', tag: 'Express', desc: 'Wrinkle-free high-temperature professional fabric press', price: '$12.00' },
      { name: 'Sneaker Restoration', icon: '👟', tag: 'Deep Clean', desc: 'Midsole whitening, suede rejuvenation & weatherproofing', price: '$30.00' }
    ]
  };

  const catalogContainer = document.getElementById('catalog-products-container');
  const catTabs = document.querySelectorAll('.cat-tab');

  function renderCatalog(category) {
    if (!catalogContainer) return;
    const items = catalogData[category] || catalogData.food;
    catalogContainer.innerHTML = items.map(item => `
      <div class="cat-product-card">
        <div class="img-thumb">
          <span>${item.icon}</span>
          <span class="tag-badge">${item.tag}</span>
        </div>
        <div class="card-info">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="price-row">
            <span class="price-tag">${item.price}</span>
            <button class="add-wa-btn" type="button" onclick="alert('Added ${item.name} to WhatsApp Cart! View your WhatsApp draft.');">
              <span>+ Order in WA</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Initial render
  renderCatalog('food');

  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCatalog(tab.dataset.cat);
    });
  });

  // 4. DEEP SHOWCASE TABS (Campaigns vs Automation)
  const demoTabBtns = document.querySelectorAll('.demo-tab-btn');
  const demoPanels = document.querySelectorAll('.demo-panel');

  demoTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      demoTabBtns.forEach((b) => b.classList.remove('active'));
      demoPanels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanelId = `tab-${btn.dataset.tab}`;
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 5. INTERACTIVE BOT CHOICES IN SHOWCASE
  const choicePills = document.querySelectorAll('.choice-pill');
  const customerReply = document.getElementById('bot-demo-customer-reply');
  const slotsReply = document.getElementById('bot-demo-slots-reply');

  choicePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      choicePills.forEach((p) => p.classList.remove('active-demo'));
      pill.classList.add('active-demo');

      const choice = pill.dataset.choice;
      if (customerReply && slotsReply) {
        if (choice === 'pricing') {
          customerReply.querySelector('.bubble').textContent = '💼 View Pricing Plans';
          slotsReply.querySelector('.bubble').innerHTML = `
            <span class="bot-tag">⚡ Automated Reply (0.12s)</span>
            Here are our current plans:<br>
            • <strong>Starter:</strong> ₹2,000/mo (1 number)<br>
            • <strong>Growth:</strong> ₹5,000/mo (Multi-agent)<br>
            • <strong>Business:</strong> ₹9,990/mo (Full AI suite)<br>
            <div class="slots-container" style="margin-top:8px;">
              <a href="#pricing" class="slot-select-btn" style="text-decoration:none;">View Full Breakdown ↗</a>
            </div>
          `;
        } else if (choice === 'agent') {
          customerReply.querySelector('.bubble').textContent = '💬 Talk to an Agent';
          slotsReply.querySelector('.bubble').innerHTML = `
            <span class="bot-tag">⚡ Automated Escalation (0.10s)</span>
            Connecting you to our next available support specialist... 🔔<br>
            <em>Agent Ajeesh has joined the chat. How can I help you today?</em>
          `;
        } else {
          // Demo
          customerReply.querySelector('.bubble').textContent = '📅 Book 1-on-1 Demo';
          slotsReply.querySelector('.bubble').innerHTML = `
            <span class="bot-tag">⚡ Automated Reply (0.15s)</span>
            Great! 🎉 Our experts are available tomorrow. Please pick your preferred meeting slot:
            <div class="slots-container">
              <button class="slot-select-btn" onclick="alert('Demo booked for 11:30 AM! Our team will send confirmation.');">🗓️ 11:30 AM</button>
              <button class="slot-select-btn" onclick="alert('Demo booked for 03:00 PM! Our team will send confirmation.');">🗓️ 03:00 PM</button>
              <button class="slot-select-btn" onclick="alert('Demo booked for 05:30 PM! Our team will send confirmation.');">🗓️ 05:30 PM</button>
            </div>
          `;
        }
      }
    });
  });

  // 6. FAQ Accordion Interaction
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach((card) => {
    const questionBtn = card.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        faqCards.forEach((c) => c.classList.remove('open'));
        if (!isOpen) {
          card.classList.add('open');
        }
      });
    }
  });

  // 7. Interactive Inbox Filter Pills
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // 8. Interactive Inbox Conversation Selection
  const inboxConvs = document.querySelectorAll('.inbox-conv');
  inboxConvs.forEach((conv) => {
    conv.addEventListener('click', () => {
      inboxConvs.forEach((c) => c.classList.remove('active'));
      conv.classList.add('active');
    });
  });

  // 9. Testimonial Carousel Controls
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const testimonialContainer = document.getElementById('testimonials-container');

  if (prevBtn && nextBtn && testimonialContainer) {
    prevBtn.addEventListener('click', () => {
      testimonialContainer.scrollBy({ left: -320, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      testimonialContainer.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // 10. Sticky Header Shadow on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });
});
