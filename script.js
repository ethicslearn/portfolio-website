/* ═══════════════════════════════════════════════════════════════
   SHREYANSH JAISWAL — PORTFOLIO SCRIPT
   Particles · Typing · Scroll Reveal · Projects · Admin Data
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── DATA STORE (localStorage-backed) ──────────────────────── */
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Ethics Learn Platform",
    desc: "A full-featured educational platform with video courses, quizzes, and progress tracking built with React and Firebase.",
    category: "web",
    tags: ["React", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    github: "https://github.com",
    demo: "https://ethicslearn.com",
    date: "Dec 2024",
    featured: true
  },
  {
    id: 2,
    title: "Cyberpunk Portfolio UI",
    desc: "Award-winning portfolio design with particle animations, glassmorphism cards, and cinematic cyberpunk aesthetics.",
    category: "design",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    github: "https://github.com",
    demo: "#",
    date: "Nov 2024",
    featured: true
  },
  {
    id: 3,
    title: "AI Content Generator",
    desc: "Python-powered AI tool that generates blog posts, social media captions, and marketing copy using OpenAI API.",
    category: "ai",
    tags: ["Python", "OpenAI", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    github: "https://github.com",
    demo: "#",
    date: "Oct 2024",
    featured: false
  },
  {
    id: 4,
    title: "YouTube Channel Branding",
    desc: "Complete brand identity and video editing package for Ethics Learn YouTube channel — thumbnails, intros, and motion graphics.",
    category: "video",
    tags: ["Premiere Pro", "After Effects", "Photoshop"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    github: "#",
    demo: "https://youtube.com/@EthicsLearn",
    date: "Sep 2024",
    featured: false
  },
  {
    id: 5,
    title: "React Dashboard UI",
    desc: "Modern analytics dashboard with real-time charts, dark mode, and responsive layout built with React and Recharts.",
    category: "web",
    tags: ["React", "Recharts", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    github: "https://github.com",
    demo: "#",
    date: "Aug 2024",
    featured: false
  },
  {
    id: 6,
    title: "Python Web Scraper",
    desc: "Automated web scraping tool with data extraction, CSV export, and scheduled runs using Python, BeautifulSoup, and Selenium.",
    category: "ai",
    tags: ["Python", "Selenium", "BeautifulSoup"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    github: "https://github.com",
    demo: "#",
    date: "Jul 2024",
    featured: false
  }
];

const DEFAULT_BLOG = [
  {
    id: 1,
    icon: "🚀",
    date: "Dec 15, 2024",
    type: "launch",
    title: "Launched Ethics Learn v2.0",
    text: "Major update to the Ethics Learn platform with new courses, improved UI, and Firebase integration. 500+ students enrolled!"
  },
  {
    id: 2,
    icon: "🏆",
    date: "Nov 28, 2024",
    type: "achievement",
    title: "Reached 500 YouTube Subscribers",
    text: "Crossed the 500 subscriber milestone on Ethics Learn YouTube channel. Thank you for the incredible support!"
  },
  {
    id: 3,
    icon: "💡",
    date: "Nov 10, 2024",
    type: "learning",
    title: "Started Learning Next.js & TypeScript",
    text: "Diving deep into Next.js 14 with App Router and TypeScript. Building a full-stack project to solidify the concepts."
  },
  {
    id: 4,
    icon: "🎬",
    date: "Oct 22, 2024",
    type: "project",
    title: "Completed AI Content Generator Project",
    text: "Built a Python-powered AI tool using OpenAI API that generates blog posts and social media content automatically."
  },
  {
    id: 5,
    icon: "📚",
    date: "Oct 5, 2024",
    type: "learning",
    title: "Completed React Advanced Patterns Course",
    text: "Finished an advanced React course covering custom hooks, context optimization, and performance patterns."
  }
];

function getProjects() {
  try {
    const stored = localStorage.getItem('sj_projects');
    return stored ? JSON.parse(stored) : DEFAULT_PROJECTS;
  } catch { return DEFAULT_PROJECTS; }
}

function getBlog() {
  try {
    const stored = localStorage.getItem('sj_blog');
    return stored ? JSON.parse(stored) : DEFAULT_BLOG;
  } catch { return DEFAULT_BLOG; }
}

function saveProjects(data) {
  localStorage.setItem('sj_projects', JSON.stringify(data));
}

function saveBlog(data) {
  localStorage.setItem('sj_blog', JSON.stringify(data));
}

/* ── LOADER ─────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  document.body.classList.add('loading');
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }
    initAll();
  }, 2200);
});

function initAll() {
  initCursor();
  initNavbar();
  initParticles();
  initTyping();
  initScrollReveal();
  initSkillBars();
  initProjects();
  initBlog();
  initCounters();
  initContactForm();
  initVisitorCounter();
  initModal();
}

/* ── CUSTOM CURSOR ──────────────────────────────────────────── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');
  if (!cursor || !trail) return;

  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    trail.style.left = trailX + 'px';
    trail.style.top = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();
}

/* ── NAVBAR ─────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  });

  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle?.classList.remove('active');
      links?.classList.remove('open');
    });
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
}

/* ── PARTICLE CANVAS ────────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let animId;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.6 + 0.1;
      const colors = ['0, 212, 255', '168, 85, 247', '247, 37, 133', '57, 255, 20'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life > this.maxLife || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      const fade = this.life < 30 ? this.life / 30 : this.life > this.maxLife - 30 ? (this.maxLife - this.life) / 30 : 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity * fade})`;
      ctx.fill();
    }
  }

  function createParticles() {
    const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 8000));
    particles = Array.from({ length: count }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    animId = requestAnimationFrame(animate);
  }

  resize();
  createParticles();
  animate();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
}

/* ── TYPING ANIMATION ───────────────────────────────────────── */
function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'Web Developer',
    'Video Editor',
    'Content Creator',
    'UI/UX Designer',
    'AI Enthusiast',
    'Full Stack Dev'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 120;

  function type() {
    const current = phrases[phraseIdx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      delay = 60;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      delay = 120;
    }

    if (!isDeleting && charIdx === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 800);
}

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

/* ── SKILL BARS ─────────────────────────────────────────────── */
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach(fill => {
          const width = fill.getAttribute('data-width');
          setTimeout(() => {
            fill.style.width = width + '%';
          }, 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) observer.observe(skillsSection);
}

/* ── COUNTER ANIMATION ──────────────────────────────────────── */
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach(el => {
          const target = parseInt(el.getAttribute('data-count'));
          let current = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current);
            }
          }, 16);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) observer.observe(heroStats);
}

