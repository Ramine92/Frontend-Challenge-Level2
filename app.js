let button = document.getElementById('btn-sub');
let inputError = document.getElementById('input');
let emailTxt = document.getElementById('email');
button.addEventListener('click', () => {
  const success = false;
  if (success){
      document.body.innerHTML = `
      <div id="newload">

         <img src="assets/images/icon-success.svg" id="load-img">

         <h1> Thanks for <br> subscribing!</h1>

         <p id="confirmation-txt">

          A confirmation email has been sent to<br> <strong>ash@loremcompany.com</strong>.Please open it and click<br> the button inside to confirm your subscription

         </p>

         <button id="dismiss-btn">

          Dismiss message

         </button>


      </div>`
  }else{
      inputError.style.backgroundColor = 'hsl(0, 100%, 90%)';
      inputError.style.borderColor = '#E57373';
      inputError.classList.add('error-placeholder');
      let emailTxt = document.getElementById('email-txt');
      emailTxt.innerHTML = `
        <p id="email">Email address</p>
        <p id="invalid-email">Valid email required</p>
      `

  }

})