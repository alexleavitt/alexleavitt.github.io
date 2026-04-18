document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');

  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }

  const tags = document.querySelectorAll('.tag');
  tags.forEach(function(tag) {
    tag.addEventListener('click', function() {
      const filter = this.dataset.filter;
      const parent = this.closest('.tag-section');
      const activeTag = parent.querySelector('.tag.active');
      if (activeTag) {
        activeTag.classList.remove('active');
      }
      this.classList.add('active');
      filterItems(filter);
    });
  });

  function filterItems(filter) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
});