/* ── PROJECTS ───────────────────────────────────────────────── */
let currentFilter = 'all';
let currentSearch = '';

function initProjects() {
  renderProjects();

  const searchInput = document.getElementById('projectSearch');
  searchInput?.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    renderProjects();
  });

  document.getElementById('filterTabs')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderProjects();
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const projects = getProjects();
  let filtered = projects.filter(p => {
    const matchFilter = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch = !currentSearch ||
      p.title.toLowerCase().includes(currentSearch) ||
      p.desc.toLowerCase().includes(currentSearch) ||
      p.tags.some(t => t.toLowerCase().includes(currentSearch));
    return matchFilter && matchSearch;
  });

  // Show featured first
  filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  // Limit to 6 on homepage
  const display = filtered.slice(0, 6);

  if (display.length === 0) {
    grid.innerHTML = '<div class="no-projects">// No projects found matching your criteria</div>';
    return;
  }

  grid.innerHTML = display.map(p => createProjectCard(p)).join('');

  // Animate in
  grid.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 80);
  });

  // Click to open modal
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.project-link')) return;
      const id = parseInt(card.getAttribute('data-id'));
      openProjectModal(id);
    });
  });
}

function createProjectCard(p) {
  return `
    <div class="project-card ${p.featured ? 'featured' : ''} reveal-up" data-id="${p.id}">
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="project-thumb-overlay"></div>
        ${p.featured ? '<span class="project-featured-badge">⭐ Featured</span>' : ''}
      </div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-footer">
          <span class="project-date">${p.date}</span>
          <div class="project-links">
            ${p.github !== '#' ? `<a href="${p.github}" target="_blank" class="project-link github" onclick="event.stopPropagation()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>` : ''}
            ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" class="project-link demo" onclick="event.stopPropagation()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live
            </a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── PROJECT MODAL ──────────────────────────────────────────── */
function initModal() {
  const overlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openProjectModal(id) {
  const projects = getProjects();
  const p = projects.find(proj => proj.id === id);
  if (!p) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div style="margin-bottom:24px;">
      <img src="${p.image}" alt="${p.title}" style="width:100%;border-radius:12px;aspect-ratio:16/9;object-fit:cover;" />
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
      ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      ${p.featured ? '<span class="project-featured-badge" style="position:static;">⭐ Featured</span>' : ''}
    </div>
    <h2 style="font-family:var(--font-display);font-size:1.6rem;font-weight:800;margin-bottom:12px;color:var(--text-primary);">${p.title}</h2>
    <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:24px;font-size:0.95rem;">${p.desc}</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      ${p.github !== '#' ? `<a href="${p.github}" target="_blank" class="btn btn-secondary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        View on GitHub
      </a>` : ''}
      ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" class="btn btn-primary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Live Demo
      </a>` : ''}
    </div>
  `;

  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

/* ── BLOG TIMELINE ──────────────────────────────────────────── */
function initBlog() {
  const timeline = document.getElementById('blogTimeline');
  if (!timeline) return;

  const posts = getBlog();
  timeline.innerHTML = posts.map(post => `
    <div class="timeline-item reveal-up">
      <div class="timeline-dot">${post.icon}</div>
      <div class="timeline-content">
        <div class="timeline-meta">
          <span class="timeline-date">${post.date}</span>
          <span class="timeline-badge badge-${post.type}">${post.type}</span>
        </div>
        <h4 class="timeline-title">${post.title}</h4>
        <p class="timeline-text">${post.text}</p>
      </div>
    </div>
  `).join('');

  // Re-observe new elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  timeline.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

/* ── CONTACT FORM ───────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      showToast('✓ Message sent successfully!');
      form.reset();
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
      btn.disabled = false;
    }, 1500);
  });
}

/* ── VISITOR COUNTER ────────────────────────────────────────── */
function initVisitorCounter() {
  const el = document.getElementById('visitorCount');
  if (!el) return;

  let count = parseInt(localStorage.getItem('sj_visitors') || '100');
  count++;
  localStorage.setItem('sj_visitors', count.toString());
  el.textContent = count.toString().padStart(6, '0');
}

/* ── TOAST ──────────────────────────────────────────────────── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── SMOOTH SCROLL ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── EXPORT for admin pages ─────────────────────────────────── */
window.SJPortfolio = {
  getProjects, saveProjects, getBlog, saveBlog, showToast,
  DEFAULT_PROJECTS, DEFAULT_BLOG
};
