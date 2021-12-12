const beforeUnloadListener = (event) => {
    event.preventDefault();
    return event.returnValue = 'Are you sure you want to exit?';
  };
  
  // A function that invokes a callback when the page has unsaved changes.
  onPageHasUnsavedChanges(() => {
    addEventListener('beforeunload', beforeUnloadListener, {capture: true});
  });
  
  // A function that invokes a callback when the page's unsaved changes are resolved.
  onAllChangesSaved(() => {
    removeEventListener('beforeunload', beforeUnloadListener, {capture: true});
  });