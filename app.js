{
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

document.querySelectorAll('.partner').forEach(itemBox => {
  itemBox.addEventListener('mouseover', () => {
      itemBox.querySelector('.news_hover').classList.remove('hidden');
      itemBox.querySelector('.product_image').classList.add('hidden');
  })
  itemBox.addEventListener('mouseout', () => {
      itemBox.querySelector('.news_hover').classList.add('hidden');
      itemBox.querySelector('.product_image').classList.remove('hidden');

  })
})
}

{
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
}

{
jQuery(function() {
  jQuery(".allbutton").click(function(){
      jQuery(".single").show();
  });
  jQuery(".button").click(function(){
      jQuery(".single").hide();
      jQuery("#div"+ $(this).attr('target')).show();
  });
});

}



{
const formValidator = (form, fieldsConfig, onValidateSuccess, onValidationError) => {

  const validateField = (fieldElement, fieldConfig) => {
    const value = fieldElement.value;
    const rules = fieldConfig.rules;
    const formGroup = fieldElement.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error-message');

    const fieldValidationResult = {name: fieldConfig.name, value: value, errors: []};
    rules.forEach(rule => {
      if (rule.required && !value) {
        fieldValidationResult.errors.push(rule.message);
      }
      if (rule.maxLength && `${value}`.length > rule.maxLength) {
        fieldValidationResult.errors.push(rule.message);
      }
    });

    if(fieldValidationResult.errors.length > 0){
      errorElement.innerText = fieldValidationResult.errors.join('\n');
    } else {
      errorElement.innerText = '';
    }
    // console.log(fieldValidationResult);

    return fieldValidationResult;
  }

  const validateOnChange = () => {
    fieldsConfig.forEach((fieldConfig) => {
      const fieldElement = form.querySelector(`[name="${fieldConfig.name}"]`);
      fieldElement.addEventListener('input', e => {
        validateField(e.target, fieldConfig);
      });
    })
  }

  const validateOnSubmit = () => {
    const validatedFields = [];
    fieldsConfig.forEach((fieldConfig) => {
      const fieldElement = form.querySelector(`[name="${fieldConfig.name}"]`);
      validatedFields.push(validateField(fieldElement, fieldConfig));
    });

    return validatedFields;
  }

  const listenFormSubmit = () => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      console.log('submit');
      const errors = [];
      const validationResult = validateOnSubmit();
      validationResult.forEach(result => {
        errors.push(...result.errors);
      });
      if(errors.length === 0){
        onValidateSuccess(validationResult);
      }else {
        onValidationError(validationResult);
      }
      console.log(validationResult);
    });
  }
  listenFormSubmit();
  validateOnChange();
}

const fieldsConfig = [
  {
    name: 'full_name',
    rules: [
      {required: true, message: 'name is required.'},
    ]
  },
  {
    name: 'email',
    rules: [
      {required: true, message: 'mail is required.'},
    ]
  },
  {
    name: 'Website',
    rules: [
      {required: true, message: 'website is required.'},
    ]
  },
  {
    name: 'message',
    rules: [
      {required: true, message: 'message required.'},
    ]
  },
];


const form = document.querySelector(`#form`)
  
const onFormSubmitSuccess = (fields) => {
    sendData(fields)
  console.log(fields)
}
const onFormSubmitError = (fields) => {
  console.log('Error', fields);
}

formValidator(form, fieldsConfig, onFormSubmitSuccess, onFormSubmitError);

async function sendData(userData){
  try {
    const response = await fetch('http://api.kesho.me/v1/user-test/contact', {
      method: 'post',
      body: JSON.stringify(userData),
      headers: {'Content-Type': 'application/json'}
    });
    await response.json();
  }catch (e){
    console.log('Error - ', e);
  }
}

var nextStep = document.querySelector('#nextStep');

nextStep.addEventListener('click', function (e) {
  e.preventDefault();
  // Hide first view
  document.getElementById('my_form').style.display = 'none';

  // Show thank you message element
  document.getElementById('thank_you').style.display = 'block';
});
}    