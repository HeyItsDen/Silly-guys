document.getElementById("myform").addEventListener("submit", validateForm);
function validateFirstName()
{
    //1) Create variable
  var firstname =  document.getElementById("FirstName").value;
  if(!firstname || firstname.length > 20 || firstname=="")
    {   //2) read value from HTML
       showError("FirstName","First Name is required and cannot be greater than 20 characters");
       return false;
    }
    return true;
}
function validateLastName()
{
  var lastname =  document.getElementById("LastName").value;
  if(!lastname || lastname.length > 50 || lastname=="")
    {
       showError("LastName","Last Name is required and cannot be greater than 50 characters");
       return false;
    }
    return true;
}
function validateEmail()
{
  var userEmail = document.getElementById("Email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  
  if(!userEmail || atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length)
    {
       showError("Email","Invalid email");
       return false;
    }
    return true;
}

var numbers=/^[0-9]+$/;
function validatePhone()
{
  var phone = document.getElementById("Phone").value;
  
  if(phone.length > 15 || phone.length < 10 ||phone === 'null' || phone==="" || !phone.match(numbers))
    {
       showError("Phone","Invalid phone number");       
       return false;
    }
    return true;
}







function validateUsername()
{
  var username = document.getElementById("Username").value;

  if(!username || username=="null" || username=="" || username.length > 12)
    {
        showError("Username","Username is required and cannot be greater than 12 characters");
       return false;
    }
    return true;
}



function validatePassword()
{
  var password = document.getElementById("Password").value;

  if(!password || password=="null" || password=="" || password.length > 7)
    {
        showError("Password","Password is required and cannot be greater than 7 characters");
       return false;
    }
    return true;
}


 
function validateAddress()
{
  var address = document.getElementById("Address").value;

  if(!address || address=="null" || address=="")
    {
        showError("Address","Address is required");
       return false;
    }
    return true;
}

function validateCity()
{
  var city = document.getElementById("City").value;

  if(!city || city=="null" || city=="")
    {
        showError("City","City is required");
       return false;
    }
    return true;
}

function validateZipcode()
{
  var zipcode = document.getElementById("Zipcode").value;
  var country = document.getElementById("Country").value;

  if(country=="USA")
   {
       if(zipcode.length > 5 || !zipcode || zipcode=="null" || zipcode=="")
        {
            showError("Zipcode","Required. Max length for Zipcode is 5");
            return false;
        }
        else
        {
            return true;
        }
    }
    else
    {
    return true;
    }
}
function showError(element_id, message)
{
  var element = document.getElementById(element_id);
  var error_div = document.createElement('div');
  error_div.id = element_id+'_error';
  error_div.className='error';
  error_div.innerHTML = message;  element.parentNode.insertBefore(error_div, element.nextSibling); 
}
function removeElementsByClass(rootElement,className)
{
    var elements = rootElement.getElementsByClassName(className);
    while(elements.length > 0)
    {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeErrorMessages()
{
  removeElementsByClass(document.getElementById('myform'), 'error');
}


function validateForm(event)
{
    removeErrorMessages();
    if (validateFirstName() &&
        validateLastName() &&
        validateEmail() &&
        validatePhone() &&
        validateUsername() &&
        validatePassword() &&
        validateAddress() &&
        validateCity() &&
        validateZipcode()
        ) 
    {
        return true;
    } 
    else 
    {
        event.preventDefault();
        return false;
    }
}
