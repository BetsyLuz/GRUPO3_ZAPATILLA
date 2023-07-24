document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      });
    });
  });
  $('#modal_id').on('shown.bs.modal', function() {
    $('input_element_id').focus();
});
$('#modal_id').modal('show');