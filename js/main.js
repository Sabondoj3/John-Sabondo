jQuery(Document) .ready(function(){
  "user strick"
  $('.slider').ripples({
      dropRadius: 5,
      perturbance: 0.01,
      
    });

    $(".text").typed({
      Strings: ["<strong> i love </strong> <strong class='primary'>coding.</strong>", "<strong>and to</strong> <strong class='primary'>share !!</strong>."],
      typespeed: 0,
      loop: true,

    });

});

$('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
    enabled: true
  }
    });

    $(document).ready(function(){
      
      
      $('#team-members').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 3
              }
          }
      });
  });
  

  
  $(document).ready(function () {
    $('#team-members').owlCarousel({
        items: 3, // Number of items visible
        loop: true, // Enable infinite looping
        autoplay: true, // Enable automatic scrolling
        autoplayTimeout: 3000, // Delay between scrolls
        nav: true, // Display navigation arrows
        dots: true, // Display pagination dots
        responsive: {
            0: { items: 1 }, // 1 item for small screens
            600: { items: 2 }, // 2 items for medium screens
            1000: { items: 3 } // 3 items for large screens
        }
    });
});

$(document).ready(function () {
  $('#team-members').owlCarousel({
      items: 3, // Number of team members visible at once
      loop: true, // Infinite scrolling
      autoplay: true, // Automatic scrolling
      autoplayTimeout: 3000, // Delay between scrolls
      nav: true, // Navigation arrows
      dots: true, // Pagination dots
      smartSpeed: 500,
      autoplayHoverPause: true,
      responsive: {
          0: { items: 1 }, // 1 item on small screens
          480: { items: 2 }, // 2 items on medium screens
          768: { items: 3 } // 3 items on large screens
      }
  });
  $('.counter').counterUp({
    delay: 10,
    time: 4000,
  });
});


document.querySelectorAll('.btn[data-campaign]').forEach(button => {
  button.addEventListener('click', function (e) {
      e.preventDefault();

      // Get campaign identifier
      const campaign = this.getAttribute('data-campaign');

      // Define campaign data
      const campaignData = {
          'food-for-all': {
              title: 'Food for All',
              content: 'Our "Food for All" campaign aims to combat hunger by providing nutritious meals to vulnerable families. Join us in making a tangible impact!'
          },
          'education-for-every-child': {
              title: 'Education for Every Child',
              content: 'Education is the key to breaking the cycle of poverty. This campaign focuses on providing access to quality education for every child, regardless of their background.'
          },
          'health-and-hygiene-awareness': {
              title: 'Health and Hygiene Awareness',
              content: 'Promoting health and hygiene practices to improve the well-being of rural communities. Learn how you can contribute to this vital cause.'
          }
      };

      // Update the campaign details section
      const detailsSection = document.getElementById('campaign-details');
      document.getElementById('campaign-title').textContent = campaignData[campaign].title;
      document.getElementById('campaign-content').textContent = campaignData[campaign].content;

      // Show the campaign details section
      detailsSection.style.display = 'block';
      window.scrollTo({ top: detailsSection.offsetTop, behavior: 'smooth' });
  });
});


