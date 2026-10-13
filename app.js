// Switch Tab Functionality
function switchTab(tabId) {
  // Update Tab Buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`btn-tab-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  // Update Tab Content Panels
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  const activePanel = document.getElementById(`tab-${tabId}`);
  if (activePanel) {
    activePanel.classList.add('active');
  }

  // Update Navbar Links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(tabId)) {
      link.classList.add('active');
    }
  });

  // Scroll to main content area smoothly if switched from hero or footer
  const mainContainer = document.querySelector('.main-container');
  if (mainContainer && window.scrollY > 300) {
    mainContainer.scrollIntoView({ behavior: 'smooth' });
  }
}

// Reading Progress Indicator
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const bar = document.getElementById('reading-progress');
  if (bar) {
    bar.style.width = scrolled + '%';
  }

  // Highlight Sidebar TOC link
  const sections = document.querySelectorAll('.paper-section');
  let currentSec = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    if (winScroll >= secTop) {
      currentSec = sec.getAttribute('id');
    }
  });

  document.querySelectorAll('.toc-list a').forEach(link => {
    link.style.color = '';
    link.style.fontWeight = '';
    if (link.getAttribute('href') === `#${currentSec}`) {
      link.style.color = '#0f2b48';
      link.style.fontWeight = '800';
    }
  });
});

// Copy Prompt to Clipboard
function copyPrompt(id, btn) {
  const promptBox = document.getElementById(id);
  if (!promptBox) return;

  const text = promptBox.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerText;
    btn.innerText = '✓ Đã sao chép!';
    btn.style.background = '#10b981';
    btn.style.color = '#ffffff';
    btn.style.borderColor = '#10b981';

    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  }).catch(err => {
    console.error('Lỗi khi sao chép:', err);
  });
}

// Ensure smooth hash navigation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#sec-"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      switchTab('report');
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
