document.addEventListener('DOMContentLoaded', function() {
    let win_w = window.innerWidth;
    
    window.addEventListener('resize', function() {
      win_w = window.innerWidth;
      console.log(win_w);
      
      if (win_w > 960) {
        document.querySelectorAll('.allMenu .panel').forEach(function(panel) {
          panel.style.display = 'block';
        });
      }
    });
    
    document.querySelectorAll('.allMenu .tab>li>a').forEach(function(link) {
      link.addEventListener('click', function() {
        if (win_w < 960) {
          console.log('test');
          document.querySelectorAll('.allMenu .panel').forEach(function(panel) {
            panel.style.display = 'none';
          });
          this.nextElementSibling.style.display = 'block';
          
          document.querySelectorAll('.allMenu .tab>li>a').forEach(function(tab) {
            tab.classList.remove('on');
          });
          this.classList.add('on');
        }
      });
    });
    
    document.querySelector('.all_menu_open').addEventListener('click', function() {
      document.querySelector('.allMenu').classList.add('on');
    });
    
    document.querySelector('.all_menu_close').addEventListener('click', function() {
      document.querySelector('.allMenu').classList.remove('on');
    });
  });

  