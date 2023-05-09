

let imageUpload = document.querySelectorAll('.imageUpload')

imageUpload.forEach(eachImageUploader => {
  let imageInput = eachImageUploader.querySelector('.formInput')
  let imgPreview = eachImageUploader.querySelector('.imgPreview')
  
  imageInput.addEventListener('change', function(){
    imgPreview.src = URL.createObjectURL(this.files[0]);
  })
});


// Code for "Add Sell Post" modal's top section


document.addEventListener('DOMContentLoaded', function() {

  // Get the input and output elements


  let getParent = document.querySelectorAll('.FORM');
  
  getParent.forEach(eachGetParent => {
    let dropDownInput = eachGetParent.querySelector('.categoriesForProperty');
    let getOutPut = eachGetParent.querySelector('.propertyForDisableInput');
    let detailsViewSection = eachGetParent.querySelector('.detailsViewSection')
  
    dropDownInput.addEventListener('change', function() {
      let selectedValue = dropDownInput.value;
      
      // Use a switch statement to set the output value based on the selected option
      switch (selectedValue) {
        case 'Apartment':
          getOutPut.value = 'Both';
          detailsViewSection.removeAttribute('style', 'display: none')
          break;
        case 'Land':
          getOutPut.value = 'Sell';
          detailsViewSection.setAttribute('style', 'display: none')
          break;
        case 'Hostel':
          getOutPut.value = 'Rent';
          detailsViewSection.removeAttribute('style', 'display: none')
          break;
        default:
          getOutPut.value = 'Property For';
          detailsViewSection.removeAttribute('style', 'display: none')
          break;
      }
    });
});

});
