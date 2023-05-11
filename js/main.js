

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

    let detailView = eachGetParent.querySelector('.detail-view')
    let shortView = eachGetParent.querySelector('.short-view')
    let sellPropertyDetails = eachGetParent.querySelectorAll('.sellPropertyDetails')
    let sellPriceDetails = eachGetParent.querySelectorAll('.sellPriceDetails')
    let detailsViewSection = eachGetParent.querySelector('.detailsViewSection')
    let sellPrice = eachGetParent.querySelector('.sellPrice')
    let addressAndArea = eachGetParent.querySelector('.addressAndArea')
    let facilities = eachGetParent.querySelector('.facilities')
  
    shortView.addEventListener('change', function() {
      if (shortView.checked) {
        sellPropertyDetails.forEach(element => {
          element.setAttribute('style', 'display:none !important; width: 50% !important;')
        });
        sellPriceDetails.forEach(element => {
          element.setAttribute('style', 'display:none !important;')
        });
        detailsViewSection.setAttribute('style', 'display:none !important;')
        sellPrice.setAttribute('style', 'display:inline-block !important; margin: 0 !important; width: 100%;')
        addressAndArea.setAttribute('style', 'width:48% !important;')
        facilities.setAttribute('style', 'width:48% !important;')
        
      }
    });
    detailView.addEventListener('change', function() {
      if (detailView.checked) {
        sellPropertyDetails.forEach(element => {
          element.removeAttribute('style', 'display:none !important;')
        });
        sellPriceDetails.forEach(element => {
          element.removeAttribute('style', 'display:none !important;')
        });
        detailsViewSection.removeAttribute('style', 'display:none !important;')
        sellPrice.removeAttribute('style', 'display:inline-block !important;')
        addressAndArea.removeAttribute('style', 'width:48% !important;')
        facilities.removeAttribute('style', 'width:48% !important;')
      }
    });
  });
});


// Code Category determination depends on the property.
document.addEventListener('DOMContentLoaded', function(){
  let getParent = document.querySelectorAll('.FORM');
  
  getParent.forEach(eachGetParent => {
    let propertyForDropdown = eachGetParent.querySelector('.propertyForDropdown')
    let categoryDropdown = eachGetParent.querySelector('.categoryDropdown')

    propertyForDropdown.addEventListener('change', function(){
      let BASE_URL = 'https://dummyjson.com';
      let BOTH_URL = 'https://jsonplaceholder.typicode.com/users';

      switch (propertyForDropdown.value) {

        case 'sell':
          fetch(`${BASE_URL}/users`)
          .then(res =>res.json())
          .then(data =>{
            categoryDropdown.innerHTML = `--Select Sell Category--`;
            let categoryData = data.users;
            for (let i = 0; i < categoryData.length; i++) {
              const element = categoryData[i];
              let optionValue = element.firstName.replace(/\s+/g, '-');
              categoryDropdown.innerHTML += `<option value="${optionValue.toLowerCase()}">${element.firstName}</option>`
              
            }
          })
          .catch(err =>{
            console.log(err)
          })
          break;

        case 'rent':
          fetch(`${BASE_URL}/products`)
          .then(res =>res.json())
          .then(data =>{
            categoryDropdown.innerHTML = `--Select Rent Category--`;
            let categoryData = data.products;
            for (let i = 0; i < categoryData.length; i++) {
              const element = categoryData[i];
              let optionValue = element.brand.replace(/\s+/g, '-');
              categoryDropdown.innerHTML += `<option value="${optionValue.toLowerCase()}">${element.brand}</option>`
            }           
          })
          .catch(err =>{
            console.log(err)
          })
          break;
        case 'both':
          fetch(BOTH_URL)
          .then(res =>res.json())
          .then(data =>{
            categoryDropdown.innerHTML = `--Select Rent Category--`;
            let categoryData = data;
            for (let i = 0; i < categoryData.length; i++) {
              const element = categoryData[i];
              let optionValue = element.name.replace(/\s+/g, '-');
              categoryDropdown.innerHTML += `<option value="${optionValue.toLowerCase()}">${element.name}</option>`
            }              
          })
          .catch(err =>{
            console.log(err)
          })
          break;
      
        default:
          break;
      }

      let hideForSell = eachGetParent.querySelectorAll('.hideForSell')
      let showForSell = eachGetParent.querySelectorAll('.showForSell')
      let flatReleasePolicy  = eachGetParent.querySelector('.flatReleasePolicy ')
      switch (propertyForDropdown.value) {
        case 'sell':
          hideForSell.forEach(eachHideForSell => {
            eachHideForSell.setAttribute('style', 'display:none !important;')
          });
          showForSell.forEach(eachShowForSell => {
            eachShowForSell.setAttribute('style', 'display:inline-block ;')
          });
          flatReleasePolicy.setAttribute('style', 'width: 32% !important;')
          break;
          
          default:
            hideForSell.forEach(eachHideForSell => {
              eachHideForSell.removeAttribute('style', 'display:none !important;')
            });
            showForSell.forEach(eachShowForSell => {
              eachShowForSell.removeAttribute('style', 'display:inline-block;')
            });
          break;
      }

    })
  })
})