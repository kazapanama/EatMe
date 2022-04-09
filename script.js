
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight/3){
            current = section.getAttribute('id')
        }
    })
    navLi.forEach(li => {
		li.classList.remove('here');
		const href = li.getAttribute('href').substring(1);
		if (href == current) {
			li.classList.add('here');
		}
	});
})



const togg = document.querySelectorAll('.burger')[0]
const navLinks = document.querySelector('.navbar')

togg.addEventListener('click', () =>{
    navLinks.classList.toggle('act');
})

