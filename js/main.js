

let imageUpload = document.querySelectorAll('.imageUpload')

imageUpload.forEach(eachImageUploader => {
  let imageInput = eachImageUploader.querySelector('.formInput')
  let imgPreview = eachImageUploader.querySelector('.imgPreview')
  
  imageInput.addEventListener('change', function(){
    imgPreview.src = URL.createObjectURL(this.files[0]);
  })
});

// Code For "Property Sell" Page's Category Tabs "add categories" both button

window.onload = function categoryAddForCheckAll(){

  // let bothBtnForCheckAll = document.querySelectorAll('.bothBtnForCheckAll')
  let checkBoxForProperty = document.querySelectorAll('.checkBoxForProperty')
  let isCheck = true;

  checkBoxForProperty.forEach(eachCheckBoxForProperty => {

    let eachBothBtnForCheckAll = eachCheckBoxForProperty.querySelector('.bothBtnForCheckAll')
    
    eachBothBtnForCheckAll.addEventListener('click',function(){
      
      let checkbox = eachCheckBoxForProperty.querySelectorAll('.checkbox');
      if (!isCheck) {
        checkbox.forEach(checkboxEach => {
          checkboxEach.setAttribute('checked', 'checked')
        });
        eachBothBtnForCheckAll.setAttribute('value', 'Both')
        
      } else {
        checkbox.forEach(checkboxEach => {
          checkboxEach.removeAttribute('checked', 'checked')
        });
        eachBothBtnForCheckAll.removeAttribute('value', 'Both')
      }
      isCheck = !isCheck
    })
  });

}

