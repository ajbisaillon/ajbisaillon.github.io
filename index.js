(() => {
  const form = document.getElementById('form');
  const formResponse = document.getElementById('js-form-response');

  form.onsubmit = event => {
    event.preventDefault();

    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    // create an HTTP request
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send data as JSON
    xhr.send(JSON.stringify(data));

    // callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // form submission was successful
        form.reset();
        formResponse.innerHTML = 'Thanks for reaching out to me! I\'ll get back to you soon.';
      } else {
        // form submission failed
        formResponse.innerHTML = 'Sorry, something went wrong.';
        console.error(JSON.parse(response.target.response).message);
      }
    };
  };
})();

    
