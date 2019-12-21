
 // -------------Javascript for transition in Projects---------------------------

  const projects = document.querySelectorAll('.card-project');

  const fadeInProjects =()=>{ projects.forEach(project => {
    let triggerPosition = 600;
    let index = 0;
    let transitionProject = projects[index];
    window.addEventListener('scroll', () => {
      if (window.scrollY >= triggerPosition) {
        transitionProject.classList.add('active');
        index ++;
        transitionProject = projects[index];
         return triggerPosition = triggerPosition + 375;
        }
      });
    });
};

  // ------------------------------------------------------------------------------
    // JS pour afficher les stacks on clicks, ne fonctionne pas avec prb de z-index
    // pour les clip-paths

//   const stacks = document.querySelectorAll(".stack");
//   console.log(stacks);

//   const showStack = () =>{
//     stacks.forEach(stack =>{
//       console.log(stack);
//       stack.addEventListener("click",(event)=> {
//       stack.classList.toggle('show-me')
//       });
//     });
//   }

// showStack();
fadeInProjects();
