function form(direction, form) {
  let border = document.querySelector('.tabs .border');
  border.classList.remove('left');
  border.classList.remove('right');
  border.classList.add(direction);

  let forms = document.getElementsByClassName('form-container');
  for (let index = 0; index < forms.length; index++) {
    let element = forms[index];
    element.classList.remove('show');
  }

  document.getElementById(form).classList.remove('fade-left');
  document.getElementById(form).classList.remove('fade-right');

  document.getElementById(form).classList.add('show');
  document.getElementById(form).classList.add('fade-' + direction);
}