
 
// do not delete - this object can be used to access data for specific country
document.addEventListener("DOMContentLoaded", function() {
    var countryList = [
        {
          name: "Albania",
          isocode: "AL",
          deliveryTypes: {
            standard: {
              enabled: true,
              price: "£8",
              days: "21",
              threshold: "",
              deliveryWindow: "",
              lastOrder: "",
              disabledText: "This delivery method is not currently available",
            },
            nextNominated: {
              available: false,
            },
            timeslot: {
              available: false,
            },
            collectRI: {
              available: false,
            },
            collectLocal: {
              available: false,
            },
          },
        },
        {
          name: "Algeria",
          isocode: "DZ",
          deliveryTypes: {
            standard: {
              enabled: true,
              price: "£20",
              days: "10",
              threshold: "",
              deliveryWindow: "",
              lastOrder: "",
              disabledText: "This delivery method is not currently available",
            },
            nextNominated: {
              available: false,
            },
            timeslot: {
              available: false,
            },
            collectRI: {
              available: false,
            },
            collectLocal: {
              available: false,
            },
          },
        },
        {
          name: "Andorra",
          isocode: "AD",
          deliveryTypes: {
            standard: {
              enabled: true,
              price: "£6/€8",
              days: "10",
              threshold: "",
              deliveryWindow: "",
              lastOrder: "",
              disabledText: "This delivery method is not currently available",
            },
            nextNominated: {
              available: false,
            },
            timeslot: {
              available: false,
            },
            collectRI: {
              available: false,
            },
            collectLocal: {
              available: false,
            },
          },
        },
        {
          name: "Anguilla",
          isocode: "AI",
          deliveryTypes: {
            standard: {
              enabled: true,
              price: "£10",
              days: "10",
              threshold: "",
              deliveryWindow: "",
              lastOrder: "",
              disabledText: "This delivery method is not currently available",
            },
            nextNominated: {
              available: false,
            },
            timeslot: {
              available: false,
            },
            collectRI: {
              available: false,
            },
            collectLocal: {
              available: false,
            },
          },
        },
      ];
   
    
    
      // change country
      const countryOptions = document.querySelectorAll('.country-radio');
   
    
      // open change country slider
      document.getElementById('change_country').addEventListener('click', function(){
            document.querySelector('.delivery-country-selector__overlay').classList.toggle('slide');
      });
   
    
       // close change country slider
       document.querySelector('.cross').addEventListener('click', function(){
            document.querySelector('.delivery-country-selector__overlay').classList.toggle('slide');
    });
     
    
    
      
      // SEARCH FILTER
            const search = document.getElementById("country-search");
       
            search.addEventListener("keyup", filterProducts);
   
            function filterProducts(e) {
                searchresult = search.value;
                console.log(searchresult);
              const userInput = searchresult.toLowerCase();
              // console.log(productName[0]);
              // this loop works with IE
              for (i = 0; i < countryOptions.length; i++) {
                   const countryDataSet = countryOptions[i].dataset.country
   
                if (countryDataSet.toLowerCase().indexOf(userInput) != -1) {
                        countryOptions[i].style.display = "block"
                } else {
                        countryOptions[i].style.display = "none"
                }
              }
            }
   
    
    

    
            // SPECIFIC COUNTRY FUNCTION - access data from 'countryList' object
      for (var i = 0; i < countryOptions.length; i++) {
        countryOptions[i].addEventListener('click', function() {
          // loop from countries data
          for (var i = 0; i < countryList.length; i++) {
            if (this.dataset.country === countryList[i].name) {
              console.log(this.dataset.country);
              // change text to specific country data object
              document.querySelector('.uk_info h2').innerHTML = this.dataset.country
              document.querySelector('.uk_info p').innerHTML = countryList[i].isocode
              return;
            }
            else {
              console.log('nothing');
            }
          }
      });
    }
   
    
    
    });