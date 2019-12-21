
 // -------------Javascript for transition in Projects---------------------------

  const projects = document.querySelectorAll('.card-project');

  projects.forEach(project => {
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

  // ------------------------------------------------------------------------------
