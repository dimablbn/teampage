$(document).ready(function(){
    $('.face').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 940,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
        ]
    });
    const prev = document.querySelector('.slick-prev');
    const next = document.querySelector('.slick-next');
    const all = document.querySelectorAll('.peronal__content');
    prev.addEventListener('click', () => {
        const getElem = document.querySelector('.slick-center').getAttribute('data-slick-index');
        const infoActive = document.querySelector('.peronal__content').getAttribute('data-info-show');
        if(getElem !== infoActive) {
          all.forEach(item => {
            const dates = document.querySelector(`[data-info-show='${getElem}']`);
            item.classList.remove('active');
            dates.classList.add('active')
          })
        }
        else {
          all.forEach(item => {
            const dates = document.querySelector(`[data-info-show='${getElem}']`);
            item.classList.remove('active');
            dates.classList.add('active')
          })
        }
    })

    next.addEventListener('click', () => {
        const getElem = document.querySelector('.slick-center').getAttribute('data-slick-index');
        const infoActive = document.querySelector('.peronal__content').getAttribute('data-info-show');


        if(getElem !== infoActive) {
          all.forEach(item => {
            const dates = document.querySelector(`[data-info-show='${getElem}']`);
            item.classList.remove('active');
            dates.classList.add('active')
          })
        }
        else {
          all.forEach(item => {
            const dates = document.querySelector(`[data-info-show='${getElem}']`);
            item.classList.remove('active');
            dates.classList.add('active')
          })
        }
    })
    const persons = [ 
      {
        dataInfoShow: -1,
        name: 'DEAN PONTO',
        specialization: 'Partner | Co-Creative Director & Strategy Lead',
        description: `Dean, a graduate of Arts Centre in Pasadena USA, has led hundreds of campaigns for regional, national
        and (likely) galactic clients. He has held several senior creative positions including Creative Director of
        TBWA/Vancouver. With dozens of industry awards, he’s a well-travelled creative leader, Sci-Fi nerd and master
        of strategic brand positioning.`,
      },
      {
        dataInfoShow: 0,
        name: 'MATEA CUMPF',
        specialization: 'Designer',
        description: `Matea is a graduate of the Wilson School of Design’s Graphic Design for Marketing program, as well as from
        Langara College’s Design Formation multidisciplinary program. Together with her background in sales and
        customer service, and her skills in image creation and creative solutions, she loves to step outside of her comfort
        zone. With her foot fidgeting under the table, she is happy and ready to jump into any problem or project.`,
      },
      {
        dataInfoShow: 1,
        name: 'ALBERT NORMANDIN',
        specialization: 'Photographer',
        description: `A long time ago, Albert bought a one-way ticket to New York City with a dream of working for the legendary
        American photographer, Jay Maisel. His leap of faith actually paid off. After three and a half years with Maisel,
        he escaped back to Canada to begin his photographic career. In Vancouver, Albert has established an
        extensive list of clients and prestigious assignments. Meanwhile, he continues to experiment with light,
        colour, and is ever easily distracted by shiny things.`,
      },
      {
        dataInfoShow: 2,
        name: 'LYNDSEY JACKSON',
        specialization: 'BUSINESS DEVELOPMENT MANAGER',
        description: `As a BCIT BBA Graduate, Lyndsey brings multi-industry sales and customer service experience to the team.
        As an account and project manager by day, and fashion designer by night, Lyndsey has a diverse background
        and portfolio. As dynamic and creative as she is solutions-oriented, Lyndsey will explore all avenues to solve
        a problem. Then she’ll go home and make you a killer pair of trousers.`,
      },
      {
        dataInfoShow: 3,
        name: 'VIDA JURCIC',
        specialization: 'Partner | Co-Creative & Design Director CGD, RGD',
        description: `Vida, a graduate of both Emily Carr and Capilano University, is a hands-on designer and founding partner of Hangar 18. She has sat on numerous design competition juries and panels. In her spare time she plays mandolin and
        performs in a Morris dance troupe, an artform which involves sticks, ribbons, bells and hankies. When not
        lecturing Dean, she lectures and mentors design students at the Idea School of Design at Capilano University.`,
      },
    ]

    persons.map(item => {
        const elementsDiv = document.createElement('div');
        elementsDiv.classList.add('peronal__content');
        elementsDiv.setAttribute('data-info-show', `${item.dataInfoShow}`);
        elementsDiv.innerHTML = `
          <div class="peronal__content__descr">
              <h2>${item.name}</h2>
              <h4>${item.specialization}</h4>
          </div>
          <p class="peronal__content__auto-descr">${item.description}</p>`;
          console.log(elementsDiv)
    })
});
